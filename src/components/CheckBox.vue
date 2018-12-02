<template>
  <label>
    <input
      v-model="checked"
      type="checkbox"
      @input="$emit('input', checked)"
      @change="$('change', checked)"
    >
    {{ text }}
  </label>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    value: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    text: {
      type: [Boolean, String],
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
  watch: {
    value() {
      this.checked = JSON.parse(this.value);
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
    Android.onComponentDestroyed(
      JSON.stringify({
        uid: this._uid,
      }),
    );
  },
  methods: {
    setValue(checked) {
      this.checked = checked;
      this.$emit('input', checked);
    },
    describe() {
      return {
        tag: 'CheckBox',
        uid: this._uid,
        parent: this.$parent._uid,
        checked: this.checked,
        text: this.text,
        styles: this.styles,
      };
    },
  },
};
</script>

<style>
</style>
