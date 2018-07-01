import Btn from 'src/components/Btn.vue';
import CheckBox from 'src/components/CheckBox.vue';
import EditText from 'src/components/EditText.vue';
import LinearLayout from 'src/components/LinearLayout.vue';
import ScrollView from 'src/components/ScrollView.vue';
import TextView from 'src/components/TextView.vue';

const VueMorph = {
  install(Vue) {
    Vue.component(Btn.name, Btn);
    Vue.component(CheckBox.name, CheckBox);
    Vue.component(EditText.name, EditText);
    Vue.component(LinearLayout.name, LinearLayout);
    Vue.component(ScrollView.name, ScrollView);
    Vue.component(TextView.name, TextView);
  },
};

export default VueMorph;
