# Waba

```ts
const wabaController = new WabaController(client);
```

## Class Name

`WabaController`

## Methods

* [List Waba](../../doc/controllers/waba.md#list-waba)
* [Connect Waba](../../doc/controllers/waba.md#connect-waba)
* [Connect Waba Copy](../../doc/controllers/waba.md#connect-waba-copy)


# List Waba

```ts
async listWaba(
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
  const { result, ...httpResponse } = await wabaController.listWaba(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Connect Waba

```ts
async connectWaba(
  workspaceId: string,
  body: ConnectWabaRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `body` | [`ConnectWabaRequest`](../../doc/models/connect-waba-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const body: ConnectWabaRequest = {
  token: 'EAAHwIvlix5EBANntGDSRLKqO5CvQdKU7RZCG4hXQ69raZAbEzi9kucVaFXp8sD9FStTr8GZAUXNXDXt4ELM5HQ2JbnzuZAZBRO1Vd8gz5k2G5LGq4Ivyvz6ibr5pQwEcDVnlmRT7D3PdVn2wlAM4Ueq9PU2h68pk990iemJfOymqFCvHi51T9CW33GBPTzUZBUJJ5rwUNLCdUv3my2VDX7',
};

try {
  const { result, ...httpResponse } = await wabaController.connectWaba(
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


# Connect Waba Copy

```ts
async connectWabaCopy(
  workspaceId: string,
  wabaId: string,
  body: ConnectWabaCopyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `wabaId` | `string` | Template, Required | - |
| `body` | [`ConnectWabaCopyRequest`](../../doc/models/connect-waba-copy-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const wabaId = '765857eb-893a-498c-8e11-84da6a038336';

const body: ConnectWabaCopyRequest = {
  token: 'EAAHwIvlix5EBANntGDSRLKqO5CvQdKU7RZCG4hXQ69raZAbEzi9kucVaFXp8sD9FStTr8GZAUXNXDXt4ELM5HQ2JbnzuZAZBRO1Vd8gz5k2G5LGq4Ivyvz6ibr5pQwEcDVnlmRT7D3PdVn2wlAM4Ueq9PU2h68pk990iemJfOymqFCvHi51T9CW33GBPTzUZBUJJ5rwUNLCdUv3my2VDX7',
};

try {
  const { result, ...httpResponse } = await wabaController.connectWabaCopy(
    workspaceId,
    wabaId,
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

