<template>
  <div><slot></slot></div>
</template>

<script>
//
//
//
//

export default {
  props: {
    styles: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  methods: {
    describe() {
      return {
        uid: this._uid,
        parent: this.$parent._uid,
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
