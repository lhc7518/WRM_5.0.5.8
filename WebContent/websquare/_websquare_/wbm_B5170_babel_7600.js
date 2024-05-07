"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[7600],{7600:function(t,e,i){i.r(e),i.d(e,{button:function(){return l}});var o=i(9122),s=i(1160),n=i(5841),r=i(8754),a=i(5316),l=function(t,e,i){a.s.call(this,t,e,i)};o.x.extend(l.prototype,a.s.prototype),l.prototype.defaultOptions={pluginType:"uiplugin.button",pluginName:"button",userEvents:["ontooltipshow","ontooltiphide"],systemEvents:["onclick","ondblclick","onfocus","onmouseup","onmousedown","onmouseover","onmouseout","onmousemove","onkeydown","onkeypress","onkeyup"],parseChild:!0,parseAttributes:!0,useConfig:!0,type:"button",label:"",localeRef:"",useLocale:!1,title:"",initStyle:!1,tooltipPositionX:"",tooltipPositionY:""},l.prototype.initialize=function(t){try{if(this.evented=!1,this.options.label,this.options.useLocale&&this.options.localeRef){var e=this.getLocaleValue(this.options.localeRef);e&&(this.options.label=e)}var i=this.options.initStyle;this.options=WebSquare.cssManager.styleToClass(this.id,this.options),this.options.initStyle=i||"",this.options.tooltipPositionX=this.options.tooltipShowPositionX||this.options.tooltipPositionX,this.options.tooltipPositionY=this.options.tooltipShowPositionY||this.options.tooltipPositionY}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.toHTML=function(){try{var t=[],e=(this.options.type&&this.options.type,""==this.options.tabIndex?" tabIndex='0'":" tabIndex='"+this.options.tabIndex+"'"),i=this.options.label.wq_replaceAll("'","&#39;"),o=""==this.options.title?"":"title='"+this.options.title.wq_replaceAll("'","&#39;")+"'",n=""==this.options.style?"":"style='"+this.options.style+"'",r=this.options.className?" "+this.options.className+"'":"'";t.push("<button"+e+" id='"+this.id+"' "+n+" class='w2button"+r+i+" "+o+">");var a=!1,l=this.getChildren();if(l.length>0)for(var h=0;h<l.length;h++)t.push(l[h].toHTML()),l[h].element&&3==l[h].element.nodeType&&(a=!0);return a||t.push(i),t.push("</button>"),t.join("")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setAction=function(){try{if(this.options.nextTabID&&this.setNextTabID(this.options.nextTabID,this.scope_id),this.options.initStyle){var t=document.getElementById(this.id).style.cssText,e=document.getElementById(this.id).getAttribute("class");WebSquare.initStyle[this.id]={style:t,className:e}}this.dom.input=document.getElementById(this.id),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent)),this.event.addListener(this.render,"onkeyup",this.event.bindAsEventListener(this,this.handleKeyupEvent))}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setLabel=function(t){try{this.options.disabled||(this.options.value=t,"button"==this.options.type.toLowerCase()&&(this.dom.input.value=t,this.render.innerHTML=t))}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setValue=function(t){try{this.setLabel(t)}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.getLabel=function(){try{return this.options.value}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.getValue=function(){try{return this.options.value}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.setBackgroundImage=function(t){try{"button"==this.options.type&&((t=t.wq_trim()).startsWith("url")?this.render.style.backgroundImage=this.getURL(t):this.render.style.backgroundImage="url("+this.getURL(t)+")")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.getBackgroundImage=function(){try{return"button"==this.options.type?this.getStyle("background-image"):""}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.getType=function(){try{return this.options.type}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.onPropertyChange=function(t,e){try{var i=this.render;switch(t){case"disabled":if(1==e||"disabled"==e)WebSquare.getBody().hideToolTip();1==e?this.addClass(i,"w2button_disabled"):this.removeClass(i,"w2button_disabled");break;case"readOnly":
1==e?this.addClass(i,"w2button_readOnly"):this.removeClass(i,"w2button_readOnly")}}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.handleMouseoverEvent=function(){try{if(1==this.options.disabled)return;this.addClass(row,"w2button_over")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.handleMouseoutEvent=function(){try{if(1==this.options.disabled)return;this.removeClass(row,"w2button_over"),this.removeClass(row,"w2button_press")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.handleMousedownEvent=function(){try{var t=this.getElementById(this.id+"_row");this.addClass(t,"w2button_press")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.handleMouseupEvent=function(){try{var t=this.getElementById(this.id+"_row");this.removeClass(t,"w2button_press")}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.handleKeydownEvent=function(t){try{9==(t.charCode?t.charCode:t.keyCode)&&(this.tabOrderMoveStart=!1,t.shiftKey?null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID&&(this.tabOrderMoveStart=!0,n.B.preventDefault(t)):null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID&&(this.tabOrderMoveStart=!0,n.B.preventDefault(t)))}catch(t){s.w.printStackTrace(t,null,this)}},l.prototype.handleKeyupEvent=function(t){try{var e;if(9==(t.charCode?t.charCode:t.keyCode))if(null!=WebSquare.tabOrder[this.id])if(t.shiftKey){if(null!=WebSquare.tabOrder[this.id].preTabID)(e=r.D.getPreTabbableComp(this.id))&&this.tabOrderMoveStart&&(this.tabOrderMoveStart=!1,e.focus(t))}else if(null!=WebSquare.tabOrder[this.id].nextTabID)(e=r.D.getNextTabbableComp(this.id))&&this.tabOrderMoveStart&&(this.tabOrderMoveStart=!1,e.focus(t))}catch(t){s.w.printStackTrace(t,null,this)}}}}]);