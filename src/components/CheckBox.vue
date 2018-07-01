<template>
  <label><input type="checkbox" :value="checked"/>{{ text }}</label>
</template>

<script>
//
//
//
//

export default {
  props: {
    text: {
      required: false,
      default: '',
    },
    styles: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      checked: this.value,
    };
  },
  methods: {
    setValue(checked) {
      console.log('is checked', checked, this.value);
      this.checked = checked;
      this.$emit('input', checked);
    },
    describe() {
      return {
        uid: this._uid,
        parent: this.$parent._uid,
        checked: this.checked,
        text: this.text,
        ...this.styles,
      };
    },
  },
  updated() {
    console.log('Checkbox, Passing Description', this.describe());
    Android.onAppUpdate(JSON.stringify(this.describe()));
  },
};
</script>

<style>
</style>
