<template>
  <div class="people-item">
    <p v-if="isLoading">Loading...</p>
    <PeopleItem class="people-item__info" v-else :data="people" />
  </div>
</template>

<script>
  import swProvider from '@/providers/swProvider.js';
  import PeopleItem from '@/components/PeopleItem.vue';

  export default {
    name: 'PeoplesList',
    props: {
      id: {
        type: String,
        required: false,
      },
    },
    components: {
      PeopleItem,
    },
    data: () => ({
      isLoading: false,
      people: {},
    }),
    created() {
      this.getPeople();
      this.$store.dispatch('pushToHistory', this.id);
    },
    methods: {
      getPeople() {
        this.isLoading = true;
        const query = {
          id: this.id,
        }
        swProvider.getPeople(query)
        .then(
          data => {
            this.people = data;
            this.isLoading = false;
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
  .people-item {
    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__item {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px;
    }

    &__item-text {
      text-align: left;
      margin: 10px 0 0;

      &--header {
        text-align: center;
      }
    }
  }
</style>