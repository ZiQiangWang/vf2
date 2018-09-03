import Chart from './chart';
import Line from './geom/line';
import Point from './geom/point';
import Area from './geom/area';
import Interval from './geom/interval';
import Schema from './geom/schema';
import Scale from './scale';
import Axis from './axis';
import Legend from './legend';
import Tooltip from './tooltip';
import Coord from './coord';
import Guide from './guide';
import Scrollbar from './scrollbar';
import Interaction from './interaction';

const components = [
  Chart,
  Line,
  Point,
  Area,
  Interval,
  Schema,
  Coord,
  Guide,
  Interaction,
  Scale,
  Axis,
  Legend,
  Tooltip,
  Scrollbar,
];

export default function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}
