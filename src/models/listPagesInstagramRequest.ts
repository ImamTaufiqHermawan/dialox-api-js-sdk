/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ListPagesInstagramRequest {
  token: string;
}

export const listPagesInstagramRequestSchema: Schema<ListPagesInstagramRequest> = object(
  { token: ['token', string()] }
);
