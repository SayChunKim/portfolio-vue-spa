<template>
  <div class="container-fluid p-0 justify-content-center d-flex">
    <section class="resume-section p-3 p-lg-5 d-flex flex-column align-items-center" id="movies">
      <h2 class="w-100 f-flex">{{this.$route.name}}</h2>
      <p class="w-100 d-flex">Using Axios and&nbsp;<a href="https://www.themoviedb.org/en"
       target="_blank" ref="noopener noreferrer">API</a>&nbsp;
       from TheMovieDatabase (TMDB)</p>
      <div v-if="loading">
           <b-spinner label="Loading"></b-spinner>
      </div>
      <div v-if="!loading" v-cloak>
        <table class="table movie">
          <thead>
            <th>Img</th>
            <th>Title / Release Date</th>
            <th>Overview</th>
          </thead>
          <tbody>
            <tr v-for="movie in list.results" :key="movie.id">
              <td :data-label="thead_IMG">
                <img :src="image_url_prefix+movie.poster_path" alt width="120" />
              </td>
              <td :data-label="thead_title">
                <h5>{{movie.original_title}}</h5>
                <p>{{movie.release_date}}</p>
              </td>
              <td :data-label="thead_overview">
                <p>{{movie.overview}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios';

const URL = 'https://api.themoviedb.org/4/list/143665?page=1&api_key=1e95529d64c4de9111239f3c85f3d76e';

export default {
  data() {
    return {
      title: 'SC Movies',
      loading: true,
      list: [],
      image_url_prefix: 'https://image.tmdb.org/t/p/w154',
      thead_IMG: 'Img',
      thead_title: 'Title / Release Date',
      thead_overview: 'Overview',
    };
  },
  mounted() {
    axios.get(URL).then((response) => {
      this.list = response.data;
      this.loading = false;
    });
  },
};
</script>
<style scoped>
.movie {
  border: 1px solid #ccc;
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.movie thead tr {
  background: #192cfa;
  color: #fff;
}
.movie tr {
  border: 1px solid #e0e0e0;
  background: #fff;
}
.movie th,
table td {
  padding: 1rem;
}
.movie th {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
}
@media screen and (max-width: 600px) {
  .movie {
    border: 0;
    box-shadow: none;
  }
  .movie thead {
    display: none;
  }
  .movie tr {
    margin-bottom: 10px;
    display: block;
    border: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .movie tr:after {
    content: "";
    display: table;
    clear: both;
  }
  .movie tr:before {
    display: block;
    border-bottom: 2px solid #ddd;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .movie td {
    box-sizing: border-box;
    display: block;
    float: left;
    clear: left;
    width: 100%;
    text-align: right;
    font-size: 14px;
    border-bottom: 1px solid #e0e0e0;
  }
  .movie td:first-child {
    background: #192cfa;
    color: #fff;
  }
  .movie td:last-child {
    border-bottom: 0;
  }
  .movie td:before {
    content: attr(data-label);
    float: left;
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>
