<template>
  <input :value="text"/>
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
  data() {
    return {
      text: this.value,
    };
  },
  methods: {
    setValue(text) {
      this.text = text;
      this.$emit('input', text);
    },
    describe() {
      return {
        uid: this._uid,
        parent: this.$parent._uid,
        text: this.text,
        styles: this.styles,
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
