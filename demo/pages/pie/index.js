const Pie = () => import('./pie');
const Ring = () => import('./ring');

export default [
  {
    path: 'pie/pie',
    meta: { name: '饼图' },
    component: Pie,
  },
  {
    path: 'pie/ring',
    meta: { name: '资产配置(环图)' },
    component: Ring,
  },
];
