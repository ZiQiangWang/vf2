const PieSelect = () => import('./pie-select');
const IntervalSelect = () => import('./interval-select');

export default [
  {
    path: 'interaction/pie-select',
    meta: { name: '饼图选中交互' },
    component: PieSelect,
  },
  {
    path: 'interaction/interval-select',
    meta: { name: '柱状图选中' },
    component: IntervalSelect,
  },
];
