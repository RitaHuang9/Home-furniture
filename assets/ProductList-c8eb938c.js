import{_,o as c,c as o,b as t,F as a,h as l,t as d,a as g,f as e}from"./index-36c2cb1b.js";const v={props:["products"]},$={class:"product-card"},m={class:"product-card-img"},f=["src"],k={class:"product-card-title"},x={class:"product-card-price"};function y(r,p,u,h,i,n){return c(),o("div",null,[t("ul",$,[(c(!0),o(a,null,l(u.products,s=>(c(),o("li",{class:"product-card-item",key:s.id},[t("div",m,[t("img",{src:s.imageUrl,alt:""},null,8,f)]),t("div",k,d(s.title),1),t("div",x,"$ "+d(s.price),1)]))),128))])])}const P=_(v,[["render",y]]),D={components:{ProductListAll:P},data(){return{url:"https://vue3-course-api.hexschool.io/v2/",api_path:"rita009",products:{},hotProducts:{}}},methods:{getData(){g.get(`${this.url}api/${this.api_path}/products/all`).then(r=>{this.products=r.data.products,this.hotProducts=this.products.slice(-3)}).catch(r=>{alert(r)})},goProductDetail(r){this.$router.push(`product-detail/${r}`)}},mounted(){this.getData()}},b={class:"product-list"},B=t("div",{class:"product-list-bg"},[t("div",{class:"page-title"},[e(" design "),t("span",{class:"page-sub-title"},[e("with heart,"),t("br"),e(" only for yourlike ")])])],-1),L={class:"container"},U={class:"product-hot"},C=t("div",{class:"product-title"},[e(" 熱門商品 "),t("span",{class:"product-title-en"},"HOT")],-1),F={class:"product-card hot"},N={class:"product-card-img"},T=["src"],V={class:"product-card-title"},w=t("div",{class:"product-card-category"},"椅子",-1),A={class:"product-all"},E={class:"product-card mt-10"},H=["onClick"],O={class:"product-card-img"},S=["src"],j={class:"product-card-title"},q={class:"product-card-price"};function z(r,p,u,h,i,n){return c(),o("div",b,[B,t("div",L,[t("div",U,[C,t("ul",F,[(c(!0),o(a,null,l(i.hotProducts,s=>(c(),o("li",{class:"product-card-item",key:s.id},[t("div",N,[t("img",{src:s.imageUrl,alt:""},null,8,T)]),t("div",V,d(s.title),1),w]))),128))])]),t("div",A,[t("ul",E,[(c(!0),o(a,null,l(i.products,s=>(c(),o("li",{class:"product-card-item",key:s.id,onClick:G=>n.goProductDetail(s.id)},[t("div",O,[t("img",{src:s.imageUrl,alt:""},null,8,S)]),t("div",j,d(s.title),1),t("div",q,"$ "+d(s.price),1)],8,H))),128))])])])])}const J=_(D,[["render",z]]);export{J as default};
