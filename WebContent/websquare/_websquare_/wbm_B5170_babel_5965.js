"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[5965],{5965:function(t,e,i){i.r(e),i.d(e,{floatingLayer:function(){return d}});var s=i(9122),o=i(7827),r=i(1160),n=i(5841),a=i(8754),l=i(5316),d=function(t,e,i){l.s.call(this,t,e,i)};s.x.extend(d.prototype,l.s.prototype),d.prototype.defaultOptions={pluginType:"uiplugin.floatingLayer",pluginName:"floatingLayer",parseChild:!0,userEvents:["onclose","onlayermove","onlayerclick","onbeforeclose","onlayerresize"],useConfig:!0,bodyComplex:!0,dragAlwaysView:!1,title:"",titleClass:"",useResizeDrag:!1,modal:!1,closeButtonSrc:"",closeButtonClass:"",headerLeftClass:"",headerCenterClass:"",headerRightClass:"",bodyLeftClass:"",bodyCenterClass:"",bodyRightClass:"",bodyLeftBottomClass:"",bodyBottomClass:"",bodyRightBottomClass:"",useModal:!1,useModalStack:"",frameModal:"",useAnchor:!1,dragAutoPosition:!1,movable:!0,documentTitle:!0,closeTitle:"close",ghostLayer:!1,headerHTML:"",dragResizable:!1,fixed:!1,useCloseButton:!0,useLocale:!1,localeRef:"",accessibility:!1},d.prototype.initialize=function(t){try{this.zIndex=0,""==this.options.useModalStack&&(this.options.useModalStack=o.v.getConfiguration("/WebSquare/floatingLayer/@useModalStack")),this.modalStack=0}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.toHTML=function(){try{var t,e=[],i=this.options.title;1==this.options.useLocale&&""!=this.options.localeRef&&(i=this.getLocaleValue(this.options.localeRef)),t=i?"title='"+i.wq_replaceAll("'","&#39;")+"'":"";var s=""==this.options.style?"":"style='"+this.options.style+"'",o=""==this.options.tabIndex?"tabindex='0'":"tabIndex='"+this.options.tabIndex+"'";if(1==this.options.accessibility){e.push("<div id='"+this.id+"' "+s+" class='w2floatingLayer w2floatingLayer_group "+this.options.className+"' role='dialog' aria-modal='true' aria-labelledby='"+this.options.id+"_title' aria-describedby='"+this.options.id+"_contents'>"),e.push("<div class=''>"),e.push("<div class='w2floatingLayer_dragArea'>"),e.push("<div class='w2floatingLayer_header'>"),e.push("<h2 id='"+this.options.id+"_title' class='w2floatingLayer_div_title'>"+i+"</h2>"),e.push("</div>"),e.push("</div>"),e.push("<div id='"+this.options.id+"_contents' class='w2floatingLayer_contents w2floatingLayer_div_contents'>");for(var n=this.getChildren(),l=0;l<n.length;l++)e.push(n[l].toHTML());e.push("</div>"),e.push("<input id='"+this.id+"_closeButton' type='button' class='w2floatingLayer_header_close_button' value='"+this.options.closeTitle+"'>"),e.push("</div>")}else{if(e.push("<div role='application' id='"+this.id+"' "+s+" class='w2floatingLayer "+this.options.className+"' "+o+">"),e.push("<table class='w2floatingLayer_table'>"),e.push("<tr class='w2floatingLayer_dragArea'>"),e.push("<td class='w2floatingLayer_topleft "+this.options.headerLeftClass+"'></td>"),e.push("<td id='"+this.id+"_headerHTML' class='w2floatingLayer_topcenter "+this.options.headerCenterClass+"' "+t+" >"),this.options.headerHTML){var d=this.options.headerHTML;try{var h=a.D.getGlobalFunction(this.options.headerHTML,this.scope_id);d="function"==typeof h?h():h}catch(t){d=this.options.headerHTML}e.push(d)}else e.push("<div id='"+this.id+"_titleDiv' class='w2floatingLayer_title "+this.options.titleClass+"' >"+i+"</div>"),a.D.getBoolean(this.options.useATagBtn)?e.push("<a id='"+this.id+"_closeButton' class='w2floatingLayer_close_button "+this.options.closeButtonClass+"' "+o+"' href='javascript:void(null);' title='"+this.options.closeTitle+"' ></a></div>"):e.push("<div id='"+this.id+"_closeButton' class='w2floatingLayer_close_button "+this.options.closeButtonClass+"' "+o+" title='"+this.options.closeTitle+"' ></div>");if(e.push("</td>"),e.push("<td class='w2floatingLayer_topright "+this.options.headerRightClass+"'></td>"),e.push("</tr>"),a.D.getBoolean(this.options.fullContentArea)){e.push("<tr>"),e.push("<td class='w2floatingLayer_fullContentArea' colSpan=3>"),
e.push("<div id='"+this.id+"_contents' class='w2floatingLayer_contents "+this.options.bodyCenterClass+"'>"),e.push("<div id='"+this.id+"_innerLink' class='w2floatingLayer_innerLink' tabIndex='0'>"+i+"</div>");for(n=this.getChildren(),l=0;l<n.length;l++)e.push(n[l].toHTML());e.push("</div>"),e.push("</td>"),e.push("</tr>")}else{e.push("<tr>"),e.push("<td class='w2floatingLayer_dragArea w2floatingLayer_centerleft "+this.options.bodyLeftClass+"'></td>"),e.push("<td class='w2floatingLayer_centercenter'>"),e.push("<div id='"+this.id+"_contents' class='w2floatingLayer_contents "+this.options.bodyCenterClass+"'>"),e.push("<div id='"+this.id+"_innerLink' class='w2floatingLayer_innerLink' "+o+">"+i+"</div>");for(n=this.getChildren(),l=0;l<n.length;l++)e.push(n[l].toHTML());e.push("</div>"),e.push("</td>"),e.push("<td class='w2floatingLayer_dragArea w2floatingLayer_centerright "+this.options.bodyRightClass+"'></td>"),e.push("</tr>"),e.push("<tr class='w2floatingLayer_dragArea'>"),e.push("<td class='w2floatingLayer_bottomleft "+this.options.bodyLeftBottomClass+"'></td>"),e.push("<td class='w2floatingLayer_bottomcenter "+this.options.bodyBottomClass+"'></td>"),e.push("<td class='w2floatingLayer_bottomright "+this.options.bodyRightBottomClass+"'></td>"),e.push("</tr>")}e.push("</table>")}return this.options.dragResizable&&(e.push("<div id='"+this.id+"_resize' class='w2floatingLayer_resize_right'></div>"),e.push("<div id='"+this.id+"_resize' class='w2floatingLayer_resize'></div>"),e.push("<div id='"+this.id+"_resize' class='w2floatingLayer_resize_bottom'></div>")),e.push("</div>"),e.join("")}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.setPreAction=function(){try{if(this.dom.contents=this.getElementById(this.id+"_contents"),this.dom.closeButton=this.getElementById(this.id+"_closeButton"),1==this.options.useModal){var t=a.D.getStyleProperty(this.render,"z-index");t&&"auto"!=t||(t=4500),this.render.style.zIndex=t,this.zIndex=t}}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.setAction=function(){try{if(this.dom.contents=this.getElementById(this.id+"_contents"),this.dom.closeButton=this.getElementById(this.id+"_closeButton"),1==this.options.useModal){var t=a.D.getStyleProperty(this.render,"z-index");a.D.getStyleProperty(this.render,"z-index")&&"auto"!=t||(this.render.style.zIndex=4500)}if(this.resetContentSize(),a.D.isTouchDevice()&&this.event.addListener(this.render,"ontouchstart",this.event.bindAsEventListener(this,this.handleMousedownEvent)),this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleMousedownEvent)),this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,this.handleClickEvent)),this.event.addListener(this.render,"onselectstart",this.event.bindAsEventListener(this,this.handleSelectStart)),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent)),this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseOverEvent)),this.event.addListener(this.render,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseOutEvent)),this.render.offsetWidth>0&&this.render.offsetHeight>0&&this.options.useModal&&this.showModal(),0==this.options.useCloseButton){var e=this.getElementById(this.id+"_closeButton");e&&(e.style.display="none")}}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.handleKeydownEvent=function(t){try{var e=t.charCode?t.charCode:t.keyCode;if(1==this.options.accessibility){if(27==e)this.hide(),n.B.fireEvent(this,"onclose");else if(t.shiftKey&&9==e){if((l=a.D._getTabbableComp(this.render)).length>=1&&t.target==l[0]&&this.dom.closeButton)return this.dom.closeButton.focus(),void n.B.preventDefault(t)}for(var i=this.event.getTargetIterator(t,this.render);i.next();)if(i.match("w2floatingLayer_close_button")||i.match("w2floatingLayer_header_close_button"))if(13==e||32==e)this.handleClickEvent(t);else if(t.shiftKey||9!=e){
if(1==this.options.movable&&(38==e||40==e||37==e||39==e)){var s=this.getAbsolutePosition("left",this.render),o=this.getAbsolutePosition("top",this.render);38==e?(o-=1,s=null):40==e?(o+=1,s=null):37==e?(s-=1,o=null):39==e&&(s+=1,o=null),(null!=s&&s>0||null!=o&&o>0)&&this.setPosition(s,o)}}else{var l;if((l=a.D._getTabbableComp(this.render)).length>=1)l[0].focus(),n.B.preventDefault(t);else if(this.dom.closeButton)return void this.dom.closeButton.focus()}return void(i=null)}if(13!=e)return;this.handleClickEvent(t)}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.focus=function(){try{this.render.focus()}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.handleClickEvent=function(t){try{n.B.fireEvent(this,"onlayerclick"),n.B.stopPropagation(t);for(var e=this.event.getTargetIterator(t,this.render);e.next();)if(e.match("w2floatingLayer_close_button")||e.match("w2floatingLayer_header_close_button")){if(!1===n.B.fireEvent(this,"onbeforeclose"))break;this.hide(),this.options.useModal,n.B.fireEvent(this,"onclose")}e=null}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.handleMousedownEvent=function(t){try{if(!this.options.movable)return;for(var e=this.event.getTargetIterator(t,this.render);e.next();){if(e.match("w2floatingLayer_dragArea")&&!this.options.fixed){var i=this;WebSquare.dragdrop.gDragManager.activate(t,this.render,{id:this.id+"_drag",className:"w2drag_resize",delay:10,mode:"move",makeGhostLayer:function(t){t.setSize(i.render.offsetWidth,i.render.offsetHeight);var e=WebSquare.style.getAbsoluteLeft(i.render),s=WebSquare.style.getAbsoluteTop(i.render);return t.setPosition(e,s),t},handleStart:function(){1==i.options.useModal&&WebSquare.getBody().showModal("w2modal_onmove")},handleFinish:function(t,e,s,o){var r,a,l=/matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,d=WebSquare.style.getStyle(document.body,"transform");d?(r=null==(r=d.match(l))?1:parseFloat(r[1])||1,a=null==(a=d.match(l))?1:parseFloat(a[2])||1):(r=1,a=1),WebSquare.idCache[i.parentFrame]?i.setPosition((t+s-WebSquare.style.getAbsoluteLeft(WebSquare.idCache[i.parentFrame].render))/r,(e+o-WebSquare.style.getAbsoluteTop(WebSquare.idCache[i.parentFrame].render))/a):i.setPosition((t+s-WebSquare.style.getAbsoluteLeft(document.body))/r,(e+o-WebSquare.style.getAbsoluteTop(document.body))/a),1==i.options.useModal&&WebSquare.getBody().hideModal(!0),n.B.fireEvent(i,"onlayermove",t+s,e+o)}})}if(e.match("w2floatingLayer_resize")){n.B.stopEvent(t);i=this;WebSquare.dragdrop.gDragManager.activate(t,this.render,{id:this.id+"_drag",className:"w2drag_resize",mode:"resize",makeGhostLayer:function(t){var e=WebSquare.style.getAbsoluteLeft(i.render),s=WebSquare.style.getAbsoluteTop(i.render),o=i.getElementSize(i.render),r=o.width,n=o.height;return r=r-(parseInt(a.D.getStyleProperty(t.render,"border-left-width"),10)||0)-(parseInt(a.D.getStyleProperty(t.render,"border-right-width"),10)||0),n=n-(parseInt(a.D.getStyleProperty(t.render,"border-top-width"),10)||0)-(parseInt(a.D.getStyleProperty(t.render,"border-bottom-width"),10)||0),t.setSize(r,n),t.setPosition(e,s),t},handleStart:function(){i.showModal.call(i)},handleFinish:function(t,e,s,o,r){i.hideModal.call(i);var n=parseInt(i.getStyle("width"),10)+s,a=parseInt(i.getStyle("height"),10)+o;i.setSize(n,a)}})}if(e.match("w2floatingLayer_resize_right")){n.B.stopEvent(t);i=this;WebSquare.idCache[this._multiViewUUID]&&this.showModal.call(this),WebSquare.dragdrop.gDragManager.activate(t,this.render,{id:this.id+"_drag",className:"w2drag_resize",mode:"resize_right",makeGhostLayer:function(t){var e=WebSquare.style.getAbsoluteLeft(i.render),s=WebSquare.style.getAbsoluteTop(i.render),o=i.getElementSize(i.render),r=o.width,n=o.height;return r=r-(parseInt(a.D.getStyleProperty(t.render,"border-left-width"),10)||0)-(parseInt(a.D.getStyleProperty(t.render,"border-right-width"),10)||0),n=n-(parseInt(a.D.getStyleProperty(t.render,"border-top-width"),10)||0)-(parseInt(a.D.getStyleProperty(t.render,"border-bottom-width"),10)||0),
t.setSize(r,n),t.setPosition(e,s),t},handleStart:function(){i.showModal.call(i)},handleFinish:function(t,e,s,o,r){i.hideModal.call(i);var n=parseInt(i.getStyle("width"),10),a=parseInt(i.getStyle("height"),10),l=n+s;i.setSize(l,a)}})}if(e.match("w2floatingLayer_resize_bottom")){n.B.stopEvent(t);i=this;WebSquare.dragdrop.gDragManager.activate(t,this.render,{id:this.id+"_drag",className:"w2drag_resize",mode:"resize_bottom",makeGhostLayer:function(t){var e=WebSquare.style.getAbsoluteLeft(i.render),s=WebSquare.style.getAbsoluteTop(i.render),o=i.getElementSize(i.render),r=o.width,n=o.height;return r=r-(parseInt(a.D.getStyleProperty(t.render,"border-left-width"),10)||0)-(parseInt(a.D.getStyleProperty(t.render,"border-right-width"),10)||0),n=n-(parseInt(a.D.getStyleProperty(t.render,"border-top-width"),10)||0)-(parseInt(a.D.getStyleProperty(t.render,"border-bottom-width"),10)||0),t.setSize(r,n),t.setPosition(e,s),t},handleStart:function(){i.showModal.call(i)},handleFinish:function(t,e,s,o,r){i.hideModal.call(i);var n=parseInt(i.getStyle("width"),10),a=parseInt(i.getStyle("height"),10)+o;i.setSize(n,a)}})}}e=null}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.handleMouseOverEvent=function(t){try{for(var e=this.event.getTargetIterator(t,this.render);e.next();)e.match("w2floatingLayer_close_button")&&this.addClass(this.dom.closeButton,"w2floatingLayer_close_button_over");e=null}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.handleMouseOutEvent=function(t){try{for(var e=this.event.getTargetIterator(t,this.render);e.next();)e.match("w2floatingLayer_close_button")&&this.removeClass(this.dom.closeButton,"w2floatingLayer_close_button_over");e=null}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.handleSelectStart=function(t){try{for(var e=this.event.getTargetIterator(t,this.render);e.next();)e.match("w2floatingLayer_dragArea")&&n.B.stopEvent(t);e=null}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.setSize=function(t,e){try{if(!this.render)return;t=parseInt(t),e=parseInt(e),null!=t&&!isNaN(t)&&t>=0&&(this.render.style.width=t+"px"),null!=e&&!isNaN(e)&&e>=0&&(this.render.style.height=e+"px",this.resetContentSize()),n.B.fireEvent(this,"onlayerresize")}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.resetContentSize=function(){try{var t=a.D.getStyleProperty(this.render,"height");if(t=parseInt(t,10),isNaN(t)){var e=this.getSize("height")-42;this.dom.contents.style.height="number"==typeof e&&e>0?this.getSize("height")-42+"px":""}else this.dom.contents.style.height=t-42+"px";this.options.fullContentArea&&(this.dom.contents.style.width=this.render.style.width)}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.setTitle=function(t){try{this.dom.titleDiv||(this.dom.titleDiv=this.getElementById(this.id+"_titleDiv")),this.dom.titleDiv&&(this.dom.titleDiv.innerHTML=t,this.dom.titleDiv.parentNode.setAttribute("title",t.wq_replaceAll("'","&#39;")))}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.showModal=function(){var t=WebSquare.getBody();if(this.modalStack<=0){if(WebSquare.util.getBoolean(this.options.useModalStack)){var e={},i=this.options.pluginName;if(this.options.frameModal){e[i="popup"]={id:this.uuid};var s={className:"w2modal_floatingLayer",popupModal:this.options.useModal,stackComponents:e};if("true"===this.options.frameModal){var o=WebSquare.strictModeFrame?WebSquare.strictModeFrame.uuid:"";this.scope_obj&&WebSquare.idCache[this.scope_obj.uuid]&&o!=this.scope_obj.uuid?this.scope_obj.showFrameModal(s):t.showModal(s)}else"false"===this.options.frameModal&&t.showModal(s)}else e[i]=this.uuid,t.showModal("w2modal_floatingLayer",null,e)}else t.showModal("w2modal_floatingLayer");this.modalStack++}},d.prototype.hideModal=function(){if(this.modalStack>0){if(WebSquare.util.getBoolean(this.options.useModalStack))if(this.options.frameModal)if("true"===this.options.frameModal){var t=WebSquare.strictModeFrame?WebSquare.strictModeFrame.uuid:""
;this.scope_obj&&WebSquare.idCache[this.scope_obj.uuid]&&t!=this.scope_obj.uuid?this.scope_obj.hideFrameModal(this.uuid):WebSquare.getBody().hideModal(null,this.uuid)}else WebSquare.getBody().hideModal(null,this.uuid);else WebSquare.getBody().hideModal();else WebSquare.getBody().hideModal(!0);this.modalStack--}},d.prototype.show=function(t){if(l.s.prototype.show.call(this,t),1==this.options.useModal&&this.showModal(),this.options.useAnchor){var e=this.id+"_innerLink";this.getElementById(e).setAttribute("name",e+"_name");var i=document.createElement("a");document.body.appendChild(i),i.setAttribute("href","#"+e+"_name"),i.click(),document.body.removeChild(i),i=null}1==this.options.accessibility&&(this._targetId=document.activeElement.id,this.dom.closeButton&&this.dom.closeButton.focus())},d.prototype.hide=function(){if(l.s.prototype.hide.apply(this),1==this.options.useModal&&this.hideModal(),this.options.useAnchor&&this.backlink){var t=a.D.getComponentById(this.backlink);t.render.setAttribute("name",t.id+"_backlink");var e=document.createElement("a");document.body.appendChild(e),e.setAttribute("href","#"+t.id+"_backlink"),e.click(),document.body.removeChild(e)}if(1==this.options.accessibility&&this._targetId){var i=this._targetId;a.D.requestAnimationFrame((function(){var t=document.getElementById(i);t&&t.focus()}))}},d.prototype.setUseCloseButton=function(t){try{if("boolean"!=typeof t||this.options.useCloseButton===t)return;this.options.useCloseButton=t;var e=this.getElementById(this.id+"_closeButton");if(e)return;e.style.display=t?"":"none"}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.setBackLink=function(t){"string"==typeof t?this.backlink=t:t&&"string"==typeof t.id&&(this.backlink=t.id)},d.prototype.setHeaderHTML=function(t){try{if(t){var e=t;try{var i=a.D.getGlobalFunction(t,this.scope_id);e="function"==typeof i?i():i}catch(i){e=t}var s=this.getElementById(this.id+"_headerHTML");s&&(s.innerHTML=e,this.options.headerHTML=e)}}catch(t){r.w.printStackTrace(t,null,this)}},d.prototype.getMaxSize=function(){for(var t,e,i=this.parentControl;null!=i&&null==i.render;)i=i.parentControl;(i?(t=WebSquare.style.getSize(i.render,"width"),e=WebSquare.style.getSize(i.render,"height")):(t=this.options.width,e=this.options.height),this.render)&&(t=t-(parseInt(a.D.getStyleProperty(this.render,"border-left-width"),10)||0)-(parseInt(a.D.getStyleProperty(this.render,"border-right-width"),10)||0)-(parseInt(a.D.getStyleProperty(this.render,"padding-left"),10)||0)-(parseInt(a.D.getStyleProperty(this.render,"padding-right"),10)||0),e=e-(parseInt(a.D.getStyleProperty(this.render,"border-top-width"),10)||0)-(parseInt(a.D.getStyleProperty(this.render,"border-bottom-width"),10)||0)-(parseInt(a.D.getStyleProperty(this.render,"padding-top"),10)||0)-(parseInt(a.D.getStyleProperty(this.render,"padding-bottom"),10)||0));return{width:t,height:e}},d.prototype.getElementSize=function(t){var e,i;(t||(t=this.render),t)&&(e=t.offsetWidth,i=t.offsetHeight,e=e-(parseInt(a.D.getStyleProperty(t,"border-left-width"),10)||0)-(parseInt(a.D.getStyleProperty(t,"border-right-width"),10)||0)-(parseInt(a.D.getStyleProperty(t,"padding-left"),10)||0)-(parseInt(a.D.getStyleProperty(t,"padding-right"),10)||0),i=i-(parseInt(a.D.getStyleProperty(t,"border-top-width"),10)||0)-(parseInt(a.D.getStyleProperty(t,"border-bottom-width"),10)||0)-(parseInt(a.D.getStyleProperty(t,"padding-top"),10)||0)-(parseInt(a.D.getStyleProperty(t,"padding-bottom"),10)||0));return{width:e,height:i}},d.prototype.finalize=function(){try{this.hide(),WebSquare.dragdrop.gDragManager.remove(this.id+"_drag")}catch(t){r.w.printStackTrace(t,null,this)}}}}]);