<template>
  <section class="signUp section">
    <div class="container">
      <form v-on:submit="signUp">
        <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input v-model="signUpForm.username" class="input" type="text" placeholder="Username">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="signUpForm.password" class="input" type="password" placeholder="Password">
        </div>
      </div>
      <div class="field">
        <label class="label">Wallet Address</label>
        <div class="control">
          <input v-model="signUpForm.eth_wallet_key" class="input" type="text" placeholder="0x0000000000">
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
      </form>
    </div>
  </section>
</template>

<script>
const url = "https://city-block-server.herokuapp.com"

export default {
  data() {
    return {
      signUpForm: {
        username: '',
        password: '',
        eth_wallet_key: ''
      }
    }
  },
  methods: {
    signUp(event) {
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.signUpForm.username,
          password: this.signUpForm.password,
          eth_wallet_key: this.signUpForm.eth_wallet_key
        })
      };
      fetch(`${url}/auth/signup`, settings)
      .then(response => response.json())
      .then(response => {
       console.log(response);
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
