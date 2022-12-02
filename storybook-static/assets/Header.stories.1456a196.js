var a=Object.defineProperty;var n=(e,r)=>a(e,"name",{value:r,configurable:!0});import{M as o}from"./Header.390b733b.js";import"./Button.4992636b.js";import"./vue.esm-bundler.18dcd8e3.js";const p={title:"Example/Header",component:o,parameters:{storySource:{source:`import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { MyHeader },
  setup() {
    return { ...args };
  },
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:11},endLoc:{col:2,line:17},startBody:{col:17,line:11},endBody:{col:2,line:17}},"logged-out":{startLoc:{col:17,line:11},endLoc:{col:2,line:17},startBody:{col:17,line:11},endBody:{col:2,line:17}}}},layout:"fullscreen"}},t=n(e=>({components:{MyHeader:o},setup(){return{...e}},template:'<my-header :user="user" />'}),"Template"),s=t.bind({});s.args={user:{name:"Jane Doe"}};const l=t.bind({});l.args={user:null};const m=["LoggedIn","LoggedOut"];export{s as LoggedIn,l as LoggedOut,m as __namedExportsOrder,p as default};
//# sourceMappingURL=Header.stories.1456a196.js.map
