import { ref as d, watch as m, onMounted as y, onBeforeUnmount as h, createElementBlock as f, openBlock as v } from "vue";
import "../../node_modules/echarts/index.js";
import { init as g } from "../../node_modules/echarts/lib/core/echarts.js";
const w = /* @__PURE__ */ Object.assign({ name: "JBRadarChart" }, {
  __name: "RadarChart",
  props: {
    // 数据名称（雷达图每个维度的名称）
    names: {
      type: Array,
      required: !0
    },
    // 每个维度的最大值
    maxValues: {
      type: Array,
      required: !0
    },
    // 各条数据，格式：[{ name: '系列名', value: [值数组], color: '#xxx' }]
    seriesData: {
      type: Array,
      required: !0,
      validator: (a) => a.every((r) => r.name && Array.isArray(r.value) && r.color)
    },
    // 图表高度（可选）
    height: {
      type: String,
      default: "400px"
    }
  },
  setup(a, { expose: r }) {
    const o = a, i = d(null);
    let e = null;
    const l = () => {
      const s = o.names.map((t, u) => ({
        name: t,
        max: o.maxValues[u]
      })), p = o.seriesData.map((t) => ({
        name: t.name,
        type: "radar",
        symbol: "none",
        symbolSize: 6,
        areaStyle: {
          opacity: 0.3,
          color: t.color
        },
        itemStyle: {
          color: t.color
        },
        lineStyle: {
          color: t.color,
          width: 2
        },
        data: [t.value]
      }));
      return {
        tooltip: {
          show: !0,
          trigger: "item"
        },
        legend: {
          data: o.seriesData.map((t) => t.name),
          type: "scroll",
          orient: "vertical",
          icon: "roundRect",
          right: "20",
          top: "center",
          itemGap: 30,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            fontSize: 15,
            color: "#656565"
          }
        },
        radar: {
          center: ["50%", "50%"],
          radius: "65%",
          startAngle: 90,
          splitNumber: 5,
          splitArea: {
            areaStyle: {
              color: ["#FFFFFF", "#F5F9FF"].reverse()
            }
          },
          axisLabel: { show: !1 },
          axisLine: {
            show: !0,
            lineStyle: { color: "#D2E4F8" }
          },
          splitLine: {
            show: !0,
            lineStyle: { color: "#D2E4F8" }
          },
          name: {
            formatter: "{value}",
            textStyle: {
              color: "#656565",
              fontSize: 15
            }
          },
          indicator: s
        },
        series: p
      };
    }, c = () => {
      i.value && (e = g(i.value), e.setOption(l()));
    };
    m(
      () => o,
      () => {
        e && e.setOption(l(), !0);
      },
      { deep: !0 }
    );
    const n = () => {
      e == null || e.resize();
    };
    return y(() => {
      c(), window.addEventListener("resize", n);
    }), h(() => {
      window.removeEventListener("resize", n), e == null || e.dispose();
    }), r({
      getChart: () => e
    }), (s, p) => (v(), f("div", {
      ref_key: "chartRef",
      ref: i,
      style: { width: "100%", height: "400px" }
    }, null, 512));
  }
});
export {
  w as default
};
