<template>
  <div id="app">
    <Btn
      text="Page One"
      @click="$router.push({ name: 'pageOne' })"
    />
    <Btn
      text="Page Two"
      @click="$router.push({ name: 'pageTwo' })"
    />
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      /** Sidenav Items * */
      sideNavItems: [
        {
          title: 'Page One',
          route: 'pageOne',
        },
        {
          title: 'Page Two',
          route: 'pageTwo',
        },
      ],
      /** Radio Group */
      radioGroupOptions: ['Option 1', 'Option 2', 'Option 3'],
      radioGroupSelection: 'Option 3',
      /** Edit Text */
      inputValue: 'Input Value',
      /** Button */
      clickCount: 0,
      /** CheckBox */
      checkbox: false,
    };
  },
  created() {
    this.$vueMorph.setSideNavItems(this.sideNavItems);
  },
  methods: {
    /** Methods * */
    showToast: (message) => {
      console.log('android', message);
      Android.showToast(message);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
