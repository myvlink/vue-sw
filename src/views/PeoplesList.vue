<template>
  <div class="peoples-list">
    <label class="peoples-list__search" for="search">Поиск</label>
    <input class="peoples-list__search" name="search" id="search" type="text" v-model="search" @input="getPeoples">
    <span v-if="isLoading">Loading...</span>
    <div class="peoples-list__list">
      <router-link
        :to="`/people/${getPeopleId(people.url)}`"
        class="peoples-list__item"
        v-for="(people, index) in peoples"
        :key="index"
      >
        Name: {{ people.name }}
      </router-link>
    </div>
    <p v-if="!isLoading && peoples.length === 0">Peoples not found</p>
  </div>
</template>

<script>
  import swProvider from '@/providers/swProvider.js';
  import getPeopleId from '@/mixins/getPeopleId.js';

  export default {
    name: 'PeoplesList',
    mixins: [ getPeopleId ],
    data: () => ({
      search: '',
      page: 1,
      peoples: [],
      isLoading: false,
    }),
    created() {
      this.getPeoples();
    },
    methods: {
      getPeoples() {
        this.isLoading = true;
        const query = {
          search: this.search,
          page: this.page,
        }
        swProvider.getPeoples(query)
        .then(
          data => {
            this.isLoading = false;
            this.peoples = data.results;
          })
          error => {
            this.isLoading = false;
            console.log(error);
          }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .peoples-list {
    &__list {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 20px;

    }
    &__item {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px;
      text-decoration: none;
      color: inherit;
      transition: 0.3s;

      &:hover {
        transition: 0.3s;
        box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
      }
    }

    &__item-text {
      text-align: left;

      &--header {
        text-align: center;
      }
    }

    &__search {
      margin-right: 10px;
    }
  }
</style>