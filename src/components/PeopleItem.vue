<template>
  <div class="people-item">
      <p class="people-item__item-text">Name: {{ data.name }}</p>
      <p class="people-item__item-text">Id: {{ getPeopleId(data.url) }}</p>
      <p class="people-item__item-text">Birth: {{ data.birth_year }}</p>
      <p class="people-item__item-text">Eye color: {{ data.eye_color }}</p>
      <p class="people-item__item-text">Gender: {{ data.gender }}</p>
      <p class="people-item__item-text">Hair color: {{ data.hair_color }}</p>
      <p class="people-item__item-text">Mass: {{ data.mass }}</p>
      <p class="people-item__item-text">Skin color: {{ data.skin_color }}</p>
  </div>
</template>

<script>
  import getPeopleId from '@/mixins/getPeopleId.js';

  export default {
    name: 'PeopleItem',
    mixins: [ getPeopleId ],
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  }
</script>
<style lang="scss" scoped>
  .people-item {
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
    }
  }
</style>