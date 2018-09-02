import Basic from './basic';
import WithPoint from './with-point';

export default [
  {
    path: 'line/basic',
    meta: { name: '基础折线图' },
    component: Basic,
  },
  {
    path: 'line/with-point',
    meta: { name: '基础折线图（带点）' },
    component: WithPoint,
  },

];
