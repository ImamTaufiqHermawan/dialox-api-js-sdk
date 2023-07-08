
# Type Exisitng Group Request

## Structure

`TypeExisitngGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contacts` | [`Contact[]`](../../doc/models/contact.md) | Required | - |
| `type` | `string` | Required | - |
| `selectedGroup` | `string[]` | Required | - |

## Example (as JSON)

```json
{
  "contacts": [
    {
      "phoneNumber": "07989212312",
      "name": "Anto",
      "email": "emai@l"
    }
  ],
  "type": "existingGroup",
  "selectedGroup": [
    "4f476c70-592d-4dec-89df-ec91bde485cf"
  ]
}
```

