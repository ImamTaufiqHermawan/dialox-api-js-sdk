# Broadcast

```ts
const broadcastController = new BroadcastController(client);
```

## Class Name

`BroadcastController`

## Methods

* [List Broadcast](../../doc/controllers/broadcast.md#list-broadcast)
* [Detail Broadcast](../../doc/controllers/broadcast.md#detail-broadcast)
* [Broadcast Log](../../doc/controllers/broadcast.md#broadcast-log)
* [Send Broadcast Single](../../doc/controllers/broadcast.md#send-broadcast-single)
* [Broadcast Bulk by File Csv](../../doc/controllers/broadcast.md#broadcast-bulk-by-file-csv)
* [Broadcast Bulk by Group](../../doc/controllers/broadcast.md#broadcast-bulk-by-group)


# List Broadcast

```ts
async listBroadcast(
  workspaceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

try {
  const { result, ...httpResponse } = await broadcastController.listBroadcast(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Detail Broadcast

```ts
async detailBroadcast(
  workspaceId: string,
  broadcastId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `broadcastId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const broadcastId = '02f925ae-9155-4f8f-825b-bf862f3a9849';

try {
  const { result, ...httpResponse } = await broadcastController.detailBroadcast(
    workspaceId,
    broadcastId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Broadcast Log

```ts
async broadcastLog(
  page: number,
  status: string,
  workspaceid: string,
  broadcastId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number` | Query, Required | - |
| `status` | `string` | Query, Required | - |
| `workspaceid` | `string` | Template, Required | - |
| `broadcastId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const page = 1;

const status = 'delivered,read';

const workspaceid = 'workspace-1';

const broadcastId = 'e52b3ab7-cbfc-4a57-9c79-dc7ee4197cf2';

try {
  const { result, ...httpResponse } = await broadcastController.broadcastLog(
    page,
    status,
    workspaceid,
    broadcastId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Broadcast Single

```ts
async sendBroadcastSingle(
  workspaceId: string,
  channelId: string,
  body: SendBroadcastSingleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `body` | [`SendBroadcastSingleRequest`](../../doc/models/send-broadcast-single-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const channelId = 'channel-1';

const body: SendBroadcastSingleRequest = {
  broadcastName: 'Broadcast Test',
  phoneNumber: '6289660704298',
  contactName: 'Anto',
  templateName: 'trigr_preview_kol',
  language: 'id',
  parameters: {  },
};

try {
  const { result, ...httpResponse } = await broadcastController.sendBroadcastSingle(
    workspaceId,
    channelId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Broadcast Bulk by File Csv

```ts
async broadcastBulkByFileCsv(
  body: BroadcastBulkByFileCsvRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Scheduler>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BroadcastBulkByFileCsvRequest`](../../doc/models/broadcast-bulk-by-file-csv-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Scheduler`](../../doc/models/scheduler.md)

## Example Usage

```ts
const body: BroadcastBulkByFileCsvRequest = {
  templateId: '100',
  templateName: 'final_header_v2',
  source: 'csv',
  broadcastFileId: 'clde0ynl10000tehlexyhbn9n',
  name: 'Create Broadcast',
};

try {
  const { result, ...httpResponse } = await broadcastController.broadcastBulkByFileCsv(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "data": {
    "id": "4cd79aac-1789-4adc-9d01-09774fe76276"
  }
}
```


# Broadcast Bulk by Group

```ts
async broadcastBulkByGroup(
  workspaceid: string,
  channelId: string,
  body: BroadcastBulkByGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Scheduler>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceid` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `body` | [`BroadcastBulkByGroupRequest`](../../doc/models/broadcast-bulk-by-group-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Scheduler`](../../doc/models/scheduler.md)

## Example Usage

```ts
const workspaceid = 'workspace-1';

const channelId = 'channel-1';

const body: BroadcastBulkByGroupRequest = {
  templateId: '100',
  templateName: 'tst_himg_2var_3qrbtn_v1',
  source: 'group',
  groupId: '730e68bd-bc65-439e-a1a6-953d395b7755',
  name: 'Create Broadcast',
  parameters: {  },
};

try {
  const { result, ...httpResponse } = await broadcastController.broadcastBulkByGroup(
    workspaceid,
    channelId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "data": {
    "id": "0ed7d260-ba0b-4bcf-8e8a-24dd62d64a91"
  }
}
```

