---
id: evaluate-service
title: Find out if a Number can send/receive iMessages
description: Evaluate Whether a Number Can Receive iMessage | Sendblue
sidebar_label: Determine Service
---

The Sendblue API allows you to call an endpoint to figure out if a number supports iMessage. This is pretty useful to determine:

- Whether a certain phone number is an iPhone or not
- If a number is real before sending a message
- Whether to use Sendblue or another provider to send a message

## Usage

The evaluate-service endpoint is a GET request to the following URL:

`https://api.sendblue.co/api/evaluate-service?number=+19999999999`

This endpoint is authenticated, so you must pass in your [credentials](/docs/credentials). It is available on the Sapphire plan and above.

### Request Parameters

| parameter | type   | description                                     |
| --------- | ------ | ----------------------------------------------- |
| number    | string | The number you want to evaluate in E.164 format |

### Response

The response comes back as JSON with the following fields:

| field   | type   | description                                                 |
| ------- | ------ | ----------------------------------------------------------- |
| number  | string | The number you evaluated in E.164 format                    |
| service | string | The service the number supports. Can be `iMessage` or `SMS` |

`
