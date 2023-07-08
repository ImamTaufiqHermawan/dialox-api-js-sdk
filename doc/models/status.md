
# Status

## Structure

`Status`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `status` | `string` | Required | - |
| `timestamp` | `string` | Required | - |
| `recipientId` | `string` | Required | - |
| `conversation` | [`Conversation`](../../doc/models/conversation.md) | Required | - |
| `pricing` | [`Pricing`](../../doc/models/pricing.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "wamid.HBgNNjI4OTY2MDcwNDI5OBUCABEYEkQyREI2OUE4NjlCODQwNzJBQwA=",
  "status": "delivered",
  "timestamp": "TIMESTAMP",
  "recipient_id": "PHONE_NUMBER",
  "conversation": {
    "id": "CONVERSATION_ID",
    "expiration_timestamp": "TIMESTAMP",
    "origin": {
      "type": "referral_conversion"
    }
  },
  "pricing": {
    "billable": false,
    "pricing_model": "CBP",
    "category": "referral_conversion"
  }
}
```

