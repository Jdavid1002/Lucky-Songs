/*! For license information please see 14.8c2d6cde.chunk.js.LICENSE.txt */
(this["webpackJsonpplay-music"]=this["webpackJsonpplay-music"]||[]).push([[14],{279:function(t,e,i){"use strict";i.r(e);i(75)},75:function(t,e,i){"use strict";var r,s=i(2),n=(i(52),i(0)),o=i(3),a=i(7),c=i(10),u=function(){function t(t,e,i,r){this.client=t,this.storage=e,this.storageCache=i,this.logger=r}return t.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var i=Date.now()-e,r=i<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+i+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+r+"."),r},t.prototype.fetch=function(t){return Object(n.__awaiter)(this,void 0,void 0,(function(){var e,i,r,s,o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=n.sent(),i=e[0],(r=e[1])&&this.isCachedDataFresh(t.cacheMaxAgeMillis,i)?[2,r]:(t.eTag=r&&r.eTag,[4,this.client.fetch(t)]);case 2:return s=n.sent(),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===s.status&&o.push(this.storage.setLastSuccessfulFetchResponse(s)),[4,Promise.all(o)];case 3:return n.sent(),[2,s]}}))}))},t}(),h=((r={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",r["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",r["registration-api-key"]="Undefined API key. Check Firebase app initialization.",r["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",r["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",r["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",r["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",r["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",r["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",r["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',r["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',r["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",r["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",r),l=new o.ErrorFactory("remoteconfig","Remote Config",h);var g=function(){function t(t,e,i,r,s,n){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=i,this.projectId=r,this.apiKey=s,this.appId=n}return t.prototype.fetch=function(t){return Object(n.__awaiter)(this,void 0,void 0,(function(){var e,i,r,s,o,a,c,u,h,g,f,p,d,m,_,v,b,w,y;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=n.sent(),i=e[0],r=e[1],s=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=s+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,a={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:i,app_instance_id_token:r,app_id:this.appId,language_code:(void 0===C&&(C=navigator),C.languages&&C.languages[0]||C.language)},u={method:"POST",headers:a,body:JSON.stringify(c)},h=fetch(o,u),g=new Promise((function(e,i){t.signal.addEventListener((function(){var t=new Error("The operation was aborted.");t.name="AbortError",i(t)}))})),n.label=2;case 2:return n.trys.push([2,5,,6]),[4,Promise.race([h,g])];case 3:return n.sent(),[4,h];case 4:return f=n.sent(),[3,6];case 5:throw p=n.sent(),d="fetch-client-network","AbortError"===p.name&&(d="fetch-timeout"),l.create(d,{originalErrorMessage:p.message});case 6:if(m=f.status,_=f.headers.get("ETag")||void 0,200!==f.status)return[3,11];w=void 0,n.label=7;case 7:return n.trys.push([7,9,,10]),[4,f.json()];case 8:return w=n.sent(),[3,10];case 9:throw y=n.sent(),l.create("fetch-client-parse",{originalErrorMessage:y.message});case 10:v=w.entries,b=w.state,n.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===b?m=500:"NO_CHANGE"===b?m=304:"NO_TEMPLATE"!==b&&"EMPTY_CONFIG"!==b||(v={}),304!==m&&200!==m)throw l.create("fetch-status",{httpStatus:m});return[2,{status:m,eTag:_,config:v}]}var C}))}))},t}(),f=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach((function(t){return t()}))},t}(),p=["1","true","t","yes","y","on"],d=function(){function t(t,e){void 0===e&&(e=""),this._source=t,this._value=e}return t.prototype.asString=function(){return this._value},t.prototype.asBoolean=function(){return"static"!==this._source&&p.indexOf(this._value.toLowerCase())>=0},t.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},t.prototype.getSource=function(){return this._source},t}(),m=function(){function t(t,e,i,r,s){this.app=t,this._client=e,this._storageCache=i,this._storage=r,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}return t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=a.LogLevel.DEBUG;break;case"silent":this._logger.logLevel=a.LogLevel.SILENT;break;default:this._logger.logLevel=a.LogLevel.ERROR}},Object.defineProperty(t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!1,configurable:!0}),t.prototype.activate=function(){return Object(n.__awaiter)(this,void 0,void 0,(function(){var t,e,i;return Object(n.__generator)(this,(function(r){switch(r.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return t=r.sent(),e=t[0],i=t[1],e&&e.config&&e.eTag&&e.eTag!==i?[4,Promise.all([this._storageCache.setActiveConfig(e.config),this._storage.setActiveConfigEtag(e.eTag)])]:[2,!1];case 2:return r.sent(),[2,!0]}}))}))},t.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then((function(){t._isInitializationComplete=!0}))),this._initializePromise},t.prototype.fetch=function(){return Object(n.__awaiter)(this,void 0,void 0,(function(){var t,e,i,r=this;return Object(n.__generator)(this,(function(s){switch(s.label){case 0:t=new f,setTimeout((function(){return Object(n.__awaiter)(r,void 0,void 0,(function(){return Object(n.__generator)(this,(function(e){return t.abort(),[2]}))}))}),this.settings.fetchTimeoutMillis),s.label=1;case 1:return s.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:t})];case 2:return s.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return s.sent(),[3,6];case 4:return e=s.sent(),c="fetch-throttle",i=(a=e)instanceof o.FirebaseError&&-1!==a.code.indexOf(c)?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(i)];case 5:throw s.sent(),e;case 6:return[2]}var a,c}))}))},t.prototype.fetchAndActivate=function(){return Object(n.__awaiter)(this,void 0,void 0,(function(){return Object(n.__generator)(this,(function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}}))}))},t.prototype.getAll=function(){var t=this;return function(t,e){void 0===t&&(t={});void 0===e&&(e={});return Object.keys(Object(n.__assign)(Object(n.__assign)({},t),e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce((function(e,i){return e[i]=t.getValue(i),e}),{})},t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},t.prototype.getString=function(t){return this.getValue(t).asString()},t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new d("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new d("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new d("static"))},t}();function _(t,e){var i=t.target.error||void 0;return l.create(e,{originalErrorMessage:i&&i.message})}var v="app_namespace_store";var b=function(){function t(t,e,i,r){void 0===r&&(r=new Promise((function(t,e){var i=indexedDB.open("firebase_remote_config",1);i.onerror=function(t){e(_(t,"storage-open"))},i.onsuccess=function(e){t(e.target.result)},i.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(v,{keyPath:"compositeKey"})}}}))),this.appId=t,this.appName=e,this.namespace=i,this.openDbPromise=r}return t.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},t.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},t.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},t.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},t.prototype.getActiveConfig=function(){return this.get("active_config")},t.prototype.setActiveConfig=function(t){return this.set("active_config",t)},t.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},t.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},t.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},t.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},t.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},t.prototype.get=function(t){return Object(n.__awaiter)(this,void 0,void 0,(function(){var e,i=this;return Object(n.__generator)(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return e=r.sent(),[2,new Promise((function(r,s){var n=e.transaction([v],"readonly").objectStore(v),o=i.createCompositeKey(t);try{var a=n.get(o);a.onerror=function(t){s(_(t,"storage-get"))},a.onsuccess=function(t){var e=t.target.result;r(e?e.value:void 0)}}catch(c){s(l.create("storage-get",{originalErrorMessage:c&&c.message}))}}))]}}))}))},t.prototype.set=function(t,e){return Object(n.__awaiter)(this,void 0,void 0,(function(){var i,r=this;return Object(n.__generator)(this,(function(s){switch(s.label){case 0:return[4,this.openDbPromise];case 1:return i=s.sent(),[2,new Promise((function(s,n){var o=i.transaction([v],"readwrite").objectStore(v),a=r.createCompositeKey(t);try{var c=o.put({compositeKey:a,value:e});c.onerror=function(t){n(_(t,"storage-set"))},c.onsuccess=function(){s()}}catch(u){n(l.create("storage-set",{originalErrorMessage:u&&u.message}))}}))]}}))}))},t.prototype.delete=function(t){return Object(n.__awaiter)(this,void 0,void 0,(function(){var e,i=this;return Object(n.__generator)(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return e=r.sent(),[2,new Promise((function(r,s){var n=e.transaction([v],"readwrite").objectStore(v),o=i.createCompositeKey(t);try{var a=n.delete(o);a.onerror=function(t){s(_(t,"storage-delete"))},a.onsuccess=function(){r()}}catch(c){s(l.create("storage-delete",{originalErrorMessage:c&&c.message}))}}))]}}))}))},t.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},t}(),w=function(){function t(t){this.storage=t}return t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},t.prototype.getActiveConfig=function(){return this.activeConfig},t.prototype.loadFromStorage=function(){return Object(n.__awaiter)(this,void 0,void 0,(function(){var t,e,i,r,s,o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),i=this.storage.getActiveConfig(),[4,t];case 1:return(r=n.sent())&&(this.lastFetchStatus=r),[4,e];case 2:return(s=n.sent())&&(this.lastSuccessfulFetchTimestampMillis=s),[4,i];case 3:return(o=n.sent())&&(this.activeConfig=o),[2]}}))}))},t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},t}();function y(t,e){return new Promise((function(i,r){var s=Math.max(e-Date.now(),0),n=setTimeout(i,s);t.addEventListener((function(){clearTimeout(n),r(l.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}var C,T=function(){function t(t,e){this.client=t,this.storage=e}return t.prototype.fetch=function(t){return Object(n.__awaiter)(this,void 0,void 0,(function(){var e;return Object(n.__generator)(this,(function(i){switch(i.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=i.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(t,e)]}}))}))},t.prototype.attemptFetch=function(t,e){var i=e.throttleEndTimeMillis,r=e.backoffCount;return Object(n.__awaiter)(this,void 0,void 0,(function(){var e,s,a;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return[4,y(t.signal,i)];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,5,,7]),[4,this.client.fetch(t)];case 3:return e=n.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return n.sent(),[2,e];case 5:if(!function(t){if(!(t instanceof o.FirebaseError)||!t.customData)return!1;var e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(s=n.sent()))throw s;return a={throttleEndTimeMillis:Date.now()+Object(o.calculateBackoffMillis)(r),backoffCount:r+1},[4,this.storage.setThrottleMetadata(a)];case 6:return n.sent(),[2,this.attemptFetch(t,a)];case 7:return[2]}}))}))},t}(),S="@firebase/remote-config";(C=s.default).INTERNAL.registerComponent(new c.Component("remoteConfig",(function(t,e){var i=e.instanceIdentifier,r=t.getProvider("app").getImmediate(),s=t.getProvider("installations").getImmediate();if("undefined"===typeof window)throw l.create("registration-window");var n=r.options,o=n.projectId,c=n.apiKey,h=n.appId;if(!o)throw l.create("registration-project-id");if(!c)throw l.create("registration-api-key");if(!h)throw l.create("registration-app-id");i=i||"firebase";var f=new b(h,r.name,i),p=new w(f),d=new a.Logger(S);d.logLevel=a.LogLevel.ERROR;var _=new g(s,C.SDK_VERSION,i,o,c,h),v=new T(_,f),y=new u(v,f,p,d),E=new m(r,y,p,f,d);return E.ensureInitialized(),E}),"PUBLIC").setMultipleInstances(!0)),C.registerVersion(S,"0.1.41")}}]);
//# sourceMappingURL=14.8c2d6cde.chunk.js.map