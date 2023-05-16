'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = {
      name: 'widget',
      data() {
        return {
          member: {
            name: 'Ras',
            role: 'Ruffus'
          },
          SOME_VALUE: 3
        };
      },
      props: {
          msg: String
      },
      methods:{
        buttonClick() { 
          this.member["age"] = 3;
          console.log('Im a widget', this.member);
          return true;
        }
      },
      filters: {
      currencyUSD(value) {
        return '$' + value
      }
    }
  }

const _hoisted_1 = {
  class: "widget",
  style: {"padding":"15px","border":"1px dashed blue"}
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createTextVNode(vue.toDisplayString($props.msg) + " ", 1 /* TEXT */),
    vue.createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.buttonClick && $options.buttonClick(...args)))
    }, "Click Me! " + vue.toDisplayString($data.SOME_VALUE | _ctx.currencyUSD), 1 /* TEXT */)
  ]))
}

script.render = render;
script.__file = "src/widget.vue";

var script$1 = {
      name: 'vue-button',
      methods:{
        buttonClick() {
          console.log('Im a Vue button');
          return true;
        }
      }
  }

const _hoisted_1$1 = { style: {"padding":"15px","border":"1px dashed green"} };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    vue.createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.buttonClick && $options.buttonClick(...args)))
    }, "Click Me!")
  ]))
}

script$1.render = render$1;
script$1.__file = "src/vue-button.vue";

exports.widget = script;
exports.vueButton = script$1;
