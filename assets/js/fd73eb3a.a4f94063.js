"use strict";(self.webpackChunksendblue_api=self.webpackChunksendblue_api||[]).push([[210],{5334:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"groups","title":"Group Messages | Sendblue Documentation","description":"Sending Group Messages from your Business | iMessage for Business - Sendblue","source":"@site/docs/groups.md","sourceDirName":".","slug":"/groups","permalink":"/docs/groups","draft":false,"unlisted":false,"editUrl":"https://github.com/sendblue-api/sendblue-api.github.io/blob/gh-pages/docs/docs/groups.md","tags":[],"version":"current","frontMatter":{"id":"groups","title":"Group Messages | Sendblue Documentation","description":"Sending Group Messages from your Business | iMessage for Business - Sendblue","sidebar_label":"Group Messages"},"sidebar":"someSidebar","previous":{"title":"Receiving Messages","permalink":"/docs/inbound"},"next":{"title":"Get Messages","permalink":"/docs/get-messages"}}');var r=n(4848),d=n(8453);const t={id:"groups",title:"Group Messages | Sendblue Documentation",description:"Sending Group Messages from your Business | iMessage for Business - Sendblue",sidebar_label:"Group Messages"},o=void 0,l={},c=[{value:"Availability",id:"availability",level:2},{value:"API Request",id:"api-request",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"POST Body (JSON)",id:"post-body-json",level:3},{value:"Example",id:"example",level:3},{value:"API Response",id:"api-response",level:2},{value:"Example",id:"example-1",level:4}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["This API is still in beta, and is subject to change at any time. Please ",(0,r.jsx)(s.a,{href:"mailto:support@sendblue.com",children:"consult with us"})," before going into production."]})}),"\n",(0,r.jsx)(s.h2,{id:"availability",children:"Availability"}),"\n",(0,r.jsx)(s.p,{children:"Currently the group messaging api is only available to Sapphire plans and above."}),"\n",(0,r.jsx)(s.h1,{id:"roadmap",children:"Roadmap"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u2705 ",(0,r.jsx)(s.strong,{children:"Sending iMessages to groups"}),": supported"]}),"\n",(0,r.jsxs)(s.li,{children:["\u2705 ",(0,r.jsx)(s.strong,{children:"Sending SMS to groups"}),": supported"]}),"\n",(0,r.jsxs)(s.li,{children:["\u2705 ",(0,r.jsx)(s.strong,{children:"Receiving iMessage in groups"}),": supported"]}),"\n",(0,r.jsxs)(s.li,{children:["\u2705 ",(0,r.jsx)(s.strong,{children:"Receiving SMS in groups"}),": supported"]}),"\n",(0,r.jsxs)(s.li,{children:["\u2705 ",(0,r.jsx)(s.strong,{children:"Sending MMS to groups"}),": supported"]}),"\n",(0,r.jsxs)(s.li,{children:["\u2705 ",(0,r.jsx)(s.strong,{children:"Receiving MMS in groups"}),": supported"]}),"\n",(0,r.jsxs)(s.li,{children:["\u2705 ",(0,r.jsxs)(s.strong,{children:["Sending ",(0,r.jsx)(s.a,{href:"/docs/expressive-messages",children:"expressive messages"})]}),": supported"]}),"\n",(0,r.jsxs)(s.li,{children:["\u2705 ",(0,r.jsx)(s.strong,{children:"Adding people to groups"}),": supported"]}),"\n",(0,r.jsxs)(s.li,{children:["\ud83d\udfe1 ",(0,r.jsxs)(s.em,{children:[(0,r.jsx)(s.strong,{children:"Removing people from groups"}),": Scheduled"]})]}),"\n",(0,r.jsxs)(s.li,{children:["\ud83d\udfe1 ",(0,r.jsxs)(s.em,{children:[(0,r.jsx)(s.strong,{children:"Changing group names"}),": Scheduled"]})]}),"\n",(0,r.jsxs)(s.li,{children:["\ud83d\udfe1 ",(0,r.jsxs)(s.em,{children:[(0,r.jsx)(s.strong,{children:"Leaving groups"}),": Scheduled"]})]}),"\n"]}),"\n",(0,r.jsx)(s.h1,{id:"sending-group-messages",children:"Sending group messages"}),"\n",(0,r.jsxs)(s.p,{children:["The API request to send group messages is similar to the ",(0,r.jsx)(s.a,{href:"/docs/outbound/#sending-imessages",children:"individual message request"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"api-request",children:"API Request"}),"\n",(0,r.jsxs)(s.p,{children:["The API request should be made with the ",(0,r.jsx)(s.code,{children:"application/json"})," content type header. If the group does not exist during the request, it will be created automatically."]}),"\n",(0,r.jsx)(s.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"POST https://api.sendblue.co/api/send-group-message"})}),"\n",(0,r.jsx)(s.h3,{id:"post-body-json",children:"POST Body (JSON)"}),"\n",(0,r.jsx)(s.p,{children:"The group messaging API expects a slightly different json body than the individual message api. Here are the available fields:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numbers"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"array"})}),(0,r.jsxs)(s.td,{children:["numbers is an array of ",(0,r.jsx)(s.code,{children:"strings"})," which contain the E.164-formatted phone numbers of the desired recipients in a group chat. The maximum number of people allowed in a group chat is 25."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"group_id"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"The group_id field is a uuid with which you can message groups that you have already created. This is the same as passing the same list of numbers as was passed in the initial request"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"from_number"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"The number to send the message from"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"content"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"The content field is the message that you want to send to the group."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"media_url"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"A CDN link to a file which is publicly accessible which will be downloaded and sent to the group by Sendblue"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"send_style"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsxs)(s.td,{children:["The style of delivery of the message (see ",(0,r.jsx)(s.a,{href:"/docs/expressive-messages",children:"expressive messages"}),")"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status_callback"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsxs)(s.td,{children:["An endpoint which we can hit to notify your app of status updates for this message, see ",(0,r.jsx)(s.a,{href:"/docs/outbound#status-callback",children:"status callback"})," for more info"]})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Either numbers or group_id is required"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Either content or media_url is required"})}),"\n",(0,r.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const url = `https://api.sendblue.co/api/send-group-message`;\n\naxios.post(url, {\n    numbers: [\n        '+19998887777',\n        '+17778889999'\n    ],\n    from_number: '+16468528190', // the sendblue number you want to use\n    content: 'Hello group!',\n    media_url: 'https://picsum.photos/200/300.jpg',\n    status_callback: 'https://example.com/message-status/1234abcd',\n},\nheaders: {\n    \"sb-api-key-id\": << apiKey >> ,\n    \"sb-api-secret-key\": << apiSecret >> ,\n    \"content-type\": \"application/json\" // Dont forget this when using other libraries like fetch or from the command line with curl\n}).then(response => {\n    console.log(response.data);\n}).catch(error => {\n    console.error(error);\n});\n"})}),"\n",(0,r.jsx)(s.h2,{id:"api-response",children:"API Response"}),"\n",(0,r.jsx)(s.p,{children:"The API response will contain the assigned group_id, which is useful for correlating messages sent to a group and messages received from a group."}),"\n",(0,r.jsx)(s.admonition,{title:"Note",type:"info",children:(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"group_id"})," that you receive in the response from ",(0,r.jsx)(s.code,{children:"/api/send-group-message"})," is the only way you will be able to correlate messages sent in a group to messages received from a group in your app."]})}),"\n",(0,r.jsx)(s.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"See the example below to see what our response body looks like. Note that this API is still in Beta so the fields below are subject to change."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "accountEmail": "YOUR EMAIL",\n  "content": "Hello world",\n  "is_outbound": true,\n  "status": "QUEUED",\n  "error_code": null,\n  "error_message": null,\n  "message_handle": "073c1408-a6d9-48e2-ae8c-01f06443833",\n  "date_sent": "2021-05-19T23:07:23.371Z",\n  "date_updated": "2021-05-19T23:07:23.371Z",\n  "from_number": "+19998887777",\n  "number": ["+11112223333", "+13332221111"],\n  "to_number": ["+11112223333", "+13332221111"],\n  "was_downgraded": null,\n  "plan": "blue",\n  "media_url": "https://picsum.photos/200/300.jpg",\n  "message_type": "group",\n  "group_id": "66e3b90d-4447-43c6-9439-15a69408ac2"\n}\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["the ",(0,r.jsx)(s.code,{children:"number"})," and ",(0,r.jsx)(s.code,{children:"to_number"})," fields will likely be renamed to ",(0,r.jsx)(s.code,{children:"numbers"})," and ",(0,r.jsx)(s.code,{children:"to_numbers"})," respectively."]})}),"\n",(0,r.jsx)(s.h1,{id:"receiving-group-messages",children:"Receiving Group Messages"}),"\n",(0,r.jsxs)(s.p,{children:["Receiving group messages is very straightforward. There will be a field called group_id which gets sent to your ",(0,r.jsx)(s.a,{href:"/docs/inbound",children:"receive webhook"}),"."]}),"\n",(0,r.jsx)(s.h1,{id:"adding-people-to-group-chats",children:"Adding people to group chats"}),"\n",(0,r.jsxs)(s.p,{children:["To add someone to your group chat, you can send a POST request to ",(0,r.jsx)(s.code,{children:"/api/modify-group"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"This endpoint expects 3 parameters."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"group_id"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"The id of the group which you want to add a recipient to"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modify_type"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"add_recipient"}),", ",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"remove_recipient"}),"\xa0\ud83d\udfe1, ",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"rename"}),"\xa0\ud83d\udfe1, ",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"leave"}),"\xa0\ud83d\udfe1"]}),(0,r.jsx)(s.td,{children:"The modification type to perform"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsxs)(s.td,{children:["The E.164 standard format for the number that you want to add/remove from the group chat. (Ignored if ",(0,r.jsx)(s.code,{children:"modify_type"})," !== ",(0,r.jsx)(s.code,{children:"add_recipient"})," or ",(0,r.jsx)(s.code,{children:"remove_recipient"}),")"]})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["\ud83d\udfe1 ",(0,r.jsx)(s.em,{children:"= unsupported"})]}),"\n",(0,r.jsx)(s.p,{children:"Here is an example of the JSON post body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "group_id": "12324354gds-234gvwa30-4evdsbtrs-4agrg4areeg",\n  "modify_type": "add_recipient",\n  "number": "\u202d+19998887777"\n}\n'})}),"\n",(0,r.jsx)(s.h1,{id:"removing-people-from-group-chats-in-progress",children:"Removing people from group chats (In progress)"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"This documentation is actively being updated"})})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var i=n(6540);const r={},d=i.createContext(r);function t(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);