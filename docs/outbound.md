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
const url = `https://api.sendblue.co/api/send-message` ;

axios.post(url, {
        number: '+19998887777',
        content: 'Hello world!',
        statusCallback: 'https://example.com/message-status/1234abcd',
    },
    headers: {
        "sb-api-key-id": << apiKey >> ,
        "sb-api-secret-key": << apiSecret >>
    },
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});
```

## Status Callback

Sendblue will POST the endpoint you provide in `statusCallback` whenever the status of a message changes to one of the following:

 * queued
 * failed
 * sent
 * delivered
 * read

Below is an example of the POST body that is sent to the statusCallback URL for a delivered message:

```json
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
  "to_number": "+19998887777",
  "was_downgraded": false,
  "plan": "blue"
}
```

## Status Resolution

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

## Useful Information

### From Number

:::caution

Sendblue focuses on message deliverability and end-user experience. This means that each of your users will only ever interact with your business through one Sendblue phone number. However, different clients may see different numbers for texts sent from your company. See [Limits & Queues](docs/messageLimits) for more info

:::

The from_number field is given as a convenience to you, in case you want to keep track of that info, or tell the client that they should expect a text from the number that you show them.

### Handle

The message handle is used so that you can query the status of each message at a later date. This is especially useful in high volume message_status=QUEUED cases or TIMEOUT cases.
