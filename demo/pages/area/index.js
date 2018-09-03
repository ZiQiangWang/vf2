import Basic from './basic';
import WithNegative from './with-negative';

export default [
  {
    path: 'area/basic',
    meta: { name: '基础面积图' },
    component: Basic,
  },
  {
    path: 'area/with-negative',
    meta: { name: '带负值面积图' },
    component: WithNegative,
  },
];
