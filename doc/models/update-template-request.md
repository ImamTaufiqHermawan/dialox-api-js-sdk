
# Update Template Request

## Structure

`UpdateTemplateRequest`

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
  "name": "reblas12t_antoooo",
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

