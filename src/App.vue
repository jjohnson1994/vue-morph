<template>
  <div id="app">
    <btn text="Page One" @click="$router.push({ name: 'pageOne' })"/>
    <btn text="Page Two" @click="$router.push({ name: 'pageTwo' })"/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RadioGroup from "./components/RadioGroup.vue";
import TextView from "./components/TextView.vue";
import ScrollView from "./components/ScrollView.vue";
import EditText from "./components/EditText.vue";
import Btn from "./components/Btn.vue";

@Component({
  components: {
    RadioGroup,
    TextView,
    ScrollView,
    EditText,
    Btn
  }
})
export default class App extends Vue {
  /** Radio Group */
  private radioGroupOptions = ["Option 1", "Option 2", "Option 3"];
  private radioGroupSelection: String = "Option 3";

  /** Edit Text */
  private inputValue: String = "Input Value";

  /** Button */
  private clickCount: Number = 0;

  /** CheckBox */
  private checkbox: Boolean = false;

  /** Methods **/
  public showToast: Const = message => {
    console.log("android", message);
    Android.showToast(message);
  };

  created() {}
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
