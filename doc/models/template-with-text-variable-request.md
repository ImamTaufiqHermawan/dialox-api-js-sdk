
# Template With Text Variable Request

## Structure

`TemplateWithTextVariableRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `broadcastName` | `string` | Required | - |
| `phoneNumber` | `string` | Required | - |
| `contactName` | `string` | Required | - |
| `templateName` | `string` | Required | - |
| `language` | `string` | Required | - |
| `parameters` | [`Parameters`](../../doc/models/parameters.md) | Required | - |

## Example (as JSON)

```json
{
  "broadcastName": "Broadcast Bicis",
  "phoneNumber": "6285156490298",
  "contactName": "Anto",
  "templateName": "test_abti",
  "language": "id",
  "parameters": {
    "body": [
      {
        "key": "1",
        "value_text": "",
        "value": "Halo Bang"
      }
    ]
  }
}
```

