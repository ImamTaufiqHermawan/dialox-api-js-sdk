# Template Message

```ts
const templateMessageController = new TemplateMessageController(client);
```

## Class Name

`TemplateMessageController`

## Methods

* [Create Template](../../doc/controllers/template-message.md#create-template)
* [Update Template](../../doc/controllers/template-message.md#update-template)
* [Sync Template Message](../../doc/controllers/template-message.md#sync-template-message)
* [List Template Message](../../doc/controllers/template-message.md#list-template-message)
* [Detail Template Message](../../doc/controllers/template-message.md#detail-template-message)
* [Delete Template Message](../../doc/controllers/template-message.md#delete-template-message)


# Create Template

```ts
async createTemplate(
  workspaceId: string,
  channelId: string,
  body: CreateTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `body` | [`CreateTemplateRequest`](../../doc/models/create-template-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const channelId = 'channel-1';

const body: CreateTemplateRequest = {
  name: 'dynamicbtn_final_fix_v1',
  language: 'id',
  category: 'MARKETING',
  components: [
    {
      type: 'BODY',
      text: 'asdasdas da sd',
    },
    {
      type: 'BUTTONS',
      buttons: [
        {
          type: 'URL',
          text: 'Back',
          url: 'https://insignia.co.id',
          urlType: 'DYNAMIC',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await templateMessageController.createTemplate(
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


# Update Template

```ts
async updateTemplate(
  workspaceId: string,
  templateId: string,
  body: UpdateTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `templateId` | `string` | Template, Required | - |
| `body` | [`UpdateTemplateRequest`](../../doc/models/update-template-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const templateId = '045a89eb-67b3-45b4-b7d5-0dcb873e8a15';

const body: UpdateTemplateRequest = {
  name: 'reblas12t_antoooo',
  language: 'id',
  category: 'MARKETING',
  components: [
    {
      type: 'BODY',
      text: 'gakei',
    }
  ],
};

try {
  const { result, ...httpResponse } = await templateMessageController.updateTemplate(
    workspaceId,
    templateId,
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


# Sync Template Message

```ts
async syncTemplateMessage(
  workspaceId: string,
  channelId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const channelId = 'channel-1';

try {
  const { result, ...httpResponse } = await templateMessageController.syncTemplateMessage(
    workspaceId,
    channelId
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


# List Template Message

```ts
async listTemplateMessage(
  order: string,
  status: string,
  workspaceId: string,
  channelId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | `string` | Query, Required | - |
| `status` | `string` | Query, Required | - |
| `workspaceId` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const order = 'asc';

const status = 'APPROVED';

const workspaceId = 'workspace-1';

const channelId = 'channel-2';

try {
  const { result, ...httpResponse } = await templateMessageController.listTemplateMessage(
    order,
    status,
    workspaceId,
    channelId
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


# Detail Template Message

```ts
async detailTemplateMessage(
  workspaceId: string,
  templateId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `templateId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const templateId = 1214;

try {
  const { result, ...httpResponse } = await templateMessageController.detailTemplateMessage(
    workspaceId,
    templateId
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


# Delete Template Message

```ts
async deleteTemplateMessage(
  workspaceId: string,
  channel: string,
  temlateId: string,
  body: DeleteTemplateMessageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `channel` | `string` | Template, Required | - |
| `temlateId` | `string` | Template, Required | - |
| `body` | [`DeleteTemplateMessageRequest`](../../doc/models/delete-template-message-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'chitchat-6OHiX6r4_';

const channel = 'null';

const temlateId = '045a89eb-67b3-45b4-b7d5-0dcb873e8a15';

const body: DeleteTemplateMessageRequest = {
  name: 'reblas12t',
  language: 'id',
  category: 'MARKETING',
  components: [
    {
      type: 'BODY',
      text: 'gakei',
    }
  ],
};

try {
  const { result, ...httpResponse } = await templateMessageController.deleteTemplateMessage(
    workspaceId,
    channel,
    temlateId,
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

