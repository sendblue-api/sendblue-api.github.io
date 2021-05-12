---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

## Service
---

#### How can I get multiple phone numbers for my account?
Currently, dedicated phone numbers are only supported on the Enterprise plan (application [here](https://share.hsforms.com/1H186fzc2ScGa3wEz4ead-w8mskt)).

#### How much do dedicated numbers cost?
Dedicated numbers are $30 per month with an additional set-up cost depending on area code. [Contact us](mailto:support@sendblue.co) to learn about our bulk number discounts. 

#### Is there a minimum messaging requirement for the Enterprise plan?
Yes, the minimum messaging requirement to use the enterprise plan is 10,000 messages/month.

#### Can this service be shut down by Apple?
No, All of your messages get sent out regardless of underlying services. Our fallback from iMessage to SMS (via our upstream carrier) happens if we see that an iMessage has failed to send. if an SMS fails via our upstream carrier, we retry it using a scale SMS provider such as Twilio. Our 3-level retry mechanism ensures that our messages have the highest deliverability rates on the market.

#### Are there any free-forever plans?
Yes, we have a ton of free-forever plans for people building cool things. We announce them as giveaways on our [Twitter](https://twitter.com/sendbluedotco). If you'd like to apply for a free-forever plan please send an email to [nikita@sendblue.co](mailto:nikita@sendblue.co)

#### Is Sendblue a competitor to Community?
No, not directly - although we understand why people say Sendblue is a better, faster, and higher quality alternative to that service. 

## Messaging
---

#### Why aren't my links expanding?
Apple blocks your phone from expanding links when a sender is not in your contact list. A handy workaround is to send an Apple contact card to your user. See our [Send a contact card](contact-card) quickstart to get this going quickly

#### What happens if the recipient of a message doesn't have an iPhone?
If the recipient of one of your messages doesn't have iMesssage enabled we will automatically fall back to sending the message through SMS at no extra cost.

#### Does a number have to be a contact prior to me sending a message to it?
No, a contact will automatically be created when a message is sent through the API. However a contact does have to be registered in order to receive inbound messages from them.

#### Can I delete contacts and add new ones to stay under the limit?
Yes, however the messages are tied to the contact will no longer appear in the conversations view of your dashboard.

