"use strict";(self.webpackChunkNeighbour=self.webpackChunkNeighbour||[]).push([[430],{4447:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(9722),r=n(4165),s=n(5861),i=n(9439),c=n(2791),o=n(3360),l=n(1413),u=n(5316),d=n(3855),m=(n(5572),n(3239)),f=n(4411),p=(n(2426),n(184));function h(e){var t=e.formik,n=(0,c.useState)([]),a=(0,i.Z)(n,2),r=a[0],s=a[1];return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(u.Z,(0,l.Z)((0,l.Z)({},e),{},{size:"large","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[(0,p.jsx)(u.Z.Header,{closeButton:!0}),(0,p.jsx)(u.Z.Body,{className:"text-center",children:(0,p.jsx)("div",{className:"col-122",children:(0,p.jsx)("div",{className:"card custom-card",children:(0,p.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,p.jsx)("h4",{children:e.update?"Update Intraday":"Add Notification"}),(0,p.jsx)("div",{className:"col-12",children:(0,p.jsxs)(d.Z.Group,{controlid:"validationFormik101",className:"position-relative",children:[(0,p.jsxs)(d.Z.Label,{style:{textAlign:"start",color:"#000",marginTop:"15px"},children:["Title: ",(0,p.jsx)("span",{className:"tx-danger",children:"*"})]}),(0,p.jsx)(d.Z.Control,{type:"text",name:"heading",placeholder:"Heading",value:t.values.heading,onChange:t.handleChange}),t.errors.heading&&t.touched.heading?(0,p.jsxs)("p",{className:"text-start error",children:[" ",t.errors.heading]}):null]})}),(0,p.jsx)("div",{className:"col-12",children:(0,p.jsxs)(d.Z.Group,{controlid:"validationFormik101",className:"position-relative",children:[(0,p.jsxs)(d.Z.Label,{style:{textAlign:"start",color:"#000",marginTop:"15px"},children:["Description: ",(0,p.jsx)("span",{className:"tx-danger",children:"*"})]}),(0,p.jsx)(d.Z.Control,{type:"text",name:"description",placeholder:"Description",value:t.values.description,onChange:t.handleChange}),t.errors.description&&t.touched.description?(0,p.jsxs)("p",{className:"text-start error",children:[" ",t.errors.description]}):null]})}),(0,p.jsxs)(d.Z.Group,{className:"position-relative col-12",children:[(0,p.jsx)(d.Z.Control,{type:"file",name:"file",onChange:function(e){return function(e){var n=e.currentTarget.files[0];t.setFieldValue("file",n),s([n]);var a=URL.createObjectURL(n);s((function(e){return[a]}))}(e)},style:{marginTop:"15px"}}),e.update?(0,p.jsx)(p.Fragment,{children:e.photo?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("img",{src:e.photo,className:"img-responsive2 mt-3 pos-relative",alt:"Image"})}):(0,p.jsx)(p.Fragment,{children:r&&r.map((function(e,t){return(0,p.jsx)("div",{className:"image",children:(0,p.jsx)("img",{src:e,className:"img-responsive2 mt-3",alt:"upload"})},e)}))})}):"",t.errors.file&&t.touched.file?(0,p.jsxs)("p",{className:"text-start error",children:[" ",t.errors.file]}):null]}),(0,p.jsx)("div",{children:(0,p.jsxs)(p.Fragment,{children:[" ",(0,p.jsx)(o.Z,{type:"submit",style:{display:"flex",marginLeft:"auto",marginRight:"15px",marginTop:"15px"},children:e.loading?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,p.jsx)(m.Z,{size:30,style:{textAlign:"center",color:"#fff"}})})}):"Submit"})]})})]})})})})]}))})}function x(e){var t=e.card,n=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.Z.Delete(t);case 2:e.getAllPage(),e.onHide();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(u.Z,(0,l.Z)((0,l.Z)({},e),{},{size:"large","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[(0,p.jsx)(u.Z.Header,{closeButton:!0}),(0,p.jsxs)(u.Z.Body,{className:"text-center",children:[(0,p.jsx)("i",{className:"icon ion-ios-checkmark-circle-outline tx-100 tx-danger  mg-t-20 "}),(0,p.jsx)("h4",{className:"tx-danger tx-semibold mg-b-20",children:"Delete!"}),(0,p.jsxs)("p",{className:"mg-b-20 mg-x-20 text-lowercase",children:["are you sure want to delete ",e.cardName," !"]}),(0,p.jsx)(o.Z,{type:"button",onClick:function(){return n(t)},variant:"danger",children:"Delete"})]})]}))})}var g=n(5705),Z=(n(8007),n(7574)),v=n(3513),j=(n(5106),n(5181)),b=n(7689),y=n(2144);var F=function(e){var t=e.name,n=e.columns,a=e.data,r=((0,b.UO)(),{columns:n,data:a});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"page-header2"}),(0,p.jsx)(y.Z,{className:"custom-card overflow-hidden",children:(0,p.jsxs)(y.Z.Body,{className:"pt-3 pl-3 pr-3",children:[(0,p.jsx)("div",{children:(0,p.jsx)("h6",{className:"main-content-label p-2  mb-1",children:t})}),(0,p.jsx)("div",{children:(0,p.jsx)(j.Z,(0,l.Z)((0,l.Z)({},r),{},{children:(0,p.jsx)(v.ZP,{columns:n,data:a,noHeader:!0,responsive:!0,defaultSortField:"id",defaultSortAsc:!1,striped:!0,center:!0,persistTableHead:!0,pagination:!0,highlightOnHover:!0})}))})]})})]})},S=n(7288),k=(0,Z.Z)((function(){var e=(0,c.useState)([]),t=(0,i.Z)(e,2),n=t[0],l=t[1],u=(0,c.useState)(0),d=(0,i.Z)(u,2),m=d[0],f=(d[1],(0,c.useState)([])),Z=(0,i.Z)(f,2),v=Z[0],j=(Z[1],(0,c.useState)([])),b=(0,i.Z)(j,2),y=b[0],k=(b[1],(0,c.useState)(!1)),w=(0,i.Z)(k,2),N=w[0],V=w[1],Y=function(){return V(!1)},z=(0,c.useState)(!1),B=(0,i.Z)(z,2),I=B[0],W=B[1],X=(0,c.useState)(""),O=(0,i.Z)(X,2),_=O[0],J=O[1],M=(0,c.useState)(!1),R=(0,i.Z)(M,2),U=R[0],Q=(R[1],(0,c.useState)("")),C=(0,i.Z)(Q,2),D=(C[0],C[1],(0,c.useState)("")),T=(0,i.Z)(D,2),A=T[0],q=T[1],L=(0,c.useState)(""),P=(0,i.Z)(L,2),G=P[0],H=P[1],K=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.Z.GetList(m+1,10);case 2:t=e.sent,l(t.data.apiresponse.data.monthly);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){K()}),[]);var E=[{value:" ",label:"All"}].concat((0,a.Z)(v.map((function(e,t){return{value:y[t],label:e}})))),$=((0,a.Z)(v.map((function(e,t){return{value:y[t],label:e}}))),E.find((function(e){return e.value===Object(y)}))),ee=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://fcm.googleapis.com/v1/projects/notification-cf86e/messages:send",n={message:{token:"topics/all",notification:{}}},"ya29.c.c0ASRK0GbFHtCIOPxZKXbNxhXXwd7NgcvMTymy3L9DIxlj42_dDFncsJNjHWAEuyzZ9UU4VvA8MZ0JWTe1f4vPCcw5k50P1SnwLb5Ic0IRTDNWOWjB7mVb232nfWRPf0F_xVic62QfFxHl6jUp12blsq6fHsiPqwwZh0-J2gz4N70c9YzhmMxUF4Ljns8DTbvkQb906Qh1P8u0aU-GIwN7_uv4F8MxVoSmsSuriK8otleghu2JZQrb2odfZz_aZYM5k3I6DaxP-VGO3FAxtO7mgb1UtmqoPYWh8GLkepelUcQT_SZ9GfdxGg1Q4CuYSwBT9gBsEWU0IY4LdnXxWHDanoxuKMk8_l61yz9CWsODuqhmrJiZTeaeRmXKRAN387C5S_IFdd0orS8vSY1BfJ3jkXJ-FjpXBvV7WM154k5Bs913tYg2zjMF6dfJYIauep_R1Y439tZMvyrV7WQM1Xq5m3l0bFolnQb74mmIkW74cbBb3dUmZgv5vpprRy3kUVM2yYYXS3Ydw2hB6isd2a-6Bd3Y5_4YrzBhks5JvSOedv-3vmpZJwMf9I47gzs3zSm5BV8y189UtdBFQeYz3hSkg-0wj5jeZi0s6Xu2smeOf_X8p50Y4aW_VOhlf0bYRSohzYuu3ewX7WBuB48Rqlam0r57Qd_WMYF3JX2mjfj2zObVgyWWgoJdk59w8WhmyqR32_mpZdZg5Vw9FufvXX1yOzzomcWf2QyhtSq1yuovnjW2ykgQYdb3Zo3f3I93VvSXzm_rc2-y8-ai8nwvrIsYIonqdyuOoaYekl0VBndz8nfVkgdQi0RnF4jbuUj9Z8nYQa4pVm-ZRwBZzIz1adbZz4_s8IvRbbeISasJb_bRB8abMOv4pZQtg2iXU-JSRcl_vxhV7lFOXWfJv0to40BnItM5JZarauIvp4VSdWuQp6gF2j483g2mJcfSzOo1zdg334OYmygru_t-Xfv2ahoX5wYOB9bXu1c_wFMqIiaecFVSamm0ZnMrdqi",e.prev=3,e.next=6,fetch("https://fcm.googleapis.com/v1/projects/notification-cf86e/messages:send",{method:"POST",headers:{Authorization:"Bearer ".concat("ya29.c.c0ASRK0GbFHtCIOPxZKXbNxhXXwd7NgcvMTymy3L9DIxlj42_dDFncsJNjHWAEuyzZ9UU4VvA8MZ0JWTe1f4vPCcw5k50P1SnwLb5Ic0IRTDNWOWjB7mVb232nfWRPf0F_xVic62QfFxHl6jUp12blsq6fHsiPqwwZh0-J2gz4N70c9YzhmMxUF4Ljns8DTbvkQb906Qh1P8u0aU-GIwN7_uv4F8MxVoSmsSuriK8otleghu2JZQrb2odfZz_aZYM5k3I6DaxP-VGO3FAxtO7mgb1UtmqoPYWh8GLkepelUcQT_SZ9GfdxGg1Q4CuYSwBT9gBsEWU0IY4LdnXxWHDanoxuKMk8_l61yz9CWsODuqhmrJiZTeaeRmXKRAN387C5S_IFdd0orS8vSY1BfJ3jkXJ-FjpXBvV7WM154k5Bs913tYg2zjMF6dfJYIauep_R1Y439tZMvyrV7WQM1Xq5m3l0bFolnQb74mmIkW74cbBb3dUmZgv5vpprRy3kUVM2yYYXS3Ydw2hB6isd2a-6Bd3Y5_4YrzBhks5JvSOedv-3vmpZJwMf9I47gzs3zSm5BV8y189UtdBFQeYz3hSkg-0wj5jeZi0s6Xu2smeOf_X8p50Y4aW_VOhlf0bYRSohzYuu3ewX7WBuB48Rqlam0r57Qd_WMYF3JX2mjfj2zObVgyWWgoJdk59w8WhmyqR32_mpZdZg5Vw9FufvXX1yOzzomcWf2QyhtSq1yuovnjW2ykgQYdb3Zo3f3I93VvSXzm_rc2-y8-ai8nwvrIsYIonqdyuOoaYekl0VBndz8nfVkgdQi0RnF4jbuUj9Z8nYQa4pVm-ZRwBZzIz1adbZz4_s8IvRbbeISasJb_bRB8abMOv4pZQtg2iXU-JSRcl_vxhV7lFOXWfJv0to40BnItM5JZarauIvp4VSdWuQp6gF2j483g2mJcfSzOo1zdg334OYmygru_t-Xfv2ahoX5wYOB9bXu1c_wFMqIiaecFVSamm0ZnMrdqi"),"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Error: ".concat(a.statusText));case 9:return e.next=11,a.json();case 11:s=e.sent,console.log("Notification sent successfully:",s),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error("Failed to send notification:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),te=(0,g.TA)({initialValues:{heading:"",description:"",level:"",pattern:"",date:"",file:null},onSubmit:ee}),ne=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V(!0),""===t){e.next=16;break}return J(!0),e.next=5,S.Z.getByID(t);case 5:n=e.sent,a=n.data.apiresponse.data,te.setFieldValue("id",a.id),te.setFieldValue("heading",a.heading),te.setFieldValue("description",a.description),te.setFieldValue("file",a.photo),te.setFieldValue("level",a.level),te.setFieldValue("pattern",a.pattern),q(a.image),e.next=21;break;case 16:J(!1),te.setFieldValue("heading",""),te.setFieldValue("description",""),te.setFieldValue("link",""),te.setFieldValue("file","");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=[{name:(0,p.jsx)("b",{children:"Heading"}),selector:function(e){return e.heading},sortable:!0},{email:(0,p.jsx)("b",{children:"Description"}),selector:function(e){return e.description},sortable:!0},{name:(0,p.jsx)("b",{children:"Link"}),selector:function(e){return e.link},sortable:!0},{name:(0,p.jsx)("b",{children:"Photo"}),selector:function(e){return(0,p.jsx)("img",{src:e.photo,alt:"",style:{objectFit:"cover",margin:5},width:"100",height:"80"})},sortable:!0},{name:(0,p.jsx)("b",{children:"Action"}),selector:function(e){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(o.Z,{className:"btn-primary",onClick:function(){return ne(e.id)},children:(0,p.jsx)("i",{className:"fas fa-edit"})}),(0,p.jsx)(o.Z,{className:"ms-2 btn-danger",onClick:function(){return t=e.id,W(!I),void H(t);var t},children:(0,p.jsx)("i",{className:"fas fa-trash"})})]})})},sortable:!0}];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"page-header2"}),(0,p.jsxs)("div",{className:"d-flex",children:[(0,p.jsx)("div",{className:"mb-4 main-content-label tx-24",children:"All Notification"}),(0,p.jsx)("div",{className:"ms-auto me-4 d-flex",children:(0,p.jsxs)("button",{className:"text-white btn btn-primary ms-auto mb-4",onClick:function(){return ne("")},type:"button",children:[(0,p.jsx)("i",{className:"fas fa-plus"}),"\xa0 Add"]})}),(0,p.jsx)(h,{show:N,onHide:Y,update:_,formik:te,image:A,selectedOption2:$,loading:U,handleChangeDate:function(e){var t=new Date(e.target.value).getTime();te.setFieldValue("date",t)}})]}),(0,p.jsx)("div",{className:"row",children:(0,p.jsx)(F,{name:"Notification",columns:ae,data:n})}),(0,p.jsx)(x,{show:I,onHide:function(){return W(!1)},card:G,getAllPage:K})]})}))},7574:function(e,t,n){var a=n(9439),r=n(2791),s=n(3949),i=n(184);t.Z=function(e){return function(){var t=(0,r.useState)(!0),n=(0,a.Z)(t,2),c=n[0],o=n[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){o(!1)}),500);return function(){clearTimeout(e)}}),[]),c?(0,i.jsx)(s.Z,{}):(0,i.jsx)(e,{})}}},5572:function(e,t,n){var a=n(1049),r={create:function(e){return a.Z.post("/blog/",e)},Delete:function(e){return a.Z.delete("/blog/".concat(e))},getAll:function(e,t){return a.Z.get("blog/all?page=".concat(e,"&size=").concat(t))},Update:function(e){return a.Z.post("/blog/update",e)},getByID:function(e){return a.Z.get("/blog/".concat(e))}};t.Z=r},4411:function(e,t,n){var a=n(4165),r=n(5861),s=n(1049),i=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/intraday/",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c={Create:i,Delete:function(e){return s.Z.delete("/intraday/".concat(e))},GetList:function(e,t){return s.Z.get("/intraday/all?page=".concat(e,"&size=").concat(t))},GetListByID:function(e){return s.Z.get("/intraday/".concat(e))},Update:function(e){return s.Z.post("/intraday/update",e)}};t.Z=c},7288:function(e,t,n){var a=n(4165),r=n(5861),s=n(1049),i=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/monthly/",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c={Create:i,Delete:function(e){return s.Z.delete("/monthly/".concat(e))},GetList:function(e,t){return s.Z.get("/monthly/all?page=".concat(e,"&size=").concat(t))},GetListByID:function(e){return s.Z.get("/monthly/".concat(e))},Update:function(e){return s.Z.post("/monthly/update",e)}};t.Z=c}}]);
//# sourceMappingURL=430.c787bd87.chunk.js.map