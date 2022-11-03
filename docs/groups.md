---
id: groups
title: Group Messages
sidebar_label: Group Messages
---

:::caution
This API is still in beta, and is subject to change at any time. Please [consult with us](mailto:support@sendblue.co) before going into production.
:::

## Availability

Currently the group messaging api is only available to Sapphire plans and above.

# Roadmap

- ✅ **Sending iMessages to groups**: supported
- ✅ **Sending SMS to groups**: supported
- ✅ **Receiving iMessage in groups**: supported
- ✅ **Receiving SMS in groups**: supported
- ✅ **Sending MMS to groups**: supported
- ✅ **Receiving MMS in groups**: supported
- ✅ **Sending [expressive messages](/docs/expressive-messages)**: supported
- ✅ **Adding people to groups**: supported
- 🟡 _**Removing people from groups**: Scheduled_
- 🟡 _**Changing group names**: Scheduled_
- 🟡 _**Leaving groups**: Scheduled_

# Sending group messages

The API request to send group messages is similar to the [individual message request](/docs/outbound/#sending-imessages).

## API Request

The API request should be made with the `application/json` content type header. If the group does not exist during the request, it will be created automatically.

### Endpoint

`POST https://api.sendblue.co/api/send-group-message`

### POST Body (JSON)

The group messaging API expects a slightly different json body than the individual message api. Here are the available fields:

| Field           | Type     | Description                                                                                                                                                                             |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| numbers         | `array`  | numbers is an array of `strings` which contain the E.164-formatted phone numbers of the desired recipients in a group chat. The maximum number of people allowed in a group chat is 25. |
| group_id        | `string` | The group_id field is a uuid with which you can message groups that you have already created. This is the same as passing the same list of numbers as was passed in the initial request |
| content         | `string` | The content field is the message that you want to send to the group.                                                                                                                    |
| media_url       | `string` | A CDN link to a file which is publicly accessible which will be downloaded and sent to the group by Sendblue                                                                            |
| send_style      | `string` | The style of delivery of the message (see [expressive messages](/docs/expressive-messages))                                                                                             |
| status_callback | `string` | An endpoint which we can hit to notify your app of status updates for this message, see [status callback](/docs/outbound#status-callback) for more info                                 |

_Either numbers or group_id is required_

_Either content or media_url is required_

### Example

```js
const url = `https://api.sendblue.co/api/send-group-message`;

axios.post(url, {
    numbers: [
        '+19998887777',
        '+17778889999'
    ],
    content: 'Hello group!',
    media_url: 'https://source.unsplash.com/random.png',
    status_callback: 'https://example.com/message-status/1234abcd',
},
headers: {
    "sb-api-key-id": << apiKey >> ,
    "sb-api-secret-key": << apiSecret >> ,
    "content-type": "application/json"
},
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});
```

## API Response

The API response will contain the assigned group_id, which is useful for correlating messages sent to a group and messages received from a group.

:::info Note
The `group_id` that you receive in the response from `/api/send-group-message` is the only way you will be able to correlate messages sent in a group to messages received from a group in your app.
:::

#### Example

See the example below to see what our response body looks like. Note that this API is still in Beta so the fields below are subject to change.

```json
{
  "accountEmail": "nikita.jerschow@gmail.com",
  "content": "please",
  "is_outbound": true,
  "status": "QUEUED",
  "error_code": null,
  "error_message": null,
  "message_handle": "073c1408-a6d9-48e2-ae8c-01f026443833",
  "date_sent": "2021-05-19T23:07:23.371Z",
  "date_updated": "2021-05-19T23:07:23.371Z",
  "from_number": "+13322175641",
  "number": ["+19173599290", "+18582430295"],
  "to_number": ["+19173599290", "+18582430295"],
  "was_downgraded": null,
  "plan": "blue",
  "media_url": "https://source.unsplash.com/random.png",
  "message_type": "group",
  "group_id": "66e3b90d-4447-43c6-9439-15a694408ac2"
}
```

:::caution
the `number` and `to_number` fields will likely be renamed to `numbers` and `to_numbers` respectively.
:::

# Receiving Group Messages

Receiving group messages is very straightforward. There will be a field called group_id which gets sent to your [receive webhook](/docs/inbound).

# Adding people to group chats

To add someone to your group chat, you can send a POST request to `/api/modify-group`.

This endpoint expects 3 parameters.

| Field       | Type                                                                                                | Description                                                                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| group_id    | `string`                                                                                            | The id of the group which you want to add a recipient to                                                                                                       |
| modify_type | `add_recipient`, <br /> `remove_recipient`&nbsp;🟡, <br /> `rename`&nbsp;🟡, <br /> `leave`&nbsp;🟡 | The modification type to perform                                                                                                                               |
| number      | `string`                                                                                            | The E.164 standard format for the number that you want to add/remove from the group chat. (Ignored if `modify_type` !== `add_recipient` or `remove_recipient`) |

🟡 _= unsupported_

Here is an example of the JSON post body:

```json
{
  "group_id": "12324354gds-234gvwa30-4evdsbtrs-4agrg4areeg",
  "modify_type": "add_recipient",
  "number": "‭+19998887777"
}
```

# Removing people from group chats (In progress)

:::tip
This documentation is actively being updated
:::
