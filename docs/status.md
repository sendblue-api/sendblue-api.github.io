---
id: status
title: Message Status
description: Determining Message Status | iMessage for Business - Sendblue
sidebar_label: Message Status
---

## Resolving Pending Message Status

A request you make will usually come back with a status of `QUEUED`. This will be most common when you batch several requests together. In such a scenario, it is important that you are aware of the final status of the message, so that you don't double message a user. In order to get the final status of your message, you may query the `/api/status` endpoint.

### Authentication

Just like any other request to the API, make sure you include your credentials in the appropriate headers:

```js
"sb-api-key-id": <<apiKey>>
"sb-api-secret-key": <<apiSecret>>
```

### Making the Request

`GET https://api.sendblue.co/api/status`

To specify which message you would like to receive a status update on, use a query param with the key = "handle" and the value = the message handle of the message you are interested in.

Query parameter: `?handle={{message_handle}}`

The message handle is included in every response when you call [/api/send-message](outbound.md). So you can also query messages that you have already received the status of, if you would like.
