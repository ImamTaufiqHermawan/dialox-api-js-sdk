# Create Contact Bulk

```ts
const createContactBulkController = new CreateContactBulkController(client);
```

## Class Name

`CreateContactBulkController`

## Methods

* [Type None](../../doc/controllers/create-contact-bulk.md#type-none)
* [Type Create Group](../../doc/controllers/create-contact-bulk.md#type-create-group)
* [Type Exisitng Group](../../doc/controllers/create-contact-bulk.md#type-exisitng-group)


# Type None

```ts
async typeNone(
  body: TypeNoneRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TypeNoneRequest`](../../doc/models/type-none-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: TypeNoneRequest = {
  fileUrl: '',
  type: 'none',
};

try {
  const { result, ...httpResponse } = await createContactBulkController.typeNone(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Type Create Group

```ts
async typeCreateGroup(
  workspaceid: string,
  body: TypeCreateGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceid` | `string` | Template, Required | - |
| `body` | [`TypeCreateGroupRequest`](../../doc/models/type-create-group-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceid = 'workspace-1';

const body: TypeCreateGroupRequest = {
  contacts: [
    {
      phoneNumber: '0798921222312',
      name: 'Anto',
      email: 'ema22i@l',
    }
  ],
  type: 'createGroup',
  groupName: 'MUFC',
};

try {
  const { result, ...httpResponse } = await createContactBulkController.typeCreateGroup(
    workspaceid,
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


# Type Exisitng Group

```ts
async typeExisitngGroup(
  body: TypeExisitngGroupRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TypeExisitngGroupRequest`](../../doc/models/type-exisitng-group-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: TypeExisitngGroupRequest = {
  contacts: [
    {
      phoneNumber: '07989212312',
      name: 'Anto',
      email: 'emai@l',
    }
  ],
  type: 'existingGroup',
  selectedGroup: [
    '4f476c70-592d-4dec-89df-ec91bde485cf'
  ],
};

try {
  const { result, ...httpResponse } = await createContactBulkController.typeExisitngGroup(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

