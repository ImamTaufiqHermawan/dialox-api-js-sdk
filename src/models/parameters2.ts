/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Button, buttonSchema } from './button';

export interface Parameters2 {
  buttons: Button[];
}

export const parameters2Schema: Schema<Parameters2> = object({
  buttons: ['buttons', array(lazy(() => buttonSchema))],
});
