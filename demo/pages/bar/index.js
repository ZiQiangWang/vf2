import BasicColumn from './basic-column';
import DodgeColumn from './dodge-column';

export default [
  {
    path: 'bar/basic-column',
    meta: { name: '基础柱状图图' },
    component: BasicColumn,
  },
  {
    path: 'bar/dodge-column',
    meta: { name: '分组柱状图图' },
    component: DodgeColumn,
  },
];
