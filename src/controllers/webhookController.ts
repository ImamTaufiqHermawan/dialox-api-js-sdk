/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  UpdateStatusWebhookRequest,
  updateStatusWebhookRequestSchema,
} from '../models/updateStatusWebhookRequest';
import {
  WhatsappWebhookRequest,
  whatsappWebhookRequestSchema,
} from '../models/whatsappWebhookRequest';
import { string } from '../schema';
import { BaseController } from './baseController';

export class WebhookController extends BaseController {
  /**
   * @return Response from the API call
   */
  async listWebhook(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/workspaces/workspace-1/webhook');
    req.baseUrl('Server 1');
    return req.call(requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async whatsappWebhook(
    body: WhatsappWebhookRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/webhook/whatsapp');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      body: [body, whatsappWebhookRequestSchema],
    });
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @return Response from the API call
   */
  async registerWebhookClient(
    workspaceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({ workspaceId: [workspaceId, string()] });
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/webhook`;
    return req.call(requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async updateStatusWebhook(
    body: UpdateStatusWebhookRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest(
      'PATCH',
      '/workspaces/workspace-1/webhook/status'
    );
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      body: [body, updateStatusWebhookRequestSchema],
    });
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @return Response from the API call
   */
  async registerWebhookClientCopy2(
    workspaceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({ workspaceId: [workspaceId, string()] });
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/webhook`;
    return req.call(requestOptions);
  }
}