<template>
  <div><slot></slot></div>
</template>

<script>
//
//
//
//

export default {
  name: 'ScrollView',
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
        tag: 'ScrollView',
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
