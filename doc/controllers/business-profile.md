# Business Profile

```ts
const businessProfileController = new BusinessProfileController(client);
```

## Class Name

`BusinessProfileController`

## Methods

* [Update Bussiness Profiles](../../doc/controllers/business-profile.md#update-bussiness-profiles)
* [Get Business Profile](../../doc/controllers/business-profile.md#get-business-profile)


# Update Bussiness Profiles

```ts
async updateBussinessProfiles(
  channelId: string,
  body: UpdateBussinessProfilesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `channelId` | `string` | Template, Required | - |
| `body` | [`UpdateBussinessProfilesRequest`](../../doc/models/update-bussiness-profiles-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const channelId = '92330379-fb0a-4346-8227-35ea47edc64d';

const body: UpdateBussinessProfilesRequest = {
  messagingProduct: 'whatsapp',
  address: 'Jakarta',
  description: '<business-description>',
  vertical: 'AUTO',
  about: '<profile-about-text>',
  email: 'demo@gmail.com',
};

try {
  const { result, ...httpResponse } = await businessProfileController.updateBussinessProfiles(
    channelId,
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


# Get Business Profile

```ts
async getBusinessProfile(
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
  const { result, ...httpResponse } = await businessProfileController.getBusinessProfile();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

