"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[686],{7686:(e,t,i)=>{i.r(t),i.d(t,{pageInherit:()=>c});var r=i(2981),a=i(1656),n=i(2085),o=i(1960),s=i(3082),p=i(6615),c=function(e,t,i){p.s.call(this,e,t,i)};r.x.extend(c.prototype,p.s.prototype),c.prototype.defaultOptions={pluginType:"uiplugin.pageInherit",pluginName:"pageInherit",userEvents:["onpageInheritload"],useConfig:!0,src:"",tagname:"div",mode:"async",scope:!1,initScript:"",postScript:"",scopeVariable:"",cloneVariable:"",scopeFunction:"$w",scopeExternal:!1,scopeValue:"",isWidget:!1,params:"",popupParam:"",initStyle:!1,preload:!1,strictFrame:!1},c.prototype.initialize=function(e){this.createFlag=!1,(e&&"w2:pageInherit"===e.getTagName()||!0===this.options.preload)&&(this.createFlag=!0),this.frameDoc=null,this.pageInheritScript=[],this.lazyImportsArr=[],this.childAllControlList=[],this.userComponentList=[],this.userPluginList=[],this.scope={},this.scopeLazyList=[],this.scopeVariable={},"true"===this.options.initScript&&"true"===a.v.getConfiguration("/WebSquare/pageInherit/initScript/@value")&&(this.options.initScript=a.v.getConfiguration("/WebSquare/pageInherit/initScript")),"true"===this.options.postScript&&"true"===a.v.getConfiguration("/WebSquare/pageInherit/postScript/@value")&&(this.options.postScript=a.v.getConfiguration("/WebSquare/pageInherit/postScript")),this.options.scope&&(""==this.options.scopeVariable&&(this.options.scopeVariable=a.v.getConfiguration("/WebSquare/spa/variable/@value")||""),""==this.options.cloneVariable&&(this.options.cloneVariable=a.v.getConfiguration("/WebSquare/spa/variable/@clone")||""),this.options.initScript&&(this.options.initScript=s.D.scopingFuncBody(this.options.initScript,this.id,!0)),this.options.postScript&&(this.options.postScript=s.D.scopingFuncBody(this.options.postScript,this.id,!0))),this.makeScopeVariable(),this.options.params&&this.parseParameter(),this._ispageInheritPopup=!1,this._scriptLazy=!1,this._clearExecuteStatus()},c.prototype.toHTML=function(){try{var e=[],t=this.options.tagname,i=""==this.options.style?"":"style='"+this.options.style+"'",r=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";if(a.v.browserCheck.ie){var o=a.v.browserVersion();"6"!=o&&"7"!=o&&"8"!=o||WebSquare.uiplugin.pageInherit.html5[t]&&(t=WebSquare.uiplugin.pageInherit.html5[t])}if(e.push("<"+t+" id='"+this.id+"' "+i+" class='w2pageInherit "+this.options.className+"' "+r+">"),this.createFlag)for(var s=this.getChildren(),p=0;p<s.length;p++)e.push(s[p].toHTML());return e.push("</"+t+">"),e.join("")}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.setChildAction=function(e){try{var t=this.childControlList[0];if(!t)return;t.preActivate();var i=[];for(var r in WebSquare.DataCollection.activated=!0,WebSquare.DataCollection.comp){var s=WebSquare.DataCollection.comp[r];s&&s.parentFrame===this.uuid&&(s.activate(),i.push(s.uuid))}WebSquare.uiplugin.pageInherit._increasePendingpageInheritCount(),WebSquare.uiplugin.pageInherit._addpageInheritPreorder(this.uuid),t.activate(),WebSquare.uiplugin.pageInherit._decreasePendingpageInheritCount(),WebSquare.uiplugin.pageInherit._addpageInheritPostorder(this.uuid),t.render=null,t.onComplete();for(var p=0;p<i.length;p++)WebSquare.idCache[i[p]].completed||WebSquare.idCache[i[p]].onComplete();var c=this.getSrc();if("executed"===WebSquare.scriptSectionExcuteFlag)!0===a.v.scriptPrecedence?(WebSquare.uiplugin.pageInherit._execute("script"),WebSquare.uiplugin.pageInherit._execute("onpageload"),WebSquare.uiplugin.pageInherit._execute("postscript",{order:"postorder"})):(WebSquare.uiplugin.pageInherit._execute("script",{order:"postorder",reverse:!0}),WebSquare.uiplugin.pageInherit._execute("onpageload",{order:"postorder"})),WebSquare.uiplugin.pageInherit._execute("lazyscript"),
WebSquare.uiplugin.pageInherit._isPending()||WebSquare.uiplugin.pageInherit._clearPending();else if(!0!==a.v.scriptPrecedence)for(p=0;p<this.childControlList.length;p++)o.B.fireEvent(this.childControlList[p],"onpageload",c);o.B.fireEvent(this,"onpageInheritload",c)}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.setAction=function(){try{if(this.options.initStyle){var e=document.getElementById(this.id).style.cssText,t=document.getElementById(this.id).getAttribute("class");WebSquare.initStyle[this.id]={style:e,className:t}}if(this.options.isWidget)return;this.createFlag?this.setChildAction():this.setSrc(this.options.src)}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.makeFrame=async function(e){try{var t,i,r=this.getSrc();if(r&&(t=await WebSquare.jsLoader._loadObj(this.getURL(r),null)),t)r&&(i=WebSquare.jsLoader.getPageType(r)),this.frameDoc=WebSquare.jsLoader.getPageInfo(t,i),this.frameDoc.renderStartTime=new Date,await this.frameDoc.parsingPageInheritBefore(!0,this),this.appendModels(this.frameDoc.models,null,{appendModel:!this.options.scope||"scope"}),this.renderBody(e),this.appendSubmission(this.frameDoc.models),await this.frameDoc.parsingPageInheritAfter(!0,this)}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.initAsync=async function(){return await this.makeFrame()},c.prototype.appendModels=function(e,t,i){try{if("replace"==(i=i||{}).appendModel)return void this.replaceModels(e);if("scope"==i.appendModel)return void this.scopeModels(e,t,i);var r=WebSquare.ModelUtil.getModelByID(t);if(r)for(var a=0;a<e.length;a++){if(i.appendModel)for(var o=r.instances[0].document,s=e[a].instances[0].document.childNodes,p=0;p<s.length;p++)o.appendChild(s[p].cloneNode(!0));r.binds=r.binds.concat(e[a].binds)}}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.appendSubmission=function(e){try{if(WebSquare.ModelUtil.getModelByID())for(var t=0;t<e.length;t++){for(WebSquare.pageInheritSubmissionList.length<=t&&WebSquare.pageInheritSubmissionList.push(new Array);e[t].submissions.length>0;)WebSquare.pageInheritSubmissionList[t].push(e[t].submissions.pop());for(;e[t].workflows.length>0;)WebSquare.pageInheritworkflowsList[t].push(e[t].workflows.pop())}}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.replaceModels=function(e){try{WebSquare.WebSquaredoc.models.splice(0,WebSquare.WebSquaredoc.models.length),WebSquare.WebSquaredoc.models=WebSquare.WebSquaredoc.models.concat(e)}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.scopeModels=function(e,t,i){try{var r=WebSquare.ModelUtil.getModelByID(t);if(r&&"scope"==i.appendModel)for(var a=0;a<e.length;a++){for(var o=r.instances[0].xmlNode.parentNode,s=e[a].instances,p=0,c=s.length;p<c;p++){for(var u=s[p].xmlNode.cloneNode(!0),l=u.firstChild;null!=l&&1!=l.nodeType;l=l.nextSibling);var h=new WebSquare.Model.Instance(u,l,null);h.scope_id=this.id;var g=h.xmlNode;g.setAttribute("scopeId",this.id),r.instances.push(h),o.appendChild(g)}r.binds=r.binds.concat(e[a].binds)}}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.onComplete=function(){try{if(null!=this.frame_dc_list){for(var e=0;e<this.frame_dc_list.length;e++)WebSquare.idCache[this.frame_dc_list[e]].completed||WebSquare.idCache[this.frame_dc_list[e]].onComplete();delete this.frame_dc_list}p.s.prototype.onComplete.call(this)}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.renderBody=function(e){var t,i,r,n=[],o=this.frameDoc.getType();return"json"===o?(n=WebSquare.jsonUtil.getNodesByTagName(this.frameDoc.getPageInfo(),"body"),t=WebSquare.jsonUtil.getAttribute(n[0],"class")):t=(n=WebSquare.xml.getElementsByTagName(this.frameDoc.getPageInfo(),"body",a.v._XML_NAMESPACE.XHTML))[0].getAttribute("class"),t&&this.addClass(t),WebSquare.cssManager.startCache(),this.options.scope?r=this:WebSquare.strictModeFrame&&(r=WebSquare.strictModeFrame),i="json"===o?WebSquare.controlFactory.createByJSON(null,null,n[0],r,this.uuid):WebSquare.controlFactory.create(null,null,n[0],r,this.uuid),
WebSquare.cssManager.endCache(),this.childControlList.push(i),this.render&&(i.domStatus="new"),i&&(i.parentControl=this,i.options&&i.options.firstTabID&&!this.options.firstTabID&&(this.options.firstTabID=i.options.firstTabID)),this.options.scope&&(this.makeScope(this),this.makeLazyScopeVariable()),i&&e&&this._lazyActivation(),!!i},c.prototype.lazyActivation=function(){try{if(!this.render)return;var e=this.childControlList[0];this.render.innerHTML=e.toHTML(),"sync"===this.options.mode?this.setChildAction({preExecuted:!0}):s.D.setTimeout(this.setChildAction,{key:this.id+"_setChildAction",caller:this,delay:1,args:[{preExecuted:!0}]})}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype._lazyActivation=function(){try{if(a.v.executePointScript(4),WebSquare.externalScriptArr.length>0)if("sync"!==this.options.mode){var e=this.uuid;WebSquare.externalScriptArr.push((function(){try{WebSquare.idCache[e].lazyActivation()}catch(e){n.w.printStackTrace(e)}})),s.D.js.apply(null,WebSquare.externalScriptArr)}else{for(var t=0;t<WebSquare.externalScriptArr.length;t++)WebSquare.BootLoader.globalEval(a.v.load(WebSquare.externalScriptArr[t]));this.lazyActivation()}else this.lazyActivation();WebSquare.externalScriptArr=[]}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype._clearExecuteStatus=function(){try{this._executeStatus={script:!1,onpageload:!1,postscript:!1,lazyscript:!1,onpageInheritload:!1}}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.getSrc=function(){try{return this._getMsaSrc()}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype._getMsaSrc=function(e){try{var t=this.options.src;return""==t?"":a.v.getPageURL(t,{skipURL:!0,skipUri:!0,msaName:e||this._getMsaName()})}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype._getMsaName=function(){try{if(this.options.msaName)return this.options.msaName;if(this.scope_obj)return this.scope_obj._getMsaName()}catch(e){n.w.printStackTrace(e,null,this)}},c._increasePendingpageInheritCount=function(){try{WebSquare.uiplugin.pageInherit.__pendingpageInheritCount<0&&(WebSquare.uiplugin.pageInherit.__pendingpageInheritCount=0),WebSquare.uiplugin.pageInherit.__pendingpageInheritCount++}catch(e){n.w.printStackTrace(e,null,this)}},c._decreasePendingpageInheritCount=function(){try{WebSquare.uiplugin.pageInherit.__pendingpageInheritCount--,WebSquare.uiplugin.pageInherit.__pendingpageInheritCount<=0&&(WebSquare.uiplugin.pageInherit.__pendingpageInheritCount=0)}catch(e){n.w.printStackTrace(e,null,this)}},c._isPending=function(){return WebSquare.uiplugin.pageInherit.__pendingpageInheritCount>0},c._addpageInheritPreorder=function(e){try{WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.push(e)}catch(e){n.w.printStackTrace(e,null,this)}},c._addpageInheritPostorder=function(e){try{WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.push(e)}catch(e){n.w.printStackTrace(e,null,this)}},c._execute=function(e,t){try{if(void 0!==t&&null!=t||(t={}),WebSquare.uiplugin.pageInherit._isPending())return;var i="postorder"===t.order?WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.slice(0):WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.slice(0);if(i.length<=0)return;switch(!0===t.reverse&&i.reverse(),e){case"script":for(var r="",a=0;a<i.length;a++){!0!==(u=WebSquare.idCache[i[a]])._executeStatus.script&&(u._executeStatus.script=!0,u.frameDoc&&"string"==typeof u.frameDoc.scriptSection&&u.frameDoc.scriptSection&&(r+=WebSquare.scriptIdentifier+u.getURL(u.getSrc())+'";',r+=u.frameDoc.scriptSection))}"executed"===WebSquare.scriptSectionExcuteFlag||!0===t.preExecuted?WebSquare.BootLoader.globalEval(r):WebSquare.scriptSection+=r;break;case"onpageload":for(a=0;a<i.length;a++){if(!0!==(u=WebSquare.idCache[i[a]])._executeStatus.onpageload){u._executeStatus.onpageload=!0;for(var p=0;p<u.childControlList.length;p++)o.B.fireEvent(u.childControlList[p],"onpageload",u.getSrc())}}break;case"postscript":for(r="",a=0;a<i.length;a++){
!0!==(u=WebSquare.idCache[i[a]])._executeStatus.postscript&&(u._executeStatus.postscript=!0,u.frameDoc&&"string"==typeof u.options.postScript&&u.options.postScript&&(r+=WebSquare.scriptIdentifier+u.getURL(u.getSrc())+'";',r+=u.options.postScript))}WebSquare.BootLoader.globalEval(r);break;case"lazyscript":var c=[];for(a=0;a<i.length;a++){!0!==(u=WebSquare.idCache[i[a]])._executeStatus.lazyscript&&(u._executeStatus.lazyscript=!0,u.frameDoc&&u.lazyImportsArr&&u.lazyImportsArr.length>0&&(c=c.concat(u.lazyImportsArr),u.lazyImportsArr=[]))}c.length>0&&"executed"===WebSquare.scriptSectionExcuteFlag&&s.D.js.apply(null,c);break;case"onpageInheritload":for(a=0;a<i.length;a++){var u;!0!==(u=WebSquare.idCache[i[a]])._executeStatus.onpageInheritload&&(u._executeStatus.onpageInheritload=!0,o.B.fireEvent(u,"onpageInheritload",u.getSrc()))}}}catch(e){n.w.printStackTrace(e,null,this)}},c._clearPending=function(e){try{void 0!==e&&null!=e||(e={});for(var t={pendingpageInheritCount:WebSquare.uiplugin.pageInherit.__pendingpageInheritCount,pendingpageInheritPreOrderList:WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.slice(0),pendingpageInheritPostOrderList:WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.slice(0)};WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.length>0;){(i=WebSquare.idCache[WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.pop()])&&!0!==e.keepStatus&&i._clearExecuteStatus()}for(;WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.length>0;){var i;(i=WebSquare.idCache[WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.pop()])&&!0!==e.keepStatus&&i._clearExecuteStatus()}return WebSquare.uiplugin.pageInherit.__pendingpageInheritCount=0,t}catch(e){n.w.printStackTrace(e,null,this)}},c._setPending=function(e){try{WebSquare.uiplugin.pageInherit.__pendingpageInheritCount=e.pendingpageInheritCount,WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList=e.pendingpageInheritPreOrderList.slice(0),WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList=e.pendingpageInheritPostOrderList.slice(0)}catch(e){n.w.printStackTrace(e,null,this)}},c.appendModel=function(e,t){try{var i=WebSquare.ModelUtil.getModelByID();if(i)for(var r=0;r<e.length;r++)for(var a=e[r];a.length>0;){var o=a.pop();o.parentElement=i.element,o[t].push(o)}}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.getWindow=function(){try{return this.options.scope?this.scope:window}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.makeScopeVariable=function(){try{var e=0;if(this.options.scope&&this.options.scopeVariable)for(var t=this.options.scopeVariable.split(","),i=0;i<t.length;i++){var r=t[i].wq_trim(),a=e>0?String(e):"";e++,this._makeScopeVariable(r,WebSquare.noConflictFunction+a)}if(this.options.scope&&this.options.cloneVariable)for(t=this.options.cloneVariable.split(","),i=0;i<t.length;i++){var o=t[i].wq_trim();a=e>0?String(e):"";e++,this._makeScopeVariable(o,WebSquare.noConflictFunction+a,!0)}}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype._makeScopeVariable=function(e,t,i){try{if(this.scopeVariable[e]={},i&&"object"==typeof window[e]&&null!=window[e]){({})[WebSquare.noConflict]=!0,this.scopeVariable[e]=a.v._copyCommon(e,this)}if(this.scope[e]=this.scopeVariable[e],window[this.id+"_"+e]=this.scopeVariable[e],this.options.scopeFunction){this.scopeVariable[e][this.options.scopeFunction]=new WebSquare.uiplugin.pageInherit.scope(this.uuid);var o=this.scopeVariable[e][this.options.scopeFunction];for(var s in WebSquare.api)"data"!==s&&"comp"!==s&&null==o[s]&&(o[s]=WebSquare.api[s]);for(var p in o.data=new WebSquare.uiplugin.pageInherit.scope.data(this.id),o.model=new WebSquare.uiplugin.pageInherit.scope.model(this.id),o.bigDecimal=new WebSquare.uiplugin.pageInherit.scope.bigDecimal(this.id),o.bigDecimal._scopeId=this.id,o.id=this.id+"_",WebSquare.api.data)null==o.data[p]&&"function"==typeof WebSquare.api.data&&(o.data[p]=WebSquare.api.data[p])
;this.options.scopeFunction!==WebSquare.noConflict&&null!=window[e]&&null==window[e][this.options.scopeFunction]&&r.x.extend(window[e][this.options.scopeFunction],WebSquare.api),t&&(this.scope[t]=this.scopeVariable[e][this.options.scopeFunction])}}catch(e){n.w.printStackTrace(e,null,this)}},c.prototype.makeLazyScopeVariable=function(){try{if(this.options.scope&&this.options.scopeVariable){var e=this.options.scopeVariable;this.options.cloneVariable&&(e+=","+this.options.cloneVariable);for(var t=e.split(","),i=0;i<t.length;i++)for(var r=t[i].wq_trim(),a=i>0?String(i):"",o=WebSquare.noConflictFunction+a,s=0;s<this.scopeLazyList.length;s++)WebSquare.idCache[this.scopeLazyList[s]].scope[r]=this.scopeVariable[r],WebSquare.idCache[this.scopeLazyList[s]].scope[o]=this.scopeVariable[r][this.options.scopeFunction]}}catch(e){n.w.printStackTrace(e,null,this)}},c.__pendingpageInheritCount=0,c.__pendingpageInheritPreOrderList=[],c.__pendingpageInheritPostOrderList=[]}}]);