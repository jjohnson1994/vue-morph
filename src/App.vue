<template>
  <div id="app">
    <scroll-view>
      <linear-layout>
        <!-- Radio Group -->
        <text-view text="Radio Group" />
        <text-view :text="radioGroupSelection" />
        <radio-group :options="radioGroupOptions" v-model="radioGroupSelection" name="radioGroupName"/>

        <!-- Edit Text -->
        <text-view :text="inputValue" />
        <edit-text v-model="inputValue" />

        <!-- Button -->
        <text-view :text="clickCount" />
        <btn text="Click Me" @click="clickCount += 1"/>

        <!-- Checkbox -->
        <check-box v-model="checkbox" :text="checkbox" />
      </linear-layout>
    </scroll-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RadioGroup from "./components/RadioGroup.vue";
import TextView from './components/TextView.vue';
import ScrollView from './components/ScrollView.vue';
import EditText from './components/EditText.vue';
import Btn from './components/Btn.vue';

@Component({
  components: {
    RadioGroup,
    TextView,
    ScrollView,
    EditText,
    Btn,
  }
})
export default class App extends Vue {
  /** Radio Group */
  private radioGroupOptions = ["Option 1", "Option 2", "Option 3"];
  private radioGroupSelection: String = "Option 3";

  /** Edit Text */
  private inputValue: String = 'Input Value';

  /** Button */
  private clickCount: Number = 0;

  /** CheckBox */
  private checkbox: Boolean = false;
}
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
