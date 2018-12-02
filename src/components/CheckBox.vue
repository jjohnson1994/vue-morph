<template>
  <label>
    <input
      type="checkbox" 
      v-model="checked"
      @input="$emit('input', checked)"
      @change="$('change', checked)"
    />
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
};
</script>

<style>
</style>
