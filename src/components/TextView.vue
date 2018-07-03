<template>
  <p>{{ text }}</p>
</template>

<script>
//
//
//
//

export default {
  name: 'TextView',
  props: {
    text: {
      type: String | Number,
      required: false,
      default: '',
    },
    styles: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  updated() {
    Android.onAppUpdate(JSON.stringify(this.describe()));
  },
  methods: {
    describe() {
      return {
        tag: 'TextView',
        uid: this._uid,
        parent: this.$parent._uid,
        text: this.text,
        ...this.styles,
      };
    },
  },
};
</script>

<style>
</style>
