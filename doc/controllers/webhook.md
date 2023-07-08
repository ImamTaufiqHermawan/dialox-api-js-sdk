# Webhook

```ts
const webhookController = new WebhookController(client);
```

## Class Name

`WebhookController`

## Methods

* [List Webhook](../../doc/controllers/webhook.md#list-webhook)
* [Whatsapp Webhook](../../doc/controllers/webhook.md#whatsapp-webhook)
* [Register Webhook Client](../../doc/controllers/webhook.md#register-webhook-client)
* [Update Status Webhook](../../doc/controllers/webhook.md#update-status-webhook)
* [Register Webhook Client Copy 2](../../doc/controllers/webhook.md#register-webhook-client-copy-2)


# List Webhook

```ts
async listWebhook(
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
  const { result, ...httpResponse } = await webhookController.listWebhook();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Whatsapp Webhook

```ts
async whatsappWebhook(
  body: WhatsappWebhookRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WhatsappWebhookRequest`](../../doc/models/whatsapp-webhook-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: WhatsappWebhookRequest = {
  object: 'whatsapp_business_account',
  entry: [
    {
      id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
      changes: [
        {
          value: {
            messagingProduct: 'whatsapp',
            metadata: {
              displayPhoneNumber: 'PHONE_NUMBER',
              phoneNumberId: 'PHONE_NUMBER_ID',
            },
            statuses: [
              {
                id: 'wamid.HBgNNjI4OTY2MDcwNDI5OBUCABEYEkQyREI2OUE4NjlCODQwNzJBQwA=',
                status: 'delivered',
                timestamp: 'TIMESTAMP',
                recipientId: 'PHONE_NUMBER',
                conversation: {
                  id: 'CONVERSATION_ID',
                  expirationTimestamp: 'TIMESTAMP',
                  origin: {
                    type: 'referral_conversion',
                  },
                },
                pricing: {
                  billable: false,
                  pricingModel: 'CBP',
                  category: 'referral_conversion',
                },
              }
            ],
          },
          field: 'messages',
        }
      ],
    }
  ],
};

try {
  const { result, ...httpResponse } = await webhookController.whatsappWebhook(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Register Webhook Client

```ts
async registerWebhookClient(
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
const workspaceId = 'prime-staging';

try {
  const { result, ...httpResponse } = await webhookController.registerWebhookClient(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Status Webhook

```ts
async updateStatusWebhook(
  body: UpdateStatusWebhookRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateStatusWebhookRequest`](../../doc/models/update-status-webhook-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: UpdateStatusWebhookRequest = {
  status: true,
};

try {
  const { result, ...httpResponse } = await webhookController.updateStatusWebhook(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Register Webhook Client Copy 2

```ts
async registerWebhookClientCopy2(
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
  const { result, ...httpResponse } = await webhookController.registerWebhookClientCopy2(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

