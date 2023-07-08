/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Value, valueSchema } from './value';

export interface Change {
  value: Value;
  field: string;
}

export const changeSchema: Schema<Change> = object({
  value: ['value', lazy(() => valueSchema)],
  field: ['field', string()],
});
