# Auth

```ts
const authController = new AuthController(client);
```

## Class Name

`AuthController`

## Methods

* [Login](../../doc/controllers/auth.md#login)
* [Verify Email](../../doc/controllers/auth.md#verify-email)
* [Request Reset Password](../../doc/controllers/auth.md#request-reset-password)
* [Verify Reset Password](../../doc/controllers/auth.md#verify-reset-password)
* [Register](../../doc/controllers/auth.md#register)
* [Me](../../doc/controllers/auth.md#me)


# Login

```ts
async login(
  body: LoginRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LoginRequest`](../../doc/models/login-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: LoginRequest = {
  email: 'user1@email.com',
  password: 'password',
};

try {
  const { result, ...httpResponse } = await authController.login(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Verify Email

```ts
async verifyEmail(
  body: VerifyEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyEmailRequest`](../../doc/models/verify-email-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: VerifyEmailRequest = {
  token: 'ambil dari email',
};

try {
  const { result, ...httpResponse } = await authController.verifyEmail(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Request Reset Password

```ts
async requestResetPassword(
  body: RequestResetPasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RequestResetPasswordRequest`](../../doc/models/request-reset-password-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: RequestResetPasswordRequest = {
  email: 'irfan.marzuki@insignia.co.id',
};

try {
  const { result, ...httpResponse } = await authController.requestResetPassword(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Verify Reset Password

```ts
async verifyResetPassword(
  body: VerifyResetPasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyResetPasswordRequest`](../../doc/models/verify-reset-password-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: VerifyResetPasswordRequest = {
  token: 'ambil dari email',
  password: 'newpasswordhere',
};

try {
  const { result, ...httpResponse } = await authController.verifyResetPassword(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Register

```ts
async register(
  body: RegisterRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RegisterRequest`](../../doc/models/register-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: RegisterRequest = {
  email: 'supryantowp@gmail.com',
  password: '@Password1234',
  fullName: 'admin anto',
  workspaceName: 'workspace irfan',
  workspaceId: 'workspace-1',
  token: '1f1073ce-d344-467e-a807-f4a21af0933f',
};

try {
  const { result, ...httpResponse } = await authController.register(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Me

```ts
async me(
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
  const { result, ...httpResponse } = await authController.me();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

