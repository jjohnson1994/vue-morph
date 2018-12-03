<template>
  <button @click="$emit('click')">
    {{ text }}
  </button>
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
    stylez: {
      type: Object,
      required: false,
      default: () => {},
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
    onClick() {
      this.$emit('click');
    },
    describe() {
      return {
        tag: 'Btn',
        uid: this._uid,
        parent: this.$parent._uid,
        text: this.text,
        styles: this.styles,
      };
    },
  },
};
</script>

<style>
</style>
