import AssignmentList from "./AssignmentList.js"

export default {
  components: { AssignmentList },
  template:
   `
   <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>
   </section>
  
  `,
  
  data() {
    return {
      assignments: [
        { id: 1, name: "Finish project", completed: false },
        { id: 2, name: "Read chapter 4", completed: false },
        { id: 3, name: "Turn in homework", completed: false },
      ],
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(a => !a.completed),
        completed:  this.assignments.filter(a => a.completed)
      }
    }
  }
}