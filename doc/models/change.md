
# Change

## Structure

`Change`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | [`Value`](../../doc/models/value.md) | Required | - |
| `field` | `string` | Required | - |

## Example (as JSON)

```json
{
  "value": {
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
  },
  "field": "messages"
}
```

