const Basic = () => import('./basic');
const Area = () => import('./area');

export default [
  {
    path: 'radar/basic',
    meta: { name: '雷达图' },
    component: Basic,
  },
  {
    path: 'radar/area',
    meta: { name: '雷达面积图' },
    component: Area,
  },
];
