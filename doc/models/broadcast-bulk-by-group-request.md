
# Broadcast Bulk by Group Request

## Structure

`BroadcastBulkByGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Required | - |
| `templateName` | `string` | Required | - |
| `source` | `string` | Required | - |
| `groupId` | `string` | Required | - |
| `name` | `string` | Required | - |
| `parameters` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "templateId": "100",
  "templateName": "tst_himg_2var_3qrbtn_v1",
  "source": "group",
  "groupId": "730e68bd-bc65-439e-a1a6-953d395b7755",
  "name": "Create Broadcast",
  "parameters": {}
}
```

