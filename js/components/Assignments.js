import AssignmentList from "./AssignmentList.js"

export default {
  components: { AssignmentList },
  template:
   `
   <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>
    
    <form @submit.prevent="add">
      <div class="border border-slate-400 border-2 text-slate-800">
      <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
      <button type="submit" class="bg-white p-2 border-l border-l-2">Add</button>
      </div>
      
    </form>
   </section>
  
  `,
  
  data() {
    return {
      assignments: [
        { id: 1, name: "Finish project", completed: false },
        { id: 2, name: "Read chapter 4", completed: false },
        { id: 3, name: "Turn in homework", completed: false },
      ],

      newAssignment: '';
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(a => !a.completed),
        completed:  this.assignments.filter(a => a.completed)
      }
    }
  },
  
  methods: {
      add() {
        this.assignments.push({ id: this.assignments.length + 1, name: this.newAssignment, completed: false });
        this.newAssignment = '';
      }
    }
}