import{_ as d,r as c,o as f,c as h,b as s,d as o,e,f as t,n as r,w as u,v as _,F as k,i as M}from"./index-0c7807fe.js";import{_ as x}from"./logo-white-6a45ee28.js";const m="/assets/shopping-car-c43783b4.svg",v="/assets/member-22f3e873.svg",w={},S={class:"subMenu"},L={class:"subMenu-box"},V={class:"subMenu-icon"},$=s("img",{src:m,alt:""},null,-1),P=s("img",{src:v,alt:""},null,-1);function R(b,a){const l=c("RouterLink");return f(),h("div",S,[s("div",L,[s("div",V,[o(l,{to:{name:"login"},class:"subMenu-icon-link subMenu-icon-shopping"},{default:e(()=>[$,t(" 購物車 ")]),_:1}),o(l,{to:{name:"login"},class:"subMenu-icon-link subMenu-icon-member"},{default:e(()=>[P,t(" 登入")]),_:1})]),o(l,{class:"subMenu-box-link",to:"/"},{default:e(()=>[t("最新消息")]),_:1}),o(l,{class:"subMenu-box-link",to:{name:"login"}},{default:e(()=>[t("了解我們")]),_:1}),o(l,{class:"subMenu-box-link",to:{name:"login"}},{default:e(()=>[t("傢俱選購")]),_:1})])])}const N=d(w,[["render",R]]),C="/assets/logo-black-59c266ff.svg",B={data(){return{showSubMenu:!1,currPath:"/",menuPath:{productList:{path:"product-list",name:"傢俱選購"}}}},components:{UserSubMenu:N},methods:{closeSubMenu(){this.showSubMenu=!1}},mounted(){this.currPath=this.$route.path,console.log("現在路徑",this.currPath)}},F={class:"header-user"},U={class:"header-user-top"},E=s("img",{alt:"Vue logo",class:"logo",src:x},null,-1),O={class:"nav"},y=s("img",{src:m,alt:""},null,-1),z=s("img",{src:v,alt:""},null,-1),D=s("div",{class:"burger-item"},null,-1),I=[D],T={class:"footer-main"},W=s("div",{class:"footer-right"},[s("div",{class:"footer-right-content"},[s("img",{class:"footer-logo",src:C,alt:""}),s("p",{class:"footer-right-slogan"},"讓你在家的每時每刻都是享受")])],-1),j={class:"footer-left"},q={class:"footer-nav"},A=s("div",{class:"footer-link-circle"},null,-1),G=s("div",{class:"footer-link-circle"},null,-1),H=s("div",{class:"footer-link-circle"},null,-1),J=M('<div class="footer-info"><div class="footer-info-title">聯絡地址</div><div class="footer-info-content">新北市板橋區文化路三段33號1樓</div></div><div class="footer-info"><div class="footer-info-title">LINE 客服時間</div><div class="footer-info-content">每週一到五 09:00 - 18:00</div></div><div class="footer-bottom"><p>此為作品集使用，不做商業用途</p><ul class="footer-social"><li>FOLLOW US</li><li class="footer-social-yt"></li><li class="footer-social-fb"></li><li class="footer-social-line"></li></ul></div>',3);function K(b,a,l,Q,i,X){const n=c("RouterLink"),g=c("user-sub-menu"),p=c("RouterView");return f(),h(k,null,[s("header",F,[s("div",U,[s("div",{class:r(["header-user-box",{black:i.currPath!=="/user/index"}])},[E,s("nav",O,[o(n,{to:"/"},{default:e(()=>[t("最新消息")]),_:1}),o(n,{to:{name:"login"}},{default:e(()=>[t("了解我們")]),_:1}),o(n,{to:{name:"product-list"}},{default:e(()=>[t("傢俱選購")]),_:1}),o(n,{to:{name:"login"},class:"nav-icon-shopping"},{default:e(()=>[y]),_:1}),o(n,{to:{name:"login"},class:"nav-icon-member"},{default:e(()=>[z]),_:1})]),s("div",{class:r(["burger",{active:i.showSubMenu===!0}]),onClick:a[0]||(a[0]=Y=>i.showSubMenu=!i.showSubMenu)},I,2)],2)]),u(o(g,null,null,512),[[_,i.showSubMenu]])]),o(p),u(s("footer",T,[W,s("div",j,[s("nav",q,[o(n,{class:"footer-link",to:"/"},{default:e(()=>[t("聯絡我們")]),_:1}),A,o(n,{class:"footer-link",to:{name:"login"}},{default:e(()=>[t("最新消息")]),_:1}),G,o(n,{class:"footer-link",to:{name:"login"}},{default:e(()=>[t("了解我們")]),_:1}),H,o(n,{class:"footer-link",to:{name:"login"}},{default:e(()=>[t("家具選購")]),_:1})]),J])],512),[[_,i.currPath!=="/user/index"]])],64)}const os=d(B,[["render",K]]);export{os as default};
