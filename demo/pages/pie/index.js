const Pie = () => import('./pie');
const Ring = () => import('./ring');
const Rose = () => import('./rose');

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
  {
    path: 'pie/rose',
    meta: { name: '玫瑰图' },
    component: Rose,
  },
];
