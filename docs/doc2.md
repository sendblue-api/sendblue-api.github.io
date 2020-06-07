---
id: sendingMessages
title: Sending Messages
sidebar_label: Sending Messages
---

Thank you for trying out sendblue. Below you will find some very basic API Docs on how you can use Sendblue to send and receive iMessages.

## Sending iMessages

In order to send messages with sendblue, simply send a POST request with your api key and secret as headers, and a json body which contains the destination number and the content of your message.

Here's what it looks like in Node.js:

``` js
request.post({
    url: "https://bluetexts-272923.uc.r.appspot.com/api/send-message",
    headers: {
        "sb-api-key-id": <<apiKey>>,
        "sb-api-secret-key": <<apiSecret>>
    },
    json: {
        number: number,
        content: content,
    }
}, (err, httpResponse, body) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Success!");
    }
});
```

## Send Message Response

Here is a sample send-message response:

```json
{
    "status": "SENT",
    "error_code": "",
    "from_number": "+13322175641",
    "messsage_handle": "1bfed3fa-2431-4ef2-b000-571a3c5dbf7b"
}
```

### Status

The status field will report the status. There are currently 7 different possible responses to a send-message request:

**SENT** - The message has been sent

**DELIVERED** - The message has been sent, and we've received confirmation of delivery from the end users phone.

**READ** - The message has been sent, and we've received confirmation that the end user has read the message.

**ERROR** - The message has failed to send, see the error_code field to understaind why

**DOWNGRADED** - The end user does not have iMessage enabled, therefore we had to downgrade the message and send it as an SMS

**TIMEOUT** - Our servers have failed to provide an accurate status for the message in the alotted time (8s). Use the '/status' endpoint to check the true message status

**PENDING** - You have requested to send this message when either you have reached your rate limit, or we are experiencing high traffic on the server, and we will send your message as soon as possible. You can request the status of the message using the '/status' endpoint.

### Error Codes

TODO :3

for now anything besides 0 means the message has failed. In the future we will be able to tell you if this has to do with a server error, malformed phone number, phone number DNE, etc.

### From Number

:::caution

Sendblue guaruntees message deliverability, and each client will only ever interact with your business from one phone number. However, different clients may see different numbers for texts sent from your company.

:::

The from_number field is given as a convenience to you, in case you want to keep track of that info, or tell the client that they should expect a text from the number that you show them.


### Handle

The message handle is used so that you can query the status of each message at a later date. This is especially useful in high volume message_status=PENDING cases or TIMEOUT cases.
