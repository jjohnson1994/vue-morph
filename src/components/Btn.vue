<template>
  <button @click="$emit('click')">{{ text }}</button>
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
    styles: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
      Android.showToast('OnClick, Called Natively');
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
  created() {
    window.uidToVueComponentMap.push({
      uid: this._uid,
      component: this,
    });
console.log(this);
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
