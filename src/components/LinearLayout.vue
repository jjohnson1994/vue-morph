<template>
  <div><slot></slot></div>
</template>

<script>
//
//
//
//

export default {
  name: 'LinearLayout',
  props: {
    styles: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  methods: {
    describe() {
      return {
        tag: 'LinearLayout',
        uid: this._uid,
        parent: this.$parent._uid,
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
