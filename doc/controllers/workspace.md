# Workspace

```ts
const workspaceController = new WorkspaceController(client);
```

## Class Name

`WorkspaceController`

## Methods

* [Create Workspace](../../doc/controllers/workspace.md#create-workspace)
* [Update Workspace by Id](../../doc/controllers/workspace.md#update-workspace-by-id)
* [Get All Workspaces](../../doc/controllers/workspace.md#get-all-workspaces)
* [Get Workspace by Id](../../doc/controllers/workspace.md#get-workspace-by-id)
* [Get Workspace by Name](../../doc/controllers/workspace.md#get-workspace-by-name)
* [Delete Workspace by Id](../../doc/controllers/workspace.md#delete-workspace-by-id)


# Create Workspace

```ts
async createWorkspace(
  body: CreateWorkspaceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateWorkspaceRequest`](../../doc/models/create-workspace-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: CreateWorkspaceRequest = {
  id: 'dsadasdasd',
  name: 'test-from-postman',
};

try {
  const { result, ...httpResponse } = await workspaceController.createWorkspace(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Workspace by Id

```ts
async updateWorkspaceById(
  workspaceId: string,
  body: UpdateWorkspaceByIdRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `body` | [`UpdateWorkspaceByIdRequest`](../../doc/models/update-workspace-by-id-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const body: UpdateWorkspaceByIdRequest = {
  name: 'test-workspace-3',
};

try {
  const { result, ...httpResponse } = await workspaceController.updateWorkspaceById(
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


# Get All Workspaces

```ts
async getAllWorkspaces(
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
  const { result, ...httpResponse } = await workspaceController.getAllWorkspaces();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Workspace by Id

```ts
async getWorkspaceById(
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
const workspaceId = 'dasbdashudbsad';

try {
  const { result, ...httpResponse } = await workspaceController.getWorkspaceById(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Workspace by Name

```ts
async getWorkspaceByName(
  workspaceName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceName = 'lagilagi';

try {
  const { result, ...httpResponse } = await workspaceController.getWorkspaceByName(workspaceName);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Workspace by Id

```ts
async deleteWorkspaceById(
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
const workspaceId = 'ki3FnoEb57Mhpyhgt';

try {
  const { result, ...httpResponse } = await workspaceController.deleteWorkspaceById(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

