(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__FsH3R",avatar:"Profile_avatar__3xdxd",name:"Profile_name__3SEE_",tag:"Profile_tag__3GHvX",location:"Profile_location__1eniT",stats:"Profile_stats__3faKH",statsItem:"Profile_statsItem__OMB22",label:"Profile_label__38ep4",quantity:"Profile_quantity__1zXk7"}},function(e,a,t){e.exports={pricingItem:"PricingItem_pricingItem__2Gtd1",iconBlock:"PricingItem_iconBlock__1SrHd",label:"PricingItem_label__3IWDH",capacity:"PricingItem_capacity__2n789",description:"PricingItem_description__1omii",price:"PricingItem_price__2KNKF",button:"PricingItem_button__3NN6h"}},function(e,a,t){e.exports={statsSection:"Stats_statsSection__2lmFI",title:"Stats_title__11vc4",statsList:"Stats_statsList__nAR1F",item:"Stats_item__4K0bl",label:"Stats_label__1mmDR",percentage:"Stats_percentage__1E4yB"}},function(e,a,t){e.exports={pricingPlan:"PricingPlan_pricingPlan__1sOnA"}},,,function(e,a,t){e.exports={App:"App_App__1mesu"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1xL6B"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":"Bronze","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/bronze-icon.png","capacity":"2TB","price":39,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.","primaryColor":"#DD7C4B"},{"id":"id-2","label":"Silver","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/silver-icon.png","capacity":"20TB","price":99,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.","primaryColor":"#C0C0C0"},{"id":"id-3","label":"Gold","icon":"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/gold-icon.png","capacity":"400TB","price":499,"description":"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.","primaryColor":"#DDA431"}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(6),r=t.n(i),l=t(7),s=t.n(l),o=t(1),m=t.n(o),d=function(e){var a=e.user;return c.a.createElement("div",{className:m.a.profile},c.a.createElement("div",{className:m.a.description},c.a.createElement("img",{src:a.avatar,alt:"user avatar",className:m.a.avatar})," ",c.a.createElement("p",{className:m.a.name}," ",a.name," ")," ",c.a.createElement("p",{className:m.a.tag}," ",a.tag.slice(1)," ")," ",c.a.createElement("p",{className:m.a.location}," ",a.location," ")," "),c.a.createElement("ul",{className:m.a.stats},c.a.createElement("li",{className:m.a.statsItem},c.a.createElement("span",{className:m.a.label}," Followers ")," ",c.a.createElement("span",{className:m.a.quantity}," ",a.stats.followers," ")," ")," ",c.a.createElement("li",{className:m.a.statsItem},c.a.createElement("span",{className:m.a.label}," Views ")," ",c.a.createElement("span",{className:m.a.quantity}," ",a.stats.views," ")," ")," ",c.a.createElement("li",{className:m.a.statsItem},c.a.createElement("span",{className:m.a.label}," Likes ")," ",c.a.createElement("span",{className:m.a.quantity}," ",a.stats.likes," ")," ")," ")," ")},p=t(3),u=t.n(p),b=function(){var e=(255*Math.random()).toFixed(0),a=(255*Math.random()).toFixed(0),t=(255*Math.random()).toFixed(0);return"".concat(e,", ").concat(a,", ").concat(t)},y=function(e){var a=e.title,t=e.stats,n=void 0===t?[]:t;return c.a.createElement("section",{className:u.a.statsSection},a&&c.a.createElement("h2",{className:u.a.title}," ",a," "),c.a.createElement("ul",{className:u.a.statsList},n.map((function(e){return c.a.createElement("li",{key:e.id,style:{backgroundColor:"rgb(".concat(b(),")")},className:u.a.item},c.a.createElement("span",{className:u.a.label}," ",e.label," "),c.a.createElement("span",{className:u.a.percentage}," ",e.percentage," % "))}))))};y.defaultProps={title:""};var _=y,f=t(8),g=t.n(f),E=function(e){var a=e.items;return c.a.createElement("table",{className:g.a.transactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),a.map((function(e){return c.a.createElement("tbody",{key:e.id},c.a.createElement("tr",null,c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency)))})))},N=t(2),h=t.n(N),v=function(e){var a=e.label,t=e.icon,n=e.capacity,i=e.price,r=e.description,l=e.primaryColor;return c.a.createElement("div",{className:h.a.pricingItem},c.a.createElement("div",{className:h.a.iconBlock},c.a.createElement("i",{className:h.a.icon,style:{content:"url(".concat(t,")")}})),c.a.createElement("h2",{className:h.a.label,style:{color:l}},a),c.a.createElement("p",{className:h.a.capacity},n),c.a.createElement("p",{className:h.a.description},r),c.a.createElement("p",{className:h.a.price},"$".concat(i,"/MO")),c.a.createElement("button",{className:h.a.button,type:"button",style:{backgroundColor:l}},"Get Started"))},w=t(4),P=t.n(w),k=function(e){var a=e.items;return c.a.createElement("ul",{className:P.a.pricingPlan},a.map((function(e){return c.a.createElement("li",{key:e.id,className:P.a.pricingPlan},c.a.createElement(v,{item:a,label:e.label,icon:e.icon,capacity:e.capacity,price:e.price,description:e.description,primaryColor:e.primaryColor}))})))},S=t(9),I=t(10),C={name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",stats:{followers:5603,views:4827,likes:1308}},x=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}],B=function(){return c.a.createElement("div",{className:s.a.App},c.a.createElement(d,{user:C}),c.a.createElement(_,{title:"Upload stats",stats:x}),c.a.createElement(k,{items:S}),c.a.createElement(E,{items:I}))};r.a.render(c.a.createElement(B,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1045abf0.chunk.js.map