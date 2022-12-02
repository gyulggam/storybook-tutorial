var r=Object.defineProperty;var t=(o,l)=>r(o,"name",{value:l,configurable:!0});import{M as e}from"./Button.4992636b.js";import"./vue.esm-bundler.18dcd8e3.js";const u={parameters:{storySource:{source:`import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},secondary:{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},large:{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},small:{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"Example/Button",component:e,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}},n=t(o=>({components:{MyButton:e},setup(){return{args:o}},template:'<my-button v-bind="args" />'}),"Template"),a=n.bind({});a.args={primary:!0,label:"Button"};const s=n.bind({});s.args={label:"Button"};const c=n.bind({});c.args={size:"large",label:"Button"};const i=n.bind({});i.args={size:"small",label:"Button"};const y=["Primary","Secondary","Large","Small"];export{c as Large,a as Primary,s as Secondary,i as Small,y as __namedExportsOrder,u as default};
//# sourceMappingURL=Button.stories.3b6b4f94.js.map
