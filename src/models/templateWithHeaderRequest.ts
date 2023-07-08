/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Parameters1, parameters1Schema } from './parameters1';

export interface TemplateWithHeaderRequest {
  broadcastName: string;
  phoneNumber: string;
  contactName: string;
  templateName: string;
  language: string;
  parameters: Parameters1;
}

export const templateWithHeaderRequestSchema: Schema<TemplateWithHeaderRequest> = object(
  {
    broadcastName: ['broadcastName', string()],
    phoneNumber: ['phoneNumber', string()],
    contactName: ['contactName', string()],
    templateName: ['templateName', string()],
    language: ['language', string()],
    parameters: ['parameters', lazy(() => parameters1Schema)],
  }
);
