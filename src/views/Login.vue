<template lang="pug">
  #login
    form
      .form-header
        p Login
      .form-group
        label(for='username') username
        input(type='text' name='username' v-model='username')
      .form-group
        label(for='password') password
        input(type='password' name='password' v-model='password')
      .form-footer
        button(type='button' @click='login') Submit

</template>

<script>
export default {
  props: {

  },
  data: () => ({
    username: '',
    password: '',
  }),
  computed: {

  },
  watch: {

  },
  methods: {
    login() {
      const { username, password } = this;
      // make some db call and get user from cred
      const user = { name: 'Tommy' };
      this.$store.dispatch('login', user);

      if (this.$route.query && this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect);
        return;
      }

      this.$router.push('/');
    },
  },
  components: {

  },
};
</script>

<style lang="scss">
  #login {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    form {
      position: relative;
      top: 20%;
      left: 50%;
      width: clamp(400px, 40%, 700px);
      transform:translateX(-50%);
      background-color: #efefef;
      border-radius: 5px;
      overflow: hidden;

      .form-header {
        padding: .5rem;
        background-color: $color-primary;

        p {
          text-align: center;
          font-weight: bold;
          color: white;
        }
      }

      .form-group {
        display: flex;
        flex-direction: column;
        padding: 10px;

        label {
          margin-bottom: 5px;
        }
      }

      .form-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }
    }
  }

</style>
