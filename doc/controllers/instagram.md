# Instagram

```ts
const instagramController = new InstagramController(client);
```

## Class Name

`InstagramController`

## Methods

* [New Request](../../doc/controllers/instagram.md#new-request)
* [List Pages Instagram](../../doc/controllers/instagram.md#list-pages-instagram)
* [Connect Channel Instagram](../../doc/controllers/instagram.md#connect-channel-instagram)


# New Request

```ts
async newRequest(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await instagramController.newRequest();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Pages Instagram

```ts
async listPagesInstagram(
  workspaceId: string,
  body: ListPagesInstagramRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `body` | [`ListPagesInstagramRequest`](../../doc/models/list-pages-instagram-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'null';

const body: ListPagesInstagramRequest = {
  token: 'EAAKwwTJG8qYBAFTHuq9ZCP5erEYKpBRUrIM4QD16cCs7aD0zKx4U6Vdm4KZBUntAnZB3bGnLcMYu8cubK0YPPFZBEdUwKWH3xEefrDs6qwhp6Ohjq9mzHbiO3CPI8bepJ1vNWhZC1r0zznHy7Ci44ZC3JVkgkx6JnDJ7vMkRcpbg3WPT6AIDAixVE1iZCzYLtTA3UnlwnSxFgin1PmBGOA1',
};

try {
  const { result, ...httpResponse } = await instagramController.listPagesInstagram(
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


# Connect Channel Instagram

```ts
async connectChannelInstagram(
  workspaceId: string,
  body: ConnectChannelInstagramRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `body` | [`ConnectChannelInstagramRequest`](../../doc/models/connect-channel-instagram-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const body: ConnectChannelInstagramRequest = {
  token: 'EAAHwIvlix5EBAGzWDvWMDMEJ2D1w1FvCit1uVZCZC4ZBTV7LF6C11RrptyDyZCulpplnsne2MU312JfbrWmZCajSq86lg8wI2hUXQwf1bDd7uI6g7kV4LbNtwZCEaL6YA5f8y1h2s1asfJO3el6wtUctr6LQwxj3slGeoyJ1KYQb9dMJnZBMcjcObyR6k5suXQlfuFhRdvWwpm4d5ZBPqc9F',
  pageId: '105905438812751',
};

try {
  const { result, ...httpResponse } = await instagramController.connectChannelInstagram(
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

