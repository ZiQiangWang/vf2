import Tab from './tab';
import TabItem from './tab/item';

const components = [
  Tab,
  TabItem,
];

export default function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}
