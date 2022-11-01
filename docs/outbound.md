---
id: outbound
title: Sending Messages
sidebar_label: Sending Messages
---

The Sendblue API conforms to REST API standards. Using it, you can send outbound iMessage and SMS to any enabled phone globally. All requests can either be form-encoded or 

In this documentation, we will cover how to:

 1. [Send iMessages to a destination phone number](/docs/outbound#sending-imessages)
 2. [Track the status of your message using webhooks](/docs/outbound#status-callback)

## Sending iMessages

You can send a message directly with cURL or by using one of our client libraries by hitting the following endpoint: 

 `POST https://api.sendblue.co/api/send-message`
Here's what that looks like in Node.js

``` js
const axios = require('axios');

const url = `https://api.sendblue.co/api/send-message` ;

axios.post('https://api.sendblue.co/api/send-message', {
        number: '+19998887777',
        content: 'Hello world!',
        send_style: 'invisible',
        media_url: 'https://source.unsplash.com/random.png',
        statusCallback: 'https://example.com/message-status/1234abcd',
    },
    {
        headers: {
            "sb-api-key-id": "d607fd40ff448cf9219ceec7c41f6dc5",
            "sb-api-secret-key": "a10df202e09c763cbaf291cfa2b361b2",
            "content-type": "application/json"
        }
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.error(error);
    });
```

### Request body
| parameter | type | description |
| --- | --- | --- |
| number | string | The number of the recipient of the message |
| content | string | The content of the message |
| send_style | string | The style of delivery of the message (see [expressive messages](/docs/expressive-messages)) |
| media_url | string | The URL of the image you want to send |
| statusCallback | string | The URL where you want to receive the status updates of the message |

## Sending files

You can send images using the `media_url` parameter. This URL should be a CDN link pointing to an image. The URL must end with the proper file extension. We recommend sticking to the standard PascalCase naming convention. So if your image is named "Welcome Image", we recommend uploading it to your CDN as "WelcomeImage.png". 

Files are currently capped at **5MB**. 

## Status Callback

Sendblue will POST the endpoint you provide in `statusCallback` whenever the status of a message changes to one of the following:

 * queued
 * failed
 * sent
 * delivered
 * read

Below is an example of the POST body that is sent to the statusCallback URL for a delivered message:

``` json
{
  "accountEmail": "support@sendblue.co",
  "content": "Hello world!",
  "is_outbound": true,
  "status": "DELIVERED",
  "error_code": null,
  "error_message": null,
  "message_handle": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
  "date_sent": "2020-09-10T06:15:05.962Z",
  "date_updated": "2020-09-10T06:15:14.115Z",
  "from_number": "+15122164639",
  "number": "+19998887777",
  "to_number": "+19998887777",
  "was_downgraded": false,
  "plan": "blue"
}
```

:::important
You must send a response to our server in order to avoid receiving multiple webhook calls.
:::

## Message Status Resolution

| Callback Body Field | Type | Description |
| --- | --- | --- |
| accountEmail | `string` | Associated account email |
| content | `string` | Message content |
| is_outbound | `boolean` | True if message is sent, false if message is received |
| media_url | `string` | A CDN link to the image that you sent our servers |
| status | `string` | The current status of the message |
| error_code | `int` | error code (null if no error) |
| error_message | `string` | descriptive error message (null if no error) |
| message_handle | `string` | Sendblue message handle |
| date_sent | `string` | ISO 8601 formatted date string of the date this message was created |
| date_updated | `string` | ISO 8601 formatted date string of the date this message was last updated |
| from_number | `string` | E.164 formatted phone number string of the message dispatcher |
| number | `string` | E.164 formatted phone number string of your end-user (not the Sendblue-provided phone number) |
| to_number | `string` | E.164 formatted phone number string of the message recipient |
| was_downgraded | `boolean` | true if the end user does not support iMessage, false otherwise |
| plan | `string` | Value of the Sendblue account plan |

### Status

The status field will report the status. There are currently 7 different possible responses to a send-message request:

| Status | Description |
| --- | --- |
| **QUEUED** | The message has reached our servers, and has passed our validation checks. It has been queued for delivery |
| **SENT** | The message has been sent |
| **DELIVERED** | The message has been sent, and we've received confirmation of delivery (iMessage Only) | 
| **READ** | The message has been sent, and we've received confirmation that the end user has read the message (iMessage Only) | 
| **ERROR** | The message has failed to send, see the `error_code` field to understaind why |

### Error Codes

Any Code besides 0 or null is a failure. Some codes are not yet documented.

| Code | Description |
| --- | --- |
| 4000 | Validation Error: see `error_message` field |
| 4001 | Rate Limit Exceeded |
| 4002 | Blacklisted Number (e.g. 911) |
| 5000 | Internal Error |
| 5003 | Server Rate Exceeded |
| 10001 | message failed to send |
| 10002 | failed to resolve message status |

## Limits

Messages sent using Sendblue must be less than 18996 characters in length. If you have larger requirements we recommend breaking the message up into several, smaller messages.

## Useful Information

### From Number

:::caution

Sendblue focuses on message deliverability and end-user experience. This means that each of your users will only ever interact with your business through one Sendblue phone number. However, different clients may see different numbers for texts sent from your company. See [Limits & Queues](docs/messageLimits) for more info

:::

The from_number field is given as a convenience to you, in case you want to keep track of that info, or tell the client that they should expect a text from the number that you show them.

### Handle

The message handle is used so that you can query the status of each message at a later date. This is especially useful in high volume message_status=QUEUED cases or TIMEOUT cases.