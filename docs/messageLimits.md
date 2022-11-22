---
id: messageLimits
title: Rate Limits and Message Queues
description: API Rate limits | iMessage for Business - Try it Free | Sendblue
sidebar_label: Limits & Queues
---

## Introduction

Similar to many other API providers, Sendblue has a few safeguards in place to reduce spam, increase uptime, and comply with Apple's rate limits. These are:

- Account-level quotas
- Dynamic rate limits
- Pooling

## Account-level quotas

### Standard plans

Standard plans are subject to the quotas the we have listed on our [homepage](https://sendblue.co)

### Enterprise plans

Enterprise plans are meant to serve companies for which the standard pricing model doesn't make sense. We are giving these out on an application basis to ensure high message quality and to combat spam. ([Application here](https://share.hsforms.com/1H186fzc2ScGa3wEz4ead-w8mskt))

Each enterprise plan is given an initial quota which depends on the use-case. This will usually be in the form of a monthly message limit. All enterprise plans must still comply with the [rate limits](/docs/messageLimits#rate-limits).

If you are approaching your quota you must reach out to us to request an increase. Currently, valid increase requests are guaranteed to be fulfilled within 2 weeks of the initial request for every 1M messages/month. So if you request a 2M/month increase, we guarantee that we can fulfill your request within a month of receiving it.

The reason we set this buffer period is to allow for multiple companies to scale simultaneously on our platform. Though we only guarantee a 2 week fulfillment period, we can likely deliver much faster than that.

If you are coming up on needing a quota increase of >100k messages per month, please fill out [this form](https://share.hsforms.com/1H186fzc2ScGa3wEz4ead-w8mskt).

## Rate Limits

Each number is capable of sending the industry-standard of 1 message per second. However, accounts are subject to further rate-limiting depending on their use-case. You can find a comprehensive guide for this in the table below.

| Use case           | Description                                                                | Rate limit\*                           |
| ------------------ | -------------------------------------------------------------------------- | -------------------------------------- |
| Outbound only      | For companies planning on no/very little inbound communication (send only) | 1000                                   |
| Inbound + Outbound | For companies who encourage two-way communication                          | 1000 + number of two-way conversations |
| Inbound only       | For companies with a survey or other information gathering use-case        | 86400                                  |

_\*All rate limits are given in conversations per phone number per day_

Keep in mind that the "messages per conversation" rate limit is 20 per minute, 600 per hour, and 2400 per day.

## Number Pooling

In order to send more messages than is possible using a single number, we can pool multiple numbers together to acheive the desired rate. If you need to send 100 messages per second, you will need to have 100 numbers to do so. With number pooling, your business has many numbers that it could potentially send a message from.

Although you can send from any of the phone numbers in the pool, each of your recipients will only ever message you via a single number. That means that if one of your users gets a text from your business via +19998887777, any future conversation with that user will be routed, securely end-to-end between you and the user on that number.

### Message Queueing

The Sendblue API is designed in such a way that messages will be queued for sending once they reach our API. If you make 10 requests to send 10 messages at second 0, the last message will be sent a the start of second 10.

Sendblue will queue all of your mmessages for a window of up to 1, 500 messages, at which point further calls to the API will result in a 429 - "Too Many Requests" response code. As stated before, you are able to send more messages per second when using number pooling.

## Messaging Limits

The messaging limits for each plan are listed on our [homepage](https://sendblue.co). We understand that things may pick up unexpectedly, and so reaching this limit will not result in hard declines. We charge our _à la carte_ rate for messages that exceed account limits at \$0.015 per message.

If you see your messaging requirements picking up rapidly, we highly encourage you to upgrade as soon as you can to ensure the lowest cost possible with Sendblue.
