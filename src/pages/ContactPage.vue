<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
    <div class="w-100">
      <h2 class="mb-5 text-center">Contact</h2>
      <form role="form" method="POST" @submit.prevent="sendEmail">
        <b-row>
          <div class="form-group col-sm-6">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              class="form-control col-12"
              placeholder="Name"
              v-model="nameMsg"
            />
          </div>
          <div class="form-group col-sm-6">
            <label>Your Email</label>
            <input
              type="email"
              name="_replyto"
              class="form-control col-12"
              placeholder="abc@abc.com"
              v-model="emailMsg"
            />
            <p class="text-danger" v-if="error && !emailMsg">Please input valid email address</p>
          </div>
        </b-row>
        <b-row>
          <div class="form-group col-sm-12">
            <label>Message</label>
            <textarea
              name="message"
              class="form-control col-12"
              rows="5"
              placeholder="Message"
              v-model="messageMsg"
            ></textarea>
            <p class="text-danger" v-if="error">Please input valid message</p>
          </div>
        </b-row>
        <b-row class="justify-content-center">
          <b-col sm="3">
            <input type="submit" class="btn btn-primary col-12" :disabled="!nameMsg || !emailMsg || !messageMsg"
           />
          </b-col>
        </b-row>
        <br>
        <b-row v-if="loadingSpinner">
          <div class="text-center col-12">
               <b-spinner variant="primary" label="Spinning"></b-spinner>
               <p class="mb-8 text-primary">Delivering your email...</p>
          </div>
      </b-row>
      </form>
    </div>
  </section>
  </div>
</template>
<style scoped>
label {
  color: #968351;
    font-weight: bold;
}
input[type="submit"]{
    background-color:#515796;
    border-color:#515796;
}
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      nameMsg: '',
      emailMsg: '',
      messageMsg: '',
      error: false,
      loadingSpinner: false,
    };
  },
  methods: {
    sendEmail() {
      this.loadingSpinner = true;
      axios.post(
        'https://formspree.io/saychunkim@gmail.com',
        {
          name: this.nameMsg,
          from: this.emailMsg,
          _subject: `${this.nameMsg} | Friendly Message from Github Page`,
          message: this.messageMsg,
        },
        //  eslint-disable-next-line no-unused-vars
      ).then((response) => {
        this.nameMsg = '';
        this.emailMsg = '';
        this.messageMsg = '';
        this.loadingSpinner = false;
        this.$router.push({ path: '/success' });
      }).catch((error) => {
        if (error.response) {
          // eslint-disable-next-line no-alert
          alert(error.response.data); // => the response payload
        }
      });
    },
  },
};
</script>
