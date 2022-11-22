---
id: zapier
title: Zapier
description: Sending Messages without Code | iMessage for Business - Sendblue
sidebar_label: Zapier
---

## Getting started

Our integration is listed [here](https://zapier.com/apps/sendblue/integrations). It currently has one trigger and one action, and those are receiving a message and sending a message, respectively.

## Sending messages to multiple people

Some integrations require sending the same message to multiple people at the same time. For this we highly recommend using the batch send feature of the send message integration. The way it works is by comma separating multiple phone numbers in the recipient field of the zapier action with commas.

For example: if you want to send a message with the content `Hello World!` to `+19999999999` , `+18888888888` , and `+17777777777`. The way you would do it is by filling out the send fields like so:

Recipient: `+19999999999,+18888888888,+17777777777`

Text: `Hello World!`

This would send individual texts to all three numbers with the content that you specify (in this case `Hello World!`).

To send group messages see our [roadmap](/docs/roadmap). As we will be updating our roll-out dates there.

<!-- See the [batch send](/docs/batch) documentation for more detailed information on the api. -->

## Rate limits

:::caution
You may find that you hit rate limits a lot faster using batch send. All messages are still subject to the individual message [rate limits](/docs/messageLimits)
:::

Be careful when sending many requests to our API (Especially when batch sending).

Each batch send request can contain up to 29 phone numbers, and each phone number in the request will count as an additional outbound message.

Make sure to reference the [rate limits](/docs/messageLimits) documentation before going live.
