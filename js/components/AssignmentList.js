import Assignment from "./Assignment.js"

export default {
  components: { Assignment },

  template: `
  <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}</h2>

    <ul class="border border-4 border-slate-600 divide-y divide-y-2 divide-slate-600">
        <Assignment v-for="assignment in assignments" 
        :key="assignment.id"
        :assignment="assignment"
        ></Assignment>
    </ul>
  </section>  
  `,

  props: {
    assignments: Array,
    title: String
  }
}