<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
      <div class="w-100 text-center">
        <h2 class="mb-5">{{$t('contact.contact_success_title')}}</h2>
        <p class>{{$t('contact.contact_success_content')}}</p>
        <router-link to="/" class="btn btn-primary">{{$t('menu.btn_home_title')}}</router-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'success',
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
};
</script>
<style scoped>
.btn-primary {
  background-color: #515796;
  border-color: #515796;
}
</style>
