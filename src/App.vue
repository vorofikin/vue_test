<script>
import axios from "axios";

export default {
  data() {
    return {
      peoples: [],
      page: 1,
      totalPages: 0,
      firstPage: 1,
    };
  },

  methods: {
    async getPeople() {
      const url = `https://swapi.dev/api/people/`;
      const response = await axios.get(url, {
        params: {
          page: this.page,
        },
      });
      console.log(response);
      this.peoples = await response.data.results;
      this.totalPages = await Math.ceil(response.data.count / 10);
    },

    changePage(page) {
      this.page = page;
    },
  },

  mounted() {
    this.getPeople();
  },

  watch: {
    page() {
      this.getPeople();
    },
  },
};
</script>

<template>
  <b-table class="styled-table" style="text-align: center">
    <caption style="text-align: center">
      Star wars heroes
    </caption>

    <th><b>Name</b></th>
    <th><b>Mass</b></th>
    <th><b>Birth year</b></th>

    <tr v-for="p in peoples" :key="p.name">
      <td>{{ p.name }}</td>
      <td>{{ p.mass }}</td>
      <td>{{ p.birth_year }}</td>
    </tr>
  </b-table>

  <b-nav>
    <ul class="pagination">
      <li class="page-item disabled" v-if="this.page === 1">
        <a class="page-link disabled" href="#">Previous</a>
      </li>

      <li class="page-item" v-else @click="this.page -= 1">
        <a class="page-link" href="#">Previous</a>
      </li>

      <li v-for="pageNum in this.totalPages" :key="pageNum" class="page-item">
        <a
          class="page-link"
          :class="{
            active: page === pageNum,
          }"
          @click="changePage(pageNum)"
          href="#"
        >
          {{ pageNum }}
        </a>
      </li>

      <li
        class="page-item"
        v-if="this.page < this.totalPages"
        @click="this.page += 1"
      >
        <a class="page-link" href="#">Next</a>
      </li>

      <li class="page-item disabled" v-else>
        <a class="page-link disabled" href="#">Next</a>
      </li>
    </ul>
  </b-nav>

  <RouterView />
</template>

<style scoped></style>
