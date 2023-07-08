
# Type Create Group Request

## Structure

`TypeCreateGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contacts` | [`Contact[]`](../../doc/models/contact.md) | Required | - |
| `type` | `string` | Required | - |
| `groupName` | `string` | Required | - |

## Example (as JSON)

```json
{
  "contacts": [
    {
      "phoneNumber": "0798921222312",
      "name": "Anto",
      "email": "ema22i@l"
    }
  ],
  "type": "createGroup",
  "groupName": "MUFC"
}
```

