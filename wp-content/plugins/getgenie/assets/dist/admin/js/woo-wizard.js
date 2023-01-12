(()=>{var e=Object.defineProperty,{Row:t,Col:n}=window.antd,{Libs:a,Utilities:o,PromotionalNotice:r}=window.getGenie.Components.Common,{__:l}=wp.i18n,{ComposeComponents:c}=window.getGenie.Components.Common.ReduxManager,{GenieHelpers:i}=o,s=c((({unsupportedLanguages:e,sidebar:o,className:r="",language:c=!0,tone:s=!0,creativity:m=!0,result:d=!0})=>React.createElement(React.Fragment,null,React.createElement(t,{className:r,gutter:16},c&&React.createElement(n,{span:12},React.createElement(a.Select,{className:"",handleOnChange:e=>i.saveCurrentLanguage(e),name:"selectedLanguage",except:e,label:React.createElement(React.Fragment,null,l("Language","getgenie"),React.createElement(a.Tooltip,{title:l("Choose the desired language of your input and the outputs","getgenie"),placement:"top"},"i")),options:o.languages,defaultValue:o.currentLanguage})),s&&React.createElement(n,{span:12},React.createElement(a.Select,{className:"",handleOnChange:e=>i.saveCurrentToneOfVoice(e),name:"selectedTone",label:React.createElement(React.Fragment,null,l("Tone","getgenie"),React.createElement(a.Tooltip,{title:l("Define what tone of voice you want the outputs to have","getgenie"),placement:"top"},"i")," "),options:[{label:"Standard",value:"standard"},...o.toneOfVoice,{label:"More coming soon",value:"more"}],disableList:["more"],defaultValue:o.currentToneOfVoice}))),React.createElement(t,{className:r,style:{marginTop:"10px"},gutter:16},m&&React.createElement(n,{span:12},React.createElement(a.Slider,{name:"creativity",label:React.createElement(React.Fragment,null,l("Creativity","getgenie")," ",React.createElement(a.Tooltip,{title:l("How much creative you want genie to be","getgenie"),placement:"top"},"i")),message:!1,defaultValue:4})),d&&React.createElement(n,{span:12},React.createElement(a.NumberInput,{name:"numberOfResult",className:"ResultLimitNumberInput",max:6,type:"text",defaultValue:2,label:React.createElement(React.Fragment,null,l("Results","getgenie")," ",React.createElement(a.Tooltip,{title:l("Maximum content you want to generate","getgenie"),placement:"top"},"i")),required:!0,errorMessage:l("Please choose valid limit","getgenie")}))))),["sidebar"]),{Libs:m}=window.getGenie.Components.Common,{__:d}=wp.i18n,g={insert:{wooLongDesc:e=>{let t=document.querySelector("#wp-content-editor-container .wp-editor-area");if("none"!==window.getComputedStyle(t).display)return void(t.value=e);const n=document.querySelector(".woocommerce-feature-enabled-activity-panels #content_ifr").contentWindow.document,a=n.querySelector("body p");if(!a){let t=n.createElement("p");return t.innerText=e,void n.querySelector("body").appendChild(t)}a.innerText=e},wooShortDesc:e=>{let t=document.querySelector("#wp-excerpt-editor-container .wp-editor-area");if("none"!==window.getComputedStyle(t).display)return void(t.value=e);const n=document.querySelector(".woocommerce-feature-enabled-activity-panels #excerpt_ifr").contentWindow.document,a=n.querySelector("body p");if(!a){let t=n.createElement("p");return t.innerText=e,void n.querySelector("body").appendChild(t)}a.innerText=e},wooProductTitle:e=>{const t=document.querySelector(".woocommerce-feature-enabled-activity-panels #titlewrap #title"),n=document.querySelector(".woocommerce-feature-enabled-activity-panels #titlewrap #title-prompt-text");t?(t.value=e,""!==t.value?n.classList.add("screen-reader-text"):n.classList.remove("screen-reader-text")):m.ErrorModal({title:d("Insertion Failed!","getgenie"),content:d("No insertion place found!","getgenie")})}}},{Radio:p}=window.antd,{ComposeComponents:u}=window.getGenie.Components.Common.ReduxManager,{useEffect:w}=wp.element,R=u((({navigation:e="title",setSidebar:t,sidebar:n})=>{let a={title:{title:"Title",screen:"wooProductTitle"},longDesc:{title:"Long Desc",screen:"wooLongDesc"},shortDesc:{title:"Short Desc",screen:"wooShortDesc"}};return w((()=>{["wooProductTitle","wooLongDesc","wooShortDesc"].includes(n.component)&&t({insertTextCallback:g.insert[n.component]})}),[n.component]),React.createElement("div",{className:"genie-nav-container"},React.createElement(p.Group,{onChange:e=>{let n=e.target.screen;t({component:n,insertTextCallback:g.insert[n]})},value:e},Object.keys(a).map((e=>{let t=a[e];return React.createElement(p.Button,{value:e,screen:t.screen},t.title)}))))}),["setSidebar","sidebar"]),{Alert:E,Divider:b,Form:y,Tooltip:h}=window.antd,{Libs:C,ContentFeedback:N,Utilities:T}=window.getGenie.Components.Common,{HandleFetch:v,HandleResponse:S,EndPoints:f}=window.getGenie.Components.Common.RequestManager,{ComposeComponents:k}=window.getGenie.Components.Common.ReduxManager,{useState:x}=wp.element,{__:P}=wp.i18n,{GenieHelpers:L}=T,D=k((({getInputs:e,setInput:t,sidebar:n,setSidebar:a})=>{const[o,r]=x(!1),[l,c]=x(""),[i,m]=x(!1),d=e.generatedLongDesc||[];return React.createElement(React.Fragment,null,React.createElement(C.DrawerHeader,null),React.createElement(R,{navigation:"longDesc"}),React.createElement(b,null),React.createElement("div",{className:"getgenie-title-form"},React.createElement(y,{layout:"vertical",onFinish:()=>{r(!0);let n={input:{productName:e.wooProductName,keywords:e.wooBrief},templateSlug:"woocommerce-product-long-description"};t("generatedLongDesc",[]),v((e=>{r(!1),S(e,(()=>{let a=e.data.map((e=>({title:e,like:!1,dislike:!1})));t("generatedLongDesc",a),m(!0),setTimeout((()=>m(!1)),4e3);let o=n;delete o?.resultCount,o.output=e.data,o.templateType="writer-default",fetch(f.createHistoryUrl,{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8","X-WP-Nonce":window.getGenie.config?.restNonce||""}})}))}),"writeTemplates",n)}},React.createElement("div",{className:"getgenie-screen-content title"},React.createElement(C.Input,{name:"wooProductName",type:"text",label:React.createElement("span",null,P("Product Name","getgenie")," ",React.createElement("span",{style:{display:"inline-block",color:"red"}},"*")),placeholder:P("Enter Your Keyword here","getgenie"),required:!0,errorMessage:P("Please enter the title here","getgenie")}),React.createElement(C.Textarea,{label:React.createElement("span",null,P("Product Brief/ Comma separated keywords","getgenie")," ",React.createElement("span",{style:{display:"inline-block",color:"red"}},"*")),name:"wooBrief",rows:4,placeholder:P("Enter a context for the keyword","getgenie")}),React.createElement(s,{className:"getgenie-sidebar-controller-options"}),React.createElement(C.Button,{htmlType:"submit",className:"submit-btn",type:"primary",loading:o,disabled:!(e.wooProductName&&e.wooBrief)},React.createElement("span",{className:"getgenie-icon-Edit"}),P("Generate long desc","getgenie"))),React.createElement(C.TitleMsg,{list:d,loading:o,title:P("long description","getgenie")}),React.createElement("div",{className:"getgenie-card-container editor",style:{backgroundColor:0===d.length&&"transparent"}},React.createElement(C.Card,{list:d,handleClick:(e,t)=>{let n=t.title.replace(/<br\/>/g,"");L.copyToClipboard(n).then((()=>{c(t.title),setTimeout((()=>{c(null)}),2e3)}))["catch"]((()=>console.log("error")))},column:1,skeleton:o?()=>React.createElement(C.SkeletonSingle,{count:10}):""},(t=>React.createElement(React.Fragment,null,React.createElement(h,{placement:"right",title:l===t.title&&"Copied",visible:l===t.title&&n.open,zIndex:999999},React.createElement("h5",{className:"generated-content"},React.createElement("div",{dangerouslySetInnerHTML:{__html:t.title}}))),React.createElement(N,{content:t,input:e.wooProductName+" "+e.wooBrief,contentType:"woo-product-long-desc",creativityLevel:e.wooLongCreativityLevel,listName:"generatedLongDesc"}),React.createElement(h,{title:P("Insert this content","getgenie"),placement:"topLeft"},React.createElement("span",{className:"getgenie-insert-content getgenie-icon-plus",onClick:e=>((e,t)=>{e.stopPropagation();let a=t.replace(/<br\s*[\/]?>/g,"\n");n.insertTextCallback(a)})(e,t.title)}))))),i&&React.createElement(E,{className:"template-screen-alert",message:P("Click on the text to copy","getgenie"),closeText:P("Okay","getgenie"),closable:!0}))),React.createElement(C.DrawerFooter,{prevScreen:"wooProductTitle",enableNextBtn:!0,nextScreen:"wooShortDesc"})))}),["getInputs","setInput","sidebar","setSidebar"]),{Alert:F,Divider:G,Form:I,Tooltip:B}=window.antd,{Libs:M,ContentFeedback:H,Utilities:_,StaticData:q}=window.getGenie.Components.Common,{HandleFetch:O,HandleResponse:U,EndPoints:W}=window.getGenie.Components.Common.RequestManager,{ComposeComponents:V}=window.getGenie.Components.Common.ReduxManager,{useState:j}=wp.element,{__:z}=wp.i18n,{GenieHelpers:A}=_,J=V((({getInputs:e,setInput:t,sidebar:n,setSidebar:a})=>{const[o,r]=j(!1),[l,c]=j(""),[i,m]=j(!1),d=e.generatedShortDesc||[];return React.createElement(React.Fragment,null,React.createElement(M.DrawerHeader,null),React.createElement(R,{navigation:"shortDesc"}),React.createElement(G,null),React.createElement("div",{className:"getgenie-title-form"},React.createElement(I,{layout:"vertical",onFinish:()=>{r(!0);let n={input:{productName:e.wooProductName,keywords:e.wooBrief},templateSlug:"woocommerce-product-short-description"};t("generatedShortDesc",[]),O((e=>{r(!1),U(e,(()=>{let a=e.data.map((e=>({title:e,like:!1,dislike:!1})));t("generatedShortDesc",a),m(!0),setTimeout((()=>m(!1)),4e3);let o=n;delete o?.resultCount,o.output=e.data,o.templateType="writer-default",fetch(W.createHistoryUrl,{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8","X-WP-Nonce":window.getGenie.config?.restNonce||""}})}))}),"writeTemplates",n)}},React.createElement("div",{className:"getgenie-screen-content title"},React.createElement(M.Input,{name:"wooProductName",type:"text",label:React.createElement("span",null,z("Product Name","getgenie")," ",React.createElement("span",{style:{display:"inline-block",color:"red"}},"*")),placeholder:z("Enter Your Keyword here","getgenie"),required:!0,errorMessage:z("Please enter the title here","getgenie")}),React.createElement(M.Textarea,{label:React.createElement("span",null,z("Product Brief/ Comma separated keywords","getgenie")," ",React.createElement("span",{style:{display:"inline-block",color:"red"}},"*")),name:"wooBrief",rows:4,placeholder:z("Enter a context for the keyword","getgenie")}),React.createElement(s,{className:"getgenie-sidebar-controller-options"}),React.createElement(M.Button,{htmlType:"submit",className:"submit-btn",type:"primary",loading:o,disabled:!(e.wooProductName&&e.wooBrief)},React.createElement("span",{className:"getgenie-icon-Edit"}),z("Generate short desc","getgenie"))),React.createElement(M.TitleMsg,{list:d,loading:o,title:z("short description","getgenie")}),React.createElement("div",{className:"getgenie-card-container editor",style:{backgroundColor:0===d.length&&z("transparent","getgenie")}},React.createElement(M.Card,{list:d,handleClick:(e,t)=>{let n=t.title.replace(/<br\/>/g,"");A.copyToClipboard(n).then((()=>{c(t.title),setTimeout((()=>{c(null)}),2e3)}))["catch"]((()=>console.log("error")))},column:1,skeleton:o?()=>React.createElement(M.SkeletonSingle,{count:10}):""},(t=>React.createElement(React.Fragment,null,React.createElement(B,{placement:"right",title:l===t.title&&z("Copied","getgenie"),visible:l===t.title&&n.open,zIndex:999999},React.createElement("h5",{className:"generated-content"},React.createElement("div",{dangerouslySetInnerHTML:{__html:t.title}}))),React.createElement(H,{content:t,input:e.wooProductName+" "+e.wooBrief,contentType:"woo-product-short-desc",creativityLevel:e.wooShortCreativityLevel,listName:"generatedShortDesc"}),React.createElement(B,{title:z("Insert this content","getgenie"),placement:"topLeft"},React.createElement("span",{className:"getgenie-insert-content getgenie-icon-plus",onClick:e=>((e,t)=>{e.stopPropagation();let a=t.replace(/<br\s*[\/]?>/g,"\n");n.insertTextCallback(a)})(e,t.title)}))))),i&&React.createElement(F,{className:"template-screen-alert",message:z("Click on the text to copy","getgenie"),closeText:z("Okay","getgenie"),closable:!0}))),React.createElement(M.DrawerFooter,{prevScreen:"wooLongDesc"})))}),["getInputs","setInput","sidebar","setSidebar"]),{Alert:K,Divider:X,Form:Y,Tooltip:Q}=window.antd,{Libs:Z,ContentFeedback:$,Utilities:ee,StaticData:te}=window.getGenie.Components.Common,{HandleFetch:ne,HandleResponse:ae,EndPoints:oe}=window.getGenie.Components.Common.RequestManager,{ComposeComponents:re}=window.getGenie.Components.Common.ReduxManager,{useState:le}=wp.element,{__:ce}=wp.i18n,{GenieHelpers:ie}=ee,se=re((({getInputs:e,setInput:t,sidebar:n,setSidebar:a})=>{const[o,r]=le(!1),[l,c]=le(""),[i,m]=le(!1),d=e.generatedProductNames||[];return React.createElement(React.Fragment,null,React.createElement(Z.DrawerHeader,null),React.createElement(R,{navigation:"title"}),React.createElement(X,null),React.createElement("div",{className:"getgenie-title-form"},React.createElement(Y,{layout:"vertical",onFinish:()=>{r(!0);let n={input:{productName:e.wooProductName,keywords:e.wooBrief},templateSlug:"woocommerce-product-title"};t("generatedProductNames",[]),ne((e=>{r(!1),ae(e,(()=>{let a=e.data.map((e=>({title:e,like:!1,dislike:!1})));t("generatedProductNames",a),m(!0),setTimeout((()=>m(!1)),4e3);let o=n;delete o?.resultCount,o.output=e.data,o.templateType="writer-default",fetch(oe.createHistoryUrl,{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8","X-WP-Nonce":window.getGenie.config?.restNonce||""}})}))}),"writeTemplates",n)}},React.createElement("div",{className:"getgenie-screen-content title"},React.createElement(Z.Input,{name:"wooProductName",type:"text",label:React.createElement("span",null,ce("Product Name","getgenie")," ",React.createElement("span",{style:{display:"inline-block",color:"red"}},"*")),placeholder:"Enter Your Keyword here",required:!0,errorMessage:"Please enter the title here"}),React.createElement(Z.Textarea,{label:React.createElement("span",null,ce("Product Brief/ Comma separated keywords","getgenie")," ",React.createElement("span",{style:{display:"inline-block",color:"red"}},"*")),name:"wooBrief",rows:4,placeholder:ce("Enter a context for the keyword","getgenie")}),React.createElement(s,{className:"getgenie-sidebar-controller-options"}),React.createElement(Z.Button,{htmlType:"submit",className:"submit-btn",type:"primary",loading:o,disabled:!(e.wooProductName&&e.wooBrief)},React.createElement("span",{className:"getgenie-icon-Edit"}),ce("Generate product title","getgenie"))),React.createElement(Z.TitleMsg,{list:d,loading:o,title:ce("product name","getgenie")}),React.createElement("div",{className:"getgenie-card-container editor",style:{backgroundColor:0===d.length&&"transparent"}},React.createElement(Z.Card,{list:d,handleClick:(e,t)=>{let n=t.title.replace(/<br\/>/g,"");ie.copyToClipboard(n).then((()=>{c(t.title),setTimeout((()=>{c(null)}),2e3)}))["catch"]((()=>console.log("error")))},column:1,skeleton:o?()=>React.createElement(Z.SkeletonSingle,{count:10}):""},(t=>React.createElement(React.Fragment,null,React.createElement(Q,{placement:"right",title:l===t.title&&"Copied",visible:l===t.title&&n.open,zIndex:999999},React.createElement("h5",{className:"generated-content"},React.createElement("div",{dangerouslySetInnerHTML:{__html:t.title}}))),React.createElement($,{content:t,input:e.wooProductName+" "+e.wooBrief,contentType:"woo-product-title",creativityLevel:e.wooTitleCreativityLevel,listName:"generatedProductNames"}),React.createElement(Q,{title:ce("Insert this content","getgenie"),placement:"topLeft"},React.createElement("span",{className:"getgenie-insert-content getgenie-icon-plus",onClick:e=>((e,t)=>{e.stopPropagation();let a=t.replace(/<br\s*[\/]?>/g,"\n");n.insertTextCallback(a)})(e,t.title)}))))),i&&React.createElement(K,{className:"template-screen-alert",message:ce("Click on the text to copy","getgenie"),closeText:ce("Okay","getgenie"),closable:!0}))),React.createElement(Z.DrawerFooter,{prevScreen:"TemplateListScreen",enableNextBtn:!0,nextScreen:"wooLongDesc"})))}),["getInputs","setInput","sidebar","setSidebar"]),me={};((t,n)=>{for(var a in n)e(t,a,{get:n[a],enumerable:!0})})(me,{WooCommerceTopButtons:()=>we});var{Button:de}=window.antd,{ComposeComponents:ge}=window.getGenie.Components.Common.ReduxManager,{useEffect:pe}=wp.element,{__:ue}=wp.i18n,we=ge((({setSidebar:e,sidebar:t})=>{const n=()=>{e({open:!t.open,toolbarWriting:!1,component:"wooProductTitle",insertTextCallback:g.insert.wooProductTitle})};return pe((()=>{"#getgenie-open-wooWizard"===window.location.hash&&n()}),[]),React.createElement(de,{onClick:n,type:"primary",className:"getgenie-toolbar-write-btn"},React.createElement("span",{className:"getgenie-icon-Edit"}),ue("Write for me","getgenie"))}),["setSidebar","sidebar"]);window.getGenie.Components={...window.getGenie.Components,WooWizardUtils:me,Sidebar:{...window.getGenie.Components.Sidebar||{},wooLongDesc:D,wooShortDesc:J,wooProductTitle:se}}})();