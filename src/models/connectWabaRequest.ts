/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ConnectWabaRequest {
  token: string;
}

export const connectWabaRequestSchema: Schema<ConnectWabaRequest> = object({
  token: ['token', string()],
});