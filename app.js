console.log("let's have fun");

const App = {
  data() {
    return {
      title: "To-do List",
      placeholder: "Add a note",
      inputValue: "",
      notes: ["wake up", "get up", "drink water", "brew coffee"],
    };
  },
  methods: {
    /*
    // don't need this, since Vue has this ->> v-model="inputValue"
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    */

    addNote() {
      if (this.inputValue.trim() !== "") {
        this.notes.push(this.inputValue);
      }
      this.inputValue = "";
    },

    toUpperCase(item) {
      return item.toUpperCase();
    },

    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
  computed: {},
  watch: {},
};

Vue.createApp(App).mount("#app");
