
# Template With Header Request

## Structure

`TemplateWithHeaderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `broadcastName` | `string` | Required | - |
| `phoneNumber` | `string` | Required | - |
| `contactName` | `string` | Required | - |
| `templateName` | `string` | Required | - |
| `language` | `string` | Required | - |
| `parameters` | [`Parameters1`](../../doc/models/parameters-1.md) | Required | - |

## Example (as JSON)

```json
{
  "broadcastName": "Broadcast Bicis",
  "phoneNumber": "628128183734",
  "contactName": "Anto",
  "templateName": "trigr_preview_kol",
  "language": "id",
  "parameters": {
    "header": {
      "format": "IMAGE",
      "params": [
        {
          "key": "url",
          "value": "https://dialox.sgp1.digitaloceanspaces.com/files/d8613aae-2d80-4c7a-9c00-44897b9d4bec/image_2023_03_06T07_42_20_130Z.png"
        }
      ]
    }
  }
}
```

