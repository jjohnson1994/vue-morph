<template>
  <input
    v-model="inputValue"
    @input="$emit('input', inputValue)"
    @change="$emit('change', inputValue)"
  />
</template>

<script>
export default {
  name: 'EditText',
  props: {
    value: {
      type: [String, Number],
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
      inputValue: this.value,
    };
  },
  watch: {
    value() {
      this.inputValue = this.value;
    },
  },
  created() {
    window.uidToVueComponentMap.push({
      uid: this._uid,
      component: this,
    });

    Android.onComponentUpdated(JSON.stringify(this.describe()));
  },
  updated() {
    Android.onComponentUpdated(JSON.stringify(this.describe()));
  },
  beforeDestroy() {
    Android.onComponentDestroyed(JSON.stringify({
      uid: this._uid,
    }));
  },
  methods: {
    setValue(inputValue) {
      this.inputValue = inputValue;
      this.$emit('input', inputValue);
    },
    describe() {
      return {
        tag: 'EditText',
        uid: this._uid,
        parent: this.$parent._uid,
        text: this.inputValue,
        styles: this.styles,
      };
    },
  },
};
</script>

<style>
</style>
