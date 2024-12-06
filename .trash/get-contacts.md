---
id: get-contacts
title: Get Contacts
description: iMessage for Business | Retrieve contacts - Sendblue
sidebar_label: Get Contacts
---

The Sendblue API allows you to retrieve a list of contacts. This endpoint can be used to fetch contacts with various filtering and pagination options.

## Get Contacts

To retrieve contacts, make a GET request to the following endpoint:

`GET https://api.sendblue.co/accounts/contacts`

### Query Parameters

- `order_direction` (optional): The order direction for sorting contacts, can be "asc" (ascending) or "desc" (descending) (default is "desc").
- `limit` (optional): The maximum number of contacts to retrieve per request.
- `offset` (optional): The offset for paginating through contacts.
- `order_by` (optional): The field by which to order contacts, such as "last_date" or another suitable field.

### Sample Request

```bash
curl --location --request GET 'https://api.sendblue.co/accounts/contacts?order_direction=asc&limit=2&offset=30&order_by=last_date' \
--header 'sb-api-key-id: YOUR_SB_API_KEY_ID' \
--header 'sb-api-secret-key: YOUR_SB_API_SECRET_KEY'
```

Here is the same in Node.js with Axios

```js
const axios = require("axios");

const url = "https://api.sendblue.co/accounts/contacts";

axios
  .get(url, {
    headers: {
      "sb-api-key-id": "YOUR_SB_API_KEY_ID",
      "sb-api-secret-key": "YOUR_SB_API_SECRET_KEY",
    },
    params: {
      order_direction: "asc",
      limit: 2,
      offset: 30,
      order_by: "last_date",
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Sample Response

```json
[
  {
    "firstName": "John",
    "lastName": "Doe",
    "account_email": "your@email.com",
    "displayPhone": "+1 9 999 999 9999",
    "is_unread": false,
    "displayDate": "6/8/23 7:39 PM",
    "previewText": "this is the latest message that i, John, sent you",
    "last_date": "2023-06-08T19:39:59.312Z",
    "phone": "+19999999999",
    "cid": "BUjbHDKzAQqs9M6bWAq5"
  },
  {
    "account_email": "your@email.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "displayPhone": "+1 888 888 8888",
    "is_unread": false,
    "displayDate": "6/22/23 4:28 PM",
    "previewText": "this is the latest message that i, Jane, sent you",
    "last_date": "2023-06-22T19:28:01.937Z",
    "phone": "+18888888888",
    "cid": "LGHRAbQyxrk57EXkxMWb"
  }
]
```
