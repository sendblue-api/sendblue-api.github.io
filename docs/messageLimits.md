---
id: messageLimits
title: Rate Limits and Message Queues
sidebar_label: Limits & Queues
---


## Introduction
Sendblue's iMessage and SMS API have an absolute rate-limit of 1 message per second, per user, per number. This means that if you want to send messages faster than that, you will need to upgrade to a custom plan and use as many numbers as is necessary for your use-case. For example, if you need to send around 4 messages per second, you should upgrade your plan to have 4 numbers. A cheaper version is to opt for a pooled plan where we will assign you numbers at random, but each message will go out much faster.
## Number Balancing
As a user, you are not guaranteed a certain number, but rather, you will be placed in a pool where each one of your messages will get routed according to our load-balancing algorithm to ensure the best performance for all our users. Although you are not guaranteed which number you will initially send from, each of your recipients will only message you through one number. That means that if one of your users gets a text from +19998887777, any future conversation with that user will be routed, securely end-to-end between you and the user. 
## Rate Limits
Each number is capable of sending 1 message per second. However, all accounts besides the dedicated (custom) plan will be throttled further to avoid overloading our servers. This throttle is 2000 per day for the Blue plan, and 6000 per day for the Sapphire plan.
### Message Send Limitations
If you send off 60 messages, we will queue these messages and send them one at a time. This means that the 60th message will be sent out around 1 minute after your request was made. We can hold all of your queued messages for a window of up to 6,000 messages, at which point further calls to the API will result in a 429 - "Too Many Requests" response code.
## Messaging Limits
The messaging limits for the Blue and Sapphire plan are 2000 and 6000 per month, respectively. We will email you when you reach 75, 90, and 100% of this threshold. We understand that things may pick up unexpectedly, so we do not enforce these hard limits, but rather allow you to send up to 120% of your monthly capacity of messages, free of charge. If you see your messaging requirements picking up rapidly, we highly encourage you to upgrade as soon as you can to ensure a positive experience for your end-users.