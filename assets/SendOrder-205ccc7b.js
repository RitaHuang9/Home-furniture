import{_ as b,a as m,r as c,o as y,c as x,b as s,d as l,e as _,t as u,f,n}from"./index-36c2cb1b.js";import{_ as g}from"./back-f8041f4a.js";const V={data(){return{url:"https://vue3-course-api.hexschool.io/v2/",api_path:"rita009",cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:""}},methods:{getCarts(){m.get(`${this.url}api/${this.api_path}/cart`).then(a=>{this.cart=a.data.data}).catch(a=>{alert(a.response.data.message)})},createOrder(){const a=this.form;m.post(`${this.url}api/${this.api_path}/order`,{data:a}).then(e=>{this.getCarts(),this.$refs.form.resetForm(),this.orderId=e.data.orderId,this.$router.push(`finish-order/${this.orderId}`),alert("訂單已送出～～")}).catch(e=>{alert(e.response.data.message)})}},mounted(){this.getCarts()}},k={class:"container"},E={class:"goBack"},B=s("img",{class:"goBack-icon",src:g,alt:""},null,-1),C=s("div",{class:"page-title"},"payment",-1),F={class:"flexBlock"},U={class:"flexBlock-left w-3"},q=s("div",{class:"page-title"},"summery",-1),w={class:"summery"},I={class:"summery-list"},S=s("p",{class:"summery-list-title"},"小計",-1),N={class:"summery-list-txt"},O=s("div",{class:"summery-list"},[s("p",{class:"summery-list-title"},"運費（不含搬運上樓）"),s("p",{class:"summery-list-txt"},"免運")],-1),L={class:"summery-total"},M={class:"summery-list"},R=s("p",{class:"summery-list-title"},[f("折扣後"),s("span",null,"總金額")],-1),z={class:"summery-list-txt"},D={class:"flexBlock-right w-7"},T={class:"feild"},j={class:"feild-body"},A=s("label",{for:"title",class:"form-label"},"Email",-1),G={class:"feild-input"},H={class:"feild"},J={class:"feild-body"},K=s("label",{for:"title",class:"form-label"},"收件人姓名",-1),P={class:"feild-input"},Q={class:"feild"},W={class:"feild-body"},X=s("label",{for:"title",class:"form-label"},"收件人電話",-1),Y={class:"feild-input"},Z={class:"feild"},$={class:"feild-body"},ss=s("label",{for:"title",class:"form-label"},"收件人地址",-1),es={class:"feild-input"},ts={class:"feild"},ls={class:"feild-body"},os=s("label",{for:"content",class:"form-label"},"留言",-1),as={class:"feild-input"},is=s("div",{class:"text-end"},[s("button",{type:"submit",class:"btn btn-lg btn-secondary mt-5"},"送出訂單")],-1);function ds(a,e,rs,ns,t,h){const p=c("RouterLink"),i=c("Field"),d=c("ErrorMessage"),v=c("Form");return y(),x("div",k,[s("div",E,[B,l(p,{class:"goBack-link",to:{name:"product-list"}},{default:_(()=>[f("繼續購物")]),_:1})]),C,s("div",F,[s("div",U,[q,s("div",w,[s("div",I,[S,s("p",N,"$ "+u(t.cart.total),1)]),O]),s("div",L,[s("div",M,[R,s("p",z,"$ "+u(t.cart.final_total),1)])])]),s("div",D,[l(v,{ref:"form",class:"table-full w-10",onSubmit:h.createOrder},{default:_(({errors:r})=>[s("div",T,[s("div",j,[A,s("div",G,[l(i,{id:"Email",name:"Email",type:"Email",class:n(["form-control",{"is-invalid":r.Email}]),placeholder:"請輸入Email",rules:"email|required",modelValue:t.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.user.email=o)},null,8,["class","modelValue"])]),l(d,{name:"Email",class:"invalid-feedback"})])]),s("div",H,[s("div",J,[K,s("div",P,[l(i,{id:"name",name:"姓名",type:"text",class:n(["form-control",{"is-invalid":r.收件人姓名}]),placeholder:"請輸入收件人姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.user.name=o)},null,8,["class","modelValue"])]),l(d,{name:"收件人姓名",class:"invalid-feedback"})])]),s("div",Q,[s("div",W,[X,s("div",Y,[l(i,{id:"tel",name:"電話",type:"text",class:n(["form-control",{"is-invalid":r.電話}]),placeholder:"請輸入電話",modelValue:t.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=o=>t.form.user.tel=o),rules:"required|min:8|max:10"},null,8,["class","modelValue"])]),l(d,{name:"電話",class:"invalid-feedback"})])]),s("div",Z,[s("div",$,[ss,s("div",es,[l(i,{id:"address",name:"收件人地址",type:"text",class:n(["form-control",{"is-invalid":r.收件人地址}]),placeholder:"請輸入收件人地址",modelValue:t.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=o=>t.form.user.address=o),rules:"required"},null,8,["class","modelValue"])]),l(d,{name:"收件人地址",class:"invalid-feedback"})])]),s("div",ts,[s("div",ls,[os,s("div",as,[l(i,{id:"content",name:"留言",type:"textarea",class:n(["form-control",{"is-invalid":r.留言}]),as:"textarea",placeholder:"請輸入留言",rules:"max:200",modelValue:t.form.message,"onUpdate:modelValue":e[4]||(e[4]=o=>t.form.message=o)},null,8,["class","modelValue"])]),l(d,{name:"留言",class:"invalid-feedback"})])]),is]),_:1},8,["onSubmit"])])])])}const _s=b(V,[["render",ds]]);export{_s as default};
