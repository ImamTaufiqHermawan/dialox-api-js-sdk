/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ConnectChannelInstagramRequest {
  token: string;
  pageId: string;
}

export const connectChannelInstagramRequestSchema: Schema<ConnectChannelInstagramRequest> = object(
  { token: ['token', string()], pageId: ['pageId', string()] }
);
