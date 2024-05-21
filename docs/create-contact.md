---
id: create-contact
title: Create Contact
description: iMessage for Business | Create a new contact - Sendblue
sidebar_label: Create Contact
---

The Sendblue API allows you to create a new contact with the specified details.

## Create Contact

To create a new contact, make a POST request to the following endpoint:

`POST https://api.sendblue.co/accounts/contacts`

### Request Parameters

- `firstName` (string): The first name of the contact.
- `lastName` (string): The last name of the contact.
- `number` (string): The phone number of the contact.
- `companyName` (string, optional): The company name of the contact

### Sample Request

```bash
curl --location --request POST 'https://api.sendblue.co/accounts/contacts' \
--header 'sb-api-key-id: YOUR_SB_API_KEY_ID' \
--header 'sb-api-secret-key: YOUR_SB_API_SECRET_KEY' \
--header 'Content-Type: application/json' \
--data '{
  "firstName": "John",
  "lastName": "Doe",
  "number": "+19999999999",
  "companyName": "ACME Inc"
}'
```

Here is the same in Node.js with Axios

```js
const axios = require("axios");

const url = "https://api.sendblue.co/accounts/contacts";

axios
  .post(
    url,
    {
      firstName: "John",
      lastName: "Doe",
      number: "+19999999999",
      companyName: "ACME Inc",
    },
    {
      headers: {
        "sb-api-key-id": "YOUR_SB_API_KEY_ID",
        "sb-api-secret-key": "YOUR_SB_API_SECRET_KEY",
      },
    }
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Sample Response

```json
{
  "status": "OK",
  "contact": "BUjbHDKzAQqs9M6bWAq5",
  "contactData": {
    "account_email": "your@email.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+19999999999",
    "displayPhone": "+1 9 999 999 9999",
    "companyName": "ACME Inc"
  }
}
```

### Possible Error Responses:

- If the contact already exists:

  ```json
  {
    "status": "ERROR",
    "message": "Contact already exists"
  }
  ```

- If the phone number is invalid:

  ```json
  {
    "status": "ERROR",
    "message": "Invalid phone number"
  }
  ```

- For other internal server errors:

  ```json
  {
    "status": "ERROR",
    "message": "Internal server error message"
  }
  ```

Please make sure to replace placeholders like YOUR_SB_API_KEY_ID and YOUR_SB_API_SECRET_KEY with your actual API credentials in the sample requests.
