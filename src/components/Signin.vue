<template>
  <section class="signin section">
    <div class="container">
      <div class="box">
        <form v-on:submit.prevent="signIn">
          <h1 class="title">Sign In</h1>
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input v-model="signInForm.username" class="input" type="text" placeholder="Username">
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="signInForm.password" class="input" type="password" placeholder="Password">
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-dark">Submit</button>
              </div>
              <div class="control">
                <button class="button is-link">Cancel</button>
              </div>
            </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
const url = "https://city-block-server.herokuapp.com"

export default {
  name: 'signin',
  data() {
    return {
      signInForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn(event) {
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.signInForm.username,
          password: this.signInForm.password
        })
      };
      fetch(`${url}/auth/signin`, settings)
      .then(response => response.json())
      .then(response => {
       if (response.token) {
         localStorage.setItem('token', response.token)
         localStorage.setItem('userId', JSON.stringify(response.user.id))
         location.href = '/'
       }
      })
    }
  }
}
</script>

<style scoped>
  .modal-card {
    width: auto;
  }
  .box {
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
  }
</style>
