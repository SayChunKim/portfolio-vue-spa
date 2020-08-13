<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
    <section class="resume-section p-3 p-lg-5 d-flex
     align-items-center p-2 flex-row text-center">
        <div class="w-100">
        <h2>Error 404:</h2>
        <h3>Oh No | 糟糕 | あらあら残念</h3>
        <p>Your desired page is not here, let's go somewhere else <br> 您要查找的页面不在此处，让我们去其他地方吧 <br>
           あなたが探しているページはここにありません、どこかに行きましょう</p>
        <div class="justify-content-center">
        <a href="/" class="btn btn-primary mb-2">Home (English)</a> <br>
        <a href="/zh-CN/" class="btn btn-primary mb-2">主页 (简体中文)</a><br>
        <a href="/ja/" class="btn btn-primary mb-2">ホーム (日本語)</a>
        </div>
        <img src="../assets/images/404.png" alt="404" width="240">
        </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    this.$root.$i18n.locale = 'en';
    return {};
  },
};
</script>
