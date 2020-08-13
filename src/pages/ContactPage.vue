<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
    <div class="w-100">
      <h2 class="mb-5 text-center">{{$t('contact.title')}}</h2>
      <form role="form" method="POST" @submit.prevent="sendEmail">
      <!-- <form role="form" method="POST" action="https://formspree.io/saychunkim@gmail.com"> -->
        <b-row>
          <div class="form-group col-sm-6">
            <label for="mail_name">{{$t('contact.label_name')}}</label>
            <input
              type="text" id="mail_name"
              name="name"
              class="form-control col-12"
              placeholder="Name"
              v-model="nameMsg"
            />
          </div>
          <div class="form-group col-sm-6">
            <label for="mail_email">{{$t('contact.label_email')}}</label>
            <input
              type="email" id="mail_email"
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
            <label for="mail_message">{{$t('contact.label_subject')}}</label>
            <textarea
            id="mail_message"
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
            <input type="submit" class="btn btn-primary col-12" :value="this.$t('contact.label_submit')"
             :disabled="!nameMsg || !emailMsg || !messageMsg"
           />
          </b-col>
        </b-row>
        <br>
        <b-row v-if="loadingSpinner">
          <div class="text-center col-12">
               <b-spinner variant="primary" label="Spinning"></b-spinner>
               <p class="mb-8 text-primary">{{$t('contact.delivering_txt')}}</p>
          </div>
      </b-row>
      </form>
    </div>
  </section>
  </div>
</template>
<style scoped>
label {
  color: #85754a;
    font-weight: bold;
}
input[type="submit"]{
    background-color:#0d1679;
    border-color:#0d1679;
}
</style>
<script>
import axios from 'axios';

export default {
  metaInfo() {
    return {
      title: this.$t('contact.meta_title'),
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('contact.meta_desc'),
      }],
    };
  },
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
