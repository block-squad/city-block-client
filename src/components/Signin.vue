<template>
  <!-- <div class="signin"> -->
    <form action="">
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Sign In</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Username">
                    <b-input
                        type="text"
                        v-model="username"
                        placeholder="Your username"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input
                        type="password"
                        v-model="password"
                        password-reveal
                        placeholder="Your password"
                        required>
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary">Sign In</button>
            </footer>
        </div>
    </form>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'signin',
  props: ['username', 'password']
}

</script>

<style scoped>
  .modal-card {
    width: auto;
  }
</style>
