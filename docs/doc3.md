---
id: receivingMessages
title: Receiving Messages
sidebar_label: Receiving Messages
---

:::caution

Sendblue currently does not support receive-first texting. This means that a client cannot currently interact with your company by iMessaging a number. We plan to support this functionality in the future with the premium plan.

:::

### Receiving Messages

In order to enable receiving messages, you have to specify the webhooks that you want to use in your client dashboard.

Received Messages will be sent to the webhook which you define. These messages will be delivered in the JSON of a POST body which looks like this:

``` json
{
    "number": "+19999999999",
    "content": "World Hello!"
}
```

### Dynamic Responses to Received Messages

TODO :3

Currently the response to this webhook is simply ignored by our server. 

In the future, responses to this message will be used to "reply" to the messages on the fly. But for now, just use another send-message request.