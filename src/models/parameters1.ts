/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Header, headerSchema } from './header';

export interface Parameters1 {
  header: Header;
}

export const parameters1Schema: Schema<Parameters1> = object({
  header: ['header', lazy(() => headerSchema)],
});
