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
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },

    addNote() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },

    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
