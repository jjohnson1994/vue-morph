<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
    styles: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  methods: {
    onClick() {
      Android.showToast('OnClick, Called Natively');
    },
    describe() {
      return {
        uid: this._uid,
        parent: this.$parent._uid,
        text: this.text,
        ...this.styles,
      };
    },
  },
  updated() {
    Android.onAppUpdate(JSON.stringify(this.describe()));
  },
};
</script>

<style>
</style>
