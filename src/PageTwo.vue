<template>
  <LinearLayout>
    <!-- Radio Group -->
    <TextView :text="radioGroupSelection" />
    <RadioGroup
      v-model="radioGroupSelection"
      :options="radioGroupOptions"
      name="radioGroupName"
    />

    <!-- Edit Text -->
    <TextView :text="inputValue" />
    <EditText v-model="inputValue" />

    <!-- Button -->
    <TextView text="Button" />
    <TextView :text="clickCount" />
    <Btn
      text="Click Me"
      @click="clickCount += 1"
    />

    <!-- Toast  -->
    <TextView text="Toast" />
    <Btn
      text="Toast"
      @click="showToast('🔥 + 🍞 = Toast')"
    />

    <!-- Checkbox -->
    <TextView text="Checkbox" />
    <CheckBox
      v-model="checkbox"
      :text="checkbox"
    />
  </LinearLayout>
</template>

<script>
export default {
  name: 'PageTwo',
  data() {
    return {
      radioGroupOptions: ['Option 1', 'Option 2', 'Option 3'],
      radioGroupSelection: 'Option 3',
      inputValue: 'Input Value',
      clickCount: 0,
      checkbox: false,
    };
  },
  methods: {
    showToast(message) {
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

