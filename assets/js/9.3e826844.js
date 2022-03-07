(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{621:function(e,t){e.exports=function(e,t){var a="function"==typeof e.exports?e.exports.extendOptions:e.options;for(var n in"function"==typeof e.exports&&(a.components=e.exports.options.components),a.components=a.components||{},t)a.components[n]=a.components[n]||t[n]}},679:function(e,t,a){var n={"./f-action-bar/basic.vue":742,"./f-action-bar/custom-content.vue":743,"./f-action-bar/hide-on-scroll.vue":744,"./f-action-bar/overflow.vue":745,"./f-app-bar/basic.vue":746,"./f-app-bar/colorful.vue":747,"./f-app-bar/menu.vue":748,"./f-app-bar/mixin.vue":749,"./f-asset-amount-input/basic.vue":750,"./f-asset-amount-input/custom-list.vue":751,"./f-asset-amount-input/disabled.vue":752,"./f-asset-amount-input/fullfilled.vue":753,"./f-asset-amount-input/loading.vue":754,"./f-asset-input-tools/basic.vue":755,"./f-asset-select/basic.vue":756,"./f-asset-select/custom-activator.vue":757,"./f-asset-swap-form/basic.vue":758,"./f-auth-method-modal/basic.vue":759,"./f-bottom-nav/basic.vue":760,"./f-bottom-nav/custom-content.vue":761,"./f-bottom-sheet/base.vue":762,"./f-button/basic.vue":763,"./f-dialog/basic.vue":764,"./f-divider/basic.vue":765,"./f-fiat-division/basic.vue":766,"./f-hint/basic.vue":767,"./f-hint/href.vue":768,"./f-info-grid/basic.vue":769,"./f-info-grid/custom.vue":770,"./f-info-grid/vnode.vue":771,"./f-input/basic.vue":772,"./f-input/slots.vue":773,"./f-list/basic.vue":774,"./f-list/head-icon.vue":775,"./f-list/none-subtitle.vue":776,"./f-list/slots.vue":777,"./f-list/subtitle.vue":778,"./f-loading/basic.vue":779,"./f-loading/fullscreen.vue":780,"./f-mixin-asset-logo/basic.vue":781,"./f-number-input/basic.vue":782,"./f-panel/basic.vue":783,"./f-paying-modal/basic.vue":784,"./f-phone-input/basic.vue":785,"./f-qr-code/basic.vue":786,"./f-render/basic.vue":787,"./f-search-input/basic.vue":788,"./f-segment-control/basic.vue":789,"./f-slider/basic.vue":790,"./f-switch/basic.vue":791,"./f-switch/disabled.vue":792,"./f-tabs/basic.vue":793,"./f-tabs/disabled-slider-length.vue":794,"./f-text-area/basic.vue":795,"./f-tip/basic.vue":796,"./f-toast/basic.vue":797,"./f-tooltip/basic.vue":798,"./f-user-avatar/basic.vue":799,"./grid/columns.vue":800,"./grid/gap.vue":801,"./grid/rows.vue":802,"./pando-ui/pando-account-avatar/basic.vue":803,"./pando-ui/pando-account-avatar/default-avatar.vue":804,"./pando-ui/pando-account-avatar/default-name.vue":805,"./pando-ui/pando-account-overview/basic.vue":806,"./pando-ui/pando-products/basic.vue":807,"./pando-ui/pando-social-links/basic.vue":808,"./pando-ui/pando-version/basic.vue":809};function s(e){return i(e).then(a)}function i(e){return Promise.all([a.e(0),a.e(5),a.e(4)]).then((function(){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}))}s.keys=function(){return Object.keys(n)},s.resolve=i,s.id=679,e.exports=s},907:function(e,t,a){"use strict";a.r(t);var n=a(0),s=function(e,t,a,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o};let i=class extends n.Vue{constructor(){super(...arguments),this.dark=!1,this.expand=!1,this.hasError=!1,this.selected="template",this.pen={}}get sections(){return["template","script","style"].filter(e=>this.pen[e])}get actions(){return[{icon:"$FIconMaxBold",path:"view-source",onClick:()=>this.expand=!this.expand}]}async handleImportTemplate(){try{const e=this.file,t=await a(679)(`./${e}.vue`);this.boot(t.default)}catch(e){console.log(e)}}boot(e){const t=this.parseTemplate("template",e),a=this.parseTemplate("style",e),n=this.parseTemplate("script",e);this.pen={template:t,style:a,script:n}}parseTemplate(e,t){return(new RegExp(`(<${e}(.*)?>[\\w\\W]*<\\/${e}>)`,"g").exec(t)||[])[1]||""}};s([Object(n.Prop)()],i.prototype,"file",void 0),i=s([Object(n.Component)({name:"Example"})],i);var o=i,u=a(141),r=a(621),c=a.n(r),l=a(133),v=a(233),p=a(18),d=a(104),f=a(136),b=a(21),m=a(247),h=a(29),w=a(186),x=a(52),g=a(79),y=Object(u.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{attrs:{outlined:"",rounded:""}},[a("v-lazy",{attrs:{"min-height":"42"},on:{mouseenter:e.handleImportTemplate}},[a("div",{staticClass:"text-end pa-2"},e._l(e.actions,(function(t,n){return a("v-btn",{key:n,attrs:{icon:"",small:"",disabled:e.hasError,"aria-label":t.path},on:{click:t.onClick}},[a("v-icon",{attrs:{size:16},domProps:{textContent:e._s(t.icon)}})],1)})),1)]),e._v(" "),a("v-divider"),e._v(" "),e.pen?a("div",[a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}]},[a("v-item-group",{staticClass:"pa-2",attrs:{mandatory:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._l(e.sections,(function(t,n){return[a("v-item",{key:"item-"+n,attrs:{value:t},scopedSlots:e._u([{key:"default",fn:function(n){var s=n.active,i=n.toggle;return[a("v-btn",{staticClass:"mr-2",attrs:{"input-value":s,text:"",small:""},on:{click:i}},[e._v("\n                  "+e._s(t)+"\n                ")])]}}],null,!0)})]}))],2),e._v(" "),a("v-divider"),e._v(" "),a("v-window",{staticClass:"greyscale_6",model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._l(e.sections,(function(t,n){return[a("v-window-item",{key:"window-"+n,attrs:{value:t}},[a("markup",{attrs:{code:e.pen[t],rounded:!1}})],1)]}))],2),e._v(" "),a("v-divider")],1)])],1):e._e(),e._v(" "),a("v-theme-provider",{attrs:{dark:e.dark}},[a("v-sheet",{staticClass:"pa-4",attrs:{rounded:""}},[a("vue-file",{attrs:{file:e.file},on:{error:function(t){e.hasError=!0}}})],1)],1)],1)}),[],!1,null,null,null);t.default=y.exports;c()(y,{VBtn:l.a,VDivider:v.a,VExpandTransition:p.f,VIcon:d.a,VItem:f.b,VItemGroup:b.b,VLazy:m.a,VSheet:h.a,VThemeProvider:w.a,VWindow:x.a,VWindowItem:g.a})}}]);