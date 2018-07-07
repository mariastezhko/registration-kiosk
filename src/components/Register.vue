<template>
  <div class="container">
    <div class="wrapper">
      <form @submit.prevent="addUser" class="reg-form">

        <span class="form-title">
          Please register
        </span>

        <div class="wrap-input">
          <input class="inputfield " v-model="user.firstname" type="text" name="firstname" placeholder="Frst Name">
        </div>

        <div class="wrap-input">
          <input class="inputfield " v-model="user.lastname" type="text" name="lastame" placeholder="Last Name">
        </div>

        <div class="wrap-input">
          <input class="inputfield " type="email" v-model="user.email" name="email" placeholder="E-mail">
        </div>

        <div class="container-form-btn">
          <button type="submit" class="form-btn">
              Send
          </button>

        </div>
      </form>
    </div>
  </div>
</template>

<script>

import request from "request";

export default {
  name: 'Register',

  data: () => ({
    user: {
      firstname: '',
      lastname: '',
      email: '',
    },
    url: ''
  }),
  computed: {
    users () {
      return this.$store.state.users.reverse();
    }
  },
  methods: {
          addUser () {

            this.$swal({
              title: "Thank you for registering!",
              text: "  ",
              icon: "success",
            });

            request.post({url:this.url, form: this.user}, function (error, response, body) {
              if (!error) {
                console.log(body);
              }
            });

          },

          refreshUrl() {
            this.$http.get('/static/config/url.json').then(response => {
              console.log("data ", response.body.url)
              this.url = response.body.url;
              console.log("url: ", this.url);
            }, response => {
                // error callback
            });
          }

    },
    beforeMount(){
      this.refreshUrl();
    }
  }
</script>
