---
id: get-contact-by-id
title: Get Contact by ID
description: iMessage for Business | Retrieve a contact by ID - Sendblue
sidebar_label: Get Contact by ID
---

The Sendblue API allows you to retrieve contact information by their unique contact ID. This endpoint can be used to fetch detailed information about a specific contact.

## Get Contact by ID

To retrieve a contact, make a GET request to the following endpoint:

`GET https://api.sendblue.co/accounts/contacts/:contact_id`

Replace `:contactId` in the endpoint URL with the unique contact ID you want to retrieve.

### Sample Request

```bash
curl --location --request GET 'https://api.sendblue.co/accounts/contacts/12345' \
--header 'sb-api-key-id: YOUR_SB_API_KEY_ID' \
--header 'sb-api-secret-key: YOUR_SB_API_SECRET_KEY'
```

And here's the same in Node.js with Axios

```js
const axios = require("axios");
const url = "https://api.sendblue.co/accounts/contacts/12345";

axios
  .get(url, {
    headers: {
      "SB-API-KEY-ID": "YOUR_SB_API_KEY_ID",
      "SB-API-SECRET-KEY": "YOUR_SB_API_SECRET_KEY",
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Possible Responses

```json
{
  "status": "OK",
  "contact": {
    "account_email": "thecontact@email.com",
    "displayPhone": "+1 234 567 8912",
    "phone": "+12345678912",
    "is_unread": false,
    "displayDate": "8/18/23 1:02 AM",
    "previewText": "this is the latest message i sent to you",
    "last_date": "2023-08-18T01:02:13.689Z", // last message date
    "cid": "bLaLblalaLl11lALlalabla"
  }
}
```

If there is no contact with the specified ID, you will receive a `404` status code with the following body:

```json
{
  "status": "error",
  "message": "Contact not found"
}
```
