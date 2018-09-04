import Line from './line';
import Area from './area';
import Bar from './bar';
import Pie from './pie';
import Radar from './radar';
import Point from './point';
import Interaction from './interaction';

export default [
  {
    title: '折线图',
    routes: Line,
  },
  {
    title: '面积图',
    routes: Area,
  },
  {
    title: '柱状图',
    routes: Bar,
  },
  {
    title: '饼图',
    routes: Pie,
  },
  {
    title: '图表交互',
    routes: Interaction,
  },
  {
    title: '雷达图',
    routes: Radar,
  },
  {
    title: '点图',
    routes: Point,
  },
];
