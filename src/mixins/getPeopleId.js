export default{
  methods: {
    getPeopleId(url) {
      const arr = url.split('/').filter(item => item);
      return arr[arr.length - 1];
    },
  }
}