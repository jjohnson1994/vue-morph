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
  methods: {
    describe() {
      return {
        tag: 'TextView',
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
