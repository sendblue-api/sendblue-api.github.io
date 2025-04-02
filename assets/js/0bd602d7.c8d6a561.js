"use strict";(self.webpackChunksendblue_api=self.webpackChunksendblue_api||[]).push([[326],{1166:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"outbound","title":"Sending Messages Documentation | Sendblue","description":"iMessage for Business | Outbound messages documentation - Sendblue","source":"@site/docs/outbound.md","sourceDirName":".","slug":"/outbound","permalink":"/docs/outbound","draft":false,"unlisted":false,"editUrl":"https://github.com/sendblue-api/sendblue-api.github.io/blob/gh-pages/docs/docs/outbound.md","tags":[],"version":"current","frontMatter":{"id":"outbound","title":"Sending Messages Documentation | Sendblue","description":"iMessage for Business | Outbound messages documentation - Sendblue","sidebar_label":"Sending Messages"},"sidebar":"someSidebar","previous":{"title":"Client Packages","permalink":"/docs/client-packages"},"next":{"title":"Receiving Messages","permalink":"/docs/inbound"}}');var d=n(4848),r=n(8453);const i={id:"outbound",title:"Sending Messages Documentation | Sendblue",description:"iMessage for Business | Outbound messages documentation - Sendblue",sidebar_label:"Sending Messages"},l=void 0,a={},o=[{value:"Sending iMessages",id:"sending-imessages",level:2},{value:"Request body",id:"request-body",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Sending files",id:"sending-files",level:2},{value:"Status Callback",id:"status-callback",level:2},{value:"Message Status Resolution",id:"message-status-resolution",level:2},{value:"Status",id:"status",level:3},{value:"Error Codes",id:"error-codes",level:3},{value:"Limits",id:"limits",level:2},{value:"Useful Information",id:"useful-information",level:2},{value:"From Number",id:"from-number",level:3},{value:"Handle",id:"handle",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"The Sendblue API conforms to REST API standards. Using it, you can send outbound iMessage and SMS to any enabled phone globally. All requests can either be form-encoded or"}),"\n",(0,d.jsx)(s.p,{children:"In this documentation, we will cover how to:"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/docs/outbound#sending-imessages",children:"Send iMessages to a destination phone number"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"/docs/outbound#status-callback",children:"Track the status of your message using webhooks"})}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"sending-imessages",children:"Sending iMessages"}),"\n",(0,d.jsx)(s.p,{children:"You can send a message directly with cURL or by using one of our client libraries by hitting the following endpoint:"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"POST https://api.sendblue.co/api/send-message"}),"\nHere's what that looks like as a curl request:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:'curl --location --request POST \'https://api.sendblue.co/api/send-message\' \\\n--header \'sb-api-key-id: YOUR_SB_API_KEY_ID\' \\\n--header \'sb-api-secret-key: YOUR_SB_API_SECRET_KEY\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "number": "+19998887777",\n    "content": "Hello world!",\n    "send_style": "invisible",\n    "media_url": "https://picsum.photos/200/300.jpg",\n    "status_callback": "https://example.com/message-status/1234abcd"\n}\'\n'})}),"\n",(0,d.jsx)(s.p,{children:"And here's the same in Node.js with Axios"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:'const axios = require("axios");\n\nconst url = `https://api.sendblue.co/api/send-message`;\n\naxios\n  .post(\n    url,\n    {\n      number: "+19998887777",\n      content: "Hello world!",\n      send_style: "invisible",\n      media_url: "https://picsum.photos/200/300.jpg",\n      status_callback: "https://example.com/message-status/1234abcd",\n    },\n    {\n      headers: {\n        "sb-api-key-id": "YOUR_SB_API_KEY_ID",\n        "sb-api-secret-key": "YOUR_SB_API_SECRET_KEY",\n        "content-type": "application/json",\n      },\n    }\n  )\n  .then((response) => {\n    console.log(response.data);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n'})}),"\n",(0,d.jsx)(s.h3,{id:"request-body",children:"Request body"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"parameter"}),(0,d.jsx)(s.th,{children:"type"}),(0,d.jsx)(s.th,{children:"description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"number"}),(0,d.jsx)(s.td,{children:"string"}),(0,d.jsx)(s.td,{children:"The number of the recipient of the message"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"content"}),(0,d.jsx)(s.td,{children:"string"}),(0,d.jsx)(s.td,{children:"The content of the message"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"send_style"}),(0,d.jsx)(s.td,{children:"string"}),(0,d.jsxs)(s.td,{children:["The style of delivery of the message (see ",(0,d.jsx)(s.a,{href:"/docs/expressive-messages",children:"expressive messages"}),")"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"media_url"}),(0,d.jsx)(s.td,{children:"string"}),(0,d.jsx)(s.td,{children:"The URL of the image you want to send"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"status_callback"}),(0,d.jsx)(s.td,{children:"string"}),(0,d.jsx)(s.td,{children:"The URL where you want to receive the status updates of the message"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "accountEmail": "YOUR EMAIL",\n  "content": "Hello world!",\n  "is_outbound": true,\n  "status": "QUEUED",\n  "error_code": null,\n  "error_message": null,\n  "message_handle": "dfd747ba-5600-4a8a-804a-a614a0fbc1c5",\n  "date_sent": "2023-09-27T16:35:32.287Z",\n  "date_updated": "2023-09-27T16:35:32.703Z",\n  "from_number": "+16468528190",\n  "number": "+19998887777",\n  "to_number": "+19998887777",\n  "was_downgraded": null,\n  "plan": "dedicated",\n  "media_url": "https://picsum.photos/200/300.jpg",\n  "message_type": "message",\n  "group_id": "",\n  "participants": [],\n  "send_style": "invisible",\n  "opted_out": false,\n  "error_detail": null\n}\n'})}),"\n",(0,d.jsx)(s.h2,{id:"sending-files",children:"Sending files"}),"\n",(0,d.jsxs)(s.p,{children:["You can send images using the ",(0,d.jsx)(s.code,{children:"media_url"}),' parameter. This URL should be a CDN link pointing to an image. The URL must end with the proper file extension. We recommend sticking to the standard PascalCase naming convention. So if your image is named "Welcome Image", we recommend uploading it to your CDN as "WelcomeImage.png".']}),"\n",(0,d.jsxs)(s.p,{children:["Files are currently capped at ",(0,d.jsx)(s.strong,{children:"5MB"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["media_url does not support ",(0,d.jsx)(s.a,{href:"https://cloud.google.com/storage/docs/access-control/signed-urls#:~:text=about%20request%20signing.-,Overview,specific%20actions%20on%20a%20resource.",children:"signed urls"}),", please use the ",(0,d.jsx)(s.a,{href:"/docs/create-media-object",children:"media object"})," pattern for that"]}),"\n",(0,d.jsx)(s.h2,{id:"status-callback",children:"Status Callback"}),"\n",(0,d.jsxs)(s.p,{children:["Sendblue will POST the endpoint you provide in ",(0,d.jsx)(s.code,{children:"status_callback"})," whenever the status of a message changes to one of the following:"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"queued"}),"\n",(0,d.jsx)(s.li,{children:"failed"}),"\n",(0,d.jsx)(s.li,{children:"sent"}),"\n",(0,d.jsx)(s.li,{children:"delivered"}),"\n",(0,d.jsx)(s.li,{children:"read"}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Below is an example of the POST body that is sent to the status_callback URL for a delivered message:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "accountEmail": "support@sendblue.com",\n  "content": "Hello world!",\n  "is_outbound": true,\n  "status": "DELIVERED",\n  "error_code": null,\n  "error_message": null,\n  "message_handle": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",\n  "date_sent": "2020-09-10T06:15:05.962Z",\n  "date_updated": "2020-09-10T06:15:14.115Z",\n  "from_number": "+15122164639",\n  "number": "+19998887777",\n  "to_number": "+19998887777",\n  "was_downgraded": false,\n  "plan": "blue"\n}\n'})}),"\n",(0,d.jsx)(s.admonition,{type:"important",children:(0,d.jsx)(s.p,{children:"You must send a response to our server in order to avoid receiving multiple webhook calls."})}),"\n",(0,d.jsx)(s.h2,{id:"message-status-resolution",children:"Message Status Resolution"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Callback Body Field"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"accountEmail"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Associated account email"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"content"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Message content"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"is_outbound"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})}),(0,d.jsx)(s.td,{children:"True if message is sent, false if message is received"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"media_url"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"A CDN link to the image that you sent our servers"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"status"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"The current status of the message"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"error_code"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"int"})}),(0,d.jsx)(s.td,{children:"error code (null if no error)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"error_message"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"descriptive error message (null if no error)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"message_handle"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Sendblue message handle"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"date_sent"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"ISO 8601 formatted date string of the date this message was created"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"date_updated"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"ISO 8601 formatted date string of the date this message was last updated"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"from_number"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"E.164 formatted phone number string of the message dispatcher"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"number"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"E.164 formatted phone number string of your end-user (not the Sendblue-provided phone number)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"to_number"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"E.164 formatted phone number string of the message recipient"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"was_downgraded"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})}),(0,d.jsx)(s.td,{children:"true if the end user does not support iMessage, false otherwise"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"plan"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Value of the Sendblue account plan"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"status",children:"Status"}),"\n",(0,d.jsx)(s.p,{children:"The status field will report the status. There are currently 7 different possible responses to a send-message request:"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Status"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"QUEUED"})}),(0,d.jsx)(s.td,{children:"The message has reached our servers, and has passed our validation checks. It has been queued for delivery"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"SENT"})}),(0,d.jsx)(s.td,{children:"The message has been sent"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"DELIVERED"})}),(0,d.jsx)(s.td,{children:"The message has been sent, and we've received confirmation of delivery (iMessage Only)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"READ"})}),(0,d.jsx)(s.td,{children:"The message has been sent, and we've received confirmation that the end user has read the message (iMessage Only)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.strong,{children:"ERROR"})}),(0,d.jsxs)(s.td,{children:["The message has failed to send, see the ",(0,d.jsx)(s.code,{children:"error_code"})," field to understaind why"]})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"error-codes",children:"Error Codes"}),"\n",(0,d.jsx)(s.p,{children:"Any Code besides 0 or null is a failure. Some codes are not yet documented."}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Code"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"4000"}),(0,d.jsxs)(s.td,{children:["Validation Error: see ",(0,d.jsx)(s.code,{children:"error_message"})," field"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"4001"}),(0,d.jsx)(s.td,{children:"Rate Limit Exceeded"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"4002"}),(0,d.jsx)(s.td,{children:"Blacklisted Number (e.g. 911)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"5000"}),(0,d.jsx)(s.td,{children:"Internal Error"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"5003"}),(0,d.jsx)(s.td,{children:"Server Rate Exceeded"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"10001"}),(0,d.jsx)(s.td,{children:"message failed to send"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"10002"}),(0,d.jsx)(s.td,{children:"failed to resolve message status"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"limits",children:"Limits"}),"\n",(0,d.jsx)(s.p,{children:"Messages sent using Sendblue must be less than 18996 characters in length. If you have larger requirements we recommend breaking the message up into several, smaller messages."}),"\n",(0,d.jsx)(s.h2,{id:"useful-information",children:"Useful Information"}),"\n",(0,d.jsx)(s.h3,{id:"from-number",children:"From Number"}),"\n",(0,d.jsx)(s.admonition,{type:"caution",children:(0,d.jsxs)(s.p,{children:["Sendblue focuses on message deliverability and end-user experience. This means that each of your users will only ever interact with your business through one Sendblue phone number. However, different clients may see different numbers for texts sent from your company. See ",(0,d.jsx)(s.a,{href:"/docs/message-limits",children:"Limits & Queues"})," for more info"]})}),"\n",(0,d.jsx)(s.p,{children:"The from_number field is given as a convenience to you, in case you want to keep track of that info, or tell the client that they should expect a text from the number that you show them."}),"\n",(0,d.jsx)(s.h3,{id:"handle",children:"Handle"}),"\n",(0,d.jsx)(s.p,{children:"The message handle is used so that you can query the status of each message at a later date. This is especially useful in high volume message_status=QUEUED cases or TIMEOUT cases."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(6540);const d={},r=t.createContext(d);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);