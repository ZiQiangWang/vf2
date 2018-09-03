const PieSelect = () => import('./pie-select');
const IntervalSelect = () => import('./interval-select');
const PanLine = () => import('./pan-line');
const PanBar = () => import('./pan-bar');

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
  {
    path: 'interaction/pan-line',
    meta: { name: '折线图平移' },
    component: PanLine,
  },
  {
    path: 'interaction/pan-bar',
    meta: { name: '柱状图平移' },
    component: PanBar,
  },

];
