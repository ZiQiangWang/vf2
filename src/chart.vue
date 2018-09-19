<template>
  <div class="vf2-chart" :style="{
      width: width + 'px',
      height: height + 'px'
    }">
    <canvas ref="chart"></canvas>
    <slot></slot>
  </div>
</template>

<script>
import F2 from '@antv/f2/lib/core';
import { camelAttrs } from './util';

export default {
  name: 'vf2-chart',
  props: {
    // 渲染用数据
    data: {
      type: Array,
      required: true,
    },
    width: {
      type: Number,
      default: window.innerWidth,
    },
    height: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return {
      scaleOptions: {},
      axisOptions: [],
      legendOptions: null,
      tooltipOptions: null,
      guideOptions: [],
      interactionOptions: [],
      geometryOptions: [],
    };
  },
  watch: {
    data(val) {
      this.chart && this.chart.changeData(val);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.render();
    });
  },
  methods: {
    // 核心渲染函数
    render() {
      const chart = new F2.Chart({
        el: this.$refs.chart,
        width: this.width,
        height: this.height,
        pixelRatio: window.devicePixelRatio,
        ...camelAttrs(this.$attrs),
      });

      if (!this.data) {
        return;
      }

      chart.source(this.data, this.scaleOptions);

      if (this.axisOptions.length) {
        for (let i = 0; i < this.axisOptions.length; i++) {
          const option = this.axisOptions[i];
          const {
            field, disabled, label, justifyLabelX, justifyLabelY, ...rest
          } = option;

          if (!field && disabled) {
            chart.axis(false);
            break;
          } else if (field && disabled) {
            chart.axis(field, false);
          } else if (field && !disabled) {
            rest.label = this.axisLabel(label, justifyLabelX, justifyLabelY);
            chart.axis(field, rest);
          }
        }
      }

      if (this.legendOptions) {
        const { field, disabled, ...rest } = this.legendOptions;
        if (!field && disabled) {
          chart.legend(false);
        } else if (disabled) {
          chart.legend(field, false);
        } else if (field) {
          chart.legend(field, rest);
        } else {
          chart.legend(rest);
        }
      }

      if (this.tooltipOptions) {
        const {
          disabled, linkLegend, ref, ...rest
        } = this.tooltipOptions;
        let options = rest;

        if (disabled) {
          options = false;
        } else if (linkLegend) {
          options = {
            ...rest,
            custom: true, // 自定义 tooltip 内容框
            onChange(obj) {
              ref.$emit('change', obj, chart);

              const legends = chart.get('legendController').legends;
              // 各个方向的legends
              const legendDir = Object.keys(legends);
              if (legendDir.length === 0) {
                return;
              }
              const legend = legends[legendDir[0]][0];

              const tooltipItems = obj.items;
              const legendItems = legend.items;
              const map = {};
              legendItems.forEach((item) => {
                map[item.name] = Object.assign({}, item);
              });
              tooltipItems.forEach((item) => {
                const name = item.name;
                const value = item.value;
                if (map[name]) {
                  map[name].value = value;
                }
              });
              legend.setItems(Object.values(map));
            },
            onHide() {
              ref.$emit('hide', chart);
              const legends = chart.get('legendController').legends;
              // 各个方向的legends
              const legendDir = Object.keys(legends);
              if (legendDir.length === 0) {
                return;
              }
              const legend = legends[legendDir[0]][0];
              legend.setItems(chart.getLegendItems().notExist);
            },
          };
        } else {
          options = {
            ...rest,
            onChange(obj) {
              ref.$emit('change', obj, chart);
            },
            onHide(obj) {
              ref.$emit('hide', obj, chart);
            },
            onShow(obj) {
              ref.$emit('show', obj, chart);
            },
          };
        }

        chart.tooltip(options);
      }

      if (this.coordOptions) {
        const { type, ...rest } = this.coordOptions;
        chart.coord(type, rest);
      }

      if (this.guideOptions.length) {
        this.guideOptions.forEach((option) => {
          const {
            type, chartStyle, ref, ...rest
          } = option;

          if (chartStyle) {
            rest.style = chartStyle;
          }
          const guide = chart.guide()[type](rest);
          ref.setInstance(guide);
        });
      }

      this.geometryOptions.forEach((option) => {
        const { type, ...rest } = option;
        this.registerGeometry(chart, type, rest);
      });

      if (this.scrollbarOptions) {
        chart.scrollBar(this.scrollbarOptions);
      }

      if (this.interactionOptions.length) {
        this.interactionOptions.forEach((option) => {
          const {
            type, chartStyle, ref, ...rest
          } = option;

          rest.onStart = ev => ref.$emit('start', ev);
          rest.onEnd = ev => ref.$emit('end', ev);
          rest.onProcess = ev => ref.$emit('process', ev);
          if (chartStyle) {
            rest.style = chartStyle;
          }
          chart.interaction(type, rest);
        });
      }

      chart.render();


      this.chart = chart;
      this.$emit('ready', chart);
    },
    // 注册
    registerGeometry(chart, type, option) {
      const {
        position, shape, color, size, adjust, animate, chartStyle,
        ...rest
      } = option;
      const rs = chart[type](rest).position(position);

      shape && rs.shape(...this.normalize(shape));
      color && rs.color(...this.normalize(color));
      size && rs.size(...this.normalize(size));
      adjust && rs.adjust(adjust);
      animate !== undefined && rs.animate(animate);
      chartStyle && rs.style(...this.normalize(chartStyle));
    },
    axisLabel(label, justifyLabelX, justifyLabelY) {
      if (!justifyLabelX && !justifyLabelY) {
        return label;
      }

      if (label === null) {
        return null;
      }

      if (justifyLabelX) {
        return (text, index, total) => {
          let textCfg = {
            textAlign: 'center',
          };

          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          if (typeof label === 'object') {
            textCfg = Object.assign({}, textCfg, label);
          } else if (typeof label === 'function') {
            textCfg = Object.assign({}, textCfg, label(text, index, total));
          }
          return textCfg;
        };
      }
      if (justifyLabelY) {
        return (text, index, total) => {
          let textCfg = {};

          if (index === 0) {
            textCfg.textBaseline = 'bottom';
          } else if (index === total - 1) {
            textCfg.textBaseline = 'top';
          }

          if (typeof label === 'object') {
            textCfg = Object.assign({}, textCfg, label);
          } else if (typeof label === 'function') {
            textCfg = Object.assign({}, textCfg, label(text, index, total));
          }
          return textCfg;
        };
      }
      return undefined;
    },
    // 归一化成数组
    normalize(params) {
      if (Array.isArray(params)) {
        return params;
      }
      return [params];
    },
    // 添加形状的选项
    addGeometryOption(option) {
      this.geometryOptions.push(option);
    },
    // 设置选项
    setOption(name, options) {
      this[`set${name}`](options);
    },
    setLegend(options) {
      this.legendOptions = options;
    },
    setTooltip(options) {
      this.tooltipOptions = options;
    },
    setGuide(options) {
      this.guideOptions.push(options);
    },
    setInteraction(options) {
      this.interactionOptions.push(options);
    },
    setScale(options) {
      const { field, ...rest } = options;
      if (field) {
        this.scaleOptions[field] = rest;
      } else {
        this.scaleOptions = rest;
      }
    },
    setAxis(options) {
      this.axisOptions.push(options);
    },
    setCoord(options) {
      this.coordOptions = options;
    },
    setScrollbar(options) {
      this.scrollbarOptions = options;
    },
    repaint() {
      this.chart && this.chart.repaint();
    },
    rerender() {
      this.destroy();
      this.render();
    },
    destroy() {
      this.chart && this.chart.destroy();
    },
    instance() {
      return this.chart;
    },
  },
};
</script>
