# vf2
基于AntV/F2的vue封装。

实现原理参考了vux中的[v-chart](https://doc.vux.li/zh-CN/components/v-chart.html)，添加了对于F2最新特性的支持，重新设计了接口。

提供了多种组件：

- [vf2-chart](#chart)
- [vf2-point](#geometry)
- [vf2-line](#geometry)
- [vf2-area](#geometry)
- [vf2-interval](#geometry)
- [vf2-polygon](#geometry)
- [vf2-schema](#geometry)
- [vf2-scale](#scale)
- [vf2-coord](#coord)
- [vf2-axis](#axis)
- [vf2-legend](#legend)
- [vf2-tooltip](#tooltip)
- [vf2-guide](#guide)
- [vf2-scrollbar](#scrollbar)
- [vf2-interaction](#interaction)

## chart

作为绘图的根组件，所有其他组件被包裹在内部。[Chart属性](https://antv.alipay.com/zh-cn/f2/3.x/api/chart.html#_width)可以通过组件属性传入，但是有两点要注意：

- 属性名称从驼峰改为中划线分割
- 对于boolean类型，需要使用`:sync-y="true"`的形式传入，直接传入`sync-y`的方式不支持。这个主要针对F2的自带属性。

| 属性   | 类型   | 默认值            | 说明                   |
| ------ | ------ | ----------------- | ---------------------- |
| data   | Array  | []                | 渲染图表的数据，必填项 |
| width  | Number | window.innerWidth | 宽度                   |
| height | Number | 250               | 高度                   |
| theme  | String |                   | 切换图表主题           |

## Geometry

`vf2-point`、`vf2-line`、`vf2-area`、`vf2-interval`、`vf2-polygon`、`vf2-schema`，这几个组件是对于F2的Geometry封装。

| 属性        | 类型                | 默认值 | 说明                                                         |
| ----------- | ------------------- | ------ | ------------------------------------------------------------ |
| position    | String/Array        |        | [ 将数据值映射到图形的位置上](https://antv.alipay.com/zh-cn/f2/3.x/api/geometry.html#_position) |
| color       | String/Array        |        | [ 将数据值映射到图形的颜色上](https://antv.alipay.com/zh-cn/f2/3.x/api/geometry.html#_color) |
| shape       | String/Array        |        | [ 将数据值映射到图形的形状上](https://antv.alipay.com/zh-cn/f2/3.x/api/geometry.html#_shape) |
| size        | Number/String/Array |        | [ 将数据值映射到图形的大小上](https://antv.alipay.com/zh-cn/f2/3.x/api/geometry.html#_size) |
| adjust      | String/Object       |        | [ 声明几何标记对象的数据调整方式](https://antv.alipay.com/zh-cn/f2/3.x/api/geometry.html#_adjust) |
| chart-style | Object/Array        |        | [ 配置几何标记显示的图形属性](https://antv.alipay.com/zh-cn/f2/3.x/api/geometry.html#_style) |
| animate     | Boolean/Object      |        | [ 配置具体的动画](https://antv.alipay.com/zh-cn/f2/3.x/api/geometry.html#_animate) |

### position

```
position="x*y"
:position="['x', 'y']"
```

### color

```
color="red"     // 常量颜色
color="type"    // 对 type 字段进行映射，使用内置的颜色
:color="['type', ['red', 'blue']]"
:color="['type', type => type === 'a' ? 'red' : 'blue']" // 通过回调函数
:color="['type*value', (type, value) => { //多个参数，通过回调函数
  if (type === 'a' && value > 100) {
    return 'red';
  }
  return 'blue';
}]"
```

### shape

```
shape="circle"
shape="type"
:shape="['type', ['circle', 'hollowCircle', 'rect']]"
:shape="['type', type => type === 'a' ? 'circle' : 'rect']"
```

### size

```
:size="10"
size="type"
:size="['type', [ 0, 10 ]]"
:size="['type', type => type === 'a' ? 10 : 5]"
```

### adjust

```
adjust="stack"
:adjust="{type: 'stack'}"
:adjust="{{
  type: 'dodge',
  marginRatio: 0, // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
}}"
```

### chart-style

```
:chart-style="{lineWidth: 2}"
:chart-style="['city', {
  lineDash(val) {
    if (val === 'HZ') {
      return [ 2, 2 ];
    }
    return null;
  }]"
```

### animate

```
:animate="false"
:animate="{
    appear: {
    animation: {String}, // 动画名
    easing: {String}, // 缓动函数名
    duration: {Number}, // 动画执行时间，单位为 ms
    delay: {Number} // 动画延迟时间，单位为 ms
  }, // 出场动画配置
  update: {
    animation: {String}, // 动画名
    easing: {String}, // 缓动函数名
    duration: {Number}, // 动画执行时间，单位为 ms
    delay: {Number} // 动画延迟时间，单位为 ms
  }, // 更新动画配置
  enter: {
    animation: {String}, // 动画名
    easing: {String}, // 缓动函数名
    duration: {Number}, // 动画执行时间，单位为 ms
    delay: {Number} // 动画延迟时间，单位为 ms
  }, // 图表发生数据变更时，新进场的元素动画配置
  leave: {
    animation: {String}, // 动画名
    easing: {String}, // 缓动函数名
    duration: {Number}, // 动画执行时间，单位为 ms
    delay: {Number} // 动画延迟时间，单位为 ms
  } // 离场动画配置
}"
```

## scale



| 属性    | 类型   | 说明          |
| ------- | ------ | ------------- |
| field   | String | 作用的字段    |
| options | Object | Scale属性对象 |

```Vue
const data = [
  { a: 'a', b: 20 },
  { a: 'b', b: 12 },
  { a: 'c', b: 8 },
];
<vf2-scale field="a" type="cat" />
<vf2-scale field="b" min="0" max="100" />
```

也可以写成

```vue
<vf2-scale :options="{
  a: {
    type: 'cat'
  },
  b: {
    min: 0,
    max: 100
  }
}"/>
```

## coord



| 属性    | 类型   | 默认值 | 说明                            |
| ------- | ------ | ------ | ------------------------------- |
| type    | String | rect   | 坐标系类型，可选'rect'和'polar' |
| options | Object |        |                                 |

```vue
<vf2-coord :transposed="true"/>
<vf2-coord type="rect" :transposed="true"/>
<vf2-coord type="polar" :transposed="true" inner-radius="0.75"/>
```

也可以写成

```Vue
<vf2-coord type="polar"
  :options="{
    transposed: true,
    radius: 0.85
  }"/>
```

## axis



| 属性            | 类型    | 默认值 | 说明                                                         |
| --------------- | ------- | ------ | ------------------------------------------------------------ |
| disabled        | Boolean | false  | 决定是否渲染坐标轴，如果设为true，则不渲染坐标轴，可以指定field不渲染某个坐标轴。 |
| field           | String  |        | 坐标轴配置作用于哪一个 数据字段                              |
| justify-label-x | Boolean | false  | 第一个坐标轴label居左，最后一个坐标轴label居右               |
| justify-label-y | Boolean | false  | 第一个坐标轴label靠下，最后一个坐标轴label靠上               |
| options         | Object  |        | Axis属性对象                                                 |

```vue
// 不渲染坐标轴
<vf2-axis disabled/>
// 不渲染date字段的坐标轴
<vf2-axis field="date" disabled/>
// 字段date的坐标轴配置
<vf2-axis field="date" 
  :line="{
    lineWidth: 1,
    stroke: '#ccc'
  }"
  label-offset="20"/>
// 也可以写成
<vf2-axis field="date" 
  :options="{
    line: {
      lineWidth: 1,
      stroke: '#ccc'
    },
    labelOffset: 20
}"/>
```
## legend



| 属性     | 类型    | 默认值 | 说明                                                         |
| -------- | ------- | ------ | ------------------------------------------------------------ |
| disabled | Boolean | false  | 决定是否渲染图例，如果设为true，则不渲染图例，可以指定field不渲染某个图例。 |
| field    | String  |        | 图例配置作用于哪一个 数据字段                                |
| options  | Object  |        | Legend属性对象                                               |

```Vue
<vf2-legend disabled/>
<vf2-legend field="date" disabled/>
<vf2-legend field="gender" position="right" vertical-align="top"/>
// 也可以写成
<vf2-legend field="gender"
  :options="{
    position: 'right',
    verticalAlign: 'top'
   }"/>
```

## tooltip



| 属性        | 类型    | 默认值 | 说明                              |
| ----------- | ------- | ------ | --------------------------------- |
| disabled    | Boolean | false  | 决定是否渲染tooltip               |
| link-legend | Boolean | false  | 是否将tooltip的数据显示在legend中 |
| options     | Object  |        | Tooltip属性对象                   |

提供了三个事件

| 名称   | 参数                        | 触发条件                  |
| ------ | --------------------------- | ------------------------- |
| show   | obj: { x, y, title, items } | tooltip显示时触发         |
| hide   | obj: { x, y, title, items } | tooltip隐藏时触发         |
| change | obj: { x, y, title, items } | tooltip内容发生改变时触发 |

```vue
<vf2-tooltip disabled/>
<vf2-tooltip link-legend/>
<vf2-tooltip @show="handleShow" @hide="handleHide" @change="handleChange"/>

<vf2-tooltip :show-crosshairs="true" :show-tooltip-marker="false" />
// 也可以写成
<vf2-tooltip
  :options="{
    showCrosshairs: true,
    showTooltipMarker: false
   }"/>
```
## guide

所有[Guide](https://antv.alipay.com/zh-cn/f2/3.x/api/guide.html#_API)支持的属性，注意将style替换为chart-style。guide组件支持属性的动态更新。

| 属性        | 类型   | 默认值 | 说明                                                         |
| ----------- | ------ | ------ | ------------------------------------------------------------ |
| type        | String |        | Guide的类型，可选值：line、text、point、tag、rect、html、arc、 regionFilter |
| chart-style | Object |        | 设置样式                                                     |

```vue
<vf2-guide v-for="(obj, index) in data" :key="index"
           type="line"
           :top="false"
           :start="[obj.date, 'min']"
           :end="[obj.date, 'max']"
           :chartStyle="{
               lineWidth: 1,
               stroke: '#A4A4A4'
           }"/> 
```

也可以写成

```vue
<vf2-guide v-for="(obj, index) in data" :key="index"
            type="line"
            :options="{
              top: false,
              start: [obj.date, 'min'],
              end: [obj.date, 'max'],
              style: {
                lineWidth: 1,
                stroke: '#A4A4A4'
              }
             }"/>
```

## scrollbar

| 属性    | 类型   | 默认值 | 说明              |
| ------- | ------ | ------ | ----------------- |
| options | Object |        | Scrollbar属性对象 |

```vue
<vf2-scrollbar 
  mode="x"
  :x-style="{
    backgroundColor: '#e8e8e8',
    fillerColor: '#808080',
    offsetY: -2
  }"/>
```

也可以写成

```vue
<vf2-scrollbar
  :options="{
    mode: 'x',
    xStyle: {
      backgroundColor: '#e8e8e8',
      fillerColor: '#808080',
      offsetY: -2       
    }
  }" />
```

## interaction

| 属性    | 类型   | 默认值 | 说明                                                      |
| ------- | ------ | ------ | --------------------------------------------------------- |
| type    | String |        | 交互类型，可选值：pie-select、interval-select、pan、pinch |
| options | Object |        |                                                           |

提供了三个事件

| 名称    | 参数 | 触发条件                             |
| ------- | ---- | ------------------------------------ |
| start   | ev   | 事件触发后的回调                     |
| end     | ev   | 事件结束后的回调函数                 |
| process | ev   | 事件进行中的回调，部分交互没有该事件 |

```vue
 <vf2-interaction type="pie-select"
      :default-selected="{
        name: '机器之血',
        percent: 0.18,
        a: '1'
      }"
      :animate="{
        duration: 300,
        easing: 'backOut'
      }"
      @end="handleSelected"/>
```

