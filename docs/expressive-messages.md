---
id: expressive-messages
title: Expressive Messages
sidebar_label: Expressive Messages
---

Expressve messages allow you to add an extra flare to the messages you send to iPhone users.

## Usage
To send a message with a specific send style add the `send_style` field into the JSON body of the request so that your request looks like:

```json
{
    "number": "+19999999999",
    "content": "check it out - this message is invisible!",
    "send_style": "invisible"
}
```

### Possible values:

| send_style |
| --- |
| `"celebration"` |
| `"shooting_star"` |
| `"fireworks"` |
| `"lasers"` |
| `"love"` |
| `"confetti"` |
| `"balloons"` |
| `"spotlight"` |
| `"echo"` |
| `"invisible"` |
| `"gentle"` |
| `"loud"` |
| `"slam"` |

## Examples
### Invisible ink:
![invisible ink](/static/img/invisible_ink_example.jpeg)
### Fireworks:
![firework](/static/img/fireworks_example.jpg)