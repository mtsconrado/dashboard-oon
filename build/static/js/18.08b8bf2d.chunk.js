(this["webpackJsonpoon-seguros"]=this["webpackJsonpoon-seguros"]||[]).push([[18],{603:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEventSourceSupported=t.isReactNative=t.ReadyState=t.UNPARSABLE_JSON_OBJECT=t.DEFAULT_RECONNECT_INTERVAL_MS=t.DEFAULT_RECONNECT_LIMIT=t.SOCKET_IO_PING_CODE=t.SOCKET_IO_PATH=t.SOCKET_IO_PING_INTERVAL=t.DEFAULT_EVENT_SOURCE_OPTIONS=t.EMPTY_EVENT_HANDLERS=t.DEFAULT_OPTIONS=void 0;t.DEFAULT_OPTIONS={},t.EMPTY_EVENT_HANDLERS={},t.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:t.EMPTY_EVENT_HANDLERS},t.SOCKET_IO_PING_INTERVAL=25e3,t.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",t.SOCKET_IO_PING_CODE="2",t.DEFAULT_RECONNECT_LIMIT=20,t.DEFAULT_RECONNECT_INTERVAL_MS=5e3,t.UNPARSABLE_JSON_OBJECT={},function(e){e[e.UNINSTANTIATED=-1]="UNINSTANTIATED",e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(t.ReadyState||(t.ReadyState={}));t.isReactNative="undefined"!==typeof navigator&&"ReactNative"===navigator.product,t.isEventSourceSupported=!t.isReactNative&&function(){try{return"EventSource"in globalThis}catch(e){return!1}}()},645:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,c){function u(e){try{a(n.next(e))}catch(t){c(t)}}function s(e){try{a(n.throw(e))}catch(t){c(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,s)}a((n=n.apply(e,t||[])).next())}))},c=this&&this.__generator||function(e,t){var r,n,o,c,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(s){c=[6,s],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useWebSocket=void 0;var s=r(0),a=r(603),i=r(773),l=r(776),f=u(r(777)),d=r(648);t.useWebSocket=function(e,t,r){void 0===t&&(t=a.DEFAULT_OPTIONS),void 0===r&&(r=!0);var u=s.useState(null),S=u[0],p=u[1],v=s.useState({}),b=v[0],E=v[1],O=s.useMemo((function(){if(S)try{return JSON.parse(S.data)}catch(e){return a.UNPARSABLE_JSON_OBJECT}return null}),[S]),h=s.useRef(null),y=s.useRef(null),_=s.useRef((function(){})),N=s.useRef(0),R=s.useRef([]),T=s.useRef(null),w=s.useRef(t);w.current=t;var C=h.current&&void 0!==b[h.current]?b[h.current]:null!==e&&!0===r?a.ReadyState.CONNECTING:a.ReadyState.UNINSTANTIATED,g=t.queryParams?JSON.stringify(t.queryParams):null,I=s.useCallback((function(e,t){var r;void 0===t&&(t=!0),a.isEventSourceSupported&&y.current instanceof EventSource?console.warn("Unable to send a message from an eventSource"):(null===(r=y.current)||void 0===r?void 0:r.readyState)===a.ReadyState.OPEN?(d.assertIsWebSocket(y.current),y.current.send(e)):t&&R.current.push(e)}),[]),k=s.useCallback((function(e,t){void 0===t&&(t=!0),I(JSON.stringify(e),t)}),[I]),P=s.useCallback((function(){return!0!==w.current.share||a.isEventSourceSupported&&y.current instanceof EventSource?y.current:(null===T.current&&y.current&&(d.assertIsWebSocket(y.current),T.current=f.default(y.current,_)),T.current)}),[]);return s.useEffect((function(){if(null!==e&&!0===r){var t,u=!1,s=function(){return o(void 0,void 0,void 0,(function(){var r,o,s;return c(this,(function(c){switch(c.label){case 0:return r=h,[4,l.getUrl(e,w)];case 1:return r.current=c.sent(),o=function(e){u||p(e)},s=function(e){u||E((function(t){var r;return n(n({},t),h.current&&((r={})[h.current]=e,r))}))},t=i.createOrJoinSocket(y,h.current,s,w,o,_,N,I),[2]}}))}))};return _.current=function(){u||(T.current&&(T.current=null),null===t||void 0===t||t(),s())},s(),function(){u=!0,T.current&&(T.current=null),null===t||void 0===t||t(),p(null)}}null!==e&&!1!==r||(N.current=0,E((function(e){var t;return n(n({},e),h.current&&((t={})[h.current]=a.ReadyState.CLOSED,t))})))}),[e,r,g,I]),s.useEffect((function(){C===a.ReadyState.OPEN&&R.current.splice(0).forEach((function(e){I(e)}))}),[C]),{sendMessage:I,sendJsonMessage:k,lastMessage:S,lastJsonMessage:O,readyState:C,getWebSocket:P}}},646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetWebSockets=t.sharedWebSockets=void 0,t.sharedWebSockets={},t.resetWebSockets=function(e){if(e&&t.sharedWebSockets.hasOwnProperty(e))delete t.sharedWebSockets[e];else for(var r in t.sharedWebSockets)t.sharedWebSockets.hasOwnProperty(r)&&delete t.sharedWebSockets[r]}},647:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setUpSocketIOPing=t.appendQueryParams=t.parseSocketIOUrl=void 0;var n=r(603);t.parseSocketIOUrl=function(e){if(e)return(t=/^https|wss/.test(e)?"wss":"ws")+"://"+e.replace(/^(https?|wss?)(:\/\/)?/,"").replace(/\/$/,"")+n.SOCKET_IO_PATH;if(""===e){var t=/^https/.test(window.location.protocol)?"wss":"ws",r=window.location.port?":"+window.location.port:"";return t+"://"+window.location.hostname+r+n.SOCKET_IO_PATH}return e},t.appendQueryParams=function(e,t){void 0===t&&(t={});return e+(/\?([\w]+=[\w]+)/.test(e)?"&":"?")+(""+Object.entries(t).reduce((function(e,t){return e+(t[0]+"=")+t[1]+"&"}),"").slice(0,-1))},t.setUpSocketIOPing=function(e,t){void 0===t&&(t=n.SOCKET_IO_PING_INTERVAL);return setInterval((function(){return e(n.SOCKET_IO_PING_CODE)}),t)}},648:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetGlobalState=t.assertIsWebSocket=void 0;var n=r(646),o=r(649);t.assertIsWebSocket=function(e){if(e instanceof WebSocket===!1)throw new Error("")},t.resetGlobalState=function(e){o.resetSubscribers(e),n.resetWebSockets(e)}},649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetSubscribers=t.removeSubscriber=t.addSubscriber=t.hasSubscribers=t.getSubscribers=void 0;var n={},o=[];t.getSubscribers=function(e){return t.hasSubscribers(e)?Array.from(n[e]):o},t.hasSubscribers=function(e){var t;return(null===(t=n[e])||void 0===t?void 0:t.size)>0},t.addSubscriber=function(e,t){n[e]=n[e]||new Set,n[e].add(t)},t.removeSubscriber=function(e,t){n[e].delete(t)},t.resetSubscribers=function(e){if(e&&n.hasOwnProperty(e))delete n[e];else for(var t in n)n.hasOwnProperty(t)&&delete n[t]}},772:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(645);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.useWebSocket}});var o=r(778);Object.defineProperty(t,"useSocketIO",{enumerable:!0,get:function(){return o.useSocketIO}});var c=r(603);Object.defineProperty(t,"ReadyState",{enumerable:!0,get:function(){return c.ReadyState}});var u=r(779);Object.defineProperty(t,"useEventSource",{enumerable:!0,get:function(){return u.useEventSource}});var s=r(648);Object.defineProperty(t,"resetGlobalState",{enumerable:!0,get:function(){return s.resetGlobalState}})},773:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createOrJoinSocket=void 0;var n=r(646),o=r(603),c=r(774),u=r(775),s=r(649);t.createOrJoinSocket=function(e,t,r,a,i,l,f,d){if(!o.isEventSourceSupported&&a.current.eventSourceOptions)throw o.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(a.current.share){var S=null;void 0===n.sharedWebSockets[t]?(n.sharedWebSockets[t]=a.current.eventSourceOptions?new EventSource(t,a.current.eventSourceOptions):new WebSocket(t,a.current.protocols),e.current=n.sharedWebSockets[t],r(o.ReadyState.CONNECTING),S=u.attachSharedListeners(n.sharedWebSockets[t],t,a,d)):(e.current=n.sharedWebSockets[t],r(n.sharedWebSockets[t].readyState));var p={setLastMessage:i,setReadyState:r,optionsRef:a,reconnectCount:f,reconnect:l};return s.addSubscriber(t,p),function(e,t,r,c,u){return function(){if(s.removeSubscriber(e,t),!s.hasSubscribers(e)){try{var a=n.sharedWebSockets[e];a instanceof WebSocket&&(a.onclose=function(e){r.current.onClose&&r.current.onClose(e),c(o.ReadyState.CLOSED)}),a.close()}catch(i){}u&&u(),delete n.sharedWebSockets[e]}}}(t,p,a,r,S)}if(e.current=a.current.eventSourceOptions?new EventSource(t,a.current.eventSourceOptions):new WebSocket(t,a.current.protocols),r(o.ReadyState.CONNECTING),!e.current)throw new Error("WebSocket failed to be created");return c.attachListeners(e.current,{setLastMessage:i,setReadyState:r},a,l.current,f,d)}},774:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.attachListeners=void 0;var o=r(647),c=r(603),u=r(648);t.attachListeners=function(e,t,r,s,a,i){var l,f,d,S=t.setLastMessage,p=t.setReadyState;return r.current.fromSocketIO&&(l=o.setUpSocketIOPing(i)),function(e,t,r){e.onmessage=function(e){t.current.onMessage&&t.current.onMessage(e),"function"===typeof t.current.filter&&!0!==t.current.filter(e)||r(e)}}(e,r,S),function(e,t,r,n){e.onopen=function(e){t.current.onOpen&&t.current.onOpen(e),n.current=0,r(c.ReadyState.OPEN)}}(e,r,p,a),f=function(e,t,r,n,o){return c.isEventSourceSupported&&e instanceof EventSource?function(){}:(u.assertIsWebSocket(e),e.onclose=function(e){var u,a;if(t.current.onClose&&t.current.onClose(e),r(c.ReadyState.CLOSED),t.current.shouldReconnect&&t.current.shouldReconnect(e)){var i=null!==(u=t.current.reconnectAttempts)&&void 0!==u?u:c.DEFAULT_RECONNECT_LIMIT;o.current<i?s=window.setTimeout((function(){o.current++,n()}),null!==(a=t.current.reconnectInterval)&&void 0!==a?a:c.DEFAULT_RECONNECT_INTERVAL_MS):(t.current.onReconnectStop&&t.current.onReconnectStop(i),console.warn("Max reconnect attempts of "+i+" exceeded"))}},function(){return s&&window.clearTimeout(s)});var s}(e,r,p,s,a),d=function(e,t,r,o,u){var s;return e.onerror=function(a){var i,l;t.current.onError&&t.current.onError(a),c.isEventSourceSupported&&e instanceof EventSource&&(t.current.onClose&&t.current.onClose(n(n({},a),{code:1006,reason:"An error occurred with the EventSource: "+a,wasClean:!1})),r(c.ReadyState.CLOSED),e.close()),t.current.retryOnError&&(u.current<(null!==(i=t.current.reconnectAttempts)&&void 0!==i?i:c.DEFAULT_RECONNECT_LIMIT)?s=window.setTimeout((function(){u.current++,o()}),null!==(l=t.current.reconnectInterval)&&void 0!==l?l:c.DEFAULT_RECONNECT_INTERVAL_MS):(t.current.onReconnectStop&&t.current.onReconnectStop(t.current.reconnectAttempts),console.warn("Max reconnect attempts of "+t.current.reconnectAttempts+" exceeded")))},function(){return s&&window.clearTimeout(s)}}(e,r,p,s,a),function(){p(c.ReadyState.CLOSING),f(),d(),e.close(),l&&clearInterval(l)}}},775:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.attachSharedListeners=void 0;var o=r(646),c=r(603),u=r(649),s=r(647);t.attachSharedListeners=function(e,t,r,a){var i;return r.current.fromSocketIO&&(i=s.setUpSocketIOPing(a)),function(e,t){e.onmessage=function(e){u.getSubscribers(t).forEach((function(t){t.optionsRef.current.onMessage&&t.optionsRef.current.onMessage(e),"function"===typeof t.optionsRef.current.filter&&!0!==t.optionsRef.current.filter(e)||t.setLastMessage(e)}))}}(e,t),function(e,t){e instanceof WebSocket&&(e.onclose=function(e){u.getSubscribers(t).forEach((function(t){t.optionsRef.current.onClose&&t.optionsRef.current.onClose(e),t.setReadyState(c.ReadyState.CLOSED)})),delete o.sharedWebSockets[t],u.getSubscribers(t).forEach((function(t){var r,n;if(t.optionsRef.current.shouldReconnect&&t.optionsRef.current.shouldReconnect(e)){var o=null!==(r=t.optionsRef.current.reconnectAttempts)&&void 0!==r?r:c.DEFAULT_RECONNECT_LIMIT;t.reconnectCount.current<o?setTimeout((function(){t.reconnectCount.current++,t.reconnect.current()}),null!==(n=t.optionsRef.current.reconnectInterval)&&void 0!==n?n:c.DEFAULT_RECONNECT_INTERVAL_MS):(t.optionsRef.current.onReconnectStop&&t.optionsRef.current.onReconnectStop(t.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of "+o+" exceeded"))}}))})}(e,t),function(e,t){e.onopen=function(e){u.getSubscribers(t).forEach((function(t){t.reconnectCount.current=0,t.optionsRef.current.onOpen&&t.optionsRef.current.onOpen(e),t.setReadyState(c.ReadyState.OPEN)}))}}(e,t),function(e,t){e.onerror=function(r){u.getSubscribers(t).forEach((function(t){t.optionsRef.current.onError&&t.optionsRef.current.onError(r),c.isEventSourceSupported&&e instanceof EventSource&&(t.optionsRef.current.onClose&&t.optionsRef.current.onClose(n(n({},r),{code:1006,reason:"An error occurred with the EventSource: "+r,wasClean:!1})),t.setReadyState(c.ReadyState.CLOSED))})),c.isEventSourceSupported&&e instanceof EventSource&&e.close()}}(e,t),function(){i&&clearInterval(i)}}},776:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,c){function u(e){try{a(n.next(e))}catch(t){c(t)}}function s(e){try{a(n.throw(e))}catch(t){c(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,s)}a((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,c,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(s){c=[6,s],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getUrl=void 0;var c=r(647);t.getUrl=function(e,t){return n(void 0,void 0,void 0,(function(){var r,n;return o(this,(function(o){switch(o.label){case 0:return"function"!==typeof e?[3,2]:[4,e()];case 1:return r=o.sent(),[3,3];case 2:r=e,o.label=3;case 3:return n=t.current.fromSocketIO?c.parseSocketIOUrl(r):r,[2,t.current.queryParams?c.appendQueryParams(n,t.current.queryParams):n]}}))}))}},777:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.websocketWrapper=void 0,t.websocketWrapper=function(e,t){return new Proxy(e,{get:function(e,r){var n=e[r];return"reconnect"===r?t:"function"===typeof n?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):n},set:function(e,t,r){return/^on/.test(t)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(e[t]=r,!0)}})},t.default=t.websocketWrapper},778:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.useSocketIO=void 0;var o=r(0),c=r(645),u=r(603),s={type:"empty",payload:null};t.useSocketIO=function(e,t,r){void 0===t&&(t=u.DEFAULT_OPTIONS),void 0===r&&(r=!0);var a=o.useMemo((function(){return n(n({},t),{fromSocketIO:!0})}),[]),i=c.useWebSocket(e,a,r),l=i.sendMessage,f=i.sendJsonMessage,d=i.lastMessage,S=i.readyState,p=i.getWebSocket,v=o.useMemo((function(){return function(e){if(!e||!e.data)return s;var t=e.data.match(/\[.*]/);if(!t)return s;var r=JSON.parse(t);return Array.isArray(r)&&r[1]?{type:r[0],payload:r[1]}:s}(d)}),[d]);return{sendMessage:l,sendJsonMessage:f,lastMessage:v,lastJsonMessage:v,readyState:S,getWebSocket:p}}},779:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.useEventSource=void 0;var c=r(0),u=r(645),s=r(603);t.useEventSource=function(e,t,r){void 0===t&&(t=s.DEFAULT_EVENT_SOURCE_OPTIONS),void 0===r&&(r=!0);var a=t.withCredentials,i=t.events,l=o(t,["withCredentials","events"]),f=n(n({},l),{eventSourceOptions:{withCredentials:a}}),d=c.useRef(s.EMPTY_EVENT_HANDLERS);i&&(d.current=i);var S=u.useWebSocket(e,f,r),p=S.lastMessage,v=S.readyState,b=S.getWebSocket;return c.useEffect((function(){(null===p||void 0===p?void 0:p.type)&&Object.entries(d.current).forEach((function(e){var t=e[0],r=e[1];t===p.type&&r(p)}))}),[p]),{lastEvent:p,readyState:v,getEventSource:b}}}}]);
//# sourceMappingURL=18.08b8bf2d.chunk.js.map