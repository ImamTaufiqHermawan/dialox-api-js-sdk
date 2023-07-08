/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Metadata {
  displayPhoneNumber: string;
  phoneNumberId: string;
}

export const metadataSchema: Schema<Metadata> = object({
  displayPhoneNumber: ['display_phone_number', string()],
  phoneNumberId: ['phone_number_id', string()],
});