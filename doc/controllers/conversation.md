# Conversation

```ts
const conversationController = new ConversationController(client);
```

## Class Name

`ConversationController`

## Methods

* [List Conversation](../../doc/controllers/conversation.md#list-conversation)
* [Detail Conversation](../../doc/controllers/conversation.md#detail-conversation)
* [Change Status Conversation](../../doc/controllers/conversation.md#change-status-conversation)
* [Change Status Reply GPT](../../doc/controllers/conversation.md#change-status-reply-gpt)
* [Get Conversation by Phone Number](../../doc/controllers/conversation.md#get-conversation-by-phone-number)
* [Download Conversation](../../doc/controllers/conversation.md#download-conversation)
* [Assign Agent Conversation](../../doc/controllers/conversation.md#assign-agent-conversation)


# List Conversation

```ts
async listConversation(
  take: number,
  page: number,
  workspaceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `take` | `number` | Query, Required | - |
| `page` | `number` | Query, Required | - |
| `workspaceId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const take = 5;

const page = 1;

const workspaceId = 'workspace-1';

try {
  const { result, ...httpResponse } = await conversationController.listConversation(
    take,
    page,
    workspaceId
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


# Detail Conversation

```ts
async detailConversation(
  workspaceId: string,
  conversationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `conversationId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const conversationId = 'bb8b57af-b62d-4226-9ac8-5eb146d099be';

try {
  const { result, ...httpResponse } = await conversationController.detailConversation(
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


# Change Status Conversation

```ts
async changeStatusConversation(
  workspaceId: string,
  body: ChangeStatusConversationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `body` | [`ChangeStatusConversationRequest`](../../doc/models/change-status-conversation-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'chitchat-6OHiX6r4_';

const body: ChangeStatusConversationRequest = {
  status: 'resolved',
};

try {
  const { result, ...httpResponse } = await conversationController.changeStatusConversation(
    workspaceId,
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


# Change Status Reply GPT

```ts
async changeStatusReplyGPT(
  workspaceId: string,
  conversationId: string,
  body: ChangeStatusReplyGPTRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `conversationId` | `string` | Template, Required | - |
| `body` | [`ChangeStatusReplyGPTRequest`](../../doc/models/change-status-reply-gpt-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const conversationId = '584f2dd3-57c3-4854-b342-78788aad47ba';

const body: ChangeStatusReplyGPTRequest = {
  isReplyGPT: true,
};

try {
  const { result, ...httpResponse } = await conversationController.changeStatusReplyGPT(
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


# Get Conversation by Phone Number

```ts
async getConversationByPhoneNumber(
  workspaceId: string,
  phonenumber: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `phonenumber` | `bigint` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'chitchat-6OHiX6r4_';

const phonenumber = BigInt(6285156490298);

try {
  const { result, ...httpResponse } = await conversationController.getConversationByPhoneNumber(
    workspaceId,
    phonenumber
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


# Download Conversation

```ts
async downloadConversation(
  workspaceId: string,
  conversationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `conversationId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const conversationId = 'c1bdcc79-7661-438a-a761-504de88e581f';

try {
  const { result, ...httpResponse } = await conversationController.downloadConversation(
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


# Assign Agent Conversation

```ts
async assignAgentConversation(
  workspaceId: string,
  conversationId: string,
  body: AssignAgentConversationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `conversationId` | `string` | Template, Required | - |
| `body` | [`AssignAgentConversationRequest`](../../doc/models/assign-agent-conversation-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const conversationId = 'bb8b57af-b62d-4226-9ac8-5eb146d099be';

const body: AssignAgentConversationRequest = {
  memberId: [
    'user-1'
  ],
};

try {
  const { result, ...httpResponse } = await conversationController.assignAgentConversation(
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

