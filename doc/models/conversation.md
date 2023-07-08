
# Conversation

## Structure

`Conversation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `expirationTimestamp` | `string` | Required | - |
| `origin` | [`Origin`](../../doc/models/origin.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "CONVERSATION_ID",
  "expiration_timestamp": "TIMESTAMP",
  "origin": {
    "type": "referral_conversion"
  }
}
```

