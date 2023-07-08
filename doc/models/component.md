
# Component

## Structure

`Component`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | - |
| `text` | `string \| undefined` | Optional | - |
| `buttons` | [`Button2[] \| undefined`](../../doc/models/button-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "BODY",
  "text": "asdasdas da sd",
  "buttons": [
    {
      "type": "type8",
      "text": "text8",
      "url": "url2",
      "urlType": "urlType8"
    },
    {
      "type": "type9",
      "text": "text9",
      "url": "url3",
      "urlType": "urlType9"
    }
  ]
}
```

