<template>
<div class="container-fluid p-0 justify-content-center d-flex">
  <section class="resume-section p-3 p-lg-5
   d-flex align-items-center text-center" id="interests">
    <div class="w-100">
      <h2 class="mb-5">{{$t('interests.title')}}</h2>
      <p v-html="$t('interests.paragraph_1')"/>
      <p v-html="$t('interests.paragraph_2')"/>
      <p v-html="$t('interests.music')"/>

    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'interests',
  metaInfo() {
    return {
      title: this.$t('interests.meta_title'),
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('interests.meta_desc'),
      }],
    };
  },
};
</script>

<style>
#interests{
max-width: 900px;
}
</style>
