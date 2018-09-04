const Scatter = () => import('./scatter');
const Bubble = () => import('./bubble');

export default [
  {
    path: 'point/scatter',
    meta: { name: '散点图' },
    component: Scatter,
  },
  {
    path: 'point/bubble',
    meta: { name: '气泡图' },
    component: Bubble,
  },
];
