---
id: create-media-object
title: Create Media Object
description: API for uploading media objects - Sendblue
sidebar_label: Create Media Object
---

The Sendblue API allows you to create a media object by uploading a file using the specified endpoint.

## Create Media Object

To create a media object, make a POST request to the following endpoint:

`POST https://api.sendblue.co/api/upload-media-object`

### Request Parameters

- `media_url` (string): The URL containing the media object.

### Sample Request

```bash
curl --location --request POST 'https://api.sendblue.co/api/upload-media-object' \
--header 'sb-api-key-id: YOUR_SB_API_KEY_ID' \
--header 'sb-api-secret-key: YOUR_SB_API_SECRET_KEY' \
--data-raw '{
  "media_url": "URL_TO_YOUR_MEDIA_OBJECT"
}'
```

Here is the same in Node.js with Axios

```js
const axios = require("axios");

const url = "https://api.sendblue.co/api/upload-media-object";

axios
  .post(
    url,
    {
      media_url: "URL_TO_YOUR_MEDIA_OBJECT",
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

Sample Responses

Successful Response (Status 201)

```json
{
  "status": "OK",
  "message": "File uploaded successfully",
  "mediaObjectId": "MO_asdasdasdasdasd.jpg"
}
```

Error Response (Status 400)

```json
{
  "status": "ERROR",
  "message": "Invalid media URL"
}
```

Please make sure to replace placeholders like YOUR_SB_API_KEY_ID and YOUR_SB_API_SECRET_KEY with your actual API credentials in the sample requests.
