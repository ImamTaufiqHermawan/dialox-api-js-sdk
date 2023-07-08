
# Value

## Structure

`Value`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messagingProduct` | `string` | Required | - |
| `metadata` | [`Metadata`](../../doc/models/metadata.md) | Required | - |
| `statuses` | [`Status[]`](../../doc/models/status.md) | Required | - |

## Example (as JSON)

```json
{
  "messaging_product": "whatsapp",
  "metadata": {
    "display_phone_number": "PHONE_NUMBER",
    "phone_number_id": "PHONE_NUMBER_ID"
  },
  "statuses": [
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
  ]
}
```

