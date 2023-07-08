
# Document Request

## Structure

`DocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` | Required | - |
| `type` | `string` | Required | - |
| `content` | [`Content`](../../doc/models/content.md) | Required | - |

## Example (as JSON)

```json
{
  "from": "agent",
  "type": "document",
  "content": {
    "url": "https://www.africau.edu/images/default/sample.pdf",
    "text": "WOOOOOOIU",
    "fileType": "pdf"
  }
}
```

