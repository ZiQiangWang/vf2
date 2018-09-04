const Basic = () => import('./basic');
const Area = () => import('./area');
const Finance = () => import('./finance');
const FundEvaluation = () => import('./fund-evaluation');

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
  {
    path: 'radar/finance',
    meta: { name: '投资能力评估' },
    component: Finance,
  },
  {
    path: 'radar/fund-evaluation',
    meta: { name: '基金评估' },
    component: FundEvaluation,
  },

];
