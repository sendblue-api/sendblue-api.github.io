---
id: contact-card
title: Sending a Contact Card
sidebar_label: Sending a Contact Card
---

## Getting started
Having a user add you as a contact helps your business in many ways:

* it allows any links you send to expand on the end users phone, 
* it drastically increases your messaging rate limits.
* your user will know who you are, even if you don't message them in a year.

### Creating a contact card
The first step is to create a contact card for your business. You can do this with a free online tool such as https://vcardmaker.com/.

For this example we will be using our vcard which we uploaded to our Cloud storage bucket:

`https://storage.googleapis.com/inbound-file-store/bettervcard.vcf`

### Uploading to a CDN
CDN is just short for "Content Delivery Network". We use Google's Cloud Storage service for our CDN needs. But anything as simple as Google Drive or Dropbox will do. Just make sure to set the link to public so that Sendbue has access to fetch your file once you send the request to our servers.

### Sending the contact card

To send the contact card we only need two parameters in the body: `number` and `media_url`.

`number`: The phone number we want to send to.
`media_url`: The url pointing to the CDN which holds our contact card, in our case `https://storage.googleapis.com/inbound-file-store/bettervcard.vcf`.

### Troubleshooting
And that's it! if you run into issues make sure to reference our [outbound docs](/docs/outbound).

Some common reasons why this doesn't work:

1. The file URL is not a downloadable or accessible link.
2. The file URL does not end with `.vcf` or `.vcard`.
3. The file URL has a space in it.
4. The Content-Type parameter was not set in the request to Sendblue (set it to `application/json`)
5. The API key and Secret where not sent to the API as described in the [auth docs](/docs/credentials)

If you still have issues please feel free to [reach out](mailto:support@sendblue.co), this would help us improve our docs and we respod pretty fast!
