---
id: voice-note
title: Send voice notes to a phone number or group
description: Send inline-playable voice notes to any recipient or group
sidebar_label: Voice Note API
---

The Sendblue API allows you to send Apple voice notes to iMessage recipients or groups. The Apple voice note is a `.caf` file that is sent as the media_url. The recipient will receive a playable voice note inline in their iMessage thread, which looks the same as if you had sent them a voice note by holding down the microphone within iMessage.

## Usage

To send a voice note to a recipient, you must first upload the voice note to a public storage bucket so that it can be downloaded by Sendblue. Be sure that you are uploading a `.caf` (Core audio file) file, as this is the only format that Apple supports for inline voice notes.

Here's what that looks like as a curl request:

```bash
curl --location --request POST 'https://api.sendblue.co/api/send-message' \
--header 'sb-api-key-id: YOUR_SB_API_KEY_ID' \
--header 'sb-api-secret-key: YOUR_SB_API_SECRET_KEY' \
--header 'Content-Type: application/json' \
--data-raw '{
    "number": "+19998887777",
    "media_url": "https://storage.googleapis.com/inbound-file-store/AudioMessage.caf",
    "status_callback": "https://example.com/message-status/1234abcd"
}'
```

And here's the same in Node.js with Axios

```js
const axios = require("axios");

const url = `https://api.sendblue.co/api/send-message`;

axios.post(
  url,
  {
    number: "+19998887777",
    media_url:
      "https://storage.googleapis.com/inbound-file-store/AudioMessage.caf",
    status_callback: "https://example.com/message-status/1234abcd",
  },
  {
    headers: {
      "sb-api-key-id": "YOUR_SB_API_KEY_ID",
      "sb-api-secret-key": "YOUR_SB_API_SECRET_KEY",
      "content-type": "application/json",
    },
  }
);
```

## Response

The response will be the same as a regular [outbound message](/docs/outbound). The only difference is that the `media_url` will be the URL of the voice note you uploaded.

## Troubleshooting

Often times, it is desireable to convert the audio file from another format, such as MP3. This can be done using the `ffmpeg` library, and requires the codec to be set as `opus` or `libopus` Here's an example of how to convert an MP3 file to a `.caf` file:

```bash
ffmpeg -i input.mp3 -acodec opus -b:a 24k output.caf
```
