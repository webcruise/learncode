const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    // add(num) {
    //   this.counter = this.counter + num;
    // },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
      // this.counter--;
    }
  }
});

app.mount('#events');
