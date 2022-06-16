export default {
  template: `
            <button class="bg-slate-500 hover:bg-slate-800 border rounded px-5 py-2 text-white disabled:cursor-not-allowed" :disabled="processing"> 
              <slot /> 
            </button>`,
  data() {
    return {
      processing: true,
    };
  },
};
