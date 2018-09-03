const Basic = () => import('./basic');
const WithPoint = () => import('./with-point');
const Smooth = () => import('./smooth');
const Series = () => import('./series');
const Gradient = () => import('./gradient');
const Hybird = () => import('./hybird');
const Shapes = () => import('./shapes');
const CustomizeTootlip = () => import('./customize-tootlip');
const AnimatedLine = () => import('./animated-line');
const WithRegion = () => import('./with-region');
const Dynamic = () => import('./dynamic');
const StackedLinePoint = () => import('./stacked-line-point');
const Null = () => import('./null');
const ConnectNull = () => import('./connect-null');

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
  {
    path: 'line/animated-line',
    meta: { name: '时序折线图过渡动画' },
    component: AnimatedLine,
  },
  {
    path: 'line/with-region',
    meta: { name: 'Florida 近 10 年失业率' },
    component: WithRegion,
  },
  {
    path: 'line/dynamic',
    meta: { name: '实时折线' },
    component: Dynamic,
  },
  {
    path: 'line/stacked-line-point',
    meta: { name: '层叠点线图' },
    component: StackedLinePoint,
  },
  {
    path: 'line/null',
    meta: { name: '存在空值' },
    component: Null,
  },
  {
    path: 'line/connect-null',
    meta: { name: '连接空值数据' },
    component: ConnectNull,
  },

];
