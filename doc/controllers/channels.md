# Channels

```ts
const channelsController = new ChannelsController(client);
```

## Class Name

`ChannelsController`

## Methods

* [Get Channel Whatsapp Integration](../../doc/controllers/channels.md#get-channel-whatsapp-integration)
* [Get Channel Instagram](../../doc/controllers/channels.md#get-channel-instagram)
* [Get All Channel Integration Whatsapp by Channel](../../doc/controllers/channels.md#get-all-channel-integration-whatsapp-by-channel)
* [Sync Channel to Meta](../../doc/controllers/channels.md#sync-channel-to-meta)


# Get Channel Whatsapp Integration

```ts
async getChannelWhatsappIntegration(
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
  const { result, ...httpResponse } = await channelsController.getChannelWhatsappIntegration(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Channel Instagram

```ts
async getChannelInstagram(
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
  const { result, ...httpResponse } = await channelsController.getChannelInstagram(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Channel Integration Whatsapp by Channel

```ts
async getAllChannelIntegrationWhatsappByChannel(
  workspaceId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const id = 'null';

try {
  const { result, ...httpResponse } = await channelsController.getAllChannelIntegrationWhatsappByChannel(
    workspaceId,
    id
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


# Sync Channel to Meta

```ts
async syncChannelToMeta(
  workspaceId: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const id = '92330379-fb0a-4346-8227-35ea47edc64d';

try {
  const { result, ...httpResponse } = await channelsController.syncChannelToMeta(
    workspaceId,
    id
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

