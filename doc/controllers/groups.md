# Groups

```ts
const groupsController = new GroupsController(client);
```

## Class Name

`GroupsController`

## Methods

* [List Group](../../doc/controllers/groups.md#list-group)
* [Detail Group](../../doc/controllers/groups.md#detail-group)
* [Create Group](../../doc/controllers/groups.md#create-group)
* [Update Contact](../../doc/controllers/groups.md#update-contact)
* [Delete Contact](../../doc/controllers/groups.md#delete-contact)


# List Group

```ts
async listGroup(
  workspaceid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceid` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceid = 'workspace-1';

try {
  const { result, ...httpResponse } = await groupsController.listGroup(workspaceid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Detail Group

```ts
async detailGroup(
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
  const { result, ...httpResponse } = await groupsController.detailGroup();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Group

```ts
async createGroup(
  body: CreateGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateGroupRequest`](../../doc/models/create-group-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: CreateGroupRequest = {
  workspaceId: 'chitchat-6OHiX6r4_',
  name: 'Insignia',
};

try {
  const { result, ...httpResponse } = await groupsController.createGroup(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Contact

```ts
async updateContact(
  body: UpdateContactRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateContactRequest1`](../../doc/models/update-contact-request-1.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: UpdateContactRequest1 = {
  workspaceId: 'workspace-1',
  name: 'Anto',
};

try {
  const { result, ...httpResponse } = await groupsController.updateContact(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Contact

```ts
async deleteContact(
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
  const { result, ...httpResponse } = await groupsController.deleteContact();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

