
# Send Broadcast Single Request

## Structure

`SendBroadcastSingleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `broadcastName` | `string` | Required | - |
| `phoneNumber` | `string` | Required | - |
| `contactName` | `string` | Required | - |
| `templateName` | `string` | Required | - |
| `language` | `string` | Required | - |
| `parameters` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "broadcastName": "Broadcast Test",
  "phoneNumber": "6289660704298",
  "contactName": "Anto",
  "templateName": "trigr_preview_kol",
  "language": "id",
  "parameters": {}
}
```

