
# Getting Started with Dialox Api Imam

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install dialox-api-sdk@1.0.0
```

For additional package details, see the [Npm page for the dialox-api-sdk@1.0.0  npm](https://www.npmjs.com/package/dialox-api-sdk/v/1.0.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.NewEnvironment`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.NewEnvironment,
  accessToken: 'AccessToken',
});
```

## Authorization

This API uses `OAuth 2 Bearer token`.

## List of APIs

* [Create Contact Bulk](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/create-contact-bulk.md)
* [Template Message](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/template-message.md)
* [Business Profile](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/business-profile.md)
* [Auth](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/auth.md)
* [Contacts](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/contacts.md)
* [Member](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/member.md)
* [Groups](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/groups.md)
* [Conversation](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/conversation.md)
* [Examples](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/examples.md)
* [Message](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/message.md)
* [Example](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/example.md)
* [Broadcast](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/broadcast.md)
* [Webhook](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/webhook.md)
* [File](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/file.md)
* [Workspace](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/workspace.md)
* [Channels](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/channels.md)
* [Waba](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/waba.md)
* [Instagram](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/controllers/instagram.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/ImamTaufiqHermawan/dialox-api-js-sdk/tree/1.0.0/doc/api-error.md)

