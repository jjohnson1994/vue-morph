<template>
  <div>
    <label v-for="option in options" :key="option">
      <input type="radio" :name="name" @input="setValue(option)" :checked="option === value"/>
      {{ option }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    name: String,
    value: String,
    options: Array,
    styles: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data: () => ({
    checked: '',
  }),
  methods: {
    describe() {
      return {
        tag: 'RadioGroup',
        uid: this._uid,
        parent: this.$parent._uid,
        styles: this.styles,
        options: this.options,
        value: this.value,
      };
    },

    /**
     * Native Callback Event
     */
    setValue(value) {
      this.checked = value;
      this.$emit('input', this.checked);
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
}
</script>

<style>

</style>
