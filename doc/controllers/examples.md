# Examples

```ts
const examplesController = new ExamplesController(client);
```

## Class Name

`ExamplesController`


# Document

```ts
async document(
  workspaceId: string,
  body: DocumentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | - |
| `body` | [`DocumentRequest`](../../doc/models/document-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const workspaceId = 'chitchat-6OHiX6r4_';

const body: DocumentRequest = {
  from: 'agent',
  type: 'document',
  content: {
    url: 'https://www.africau.edu/images/default/sample.pdf',
    text: 'WOOOOOOIU',
    fileType: 'pdf',
  },
};

try {
  const { result, ...httpResponse } = await examplesController.document(
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

