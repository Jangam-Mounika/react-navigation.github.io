(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[3612],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),r=n(80944),i=n(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,d=e.values,p=e.groupId,g=e.className,m=(0,r.Z)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,f=(0,a.useState)(u),k=f[0],y=f[1],b=a.Children.toArray(e.children),w=[];if(null!=p){var N=v[p];null!=N&&N!==k&&d.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;y(a),null!=p&&(h(p,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},R=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case l:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},g)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},91781:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=n(41395),s=n(58215),l={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},c={unversionedId:"redux-integration",id:"version-2.x/redux-integration",isDocsHomePage:!1,title:"Redux integration",description:"Warning: in the next major version of React Navigation, to be released in Fall 2018, we will no longer provide any information about how to integrate with Redux and it may cease to work. Issues related to Redux that are posted on the React Navigation issue tracker will be immediately closed. Redux integration may continue to work but it will not be tested against or considered when making any design decisions for the library.",source:"@site/versioned_docs/version-2.x/redux-integration.md",sourceDirName:".",slug:"/redux-integration",permalink:"/docs/2.x/redux-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/redux-integration.md",version:"2.x",sidebar_label:"Redux integration",frontMatter:{id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},sidebar:"version-2.x-docs",previous:{title:"App containers",permalink:"/docs/2.x/app-containers"},next:{title:"Overview",permalink:"/docs/2.x/custom-navigator-overview"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Step-by-step guide",id:"step-by-step-guide",children:[]},{value:"Full example",id:"full-example",children:[]},{value:"Mocking tests",id:"mocking-tests",children:[]},{value:"Under the hood",id:"under-the-hood",children:[{value:"Creating your own navigation reducer",id:"creating-your-own-navigation-reducer",children:[]}]},{value:"Handling the Hardware Back Button in Android",id:"handling-the-hardware-back-button-in-android",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning: in the next major version of React Navigation, to be released in Fall 2018, we will no longer provide any information about how to integrate with Redux and it may cease to work"),". Issues related to Redux that are posted on the React Navigation issue tracker will be immediately closed. Redux integration may continue to work but it will not be tested against or considered when making any design decisions for the library."),(0,i.kt)("p",null,"Some folks like to have their navigation state stored in the same place as the rest of their application state. ",(0,i.kt)("em",{parentName:"p"},"Think twice before you consider doing this, there is an incredibly good chance that you do not need to do this!"),". Storing your React Navigation state in your own Redux store is likely to give you a very difficult time if you don't know what you're doing."),(0,i.kt)("p",null,"If your only reason for doing this is that you want to be able to perform navigation actions from outside of your components (eg: from a Redux middleware), you can learn more about this in ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/navigating-without-navigation-prop"},"navigating without the navigation prop"),"."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To handle your app's navigation state in Redux, you can pass your own ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/navigation-prop"},(0,i.kt)("inlineCode",{parentName:"a"},"navigation"))," prop to a navigator. ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation-redux-helpers"),' handles this for you behind the scenes with a "higher-order component" called ',(0,i.kt)("inlineCode",{parentName:"p"},"reduxifyNavigator"),". You pass in your root navigator component to the ",(0,i.kt)("inlineCode",{parentName:"p"},"reduxifyNavigator")," function, and it returns a new component that takes your navigation ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," function as props.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A middleware is needed so that any events that mutate the navigation state properly trigger React Navigation's event listeners.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The navigation state inside Redux will need to be kept updated using React Navigation's navigation reducer. You will call this reducer from your Redux master reducer."))),(0,i.kt)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),(0,i.kt)("p",null,"The following steps apply to ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation@^2.3.0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation-redux-helpers@^2.0.0-beta"),"."),(0,i.kt)("p",null,"First, you need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation-redux-helpers")," package to your project."),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation-redux-helpers\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation-redux-helpers\n")))),(0,i.kt)("p",null,"The following is a minimal example of how you might use navigators within a Redux application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-es6"},"import {\n  createStackNavigator,\n} from 'react-navigation';\nimport {\n  createStore,\n  applyMiddleware,\n  combineReducers,\n} from 'redux';\nimport {\n  reduxifyNavigator,\n  createReactNavigationReduxMiddleware,\n  createNavigationReducer,\n} from 'react-navigation-redux-helpers';\nimport { Provider, connect } from 'react-redux';\nimport React from 'react';\n\nconst AppNavigator = createStackNavigator(AppRouteConfigs);\n\nconst navReducer = createNavigationReducer(AppNavigator);\nconst appReducer = combineReducers({\n  nav: navReducer,\n  ...\n});\n\n// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator\nconst middleware = createReactNavigationReduxMiddleware(\n  \"root\",\n  state => state.nav,\n);\n\nconst App = reduxifyNavigator(AppNavigator, \"root\");\nconst mapStateToProps = (state) => ({\n  state: state.nav,\n});\nconst AppWithNavigationState = connect(mapStateToProps)(App);\n\nconst store = createStore(\n  appReducer,\n  applyMiddleware(middleware),\n);\n\nclass Root extends React.Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <AppWithNavigationState />\n      </Provider>\n    );\n  }\n}\n")),(0,i.kt)("p",null,"Once you do this, your navigation state is stored within your Redux store, at which point you can fire navigation actions using your Redux dispatch function."),(0,i.kt)("p",null,"Keep in mind that when a navigator is given a ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop, it relinquishes control of its internal state. That means you are now responsible for persisting its state, handling any deep linking, ",(0,i.kt)("a",{parentName:"p",href:"#handling-the-hardware-back-button-in-android"},"Handling the Hardware Back Button in Android"),", etc."),(0,i.kt)("p",null,"Navigation state is automatically passed down from one navigator to another when you nest them. Note that in order for a child navigator to receive the state from a parent navigator, it should be defined as a ",(0,i.kt)("inlineCode",{parentName:"p"},"screen"),"."),(0,i.kt)("p",null,"Applying this to the example above, you could instead define ",(0,i.kt)("inlineCode",{parentName:"p"},"AppNavigator")," to contain a nested ",(0,i.kt)("inlineCode",{parentName:"p"},"TabNavigator")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-es6"},"const AppNavigator = createStackNavigator({\n  Home: { screen: MyTabNavigator },\n});\n")),(0,i.kt)("p",null,"In this case, once you ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," ",(0,i.kt)("inlineCode",{parentName:"p"},"AppNavigator")," to Redux as is done in ",(0,i.kt)("inlineCode",{parentName:"p"},"AppWithNavigationState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MyTabNavigator")," will automatically have access to navigation state as a ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop."),(0,i.kt)("h2",{id:"full-example"},"Full example"),(0,i.kt)("p",null,"There's a working example app with Redux ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/2.x/examples/ReduxExample"},"here")," if you want to try it out yourself."),(0,i.kt)("h2",{id:"mocking-tests"},"Mocking tests"),(0,i.kt)("p",null,"To make jest tests work with your React Navigation app, you need to change the jest preset in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", see ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/jest/docs/tutorial-react-native.html#transformignorepatterns-customization"},"here"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"jest": {\n  "preset": "react-native",\n  "transformIgnorePatterns": [\n    "node_modules/(?!(jest-)?react-native|react-navigation|react-navigation-redux-helpers)"\n  ]\n}\n')),(0,i.kt)("h2",{id:"under-the-hood"},"Under the hood"),(0,i.kt)("h3",{id:"creating-your-own-navigation-reducer"},"Creating your own navigation reducer"),(0,i.kt)("p",null,"If you want to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"createNavigationReducer")," reducer creator this is how you would do it yourself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-es6"},"const AppNavigator = createStackNavigator(AppRouteConfigs);\n\nconst initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));\n\nconst navReducer = (state = initialState, action) => {\n  const nextState = AppNavigator.router.getStateForAction(action, state);\n\n  // Simply return the original `state` if `nextState` is null or undefined.\n  return nextState || state;\n};\n")),(0,i.kt)("h2",{id:"handling-the-hardware-back-button-in-android"},"Handling the Hardware Back Button in Android"),(0,i.kt)("p",null,"By using the following snippet, your nav component will be aware of the back button press actions and will correctly interact with your stack. This is really useful on Android."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-es6"},'import React from "react";\nimport { BackHandler } from "react-native";\nimport { NavigationActions } from "react-navigation";\n\n/* your other setup code here! this is not a runnable snippet */\n\nclass ReduxNavigation extends React.Component {\n  componentDidMount() {\n    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);\n  }\n\n  componentWillUnmount() {\n    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);\n  }\n\n  onBackPress = () => {\n    const { dispatch, nav } = this.props;\n    if (nav.index === 0) {\n      return false;\n    }\n\n    dispatch(NavigationActions.back());\n    return true;\n  };\n\n  render() {\n    /* more setup code here! this is not a runnable snippet */\n    return <AppNavigator navigation={navigation} />;\n  }\n}\n')))}p.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);