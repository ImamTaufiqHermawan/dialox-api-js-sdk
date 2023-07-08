# Contacts

```ts
const contactsController = new ContactsController(client);
```

## Class Name

`ContactsController`

## Methods

* [List Contact](../../doc/controllers/contacts.md#list-contact)
* [Detail Contact](../../doc/controllers/contacts.md#detail-contact)
* [Create Contact](../../doc/controllers/contacts.md#create-contact)
* [Update Contact](../../doc/controllers/contacts.md#update-contact)
* [Delete Contact](../../doc/controllers/contacts.md#delete-contact)


# List Contact

```ts
async listContact(
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
  const { result, ...httpResponse } = await contactsController.listContact(workspaceid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Detail Contact

```ts
async detailContact(
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
  const { result, ...httpResponse } = await contactsController.detailContact();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Contact

```ts
async createContact(
  body: CreateContactRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateContactRequest`](../../doc/models/create-contact-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body: CreateContactRequest = {
  workspaceId: 'kFW65HaXhcss2qx9z',
  name: 'Anto',
  email: 'supryantowp@gmails.com',
  phoneNumber: '6285156490298',
  address: 'Ciamis,',
};

try {
  const { result, ...httpResponse } = await contactsController.createContact(body);
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
  body: UpdateContactRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateContactRequest`](../../doc/models/update-contact-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: UpdateContactRequest = {
  workspaceId: 'workspace-1',
  name: 'Anto',
  email: 'asdasd',
  phoneNumber: '62896607042982212123',
};

try {
  const { result, ...httpResponse } = await contactsController.updateContact(body);
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
  workspaceId: string,
  contactId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `contactId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'prime-staging';

const contactId = 'contact-1';

try {
  const { result, ...httpResponse } = await contactsController.deleteContact(
    workspaceId,
    contactId
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

