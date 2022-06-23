export default {
  template: `
    <form @submit.prevent="add">
      <div class="border border-slate-400 border-2 text-slate-800">
      <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
      <button type="submit" class="bg-white p-2 border-l border-l-2">Add</button>
      </div>  
    </form>
  `,

  data() {
    return { 
      newAssignment: "" 
    };
  },

  methods: {
    add() {
      this.$emit('add', this.newAssignment);
      
      this.newAssignment = "";
    },
  },

  props:{
    assignments: Array
  }
};
