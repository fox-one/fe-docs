(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{668:function(e){e.exports=JSON.parse('{"name":"@foxone/uikit","version":"3.1.4-3","main":"./build/index.min.js","types":"./types/index.d.ts","scripts":{"dev":"cross-env NODE_ENV=development webpack serve --open --config configs/webpack.config.serve.js --hot","build":"rimraf build && cross-env NODE_ENV=production webpack --config configs/webpack.config.production.js --progress","build:dev":"cross-env TARGET=development webpack --config configs/webpack.config.development.js --progress","watch":"yarn build:dev --watch","format":"prettier --write src"},"files":["build","types","src"],"dependencies":{"@nuxt/types":"^2.15.8","axios":"^0.26.0","pako":"^2.0.4","qrcode":"^1.5.0","reconnecting-websocket":"^4.4.0","tinycolor2":"^1.4.2","vue-class-component":"^7.2.3","vue-property-decorator":"^9.1.2"},"peerDependencies":{"@foxone/icons":"^3.0.0","@foxone/utils":"^0.2.6","vue":"^2.6.12","vuetify":"^2.4.5"},"devDependencies":{"@babel/cli":"^7.14.5","@babel/core":"^7.14.6","@foxone/dev":"^0.2.2","@foxone/icons":"3.0.1-51","@foxone/utils":"^0.2.6","@mdi/font":"^5.9.55","@mdi/js":"^5.4.55","@types/node":"^17.0.17","@typescript-eslint/eslint-plugin":"^4.18.0","@typescript-eslint/parser":"^4.18.0","autoprefixer":"^10.2.6","babel-loader":"^8.2.2","babel-plugin-transform-define":"^2.0.0","babel-polyfill":"^6.26.0","bignumber.js":"^9.0.1","cross-env":"^7.0.3","css-loader":"^5.2.6","css-minimizer-webpack-plugin":"^3.0.1","dotenv":"^16.0.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.3.1","eslint-plugin-vue":"^6.2.2","file-loader":"^6.2.0","fork-ts-checker-webpack-plugin":"^6.2.10","friendly-errors-webpack-plugin":"^1.7.0","happypack":"^5.0.1","html-webpack-plugin":"^5.3.2","mini-css-extract-plugin":"^1.6.0","node-sass":"^6.0.0","optimize-css-assets-webpack-plugin":"^6.0.0","postcss":"^8.3.0","postcss-loader":"^5.3.0","postcss-preset-env":"^6.7.0","rimraf":"^3.0.2","sass":"1.26.11","sass-loader":"^12.0.0","shelljs":"^0.8.4","style-loader":"^2.0.0","terser-webpack-plugin":"^5.1.3","ts-loader":"^9.2.2","url-loader":"^4.1.1","vue-class-component":"^7.2.3","vue-loader":"^15.9.7","vue-property-decorator":"^9.1.2","vue-router":"^3.5.1","vue-template-compiler":"^2.6.12","vuetify":"^2.5.3","vuetify-loader":"^1.7.2","webpack":"^5.38.1","webpack-cli":"^4.7.0","webpack-dev-server":"^3.11.2"}}')},669:function(e){e.exports=JSON.parse('{"name":"@foxone/icons","version":"3.1.3-0","main":"./build/index.esm.js","module":"./build/index.esm.js","typings":"./build/index.d.ts","scripts":{"generate":"rm -rf src/icons && node scripts/build.js && yarn format","serve":"vue-cli-service serve","build":"rm -rf lib && rollup -c","lint":"vue-cli-service lint","format":"prettier --write src"},"files":["build","src"],"peerDependencies":{"vue":"^2.6.12","vue-class-component":"^7.2.3","vue-property-decorator":"^9.1.2"},"devDependencies":{"@rollup/plugin-node-resolve":"^13.0.4","@typescript-eslint/eslint-plugin":"^4.18.0","@typescript-eslint/parser":"^4.18.0","@vue/cli-plugin-babel":"~4.5.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-plugin-router":"~4.5.0","@vue/cli-plugin-typescript":"~4.5.0","@vue/cli-plugin-vuex":"~4.5.0","@vue/cli-service":"~4.5.0","@vue/eslint-config-prettier":"^6.0.0","@vue/eslint-config-typescript":"^7.0.0","cheerio":"^1.0.0-rc.10","core-js":"^3.16.0","lodash":"^4.17.21","prettier":"^2.2.1","rimraf":"^3.0.2","rollup":"^2.55.1","rollup-plugin-css-porter":"^1.0.2","rollup-plugin-filesize":"^9.1.1","rollup-plugin-sass":"^1.2.2","rollup-plugin-terser":"^7.0.2","rollup-plugin-typescript2":"^0.30.0","rollup-plugin-vue":"5.1.9","sass":"1.26.11","sass-loader":"^8.0.2","svgo":"^2.3.1","typescript":"~4.1.5","vue":"^2.6.12","vue-class-component":"^7.2.3","vue-cli-plugin-vuetify":"~2.0.7","vue-property-decorator":"^9.1.2","vue-router":"^3.2.0","vue-template-compiler":"^2.6.11","vuetify":"^2.5.6","vuetify-loader":"^1.7.2","vuex":"^3.4.0"}}')},670:function(e){e.exports=JSON.parse('{"name":"@foxone/pando-ui","version":"0.0.2-11","main":"./build/index.umd.js","module":"./build/index.esm.js","typings":"./build/index.d.ts","scripts":{"serve":"vue-cli-service serve","build":"rm -rf build && rollup -c","lint":"vue-cli-service lint","build:dist":"vue-cli-service build"},"peerDependencies":{"@foxone/icons":"^3.0.0","@foxone/uikit":"^3.0.0","vue":"^2.6.11","vue-class-component":"^7.2.3","vue-property-decorator":"^9.1.2","vuetify":"^2.5.0"},"devDependencies":{"@foxone/icons":"beta","@foxone/uikit":"beta","@rollup/plugin-image":"^2.1.1","@rollup/plugin-json":"^4.1.0","@rollup/plugin-node-resolve":"^13.0.4","@typescript-eslint/eslint-plugin":"^4.18.0","@typescript-eslint/parser":"^4.18.0","@vue/cli-plugin-babel":"~4.5.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-plugin-router":"~4.5.0","@vue/cli-plugin-typescript":"~4.5.0","@vue/cli-plugin-vuex":"~4.5.0","@vue/cli-service":"~4.5.0","@vue/eslint-config-prettier":"^6.0.0","@vue/eslint-config-typescript":"^7.0.0","core-js":"^3.6.5","eslint":"^6.7.2","eslint-plugin-prettier":"^3.3.1","eslint-plugin-vue":"^6.2.2","postcss":"^8.3.11","postcss-url":"^10.1.3","prettier":"^2.2.1","rollup":"^2.55.1","rollup-plugin-css-porter":"^1.0.2","rollup-plugin-filesize":"^9.1.1","rollup-plugin-postcss":"^4.0.1","rollup-plugin-sass":"^1.2.2","rollup-plugin-terser":"^7.0.2","rollup-plugin-typescript2":"^0.30.0","rollup-plugin-vue":"5.1.9","sass":"1.26.5","sass-loader":"^8.0.2","typescript":"~4.1.5","vue":"^2.6.11","vue-class-component":"^7.2.3","vue-i18n":"^8.26.7","vue-property-decorator":"^9.1.2","vue-router":"^3.2.0","vue-template-compiler":"^2.6.11","vuetify":"^2.5.14","vuetify-loader":"^1.7.3","vuex":"^3.4.0"},"installConfig":{"hoistingLimits":"workspaces"}}')},878:function(e,i,s){"use strict";s.r(i);var r=s(0),l=s(668),n=s(669),t=s(670),o=function(e,i,s,r){var l,n=arguments.length,t=n<3?i:null===r?r=Object.getOwnPropertyDescriptor(i,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)t=Reflect.decorate(e,i,s,r);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(t=(n<3?l(t):n>3?l(i,s,t):l(i,s))||t);return n>3&&t&&Object.defineProperty(i,s,t),t};let p=class extends r.Vue{constructor(){super(...arguments),this.lastest={},this.pkgs=["@foxone/uikit","@foxone/icons","@foxone/pando-ui"]}get meta(){return{"@foxone/uikit":l.version,"@foxone/icons":n.version,"@foxone/pando-ui":t.version}}};p=o([r.Component],p);var u=p,c=s(141),a=Object(c.a)(u,(function(){var e=this.$createElement,i=this._self._c||e;return i("div",[i("div",[this._v(this._s(this.meta))])])}),[],!1,null,null,null);i.default=a.exports}}]);