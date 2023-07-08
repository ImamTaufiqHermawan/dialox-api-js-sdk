
# Create Message Request

## Structure

`CreateMessageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` | Required | - |
| `type` | `string` | Required | - |
| `content` | [`Content1`](../../doc/models/content-1.md) | Required | - |

## Example (as JSON)

```json
{
  "from": "agent",
  "type": "text",
  "content": {
    "text": "halo"
  }
}
```

