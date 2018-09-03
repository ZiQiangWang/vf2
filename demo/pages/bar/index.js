import BasicColumn from './basic-column';
import DodgeColumn from './dodge-column';
import StackColumn from './stack-column';
import PercentStackColumn from './percent-stack-column';
import BasicBar from './basic-bar';
import DodgeBar from './dodge-bar';
import StackBar from './stack-bar';
import RangeColumn from './range-column';
import RangeBar from './range-bar';
import NegetiveColumn from './negetive-column';
import NegetiveDodgeColumn from './negetive-dodge-column';
import NegetiveStackBar from './negetive-stack-bar';

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
  {
    path: 'bar/dodge-bar',
    meta: { name: '分组条形图' },
    component: DodgeBar,
  },
  {
    path: 'bar/stack-bar',
    meta: { name: '堆叠条形图' },
    component: StackBar,
  },
  {
    path: 'bar/range-column',
    meta: { name: '区间柱状图' },
    component: RangeColumn,
  },
  {
    path: 'bar/range-bar',
    meta: { name: '各专业毕业生收入范围' },
    component: RangeBar,
  },
  {
    path: 'bar/negetive-column',
    meta: { name: '某基金近 4 季度资产变动' },
    component: NegetiveColumn,
  },
  {
    path: 'bar/negetive-dodge-column',
    meta: { name: '带负值的分组柱状图' },
    component: NegetiveDodgeColumn,
  },
  {
    path: 'bar/negetive-stack-bar',
    meta: { name: '2018年德国人口金字塔' },
    component: NegetiveStackBar,
  },

];
