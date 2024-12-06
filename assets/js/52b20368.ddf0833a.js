"use strict";(self.webpackChunksendblue_api=self.webpackChunksendblue_api||[]).push([[51],{7083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"contact-card","title":"Sending a Contact Card | Sendblue Documentation","description":"Sending a Contact Card for your Business | iMessage for Business - Sendblue","source":"@site/docs/contact-card.md","sourceDirName":".","slug":"/contact-card","permalink":"/docs/contact-card","draft":false,"unlisted":false,"editUrl":"https://github.com/sendblue-api/sendblue-api.github.io/blob/gh-pages/docs/docs/contact-card.md","tags":[],"version":"current","frontMatter":{"id":"contact-card","title":"Sending a Contact Card | Sendblue Documentation","description":"Sending a Contact Card for your Business | iMessage for Business - Sendblue","sidebar_label":"Sending a Contact Card"},"sidebar":"someSidebar","previous":{"title":"Limits & Queues","permalink":"/docs/message-limits"}}');var s=t(4848),i=t(8453);const r={id:"contact-card",title:"Sending a Contact Card | Sendblue Documentation",description:"Sending a Contact Card for your Business | iMessage for Business - Sendblue",sidebar_label:"Sending a Contact Card"},a=void 0,c={},d=[{value:"Getting started",id:"getting-started",level:2},{value:"Creating a contact card",id:"creating-a-contact-card",level:3},{value:"Uploading to a CDN",id:"uploading-to-a-cdn",level:3},{value:"Sending the contact card",id:"sending-the-contact-card",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(n.p,{children:"Having a user add you as a contact helps your business in many ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"it allows any links you send to expand on the end users phone,"}),"\n",(0,s.jsx)(n.li,{children:"it drastically increases your messaging rate limits."}),"\n",(0,s.jsx)(n.li,{children:"your user will know who you are, even if you don't message them in a year."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-contact-card",children:"Creating a contact card"}),"\n",(0,s.jsxs)(n.p,{children:["The first step is to create a contact card for your business. You can do this with a free online tool such as ",(0,s.jsx)(n.a,{href:"https://vcardmaker.com/",children:"https://vcardmaker.com/"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For this example we will be using our vcard which we uploaded to our Cloud storage bucket:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"https://storage.googleapis.com/inbound-file-store/bettervcard.vcf"})}),"\n",(0,s.jsx)(n.h3,{id:"uploading-to-a-cdn",children:"Uploading to a CDN"}),"\n",(0,s.jsx)(n.p,{children:'CDN is just short for "Content Delivery Network". We use Google\'s Cloud Storage service for our CDN needs. But anything as simple as Google Drive or Dropbox will do. Just make sure to set the link to public so that Sendbue has access to fetch your file once you send the request to our servers.'}),"\n",(0,s.jsx)(n.h3,{id:"sending-the-contact-card",children:"Sending the contact card"}),"\n",(0,s.jsxs)(n.p,{children:["To send the contact card we only need two parameters in the body: ",(0,s.jsx)(n.code,{children:"number"})," and ",(0,s.jsx)(n.code,{children:"media_url"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"number"}),": The phone number we want to send to.\n",(0,s.jsx)(n.code,{children:"media_url"}),": The url pointing to the CDN which holds our contact card, in our case ",(0,s.jsx)(n.code,{children:"https://storage.googleapis.com/inbound-file-store/bettervcard.vcf"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["And that's it! if you run into issues make sure to reference our ",(0,s.jsx)(n.a,{href:"/docs/outbound",children:"outbound docs"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Some common reasons why this doesn't work:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The file URL is not a downloadable or accessible link."}),"\n",(0,s.jsxs)(n.li,{children:["The file URL does not end with ",(0,s.jsx)(n.code,{children:".vcf"})," or ",(0,s.jsx)(n.code,{children:".vcard"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The file URL has a space in it."}),"\n",(0,s.jsxs)(n.li,{children:["The Content-Type parameter was not set in the request to Sendblue (set it to ",(0,s.jsx)(n.code,{children:"application/json"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["The API key and Secret where not sent to the API as described in the ",(0,s.jsx)(n.a,{href:"/docs/credentials",children:"auth docs"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you still have issues please feel free to ",(0,s.jsx)(n.a,{href:"mailto:support@sendblue.co",children:"reach out"}),", this would help us improve our docs and we respond pretty fast!"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);