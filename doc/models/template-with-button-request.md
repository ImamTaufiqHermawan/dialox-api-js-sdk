
# Template With Button Request

## Structure

`TemplateWithButtonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `broadcastName` | `string` | Required | - |
| `phoneNumber` | `string` | Required | - |
| `contactName` | `string` | Required | - |
| `templateName` | `string` | Required | - |
| `language` | `string` | Required | - |
| `parameters` | [`Parameters2`](../../doc/models/parameters-2.md) | Required | - |

## Example (as JSON)

```json
{
  "broadcastName": "Broadcast Bicis",
  "phoneNumber": "6285156490298",
  "contactName": "Anto",
  "templateName": "dialoxbutton_1",
  "language": "id",
  "parameters": {
    "buttons": [
      {
        "index": "0",
        "type": "url",
        "value": "dialoxid"
      }
    ]
  }
}
```

