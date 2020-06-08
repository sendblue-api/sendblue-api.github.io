---
id: credentials
title: Credentials
sidebar_label: Credentials
---

In order to use the API you will need to request credentials on your account dashboard. 

## Requesting Credentials
Your API Keys will appear in your account dashboard, under "API Credentials". If you have never generated account credentials before you will se a button that says "Get Credentials".

## Using Credentials
With each request to the API, make sure to include the API Keys in the headers of the request. The server expects two headers relating to authentication:

- `SB-API-KEY-ID` : This is your API Key
- `SB-API-SECRET-KEY` : This is your API Secret
