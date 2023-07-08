
# Parameters 3

## Structure

`Parameters3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `header` | [`Header`](../../doc/models/header.md) | Required | - |
| `body` | [`Body1[]`](../../doc/models/body-1.md) | Required | - |
| `buttons` | [`Button1[]`](../../doc/models/button-1.md) | Required | - |

## Example (as JSON)

```json
{
  "header": {
    "format": "IMAGE",
    "params": [
      {
        "key": "1",
        "value": "https://tinyjpg.com/images/social/website.jpg"
      }
    ]
  },
  "body": [
    {
      "variable": "1",
      "type": "name",
      "value": "",
      "index": "0"
    },
    {
      "variable": "2",
      "type": "phonenumber",
      "value": "",
      "index": "1"
    }
  ],
  "buttons": [
    {
      "variable": "QUICK_REPLY",
      "type": "name",
      "value": "test",
      "index": "0"
    },
    {
      "variable": "QUICK_REPLY",
      "type": "name",
      "value": "test",
      "index": "1"
    },
    {
      "variable": "QUICK_REPLY",
      "type": "name",
      "value": "test",
      "index": "2"
    }
  ]
}
```

