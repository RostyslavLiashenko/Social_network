(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[3],{391:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1M9Hk",userPhoto:"ProfileInfo_userPhoto__24oOa",buttonWrapper:"ProfileInfo_buttonWrapper__10Ty_",label:"ProfileInfo_label__2Ghn4",uploadBox:"ProfileInfo_uploadBox__2G2So",statusBlock:"ProfileInfo_statusBlock__3LcA4",status:"ProfileInfo_status__2OHjH",statusMsg:"ProfileInfo_statusMsg__3JLMf"}},393:function(e,t,s){"use strict";var o=s(2),c=s(4),a=s(0),n=(s(3),s(7)),r=s(9),i=s(11),l=a.forwardRef((function(e,t){var s=e.classes,r=e.className,l=e.color,u=void 0===l?"inherit":l,d=e.component,p=void 0===d?"span":d,h=e.fontSize,f=void 0===h?"default":h,m=Object(c.a)(e,["classes","className","color","component","fontSize"]);return a.createElement(p,Object(o.a)({className:Object(n.a)("material-icons",s.root,r,"inherit"!==u&&s["color".concat(Object(i.a)(u))],"default"!==f&&s["fontSize".concat(Object(i.a)(f))]),"aria-hidden":!0,ref:t},m))}));l.muiName="Icon",t.a=Object(r.a)((function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}}),{name:"MuiIcon"})(l)},394:function(e,t,s){"use strict";var o=s(112),c=s(113);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(s(0)),n=(0,o(s(114)).default)(a.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.default=n},395:function(e,t,s){e.exports={posts:"MyPosts_posts__3wmln",postsBlock:"MyPosts_postsBlock__3cMyZ",textField:"MyPosts_textField__39Qge"}},396:function(e,t,s){e.exports={item:"Post_item__3NGYA",photo:"Post_photo__3igyh",postMsg:"Post_postMsg__1SPwk",btn:"Post_btn__61Kio",iconImage:"Post_iconImage__3tFns",likeIcon:"Post_likeIcon__NQuqW",dislikeIcon:"Post_dislikeIcon__2EhTq",msg:"Post_msg__356Cr"}},397:function(e,t,s){e.exports={profileContainer:"Profile_profileContainer__1DEDm",myPosts:"Profile_myPosts__3TZ-8"}},401:function(e,t,s){"use strict";s.r(t);var o=s(6),c=s(66),a=s(67),n=s(75),r=s(74),i=s(0),l=s(391),u=s.n(l),d=s(71),p=s(49),h=s(352),f=s(394),m=s.n(f),b=s(1),j=function(e){var t=Object(i.useState)(!1),s=Object(p.a)(t,2),o=s[0],c=s[1],a=Object(i.useState)(e.status),n=Object(p.a)(a,2),r=n[0],l=n[1];Object(i.useEffect)((function(){l(e.status)}),[e.status]);return Object(b.jsxs)("div",{className:u.a.statusBlock,children:[Object(b.jsx)("span",{className:u.a.status,children:"Status: "}),o?Object(b.jsx)(h.a,{onChange:function(e){l(e.target.value)},autoFocus:!0,onBlur:function(){c((function(){return!1})),e.updateUserStatus(r)},type:"text",value:r}):Object(b.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(b.jsx)("span",{className:u.a.statusMsg,children:r||"---"}),Object(b.jsx)(m.a,{style:{cursor:"pointer"},onClick:function(){e.isOwner&&c((function(){return!0}))}})]})]})},A=s(29),O=s(174),P=s(388),g=s(43),w=Object(g.a)(i.createElement(i.Fragment,null,i.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),i.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})),"PhotoCamera"),k=function(e){var t,s,o=e.user,c=e.status,a=e.updateUserStatus,n=e.isOwner,r=e.addPhoto;if(!o)return Object(b.jsx)(d.a,{});return Object(b.jsxs)("div",{className:u.a.descriptionBlock,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:null!==(t=null!==(s=o.photos.large)&&void 0!==s?s:o.photos)&&void 0!==t?t:A.a,className:u.a.userPhoto,alt:"avatar"})}),n&&Object(b.jsxs)("div",{style:{margin:"10px 60px"},children:[Object(b.jsx)("input",{color:"primary",accept:"image/*",type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])},id:"icon-button-file",style:{display:"none"}}),Object(b.jsx)("label",{htmlFor:"icon-button-file",children:Object(b.jsx)(P.a,{variant:"contained",component:"span",style:{color:"#fff",backgroundColor:"#2b3120"},startIcon:Object(b.jsx)(w,{}),size:"large",children:"Upload photo"})})]}),Object(b.jsx)(j,{isOwner:n,status:c,updateUserStatus:a}),Object(b.jsx)(O.a,{user:o})]})},v=s(73),x=s(395),y=s.n(x),I=s(396),B=s.n(I),S=function(e){return Object(b.jsxs)("div",{className:B.a.item,id:e.id,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:B.a.photo,src:e.photo,alt:"user icon"})}),Object(b.jsxs)("div",{className:B.a.postMsg,children:[Object(b.jsx)("div",{className:B.a.msg,children:e.message}),Object(b.jsx)("div",{children:Object(b.jsxs)("button",{onClick:function(){return e.toggleLikes(e.id)},className:B.a.btn,children:[Object(b.jsx)("span",{children:Object(b.jsx)("img",{src:e.liked?"data:image/png;base64,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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABkCAYAAABnwAWdAAALk0lEQVR4Xu2dBcwtRxXHf8WKQ3F3Dw7BXYKE4BQP7g4FglPcnRI8pLhLcIfg7sHdocXd8ns5Q+fdb+/evauz37cnad57t7szZ85/Z+bYnDmAhWYpgQNmyfXCNAtwM/0IFuAW4BpJ4HjAGYEzAycHjgX8Efgx8APgl8A/G7U0/kMHAqcATgmcNHj/c/D8M+D3wH/GYmvoGXda4N7ALWKwTcbl4L8NPAd4OaBwpiA/rnsBBwfvTWT1b+BbwAuBwwPMQXhvwsy2HTuLHhGD9u+r9F/AAf4j/vSZYwBHX9PRkcAhAaLvDkknBJ4B3LSGHz8s/5MX5Sff6+T4V+CJwJP7Xkn6BE4AnCHXXZHsH4BXAS8Gvh6AVQlfXk4EXAa4G3D5ADQ9q6AUwMNCaH0CeGLgHcBFVxr1o3ltzJ6vAgJR9fEI3kmAywK3D96PudLWu+KD6GUF6Qu4h8QsS7w6o54NHNpxqTt9LJnXyITg135b4JU9Ifd84DZZW3+LsRwG/L1DHycDHh1tHy1r5yXAXbp+fF2Bc5N2Fh0UjAnYXYGXdhhw1at+0Y8B7pf9zx8CFwD+0rIv99+vAceN923n+sAHWrZX99pNgBeFQuNzKmCXAL7Stq8uwLkkuowkckO+e9cvacNA3AvfBFwtnnPZuirwkS0FcPOVj+vhwBO2bKPN4w+IDzC9+yTgoW0aagvcY4H7R4cuLecPdb4ND23euTDwsUyB2Ebwz4ylyn7/BJwT+HUbJlq+c3zA/fI08f6H4+Pbqrk2wL0AuHX04lJzkTHtl2x0zj6X6TPFb854lZo6eg1wvXjgs8ClB14h6nhxO3HmS1+uUIxqB7ItcE+L5dBG3wbcYKvPZJiH1QavEk0/L8yQqp7UeLXJJLXcWw3Dzlatumc/Pt74OHCFpm9vA5yalxqY9EbADbcUcq9NZsh9gOeuMKZ2+6D4TbNEra4Uum+2v+p08N8bqSlwLkd6BKRPh621sfGRH1Ab1AaUXL6TxqY9+N74vZRVYlU0+fZzOeCTm2TXBDif0Q93bEBjWvukVPpJ+BM1S1QCNILl3TF8Fzh3qYzHxHCCyLs+3Vq/ZxPgNBj1NUqnAo4oePDaZHo7HJd7ho7ss4cwTgD8q2DenRjpI9u4FW0CTgP75zHYBwNPKXjgibXrAK9b4bPR8lPA2O4YniJZMQrhR1hJm4BTZdZG07+WvCMFjG8jC98AzhpPfSJ8hxtfKuQBwXKprOW7Djidpr+IwVwZ+GghA2vChkvkT+NBHdc6h+dCVwfeuon3OuBeD1x7hrMtAWQ8Ta9OWurnApx86jfVwfCsCGnt4H0dcP7uoP1Tm0fbZ6HxJKBRrnFuzFLtuDFwFwI+FU+rqZWsjY0nzvF6MqD7m+jOKMYOX+q6GZc8Ee4TLjkLjS8BbWZNhEoH+jrgkmbzSOBx4/O89AgkHeN7wLlWJVIFnL+lyO95gO8sYpxEAkb93xIeFGfeflQFnB6G38ZT2hOlpstNIs0RO83NsR04VAHnLPtixKnMJVxoGgmYp6JmL50hs6n3/VAFXDIAdXYeZxqel15DAgIngJcEPpdLpQq4W4bdprdBr8NC00kgGeI3iv3u/5xUAXc7wEjy3PyT04l3uJ5/F1lodwBetmnGpQwop6mG4ELTSSCZZXdaTXmsmnGmvhkpXva46QBLPZuFZob4zcKuq10qjRJ/adEqp0cttEqVE5OIDAzXArfYcUVgtk/jT44Qo/hmbtcCV/tCGWPaE1xoipnKIKlrJJtu3w/rfJUeNtT4NsHURNOFxpdAitCYZr/DEbIOOKPdFwc+E9m+47O99JjS/DUJPAm7H60Dzqwus7sWzXK6D8h0Qo+ZGSVQq2wEnE7NlGFUGcibbjx7oudcz9ihUdbtcf4/N0Y3yMZp0XtCpOMM0tNIKZtZDFz5Gs04H/K8mHnsa/MexhnDnuzlQ8ClgB8BZ6uSQF2WV27PXTCONO1JKY486Dycc+M4yLmDhU0JsWmD9Bya4C00vATuATw1PFdGvisrTWwCznPK6Zhu6ecGhhfpOD0YlfGwisUJ0gHSrWecLyQPdanHq8YR5zi9WGrDag9SbQb2phlnAx6Of3s05kbphrlQ/xJwbzNw6p+dT+sk9kzj9uSOZwnMf1iofwmkXFb3NO3o2iTkJjNOFp1pKijSncOr0j/re7dFKxqlsI3KSTqyvVYiTYGzgTcD14yWLKHUtjDM3oWneuQGSs1adok0dGMIZyNtA5wNG5H1FMmSmr5RtI0fMFP5dKH2q5DsF75Z18o2wNmGJZiMGEilVS9oLKmCHnx1lKGSJQsPqLk3om2Bs1HLGFmDUrI84Bsa9bQ8tCqBe2ZHsx+1Uipqo7TaAGejJmeeL1rXIWqJo4WaS+BKgGUQpQ9mtckat9AWON/7VZYwu9h3jUW+r3ZYqsFieY+zNH/1qCfbAmcLhtM9HKJWpO0heNZWXmi9BE4dxeqUu64ta8bsCNk0EWAX4GzfCIIFsNU0Bc+vyaLYC+2UgKdvLLqtdq5xrUOjdVGBrsCtgue/1TwtV7HQURJQzdfrZMFUKwY589bWMGkiuD6Asx8PmMtYKp5tbeJ0hrwJH7v5GZ0VugwFzVXJ8v2pDEnrcfcFnAwYO5JB/WyS1ewsSbiXyepAekNcHgXN8/Qul52pT+Bkxr1OTcn1XGrkd+s8ijIbcGZZcVAZuzxaYK3zTEtD7Rs42/XrkuEURTCam2pFlini/rnKy42oNZop12vxuiGAS2LQ253q+HsI3cN5e4HSoXvHau6/iog+3l5pSOBkNK/cqtEpkEPf1tGrgLZszJT9p8c7ZiA70wYpfjA0cI7BSxMeGIOxWo5r/yCD2VLIfT9u3S1jlZJZAufYVCy0CwNjACd/eZ1/8zQFL5Xk6MJ/Ke++G7hiMDNKmcWxgHNM1kl2UJLL5cXiAGUpwm/Dh4rYN+ND9H0rrXt9zOA0JnAORrvm+9llR1Z48C6AOZLuPn2z6YoXt4O0vw0+nrGBc0A6pzVKk63X+pqSwaWzvgPTC1S20mVHpnS8b0x+pgDO8dmvMb3zxmDfCVhLeQ5k8VWPPkka1hZIG92xPhVwCaD8yhRvaRTIks0FqwlaVFzy1K7n1yZJmpoaOAWQ3z3n0S4TZ7rc2zbUrM2z3PQMmQEw2UdWAnAKOl9+jFXp1zPCXgIpI1MzUtqcha5vODVjpQCnHFwm3ffkyS/ZXBZvy5qSPFSo01wNUto6qWco5ksCzjEaylfjTPeLXgt4z1CD39Cup5M0XdKlu97cZcWlIqg04BSKcT0TbtNXPkXKe+7dd/Z7NrCoqH6JwAme9pFaplqb5PXU6Z61ob94bTIVEUn3nOGpXkMyfQygVODS2PL8zTGKCDi7dRZLevfVcAWvOCodOAXm3W/eASdZeyV54PsWZm6WuM+asVZ7FVjfDGzT3hyAczwe9FNRkYa4JtNbukwJl74QVZW2kePoz84FOAXziiyK3id4VsO1Kq7U6obg0VGrKcI2BS9N+sxv8vXvVk7tQh4g9O5XqdRrOCvHN6cZlwZwOGD9D8kwSoqubwtgfh+4J448eTQbmiNwCjff89rEwXJn8SwTmeYKXNqPrMcv7SjvXjN18uss3w+YlTU7mjNwCju/UrNJ2SpPfXrttDQL7XHdFzV34OQ/ndPTNeUVmx6Er6L8ol7TwI1AzJbmDpyC17fpyRedwZ45MyViNU7mOHVbea5BT4gHMWZ9meFuAE7wnD0GN6XPA9Ygy8l6ZOk3D16ki2+XGVeABA6O9DhZORSwprF0SHZ5oTabhvzsabfMuASEeY0CKBmYNa6nEiIVEbnu64vZbcApFxUPA7KmubvvGSLycljz+HcN7Ubg8ht9BUoP/0FdzluXiPZuBE45p/L7/n1X3vO6W4ETMD0iGuijJ6uOMUN3M3BjyG+yPhbgJhN9t44X4LrJb7K3F+AmE323jv8HQ6rwdHYl8pMAAAAASUVORK5CYII=",className:e.liked?B.a.likeIcon:B.a.dislikeIcon,alt:"heart"})}),Object(b.jsxs)("span",{children:[e.likes," ",e.liked?"Liked":"Like"]})]})})]})]})},N=s(131),D=s(172),z=s(72),Z=s(393),H=s(23),C=Object(z.a)(20),G=Object(z.b)(3),T=Object(D.a)({form:"postForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(N.a,{component:H.c,placeholder:"enter your text",type:"text",size:"small",variant:"outlined",validate:[z.c,C,G],name:"postText"})}),Object(b.jsx)("div",{children:Object(b.jsx)(P.a,{variant:"contained",style:{textTransform:"lowercase",backgroundColor:"#2b3120",color:"#fff",fontSize:".95em"},size:"small",type:"submit",endIcon:Object(b.jsx)(Z.a,{children:"add"}),children:"Add post"})})]})})),F=function(e){var t=e.userPosts.map((function(t){return Object(b.jsx)(S,{photo:t.photo,message:t.message,toggleLikes:e.toggleLikes,likes:t.likes,id:t.id,liked:t.liked},t.id)}));return Object(b.jsxs)("div",{className:y.a.postsBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)("div",{children:Object(b.jsx)(T,{onSubmit:function(t){t.postText&&e.addPost(t.postText),t.postText=""}})}),Object(b.jsx)("div",{className:y.a.posts,children:t})]})},M=s(26),V=Object(M.b)((function(e){return{userPosts:e.profilePage.userPosts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(v.b)(t))},toggleLikes:function(t){e(Object(v.g)(t))}}}))(F),U=s(397),E=s.n(U),Q=function(e){return Object(b.jsxs)("div",{className:E.a.profileContainer,children:[Object(b.jsx)(k,{user:e.user,status:e.status,isOwner:e.isOwner,addPhoto:e.addPhoto,updateUserStatus:e.updateUserStatus}),e.isOwner?Object(b.jsx)(V,{}):Object(b.jsx)("h3",{className:E.a.myPosts,children:"My posts"})]})},J=s(14),L=s(139),K=s(15),X=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(b.jsx)(Q,Object(o.a)(Object(o.a)({},this.props),{},{user:this.props.user,status:this.props.status,isOwner:!this.props.match.params.userId,addPhoto:this.props.addPhoto,updateUserStatus:this.props.updateUserStatus}))}}]),s}(i.Component);t.default=Object(K.d)(Object(M.b)((function(e){return{user:e.profilePage.user,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:v.d,getUserStatus:v.e,updateUserStatus:v.h,addPhoto:v.a}),J.g,L.a)(X)}}]);
//# sourceMappingURL=3.78081857.chunk.js.map