import myInput from './Input/index.vue';
import myRadio from './Radio/index.vue';
import myCheckbox from './Checkbox/index.vue';
export default {
  install: (Vue: any) => {
    Vue.component("MyComponentInput",myInput);
    Vue.component("MyComponentRadio",myRadio);
    Vue.component("MyComponentCheckbox",myCheckbox);
  },
};
