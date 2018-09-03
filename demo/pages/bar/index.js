import BasicColumn from './basic-column';
import DodgeColumn from './dodge-column';
import StackColumn from './stack-column';
import PercentStackColumn from './percent-stack-column';
import BasicBar from './basic-bar';

export default [
  {
    path: 'bar/basic-column',
    meta: { name: '基础柱状图' },
    component: BasicColumn,
  },
  {
    path: 'bar/dodge-column',
    meta: { name: '分组柱状图' },
    component: DodgeColumn,
  },
  {
    path: 'bar/stack-column',
    meta: { name: '层叠柱状图' },
    component: StackColumn,
  },
  {
    path: 'bar/percent-stack-column',
    meta: { name: '百分比层叠柱状图' },
    component: PercentStackColumn,
  },
  {
    path: 'bar/basic-bar',
    meta: { name: '基础条形图' },
    component: BasicBar,
  },
];
