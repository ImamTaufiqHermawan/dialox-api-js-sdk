
# Create Template Request

## Structure

`CreateTemplateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `language` | `string` | Required | - |
| `category` | `string` | Required | - |
| `components` | [`Component[]`](../../doc/models/component.md) | Required | - |

## Example (as JSON)

```json
{
  "name": "dynamicbtn_final_fix_v1",
  "language": "id",
  "category": "MARKETING",
  "components": [
    {
      "type": "BODY",
      "text": "asdasdas da sd",
      "buttons": [
        {
          "type": "type7",
          "text": "text7",
          "url": "url1",
          "urlType": "urlType7"
        },
        {
          "type": "type8",
          "text": "text8",
          "url": "url2",
          "urlType": "urlType8"
        }
      ]
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "URL",
          "text": "Back",
          "url": "https://insignia.co.id",
          "urlType": "DYNAMIC"
        }
      ],
      "text": "text0"
    }
  ]
}
```

