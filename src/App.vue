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
  data() {
    return {
      showUpgradeUI: true,
    };
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
   #snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  top: 30px; /* 30px from the top */
  border-radius: .5rem;
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s;
  animation: fadein 0.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
}

@keyframes fadein {
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {top: 30px; opacity: 1;}
  to {top: 0; opacity: 0;}
}

@keyframes fadeout {
  from {top: 30px; opacity: 1;}
  to {top: 0; opacity: 0;}
}
</style>
