---
id: credentials
title: Credentials | Sendblue Documentation
description: Authenticating with the Sendblue API | iMessage for Business
sidebar_label: Credentials
---

In order to use the API you will need to use the credentials which you can find in your account dashboard.

## Requesting Credentials

Your API Keys will appear in your API dashboard as soon as you have an account.

## Using Credentials

With each request to the API, make sure to include the API Keys in the headers of the request. The server expects two headers relating to authentication:

- `SB-API-KEY-ID` : This is your API Key
- `SB-API-SECRET-KEY` : This is your API Secret

## Best Practices

It is generally best practice not to expose your API keys by using them from the frontend, and Sendblue actually disallows requests from frontend applications entirely to keep your keys safe
