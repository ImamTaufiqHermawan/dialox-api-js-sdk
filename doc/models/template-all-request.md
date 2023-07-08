
# Template All Request

## Structure

`TemplateAllRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Required | - |
| `templateName` | `string` | Required | - |
| `source` | `string` | Required | - |
| `groupId` | `string` | Required | - |
| `name` | `string` | Required | - |
| `parameters` | [`Parameters3`](../../doc/models/parameters-3.md) | Required | - |
| `broadcastFileId` | `string` | Required | - |
| `isScheduled` | `boolean` | Required | - |
| `triggerAt` | `string` | Required | - |

## Example (as JSON)

```json
{
  "templateId": "9f08ff55-31a6-46e2-a1a9-2f44b720f791",
  "templateName": "tst_himg_2var_3qrbtn_v1",
  "source": "group",
  "groupId": "0172b03a-ca46-4616-b613-7b67ef5623d4",
  "name": "asdasd",
  "parameters": {
    "header": {
      "format": "IMAGE",
      "params": [
        {
          "key": "1",
          "value": "https://tinyjpg.com/images/social/website.jpg"
        }
      ]
    },
    "body": [
      {
        "variable": "1",
        "type": "name",
        "value": "",
        "index": "0"
      },
      {
        "variable": "2",
        "type": "phonenumber",
        "value": "",
        "index": "1"
      }
    ],
    "buttons": [
      {
        "variable": "QUICK_REPLY",
        "type": "name",
        "value": "test",
        "index": "0"
      },
      {
        "variable": "QUICK_REPLY",
        "type": "name",
        "value": "test",
        "index": "1"
      },
      {
        "variable": "QUICK_REPLY",
        "type": "name",
        "value": "test",
        "index": "2"
      }
    ]
  },
  "broadcastFileId": "",
  "isScheduled": false,
  "triggerAt": "2023-03-20T03:38:00.000Z"
}
```

