export default {
  template: `
  <li>
    <label>
      {{assignment.name}}

      <input type="checkbox" v-model="assignment.completed" />\
    </label>
  </li>
  `,

  props: {
    assignment: Object
  }

}