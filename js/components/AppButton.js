export default {
  template: `
            <button 
            :class="{ 'border rounded px-5 py-2  disabled:cursor-not-allowed' : true,
            'bg-cyan-500 hover:bg-cyan-800': type === 'primary', 
            'bg-amber-500 hover:bg-amber-800': type === 'secondary', 
            'bg-gray-500 hover:bg-slate-800': type === 'muted', 
            'is-loading' : processing
            }"
            :disabled="processing"
            > 
              <slot /> 
            </button>
            `,
  props: {
    type: {
      type: String,
      default: "primary",
    },

    processing: {
      type: Boolean,
      default: false,
    },
  },
};
