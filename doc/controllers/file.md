# File

```ts
const fileController = new FileController(client);
```

## Class Name

`FileController`

## Methods

* [Create File](../../doc/controllers/file.md#create-file)
* [Upload File Meta](../../doc/controllers/file.md#upload-file-meta)
* [Reusable](../../doc/controllers/file.md#reusable)


# Create File

```ts
async createFile(
  workspaceId: string,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `file` | `FileWrapper` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'NRiETKoFCFsm9rL7W';

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const { result, ...httpResponse } = await fileController.createFile(
    workspaceId,
    file
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


# Upload File Meta

```ts
async uploadFileMeta(
  workspaceId: string,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `file` | `FileWrapper` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const { result, ...httpResponse } = await fileController.uploadFileMeta(
    workspaceId,
    file
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


# Reusable

```ts
async reusable(
  workspaceId: string,
  channelid: string,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `channelid` | `string` | Template, Required | - |
| `file` | `FileWrapper` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const channelid = '92330379-fb0a-4346-8227-35ea47edc64d';

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const { result, ...httpResponse } = await fileController.reusable(
    workspaceId,
    channelid,
    file
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

