import { toDisplayString, createElementVNode, createTextVNode, openBlock, createElementBlock } from 'vue';

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
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createTextVNode(toDisplayString($props.msg) + " ", 1 /* TEXT */),
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.buttonClick && $options.buttonClick(...args)))
    }, "Click Me! " + toDisplayString($data.SOME_VALUE | _ctx.currencyUSD), 1 /* TEXT */)
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
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.buttonClick && $options.buttonClick(...args)))
    }, "Click Me!")
  ]))
}

script$1.render = render$1;
script$1.__file = "src/vue-button.vue";

export { script as widget, script$1 as vueButton };
