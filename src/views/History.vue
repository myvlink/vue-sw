<template>
  <div class="history">
      <p v-if="history.length === 0">History is empty</p>
      <router-link class="history__link" :to="`/people/${item.id}`" v-for="(item, index) in history" :key="index">
        <span>People id: {{ item.id }} Date: {{ moment(item.date).format('DD.MM.YYYY HH:MM') }}</span>
      </router-link>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    computed: {
      history() {
        return this.$store.getters.getHistory;
      }
    },
    data: () => ({
      moment,
    }),
  }
</script>
<style lang="scss" scoped>
  .history {
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__link {
      text-decoration: none;
      color: inherit;
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
        transition: 0.3s;
      }
    }
  }
</style>