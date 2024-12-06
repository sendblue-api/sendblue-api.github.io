---
id: webhooks
title: Setting up Webhooks | Sendblue Documentation
descriptions: Webhook Documentation | iMessage for Business - Sendblue
sidebar_label: Webhooks
---

## Setting Your Webhooks

Also in your api dashboard, you will see a section titled "Webhooks" Here you can define all your different webhooks

### Receive Webhooks

Receive webhooks will get triggered when a user replies to one of your messages. This webhook structure can be found in the [Receiving Documentation](inbound.md)

### Webhook secrets

To increase security of your application, Sendblue offers users the ability to define a webhook secret in their dashboard. This way, a server can verify that every request they get is coming from Sendblue, rather than an unauthorized third-party.

#### How it works

Once you define a secret in your dashboard, all future inbound message webhook requests will contain a header called `sb-signing-secret`. Check this against the secret you've defined before performing any sensitive actions.

Webhook secrets are entirely optional, but highly recommended.
