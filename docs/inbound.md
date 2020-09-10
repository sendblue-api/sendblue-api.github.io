---
id: inbound
title: Receiving Messages
sidebar_label: Receiving Messages
---

:::caution

A client must be registered using the register contact endpoint before the messages they send will be forwarded to your webhook.

:::

### Receiving Messages

In order to enable receiving messages, you have to specify the webhooks that you want to use in your api dashboard.

Received Messages will be sent as a POST request to the webhook which you define. These messages will be delivered in the JSON of a POST body which looks like this:

``` json
{
    "number": "+19999999999",
    "content": "World Hello!"
}
```

## Responses to Webhook POST Request

The response that your server gives to our receiving webhook is currently ignored. This will likely change in the near future.