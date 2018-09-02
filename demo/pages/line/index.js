import Basic from './basic';
import WithPoint from './with-point';
import Smooth from './smooth';
import Gradient from './gradient';

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
  {
    path: 'line/smooth',
    meta: { name: '曲线图（带点）' },
    component: Smooth,
  },
  {
    path: 'line/gradient',
    meta: { name: '某国女性结婚年龄走势' },
    component: Gradient,
  },

];
