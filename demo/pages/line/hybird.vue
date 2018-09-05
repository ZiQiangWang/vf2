<template>
  <vf2-chart :data="data">
    <vf2-line position="x*y" shape="hybrid" color="type" :chart-style="{dashDim: 'dash'}"/>
    <vf2-scale field="y" tick-count="5"/>
    <vf2-tooltip disabled/>
    <vf2-legend align="center" :item-width="null"/>
  </vf2-chart>
</template>

<script>
import F2 from '@antv/f2/lib/core';

const random = function random(a, b) {
  return a + Math.random() * (b - a);
};

const hybridDefine = {
  draw: function draw(cfg, container) {
    const style = Object.assign({
      strokeStyle: cfg.color,
      lineWidth: cfg.size || 2,
      z: cfg.isInCircle,
    }, cfg.style);

    const points = cfg.points;
    const dashDim = cfg.style.dashDim || null;

    if (points.length < 2) return;

    if (dashDim) {
      const lines = this.splitLines(points, dashDim);
      let i = 0;


      const l = lines.length;
      const shapes = [];
      for (; i < l; i++) {
        const line = lines[i];
        let shape;
        if (line.isDash) {
          shape = container.addShape('Polyline', {
            className: 'line',
            attrs: F2.Util.mix({
              points: line,
              lineDash: [style.lineWidth * 2, style.lineWidth * 2],
            }, style),
          });
        } else {
          shape = container.addShape('Polyline', {
            className: 'line',
            attrs: F2.Util.mix({
              points: line,
            }, style),
          });
        }
        shapes.push(shape);
      }
      // eslint-disable-next-line
      return shapes;
    }
    // eslint-disable-next-line
    return container.addShape('Polyline', {
      className: 'line',
      attrs: F2.Util.mix({
        points,
      }, style),
    });
  },

  // 将一整条线按实线虚线分为多条
  splitLines: function splitLines(ps, dim) {
    let lines = [];
    let i = 0;


    let cur = [];


    let last = null;
    // eslint-disable-next-line
    last = cur.isDash = ps[0]._origin[dim] === true;
    cur.start = ps[0];

    // 分线
    while (i < ps.length) {
      const p = ps[i];
      // eslint-disable-next-line
      const isDash = p._origin[dim] === true;
      if (last !== isDash) {
        cur.end = p;
        lines.push(cur);

        cur = [p];
        cur.start = ps[i - 1];
        cur.isDash = isDash;
      } else {
        cur.push(p);
      }

      if (i >= ps.length - 1) {
        cur.end = p;
        lines.push(cur);
      }
      last = isDash;
      i++;
    }

    // 计算绘制点
    lines = lines.map((ps2) => {
      let j = 0;

      const l = ps2.length;

      const line = [];
      line.isDash = ps2.isDash;
      line.push(hybridDefine.getMid(ps2.start, ps2[0]));
      for (; j < l; j++) {
        line.push(ps2[j]);
      }
      line.push(hybridDefine.getMid(ps2[l - 1], ps2.end));
      return line;
    });

    return lines;
  },

  // 计算两个点的中点
  getMid: function getMid(p1, p2) {
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };
  },
};
F2.Shape.registerShape('line', 'hybrid', hybridDefine);

export default {
  data() {
    return {
      data: [{
        type: 'a',
        x: 1,
        y: random(2, 1.2),
      }, {
        type: 'a',
        x: 2,
        y: random(2, 1.6),
      }, {
        type: 'a',
        x: 3,
        y: random(2, 2.0),
      }, {
        type: 'a',
        x: 4,
        y: random(2, 2.4),
      }, {
        type: 'a',
        x: 5,
        y: random(2, 2.8),
      }, {
        type: 'a',
        x: 6,
        y: random(2, 3.2),
        dash: true,
      }, {
        type: 'a',
        x: 7,
        y: random(2, 3.6),
        dash: true,
      }, {
        type: 'a',
        x: 8,
        y: random(2, 4.0),
        dash: false,
      }, {
        type: 'a',
        x: 9,
        y: random(2, 4.4),
      }, {
        type: 'b',
        x: 1,
        y: random(3, 3.2),
        dash: true,
      }, {
        type: 'b',
        x: 2,
        y: random(3, 3.6),
        dash: true,
      }, {
        type: 'c',
        x: 1,
        y: random(0, 1.2),
      }, {
        type: 'c',
        x: 2,
        y: random(0, 1.2),
        dash: true,
      }, {
        type: 'c',
        x: 3,
        y: random(0, 1.6),
        dash: true,
      }, {
        type: 'd',
        x: 5,
        y: random(1, 1.2),
        dash: true,
      }, {
        type: 'd',
        x: 6,
        y: random(1, 1.2),
        dash: true,
      }, {
        type: 'd',
        x: 7,
        y: random(1, 1.6),
      }],
    };
  },
};
</script>
