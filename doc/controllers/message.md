# Message

```ts
const messageController = new MessageController(client);
```

## Class Name

`MessageController`

## Methods

* [Create Message](../../doc/controllers/message.md#create-message)
* [L Ist Messages](../../doc/controllers/message.md#l-ist-messages)


# Create Message

```ts
async createMessage(
  workspaceId: string,
  conversationId: string,
  body: CreateMessageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `conversationId` | `string` | Template, Required | - |
| `body` | [`CreateMessageRequest`](../../doc/models/create-message-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const conversationId = 'e0d2aa48-8a08-4752-9bbc-78f25730d8b5';

const body: CreateMessageRequest = {
  from: 'agent',
  type: 'text',
  content: {
    text: 'halo',
  },
};

try {
  const { result, ...httpResponse } = await messageController.createMessage(
    workspaceId,
    conversationId,
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


# L Ist Messages

```ts
async lIstMessages(
  take: number,
  page: number,
  workspaceId: string,
  conversationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `take` | `number` | Query, Required | - |
| `page` | `number` | Query, Required | - |
| `workspaceId` | `string` | Template, Required | - |
| `conversationId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const take = 10;

const page = 1;

const workspaceId = 'workspace-1';

const conversationId = '65b63545-fea5-4ae0-8ab6-2e501aab2636';

try {
  const { result, ...httpResponse } = await messageController.lIstMessages(
    take,
    page,
    workspaceId,
    conversationId
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

