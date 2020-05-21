<template>
  <div id="app">
    <div id="nav">
      <HeaderComponent />
    </div>
    <transition name="fade" mode="out-in">
    <router-view />
    </transition>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import '@/assets/vendor/bootstrap.min.css';
import '@/assets/vendor/bootstrap-vue.min.css';
import '@/assets/theme/resume.css';
import '@/assets/fontawesome/all.min.css';

export default {
  components: {
    HeaderComponent,
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpgradeUI = true;
      });
    }
  },

  methods: {
    async accept() {
      this.showUpgradeUI = false;
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' });
    },
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}</style>
<style>
   @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Poppins&display=swap');
</style>
