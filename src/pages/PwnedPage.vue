<template>
    <div class="container">
        <div>
    <b-table striped dark hover :items="list"></b-table>
  </div>
    </div>
</template>
<script>
import axios from 'axios';

const URL = 'https://haveibeenpwned.com/api/v2/breaches';

export default {
  data() {
    return {
      list: [],
      loading: true,
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    };
  },
  created() {
    axios.get(URL).then((response) => {
      this.list = response.data;
      this.loading = false;
    });
  },
};
</script>
<style scoped>

</style>
