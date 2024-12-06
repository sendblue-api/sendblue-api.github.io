---
id: typing-indicator
title: Send a typing indicator to a recipient | Sendblue Documentation
description: Indicate to a user that your chatbot or support agent is thinking/typing
sidebar_label: Typing Indicator API
---

The Sendblue API allows you to call an endpoint to send an indication that you are typing. This shows up on the end users device as the three dots that animate, which is useful for different kinds of applications:

- For chatbots: Indicate that the bot is thinking/processing information
- For customer support: Indicate that a support agent is typing
- For any other use-case where you want to indicate that the user should expect an answer soon, increasing the likelihood that they will remain in the chat

## Usage

The typing indicator api is only available when a chat already exists with a user, and only when messages have been exchanged recently. Furthermore, typing indicators are not supported in group chats at this time.

The endpoint for this API is a POST request to the following URL:

`https://api.sendblue.co/api/send-typing-indicator?number=+19999999999`

This endpoint is authenticated, so you must pass in your [credentials](/docs/credentials).

Here is an example using cURL:

```bash
curl --location --request POST 'https://api.sendblue.co/api/send-typing-indicator' \
--header 'sb-api-key-id: YOUR_SB_API_KEY_ID' \
--header 'sb-api-secret-key: YOUR_SB_API_SECRET_KEY' \
--header 'Content-Type: application/json' \
--data-raw '{
    "number": "+19998887777"
}'
```

### Request Parameters

| parameter | type   | description                                       |
| --------- | ------ | ------------------------------------------------- |
| number    | string | The number you want to send a typing indicator to |

### Response

The response comes back as JSON with the following fields:

| field         | type   | description                                                                              |
| ------------- | ------ | ---------------------------------------------------------------------------------------- |
| number        | string | The number you evaluated in E.164 format                                                 |
| status        | string | The status of the typing indicator you tried to send (this will either be SENT or ERROR) |
| error_message | string | The error message if the status is ERROR                                                 |

The typing indicator is sent on a "best effort" basis. Sometimes, a typing indicator is unable to be sent due to the last message having been too long ago, or the recipient number being iMessage. In these cases you will still se a 'SENT' status, but the typing indicator will not be delivered.
