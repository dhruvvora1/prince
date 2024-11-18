"use strict";(self.webpackChunkNeighbour=self.webpackChunkNeighbour||[]).push([[411],{93:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var t=r(9722),a=r(4165),s=r(5861),i=r(9439),l=r(2791),c=r(3360),o=r(1413),d=r(5316),u=r(3855),m=r(3239),h=r(1049),p={createBroker:function(e){return h.Z.post("/broker/",e)},deleteBroker:function(e){return h.Z.delete("/broker/".concat(e))},getAllBroker:function(e,n){return h.Z.get("broker/all?page=".concat(e,"&size=").concat(n))},UpdateBroker:function(e){return h.Z.post("/broker/update",e)},getBrokerByID:function(e){return h.Z.get("/broker/".concat(e))}},x=r(184);function f(e){var n=e.formik,r=(0,l.useState)([]),t=(0,i.Z)(r,2),a=t[0],s=t[1];(0,l.useEffect)((function(){e.update&&0===a.length&&e.formik.values.file&&s([e.formik.values.file])}),[n]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(d.Z,(0,o.Z)((0,o.Z)({},e),{},{size:"large",onHide:function(){e.onHide(),n.resetForm(),s([])},"aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[(0,x.jsx)(d.Z.Header,{closeButton:!0}),(0,x.jsx)(d.Z.Body,{className:"text-center",children:(0,x.jsx)("div",{className:"col-122",children:(0,x.jsx)("div",{className:"card custom-card",children:(0,x.jsxs)("form",{onSubmit:n.handleSubmit,children:[(0,x.jsx)("h4",{children:e.update?"Update Broker":"Add Broker"}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(u.Z.Group,{controlid:"validationFormik101",className:"position-relative",children:[(0,x.jsxs)(u.Z.Label,{style:{textAlign:"start",color:"#000",marginTop:"15px"},children:["Heading: ",(0,x.jsx)("span",{className:"tx-danger",children:"*"})]}),(0,x.jsx)(u.Z.Control,{type:"text",name:"heading",placeholder:"Heading",value:n.values.heading,onChange:n.handleChange}),n.errors.heading&&n.touched.heading?(0,x.jsxs)("p",{className:"text-start error",children:[" ",n.errors.heading]}):null]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(u.Z.Group,{controlid:"validationFormik101",className:"position-relative",children:[(0,x.jsx)(u.Z.Label,{style:{textAlign:"start",color:"#000",marginTop:"15px"},children:"Link:"}),(0,x.jsx)(u.Z.Control,{type:"text",name:"link",placeholder:"Link",value:n.values.link,onChange:n.handleChange}),n.errors.name&&n.touched.name?(0,x.jsxs)("p",{className:"text-start error",children:[" ",n.errors.name]}):null]})}),(0,x.jsxs)(u.Z.Group,{className:"position-relative col-12",children:[(0,x.jsx)(u.Z.Control,{type:"file",name:"file",onChange:function(e){return function(e){var r=e.currentTarget.files[0];n.setFieldValue("file",r),s([r]);var t=URL.createObjectURL(r);s((function(e){return[t]}))}(e)},style:{marginTop:"15px"}}),e.update?(0,x.jsx)(x.Fragment,{children:e.photo?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("img",{src:e.photo,className:"img-responsive2 mt-3 pos-relative",alt:"Image"})}):(0,x.jsx)(x.Fragment,{children:a&&a.map((function(e,n){return(0,x.jsx)("div",{className:"image",children:(0,x.jsx)("img",{src:e,className:"img-responsive2 mt-3",alt:"upload"})},e)}))})}):"",n.errors.file&&n.touched.file?(0,x.jsxs)("p",{className:"text-start error",children:[" ",n.errors.file]}):null]}),(0,x.jsx)("div",{children:(0,x.jsxs)(x.Fragment,{children:[" ",(0,x.jsx)(c.Z,{type:"submit",style:{display:"flex",marginLeft:"auto",marginRight:"15px",marginTop:"15px"},children:e.loading?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(m.Z,{size:30,style:{textAlign:"center",color:"#fff"}})})}):"Submit"})]})})]})})})})]}))})}function g(e){var n=e.card,r=function(){var r=(0,s.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.deleteBroker(n);case 2:e.getAllPage(),e.onHide();case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(d.Z,(0,o.Z)((0,o.Z)({},e),{},{size:"large","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[(0,x.jsx)(d.Z.Header,{closeButton:!0}),(0,x.jsxs)(d.Z.Body,{className:"text-center",children:[(0,x.jsx)("i",{className:"icon ion-ios-checkmark-circle-outline tx-100 tx-danger  mg-t-20 "}),(0,x.jsx)("h4",{className:"tx-danger tx-semibold mg-b-20",children:"Delete!"}),(0,x.jsxs)("p",{className:"mg-b-20 mg-x-20 text-lowercase",children:["are you sure want to delete ",e.cardName," !"]}),(0,x.jsx)(c.Z,{type:"button",onClick:function(){return r(n)},variant:"danger",children:"Delete"})]})]}))})}var j=r(5705),v=r(7574),Z=(r(2426),r(3513)),k=(r(5106),r(5181)),b=r(7689),N=r(2144);var y=function(e){var n=e.name,r=e.columns,t=e.data,a=((0,b.UO)(),{columns:r,data:t});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"page-header2"}),(0,x.jsx)(N.Z,{className:"custom-card overflow-hidden",children:(0,x.jsxs)(N.Z.Body,{className:"pt-3 pl-3 pr-3",children:[(0,x.jsx)("div",{children:(0,x.jsx)("h6",{className:"main-content-label p-2  mb-1",children:n})}),(0,x.jsx)("div",{children:(0,x.jsx)(k.Z,(0,o.Z)((0,o.Z)({},a),{},{children:(0,x.jsx)(Z.ZP,{columns:r,data:t,noHeader:!0,responsive:!0,defaultSortField:"id",defaultSortAsc:!1,striped:!0,center:!0,persistTableHead:!0,pagination:!0,highlightOnHover:!0})}))})]})})]})},F=r(8007),S=(0,v.Z)((function(){var e=(0,l.useState)([]),n=(0,i.Z)(e,2),r=n[0],o=n[1],d=(0,l.useState)(0),u=(0,i.Z)(d,2),m=u[0],h=(u[1],(0,l.useState)(1)),v=(0,i.Z)(h,2),Z=(v[0],v[1],(0,l.useState)([])),k=(0,i.Z)(Z,2),b=k[0],N=(k[1],(0,l.useState)("")),S=(0,i.Z)(N,2),w=(S[0],S[1],(0,l.useState)([])),B=(0,i.Z)(w,2),C=B[0],A=(B[1],(0,l.useState)(!1)),H=(0,i.Z)(A,2),L=H[0],T=H[1],V=function(){return T(!1)},D=(0,l.useState)(!1),U=(0,i.Z)(D,2),q=U[0],z=U[1],P=(0,l.useState)(""),R=(0,i.Z)(P,2),E=R[0],G=R[1],I=(0,l.useState)(!1),O=(0,i.Z)(I,2),_=O[0],J=O[1],K=(0,l.useState)(""),M=(0,i.Z)(K,2),Q=(M[0],M[1],(0,l.useState)("")),W=(0,i.Z)(Q,2),X=W[0],Y=W[1],$=(0,l.useState)(""),ee=(0,i.Z)($,2),ne=ee[0],re=ee[1],te=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getAllBroker(m+1,10);case 2:n=e.sent,o(n.data.apiresponse.data.broker);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){te()}),[]);[{value:" ",label:"All"}].concat((0,t.Z)(b.map((function(e,n){return{value:C[n],label:e}}))));var ae=(0,t.Z)(b.map((function(e,n){return{value:C[n],label:e}}))),se=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,r){var t,s,i,l,c,o,d,u,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.id){e.next=21;break}return e.prev=1,t=n.file,s=n.heading,i=n.link,n.description,(l=new FormData).append("photo",t),l.append("heading",s),l.append("link",i),J(!0),e.next=10,p.createBroker(l);case 10:J(!1),te(),V(),r.resetForm(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("error",e.t0);case 19:e.next=41;break;case 21:return e.prev=21,c=n.id,o=n.file,d=n.heading,u=n.link,n.description,(m=new FormData).append("id",c),m.append("heading",d),m.append("link",u),o&&m.append("photo",o),J(!0),e.next=32,p.UpdateBroker(m);case 32:J(!1),V(),te(),r.resetForm(),e.next=41;break;case 38:e.prev=38,e.t1=e.catch(21),console.log("update error",e.t1);case 41:case"end":return e.stop()}}),e,null,[[1,16],[21,38]])})));return function(n,r){return e.apply(this,arguments)}}(),ie=F.Ry().shape({heading:F.Z_().required("Heading is required"),link:F.Z_().required("Link is required")}),le=(0,j.TA)({initialValues:{heading:"",link:"",file:null},validationSchema:ie,onSubmit:se}),ce=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var r,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(!0),""===n){e.next=14;break}return G(!0),e.next=5,p.getBrokerByID(n);case 5:r=e.sent,t=r.data.apiresponse.data,le.setFieldValue("id",t.id),le.setFieldValue("heading",t.heading),le.setFieldValue("file",t.photo),le.setFieldValue("link",t.link),re(t.image),e.next=18;break;case 14:G(!1),le.setFieldValue("heading",""),le.setFieldValue("link",""),le.setFieldValue("file","");case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),oe=[{name:(0,x.jsx)("b",{children:"Heading"}),selector:function(e){return e.heading},sortable:!0},{name:(0,x.jsx)("b",{children:"Link"}),selector:function(e){return e.link},sortable:!0},{name:(0,x.jsx)("b",{children:"Photo"}),selector:function(e){return(0,x.jsx)("img",{src:e.photo,alt:"",style:{objectFit:"cover",margin:5},width:"100",height:"80"})},sortable:!0},{name:(0,x.jsx)("b",{children:"Action"}),selector:function(e){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{children:[(0,x.jsx)(c.Z,{className:"btn-primary",onClick:function(){return ce(e.id)},children:(0,x.jsx)("i",{className:"fas fa-edit"})}),(0,x.jsx)(c.Z,{className:"ms-2 btn-danger",onClick:function(){return n=e.id,z(!q),void Y(n);var n},children:(0,x.jsx)("i",{className:"fas fa-trash"})})]})})},sortable:!0}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"page-header2"}),(0,x.jsxs)("div",{className:"d-flex",children:[(0,x.jsx)("div",{className:"mb-4 main-content-label tx-24",children:"All Broker"}),(0,x.jsx)("div",{className:"ms-auto me-4 d-flex",children:(0,x.jsxs)("button",{className:"text-white btn btn-primary ms-auto mb-4",onClick:function(){return ce("")},type:"button",children:[(0,x.jsx)("i",{className:"fas fa-plus"}),"\xa0 Add"]})}),(0,x.jsx)(f,{show:L,onHide:V,update:E,formik:le,options:ae,image:ne,loading:_})]}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)(y,{name:"broker",columns:oe,data:r})}),(0,x.jsx)(g,{show:q,onHide:function(){return z(!1)},card:X,getAllPage:te})]})}))},7574:function(e,n,r){var t=r(9439),a=r(2791),s=r(3949),i=r(184);n.Z=function(e){return function(){var n=(0,a.useState)(!0),r=(0,t.Z)(n,2),l=r[0],c=r[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){c(!1)}),500);return function(){clearTimeout(e)}}),[]),l?(0,i.jsx)(s.Z,{}):(0,i.jsx)(e,{})}}}}]);
//# sourceMappingURL=411.6efd51e3.chunk.js.map