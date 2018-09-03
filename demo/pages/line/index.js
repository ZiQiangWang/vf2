import Basic from './basic';
import WithPoint from './with-point';
import Smooth from './smooth';
import Series from './series';
import Gradient from './gradient';
import Hybird from './hybird';
import Shapes from './shapes';
import CustomizeTootlip from './customize-tootlip';

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
    path: 'line/series',
    meta: { name: '商品价格 7 年走势对比' },
    component: Series,
  },
  {
    path: 'line/gradient',
    meta: { name: '某国女性结婚年龄走势' },
    component: Gradient,
  },
  {
    path: 'line/hybird',
    meta: { name: '特性案例：实虚混合线图' },
    component: Hybird,
  },
  {
    path: 'line/shapes',
    meta: { name: '实际收益和预期收益对比' },
    component: Shapes,
  },
  {
    path: 'line/customize-tootlip',
    meta: { name: '某基金近一个月业绩走势' },
    component: CustomizeTootlip,
  },

];
