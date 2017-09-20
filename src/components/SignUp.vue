<template>
  <section class="signUp section">
    <div class="container">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma">
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
        </div>
        <p class="help is-success">This username is available</p>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-warning"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Wallet Address</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-warning"></i>
          </span>
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
  </section>
</template>

<script>
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
      console.log(`${url}/auth/signin`);
      console.log(settings);
      fetch(`${url}/auth/signin`, settings)
      .then(response => response.json())
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
