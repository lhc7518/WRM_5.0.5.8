"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[8028],{8028:function(e,t,a){a.r(t),a.d(t,{iframe:function(){return u}});var o=a(1002),n=a(9122),i=a(7827),r=a(1160),s=a(5841),c=a(8754),l=a(6079),m=a(5316),u=function(e,t,a){m.s.call(this,e,t,a)};n.x.extend(u.prototype,m.s.prototype),u.prototype.defaultOptions={pluginType:"uiplugin.iframe",pluginName:"iframe",userEvents:["oniframeload","oniframeunload"],src:"",scrolling:"",title:"",name:"",allowTransparency:"",spa:!1,spaParam:"wq_spaParam",relativePath:!1,spaReplaceHistory:!1,msaName:""},u.prototype.initialize=function(e){try{"true"==i.v.getConfiguration("/WebSquare/spa/@value")&&(this.options.spa=!0),"true"==i.v.getConfiguration("/WebSquare/iframe/relativePath/@value")&&(this.options.relativePath=!0),this.options.dataObject&&this.setDataObject(this.options.dataObject),this._invalidURLRegEx=/<\/?\s*[a-zA-Z\s="/.':;#-\/\?]+>/g,this._invalidURLRegEx2=/%3C\/?\s*[a-zA-Z\s="/.':;#-\/\?]+%3E/g}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype.toHTML=function(){try{var e="."+WebSquare.w2xExtension,t=this.options.src;if(""!=t){var a,o=t.slice(0),n=-1;(a=t.indexOf("?"))>-1?o=o.substring(0,a):(n=t.indexOf("#"))>-1&&(o=o.substring(0,n)),o.indexOf("&")>-1&&(o=o.substring(0,o.indexOf("&")));var s="w2xPath";if(c.D.getEncodeParameterOption("pathName")?s=c.D.getEncodeParameterOption("pathName"):c.D.isEncodeParameter()&&(s=c.D.encodeParameter("w2xPath")),".xml"===o.substring(o.lastIndexOf(".")))if(this.options.spa){var l="?"+this.options.spaParam+"="+(this.uuid||this.id),m=this.getURL(t),u=location.toString();(b=u.indexOf("?"))<0&&(b=u.indexOf("#")),b<0&&(b=u.length);var g=u.substring(0,b);if(c.D.getEncodeParameterOption("onlyParam")){for(var d=m.split(/[\&\?]/),h=0;h<d.length;h++)(D=d[h].indexOf("="))>=0&&(d[h]=c.D.encodeParameter(d[h].substring(0,D))+d[h].substring(D));m=d.join("&")}if(g.indexOf(e)>=0){var f=m.substring(0,m.lastIndexOf(".xml"))+e;if(c.D.getBoolean(i.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=f;else{var p="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();c.D.isEncodeParameter()&&(p=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():c.D.encodeParameter(p)),t=f+p}}else if(WebSquare.isHoneyComb){window.frameElement?window.sessionStorage[window.frameElement.id]=m:window.sessionStorage.w2xpath=m;var w=g.indexOf("?");w>=0&&(g=g.substring(0,w)),t=g+l}else if(c.D.getBoolean(i.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?g+l+"#"+s+"="+m:g+l+"#"+s+"="+c.D.encodeParameter(m):g+l+"#"+s+"="+m;else{p="&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();t=c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?g+l+"#"+s+"="+m+(p=c.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config()):g+l+"#"+s+"="+c.D.encodeParameter(m+p):g+l+"#"+s+"="+m+p}}else{var b;t=this.getURL(t),(b=location.toString().indexOf("?"))<0&&(b=location.toString().indexOf("#"));var x=location.toString().substring(0,b);if(b<0&&(x=location.toString()),t=t.replace("?","&"),c.D.getEncodeParameterOption("onlyParam")){var D;for(d=t.split(/[\&\?]/),h=0;h<d.length;h++)(D=d[h].indexOf("="))>=0&&(d[h]=c.D.encodeParameter(d[h].substring(0,D))+d[h].substring(D));t=d.join("&")}if(x.indexOf(e)>=0){f=t.substring(0,t.lastIndexOf(".xml"))+e;if(c.D.getBoolean(i.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=f;else{p="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()
;c.D.isEncodeParameter()&&(p=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():c.D.encodeParameter(p)),t=f+p}}else WebSquare.isHoneyComb?(window.frameElement?window.sessionStorage[window.frameElement.id]=t:window.sessionStorage.w2xpath=t,t=x):t=c.D.getBoolean(i.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?x+"?"+s+"="+t+this._getW2Config():x+"?"+s+"="+c.D.encodeParameter(t)+this._getW2Config():x+"?"+s+"="+t+this._getW2Config():c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?x+"?"+s+"="+t+c.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():x+"?"+s+"="+c.D.encodeParameter(t+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()):x+"?"+s+"="+t+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()}else this.options.relativePath&&(t=this.getURL(t));t="src='"+t+"'"}else""==(t=WebSquare.net.getSSLBlankPage())&&(t="src='about:blank'");var S=""==this.options.allowTransparency?"":"allowTransparency='"+this.options.allowTransparency+"'",P=""==this.options.name?"":"name='"+this.options.name+"'",W=""==this.options.scrolling?"":"scrolling='"+this.options.scrolling+"'",y=""==this.options.style?"":"style='"+this.options.style+"'",O=""==this.options.title?"":"title='"+this.options.title+"'",v=""==this.options.className?"'":" "+this.options.className+"'",q="";return"html5"!=WebSquare.docType&&(q=" frameborder='0'"),"<iframe id='"+this.id+"' "+t+" "+y+" class='w2iframe"+v+q+" "+O+" "+S+" "+P+" "+W+"></iframe>"}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype.setAction=function(){},u.prototype.finalize=function(){try{this.fireIframeunload(),this.activeStatus="finalize"}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype.setSrc=function(e,t){try{"object"===(0,o.Z)(t)&&null!=t&&"object"===(0,o.Z)(t.dataObject)&&(this._removeDataObject(),this.setDataObject(t.dataObject));var a,n,s="."+WebSquare.w2xExtension,m=!1,u=c.D.getBoolean(t),g=e.slice(0),d=-1;if((a=e.indexOf("?"))>-1?g=g.substring(0,a):(d=e.indexOf("#"))>-1&&(g=g.substring(0,d)),(n=g.indexOf("&"))>-1&&(g=g.substring(0,n)),".xml"===g.substring(g.lastIndexOf(".")))t="1",m=this.options.spa;else{var h=this.getWindow(),f=this.getSrc();try{null!=h&&null!=h.WebSquare&&(f=h.location.toString());var p=f.indexOf("#"),w=e.indexOf("#");p<0&&(p=f.length),w<0&&(w=e.length),m=f.substring(0,p)==e.substring(0,w)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}}var b="w2xPath";c.D.getEncodeParameterOption("pathName")?b=c.D.getEncodeParameterOption("pathName"):c.D.isEncodeParameter()&&(b=c.D.encodeParameter("w2xPath"));try{if(!m)"true"!=i.v.getConfiguration("/WebSquare/clearMemory/@value")&&this.getWindow().WebSquare&&"function"==typeof this.getWindow().WebSquare.clearMemory&&this.getWindow().WebSquare.clearMemory()}catch(e){l.k.printLog("warning : clearMemory["+this.id+"]")}"about:blank"==e||m||("https:"==location.protocol?this.render.setAttribute("src",WebSquare.net.getSSLBlankPage(!0)):this.render.setAttribute("src",this._checkValidURL("about:blank")));g=e;if(e.indexOf("?")>-1&&(g=g.substring(0,g.indexOf("?"))),null!=e){h=this.getWindow();var x=location.toString();try{null!=h&&null!=h.WebSquare&&(x=h.location.toString(),h.WebSquare.pageXMLString=null)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}if("1"===t&&m){var D=this.getURL(e);(E=x.indexOf("#"))<0&&(E=x.length);var S=x.substring(0,E),P="",W="";if(this.options.spaParam){W="?"+this.options.spaParam+"="+(this.uuid||this.id);var y=new RegExp("\\?"+this.options.spaParam+"=wq_uuid_[0-9]+","g");S=S.replace(y,"")}if(c.D.getEncodeParameterOption("onlyParam")){
for(var O=D.split(/[\&\?]/),v=0;v<O.length;v++)(C=O[v].indexOf("="))>=0&&(O[v]=c.D.encodeParameter(O[v].substring(0,C))+O[v].substring(C));D=O.join("&")}if(W&&S.indexOf(s)>=0){var q=D.substring(0,D.lastIndexOf(".xml"))+s;if(c.D.getBoolean(i.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))e=q;else{P="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();c.D.isEncodeParameter()&&(P=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():c.D.encodeParameter(P)),e=q+P}}else if(WebSquare.isHoneyComb){window.frameElement?window.sessionStorage[window.frameElement.id]=D:window.sessionStorage.w2xpath=D;var R=S.indexOf("?");R>=0&&(S=S.substring(0,R)),e=S+W}else c.D.getBoolean(i.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?e=c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?S+W+"#"+b+"="+D:S+W+"#"+b+"="+c.D.encodeParameter(D):S+W+"#"+b+"="+D:(P="&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config(),e=c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?S+W+"#"+b+"="+D+(P=c.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config()):S+W+"#"+b+"="+c.D.encodeParameter(D+P):S+W+"#"+b+"="+D+P);if((e==x+P||e==x)&&h&&h.WebSquare)h.util.reinitialize(u);else if(u&&h&&h.WebSquare)"onhashchange"in h.window?h.window.onhashchange=null:clearInterval(h.util._hashTestKey),h.core.finalize(),this.render.setAttribute("src",this._checkValidURL(e)),h.location.reload();else{h&&h.WebSquare&&(h.WebSquare.w2xPath="");try{(this.options.spaReplaceHistory||"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(h.location.toString()))&&h.location.replace(e)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}this.render.setAttribute("src",this._checkValidURL(e))}return}if("1"===t){var E;e=this.getURL(e),(E=x.indexOf("?"))<0&&(E=x.indexOf("#"))<0&&(E=x.length);var _=x.substring(0,E);if(e=e.replace("?","&"),c.D.getEncodeParameterOption("onlyParam")){var C;for(O=e.split(/[\&\?]/),v=0;v<O.length;v++)(C=O[v].indexOf("="))>=0&&(O[v]=c.D.encodeParameter(O[v].substring(0,C))+O[v].substring(C));e=O.join("&")}if(_.indexOf(s)>=0){q=e.substring(0,e.lastIndexOf(".xml"))+s;if(c.D.getBoolean(i.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))e=q;else{P="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();c.D.isEncodeParameter()&&(P=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():c.D.encodeParameter(P)),e=q+P}}else WebSquare.isHoneyComb?(window.frameElement?window.sessionStorage[window.frameElement.id]=e:window.sessionStorage.w2xpath=e,e=_):e=c.D.getBoolean(i.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?_+"?"+b+"="+e:_+"?"+b+"="+c.D.encodeParameter(e):_+"?"+b+"="+e:c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?_+"?"+b+"="+e+c.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():_+"?"+b+"="+c.D.encodeParameter(e+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()):_+"?"+b+"="+e+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();try{"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(h.location.toString())&&h.location.replace(e)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}return void this.render.setAttribute("src",this._checkValidURL(e))}try{"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(h.location.toString())&&h.location.replace(e)}catch(e){
l.k.printLog("warning : cross-origin frame["+this.id+"]")}this.options.relativePath&&""!=e&&(e=this.getURL(e)),this.render.setAttribute("src",this._checkValidURL(e)),m&&e==x&&h&&h.WebSquare&&h.util.reinitialize(u)}}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype.getSrc=function(){try{var e;return this.render&&(e=this.render.getAttribute("src")),e}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype.getWindow=function(){try{return this.render.contentWindow}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype.setDisabled=function(){$l("setDisabled cannot be used in iframes.["+this.id+"]")},u.prototype.setReadOnly=function(){$l("setReadOnly cannot be used in iframes.["+this.id+"]")},u.prototype.fireIframeload=function(){s.B.fireEvent(this,"oniframeload",this.getSrc()),this._iframeLoaded=!0},u.prototype.fireIframeunload=function(){"finalize"!==this.activeStatus&&s.B.fireEvent(this,"oniframeunload",this.getSrc())},u.prototype._getW2Config=function(){try{var e="",t=-1;if(c.D.isEncodeParameter()){if((t=location.toString().indexOf(c.D.encodeParameter("w2Config")))>=0)(o=(a=location.toString().slice(t+9)).slice(0,a.indexOf(c.D.encodeParameter("config.xml"))+10))&&(e=c.D.encodeParameter("&w2Config=")+o);else if(c.D.getBoolean(i.v.getConfiguration("/WebSquare/encodeParameter/@fallback"))){var a,o;if((t=location.toString().indexOf("w2Config"))>=0)(o=(a=location.toString().slice(t+9)).slice(0,a.indexOf("config.xml")+10))&&(e=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("&w2Config=")+o:c.D.encodeParameter("&w2Config="+o))}}else if((t=location.toString().indexOf("w2Config"))>=0)(o=(a=location.toString().slice(t+9)).slice(0,a.indexOf("config.xml")+10))&&(e="&w2Config="+o);return e}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype.setDataObject=function(e){try{if("string"==typeof e&&(e=JSON.parse(e)),null==e||"string"!=typeof e.name||0===e.name.length)return;var t=e.type||"string";t=t.toLowerCase();var a,o=e.data,n=e.name;switch(t){case"json":a=JSON.stringify(o);break;case"xml":a=WebSquare.xml.serialize(o);break;case"array":a=c.D.parseArray(o);break;default:a=o}this._dataObject={type:t,name:n,data:a}}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype._getDataObject=function(e){try{var t;return this._dataObject&&"string"==typeof this._dataObject.name&&this._dataObject.name.length>0&&this._dataObject.data&&(t=null==e?this._dataObject:this._dataObject[e]),t}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype._removeDataObject=function(){try{this._dataObject&&(this._dataObject=null,delete this._dataObject)}catch(e){r.w.printStackTrace(e,null,this)}},u.prototype._checkValidURL=function(e){try{return"string"!=typeof e?e:e.replace(this._invalidURLRegEx,"").replace(this._invalidURLRegEx2,"")}catch(e){return r.w.printStackTrace(e,null,this),""}}}}]);