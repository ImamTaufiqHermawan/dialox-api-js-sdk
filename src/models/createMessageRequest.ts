/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Content1, content1Schema } from './content1';

export interface CreateMessageRequest {
  from: string;
  type: string;
  content: Content1;
}

export const createMessageRequestSchema: Schema<CreateMessageRequest> = object({
  from: ['from', string()],
  type: ['type', string()],
  content: ['content', lazy(() => content1Schema)],
});
