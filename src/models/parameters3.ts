/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Body1, body1Schema } from './body1';
import { Button1, button1Schema } from './button1';
import { Header, headerSchema } from './header';

export interface Parameters3 {
  header: Header;
  body: Body1[];
  buttons: Button1[];
}

export const parameters3Schema: Schema<Parameters3> = object({
  header: ['header', lazy(() => headerSchema)],
  body: ['body', array(lazy(() => body1Schema))],
  buttons: ['buttons', array(lazy(() => button1Schema))],
});
