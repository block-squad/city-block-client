<template>
  <div class="signin">
    <form v-on:submit.prevent="signIn">
      <div class="container">
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input v-model="signInForm.username" class="input" type="text" placeholder="Username">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input v-model="signInForm.password" class="input" type="password" placeholder="Password">
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const url = "https://city-block-server.herokuapp.com"

export default {
  name: 'signin',
  // props: ['username', 'password'],
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
      const data = {
        username: this.signInForm.username,
        password: this.signInForm.password
      }
      const settings = {
        method: 'POST',
        // headers: {
        //   'content-type': 'application/json'
        // },
        body: data
      };
      console.log(`${url}/auth/signin`);
      console.log(settings);
      fetch(`${url}/auth/signin`, settings)
       .then(response => {
         console.log(response);
         if (response.token) {
           localStorage.setItem('token', response.token)
           localStorage.setItem('userId', JSON.stringify(response.user.id))
           location.href = '/user'
           console.log(response.token);
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
</style>
