/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Metadata, metadataSchema } from './metadata';
import { Status, statusSchema } from './status';

export interface Value {
  messagingProduct: string;
  metadata: Metadata;
  statuses: Status[];
}

export const valueSchema: Schema<Value> = object({
  messagingProduct: ['messaging_product', string()],
  metadata: ['metadata', lazy(() => metadataSchema)],
  statuses: ['statuses', array(lazy(() => statusSchema))],
});