import{_,r as a,o as f,c as m,b as o,d as s,e,h as t,n as d,w as g,v as k,k as S}from"./index-c85d6442.js";import{_ as w}from"./logo-white-9912caca.js";const h="/Home-furniture/assets/shopping-car-c43783b4.svg",v="/Home-furniture/assets/member-22f3e873.svg",M={},x={class:"subMenu"},L={class:"subMenu-box"},V={class:"subMenu-icon"},$=o("img",{src:h,alt:""},null,-1),y=o("img",{src:v,alt:""},null,-1);function R(c,r){const i=a("RouterLink");return f(),m("div",x,[o("div",L,[o("div",V,[s(i,{to:{name:"carts"},class:"subMenu-icon-link subMenu-icon-shopping"},{default:e(()=>[$,t(" 購物車 ")]),_:1}),s(i,{to:{name:"login"},class:"subMenu-icon-link subMenu-icon-member"},{default:e(()=>[y,t(" 登入")]),_:1})]),s(i,{class:"subMenu-box-link",to:"/"},{default:e(()=>[t("最新消息")]),_:1}),s(i,{class:"subMenu-box-link",to:{name:"login"}},{default:e(()=>[t("了解我們")]),_:1}),s(i,{class:"subMenu-box-link",to:{name:"product-list"}},{default:e(()=>[t("傢俱選購")]),_:1})])])}const E=_(M,[["render",R]]),N="/Home-furniture/assets/logo-black-59c266ff.svg",P={data(){return{showSubMenu:!1,currPath:"/",isSticky:!1,targetPosition:650}},components:{UserSubMenu:E},methods:{closeSubMenu(){this.showSubMenu=!1},handleScroll(){const c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;this.isSticky=c>this.targetPosition}},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},mounted(){this.currPath=this.$route.path,window.addEventListener("scroll",this.handleScroll)}},B={class:"header-user",ref:"indexBanner"},C={class:"header-user-top"},T=o("img",{alt:"Vue logo",class:"logo",src:w},null,-1),H={class:"nav"},O=o("img",{src:h,alt:""},null,-1),U=o("img",{src:v,alt:""},null,-1),D=o("div",{class:"burger-item"},null,-1),z=[D],F={class:"footer-main"},I=o("div",{class:"footer-right"},[o("div",{class:"footer-right-content"},[o("img",{class:"footer-logo",src:N,alt:""}),o("p",{class:"footer-right-slogan"},"讓你在家的每時每刻都是享受")])],-1),W={class:"footer-left"},Y={class:"footer-nav"},j=o("div",{class:"footer-link-circle"},null,-1),q=o("div",{class:"footer-link-circle"},null,-1),A=o("div",{class:"footer-link-circle"},null,-1),G=S('<div class="footer-info"><div class="footer-info-title">聯絡地址</div><div class="footer-info-content">新北市板橋區文化路三段33號1樓</div></div><div class="footer-info"><div class="footer-info-title">LINE 客服時間</div><div class="footer-info-content">每週一到五 09:00 - 18:00</div></div><div class="footer-bottom"><p>此為作品集使用，不做商業用途</p><ul class="footer-social"><li>FOLLOW US</li><li class="footer-social-yt"></li><li class="footer-social-fb"></li><li class="footer-social-line"></li></ul></div>',3);function J(c,r,i,K,l,Q){const n=a("RouterLink"),b=a("user-sub-menu"),p=a("RouterView");return f(),m("div",{onScroll:r[1]||(r[1]=(...u)=>c.onScroll&&c.onScroll(...u))},[o("header",B,[o("div",C,[o("div",{class:d(["header-user-box",{black:l.currPath!=="/user/index",black:l.isSticky}])},[s(n,{to:{name:"index"}},{default:e(()=>[T]),_:1}),o("nav",H,[s(n,{to:{name:"index"}},{default:e(()=>[t("最新消息")]),_:1}),s(n,{to:{name:"index"}},{default:e(()=>[t("了解我們")]),_:1}),s(n,{to:{name:"product-list"}},{default:e(()=>[t("傢俱選購")]),_:1}),s(n,{to:{name:"carts"},class:"nav-icon-shopping"},{default:e(()=>[O]),_:1}),s(n,{to:{name:"login"},class:"nav-icon-member"},{default:e(()=>[U]),_:1})]),o("div",{class:d(["burger",{active:l.showSubMenu===!0}]),onClick:r[0]||(r[0]=u=>l.showSubMenu=!l.showSubMenu)},z,2)],2)]),g(s(b,null,null,512),[[k,l.showSubMenu]])],512),s(p),o("footer",F,[I,o("div",W,[o("nav",Y,[s(n,{class:"footer-link",to:{name:"index"}},{default:e(()=>[t("聯絡我們")]),_:1}),j,s(n,{class:"footer-link",to:{name:"index"}},{default:e(()=>[t("最新消息")]),_:1}),q,s(n,{class:"footer-link",to:{name:"index"}},{default:e(()=>[t("了解我們")]),_:1}),A,s(n,{class:"footer-link",to:{name:"product-list"}},{default:e(()=>[t("家具選購")]),_:1})]),G])])],32)}const oo=_(P,[["render",J]]);export{oo as default};
