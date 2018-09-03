const Pie = () => import('./pie');
const Ring = () => import('./ring');
const Rose = () => import('./rose');
const Cascade = () => import('./cascade');
const ProgressBar = () => import('./progress-bar');

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
  {
    path: 'pie/cascade',
    meta: { name: '嵌套环图' },
    component: Cascade,
  },
  {
    path: 'pie/progress-bar',
    meta: { name: '环形进度条' },
    component: ProgressBar,
  },

];
