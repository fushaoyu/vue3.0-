import myInput from './Input/index.vue';
import myRadio from './Radio/index.vue';
import myCheckbox from './Checkbox/index.vue';
import mySelect from './Select/index.vue';
import myInputNumber from './InputNumber/index.vue';
import myDialog from './Dialog/index.vue';
export default {
  install: (Vue: any) => {
    Vue.component('MyComponentInput', myInput);
    Vue.component('MyComponentRadio', myRadio);
    Vue.component('MyComponentCheckbox', myCheckbox);
    Vue.component('MyComponentSelect', mySelect);
    Vue.component('MyComponentInputNumber', myInputNumber);
    Vue.component('MyComponentDialog', myDialog);
  },
};
