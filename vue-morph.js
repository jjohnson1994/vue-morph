import Btn from './src/components/Btn.vue';
import CheckBox from './src/components/CheckBox.vue';
import EditText from './src/components/EditText.vue';
import LinearLayout from './src/components/LinearLayout.vue';
import ScrollView from './src/components/ScrollView.vue';
import TextView from './src/components/TextView.vue';

//TODO, better way than adding to window?

// An array of components uids mapped to their classes
// e.g. [{ uid: 5, component: {...} }]
window.uidToVueComponentMap = [];

/**
 * Build a JSON object of the DOM
 * @param {VNode} root - Parse form here and down
 */
window.buildVNodeTree = function (root) {
  console.log('parse: ', root);
  
  const children = root.$children;

  let tag;
  let uid = root._uid;
  let description;

  if(root.$vnode) {
    tag = root.$vnode.componentOptions.tag;

    if(root.$vnode.componentInstance.describe) {
      description = root.$vnode.componentInstance.describe();
    }
  } else if (root._vnode) {
    tag = root._vnode.componentOptions.tag;

    if(root._vnode.componentInstance.describe) {
      description = root._vnode.componentInstance.describe();
    }
  }

  uidToVueComponentMap.push({
    uid,
    component: root,
  });

  return {
    tag,
    ...description,
    children: children ? children.map(c => ({ ...this.buildVNodeTree(c) })) : [],
  };
}

/**
 * Event Dispatchers,
 * There functions allow DOM/ Vue Component Events to be called Natively
*/
window.dispatchOnClick = function (uid) {
  const map = uidToVueComponentMap.filter(map => {
    return map.uid == uid;
  })[0];

  map.component.$vnode.data.on.click();
}

window.dispatchOnChange = function (params) {
  const uid = params.split(', ')[0];
  const value = params.split(', ')[1];
  const map = uidToVueComponentMap.filter(map => {
    return map.uid == uid;
  })[0];

  map.component.setValue(value);
}

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
