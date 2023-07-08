
# Delete Template Message Request

## Structure

`DeleteTemplateMessageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `language` | `string` | Required | - |
| `category` | `string` | Required | - |
| `components` | [`Component1[]`](../../doc/models/component-1.md) | Required | - |

## Example (as JSON)

```json
{
  "name": "reblas12t",
  "language": "id",
  "category": "MARKETING",
  "components": [
    {
      "type": "BODY",
      "text": "gakei"
    }
  ]
}
```

