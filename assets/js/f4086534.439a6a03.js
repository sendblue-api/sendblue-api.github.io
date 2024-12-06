"use strict";(self.webpackChunksendblue_api=self.webpackChunksendblue_api||[]).push([[847],{5400:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"voice-note","title":"Send voice notes to a phone number or group | Sendblue Documentation","description":"Send inline-playable voice notes to any recipient or group","source":"@site/docs/voice-note.md","sourceDirName":".","slug":"/voice-note","permalink":"/docs/voice-note","draft":false,"unlisted":false,"editUrl":"https://github.com/sendblue-api/sendblue-api.github.io/blob/gh-pages/docs/docs/voice-note.md","tags":[],"version":"current","frontMatter":{"id":"voice-note","title":"Send voice notes to a phone number or group | Sendblue Documentation","description":"Send inline-playable voice notes to any recipient or group","sidebar_label":"Voice Note API"},"sidebar":"someSidebar","previous":{"title":"Lookup Service API","permalink":"/docs/lookup-api"},"next":{"title":"Typing Indicator API","permalink":"/docs/typing-indicator"}}');var s=o(4848),i=o(8453);const a={id:"voice-note",title:"Send voice notes to a phone number or group | Sendblue Documentation",description:"Send inline-playable voice notes to any recipient or group",sidebar_label:"Voice Note API"},r=void 0,c={},l=[{value:"Usage",id:"usage",level:2},{value:"Response",id:"response",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The Sendblue API allows you to send Apple voice notes to iMessage recipients or groups. The Apple voice note is a ",(0,s.jsx)(n.code,{children:".caf"})," file that is sent as the media_url. The recipient will receive a playable voice note inline in their iMessage thread, which looks the same as if you had sent them a voice note by holding down the microphone within iMessage."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To send a voice note to a recipient, you must first upload the voice note to a public storage bucket so that it can be downloaded by Sendblue. Be sure that you are uploading a ",(0,s.jsx)(n.code,{children:".caf"})," (Core audio file) file, as this is the only format that Apple supports for inline voice notes."]}),"\n",(0,s.jsx)(n.p,{children:"Here's what that looks like as a curl request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl --location --request POST \'https://api.sendblue.co/api/send-message\' \\\n--header \'sb-api-key-id: YOUR_SB_API_KEY_ID\' \\\n--header \'sb-api-secret-key: YOUR_SB_API_SECRET_KEY\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "number": "+19998887777",\n    "media_url": "https://storage.googleapis.com/inbound-file-store/AudioMessage.caf",\n    "status_callback": "https://example.com/message-status/1234abcd"\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"And here's the same in Node.js with Axios"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const axios = require("axios");\n\nconst url = `https://api.sendblue.co/api/send-message`;\n\naxios.post(\n  url,\n  {\n    number: "+19998887777",\n    media_url:\n      "https://storage.googleapis.com/inbound-file-store/AudioMessage.caf",\n    status_callback: "https://example.com/message-status/1234abcd",\n  },\n  {\n    headers: {\n      "sb-api-key-id": "YOUR_SB_API_KEY_ID",\n      "sb-api-secret-key": "YOUR_SB_API_SECRET_KEY",\n      "content-type": "application/json",\n    },\n  }\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n.p,{children:["The response will be the same as a regular ",(0,s.jsx)(n.a,{href:"/docs/outbound",children:"outbound message"}),". The only difference is that the ",(0,s.jsx)(n.code,{children:"media_url"})," will be the URL of the voice note you uploaded."]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["Often times, it is desireable to convert the audio file from another format, such as MP3. This can be done using the ",(0,s.jsx)(n.code,{children:"ffmpeg"})," library, and requires the codec to be set as ",(0,s.jsx)(n.code,{children:"opus"})," or ",(0,s.jsx)(n.code,{children:"libopus"})," Here's an example of how to convert an MP3 file to a ",(0,s.jsx)(n.code,{children:".caf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffmpeg -i input.mp3 -acodec opus -b:a 24k output.caf\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);