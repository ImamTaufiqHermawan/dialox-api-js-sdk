# Example

```ts
const exampleController = new ExampleController(client);
```

## Class Name

`ExampleController`

## Methods

* [Template With Text Variable](../../doc/controllers/example.md#template-with-text-variable)
* [Template With Header](../../doc/controllers/example.md#template-with-header)
* [Template With Button](../../doc/controllers/example.md#template-with-button)
* [Template All](../../doc/controllers/example.md#template-all)


# Template With Text Variable

```ts
async templateWithTextVariable(
  workspaceId: string,
  channelId: string,
  body: TemplateWithTextVariableRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `body` | [`TemplateWithTextVariableRequest`](../../doc/models/template-with-text-variable-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const channelId = 'channel-1';

const body: TemplateWithTextVariableRequest = {
  broadcastName: 'Broadcast Bicis',
  phoneNumber: '6285156490298',
  contactName: 'Anto',
  templateName: 'test_abti',
  language: 'id',
  parameters: {
    body: [
      {
        key: '1',
        valueText: '',
        value: 'Halo Bang',
      }
    ],
  },
};

try {
  const { result, ...httpResponse } = await exampleController.templateWithTextVariable(
    workspaceId,
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


# Template With Header

```ts
async templateWithHeader(
  workspaceId: string,
  channelId: string,
  body: TemplateWithHeaderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `body` | [`TemplateWithHeaderRequest`](../../doc/models/template-with-header-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'workspace-1';

const channelId = 'channel-1';

const body: TemplateWithHeaderRequest = {
  broadcastName: 'Broadcast Bicis',
  phoneNumber: '628128183734',
  contactName: 'Anto',
  templateName: 'trigr_preview_kol',
  language: 'id',
  parameters: {
    header: {
      format: 'IMAGE',
      params: [
        {
          key: 'url',
          value: 'https://dialox.sgp1.digitaloceanspaces.com/files/d8613aae-2d80-4c7a-9c00-44897b9d4bec/image_2023_03_06T07_42_20_130Z.png',
        }
      ],
    },
  },
};

try {
  const { result, ...httpResponse } = await exampleController.templateWithHeader(
    workspaceId,
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


# Template With Button

```ts
async templateWithButton(
  workspaceId: string,
  channelId: string,
  body: TemplateWithButtonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `body` | [`TemplateWithButtonRequest`](../../doc/models/template-with-button-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'chitchat-6OHiX6r4_';

const channelId = 'channel-1';

const body: TemplateWithButtonRequest = {
  broadcastName: 'Broadcast Bicis',
  phoneNumber: '6285156490298',
  contactName: 'Anto',
  templateName: 'dialoxbutton_1',
  language: 'id',
  parameters: {
    buttons: [
      {
        index: '0',
        type: 'url',
        value: 'dialoxid',
      }
    ],
  },
};

try {
  const { result, ...httpResponse } = await exampleController.templateWithButton(
    workspaceId,
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


# Template All

```ts
async templateAll(
  workspaceid: string,
  channelId: string,
  body: TemplateAllRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceid` | `string` | Template, Required | - |
| `channelId` | `string` | Template, Required | - |
| `body` | [`TemplateAllRequest`](../../doc/models/template-all-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceid = 'workspace-1';

const channelId = 'channel-1';

const body: TemplateAllRequest = {
  templateId: '9f08ff55-31a6-46e2-a1a9-2f44b720f791',
  templateName: 'tst_himg_2var_3qrbtn_v1',
  source: 'group',
  groupId: '0172b03a-ca46-4616-b613-7b67ef5623d4',
  name: 'asdasd',
  parameters: {
    header: {
      format: 'IMAGE',
      params: [
        {
          key: '1',
          value: 'https://tinyjpg.com/images/social/website.jpg',
        }
      ],
    },
    body: [
      {
        variable: '1',
        type: 'name',
        value: '',
        index: '0',
      },
      {
        variable: '2',
        type: 'phonenumber',
        value: '',
        index: '1',
      }
    ],
    buttons: [
      {
        variable: 'QUICK_REPLY',
        type: 'name',
        value: 'test',
        index: '0',
      },
      {
        variable: 'QUICK_REPLY',
        type: 'name',
        value: 'test',
        index: '1',
      },
      {
        variable: 'QUICK_REPLY',
        type: 'name',
        value: 'test',
        index: '2',
      }
    ],
  },
  broadcastFileId: '',
  isScheduled: false,
  triggerAt: '2023-03-20T03:38:00Z',
};

try {
  const { result, ...httpResponse } = await exampleController.templateAll(
    workspaceid,
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

