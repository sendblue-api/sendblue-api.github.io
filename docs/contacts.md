---
id: contacts
title: Contacts API | Sendblue Documentation
description: Create and manage contacts using the Sendblue API
sidebar_label: Contacts
---

## Creating a Contact

You can create a new contact in your Sendblue account to store contact information for messaging.

### Authentication

Include your API credentials in the request headers:

```js
"sb-api-key-id": <<apiKey>>
"sb-api-secret-key": <<apiSecret>>
```

### Making the Request

`POST https://api.sendblue.co/api/contacts`

### Request Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `number` | string | Yes | Phone number of the contact (E.164 format recommended) |
| `firstName` | string | No | First name of the contact |
| `lastName` | string | No | Last name of the contact |
| `companyName` | string | No | Company name associated with the contact |
| `tags` | array | No | Array of tags to associate with the contact |

### Example Request

```bash
curl -X POST https://api.sendblue.co/api/contacts \
  -H "Content-Type: application/json" \
  -H "sb-api-key-id: your_api_key" \
  -H "sb-api-secret-key: your_api_secret" \
  -d '{
    "number": "+1234567890",
    "firstName": "John",
    "lastName": "Doe",
    "companyName": "Acme Corp",
    "tags": ["customer", "vip"]
  }'
```

### Example Response

#### Success Response (201 Created)

```json
{
  "status": "OK",
  "contact": {
    "id": "contact_abc123",
    "number": "+1234567890",
    "firstName": "John",
    "lastName": "Doe",
    "companyName": "Acme Corp",
    "tags": ["customer", "vip"],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Error Responses

**400 Bad Request - Missing Required Fields**
```json
{
  "status": "ERROR",
  "message": "Missing fields"
}
```

**400 Bad Request - Invalid Phone Number**
```json
{
  "status": "ERROR",
  "message": "Invalid phone number"
}
```

**409 Conflict - Contact Already Exists**
```json
{
  "status": "ERROR",
  "message": "Contact already exists"
}
```

**500 Internal Server Error**
```json
{
  "status": "ERROR",
  "message": "Internal server error message"
}
```

### Notes

- Phone numbers should be in E.164 format (e.g., `+1234567890`) for best compatibility
- Duplicate contacts (same phone number) are not allowed and will return a 409 error
- All fields except `number` are optional
- Tags can be used for organizing and filtering contacts
- The created contact will be associated with your authenticated account