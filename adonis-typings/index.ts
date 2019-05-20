/*
* @poppinss/response
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/// <reference path="../src/contracts.ts" />

declare module '@ioc:Adonis/Src/Response' {
  import { ServerResponse, IncomingMessage } from 'http'
  import { MacroableConstructorContract } from 'macroable'
  import {
    ResponseContract as BaseContract,
    ResponseConfigContract,
  } from '@poppinss/response/contracts'

  export interface ResponseContract extends BaseContract {}
  export interface ResponseConstructorContract extends MacroableConstructorContract {}

  /**
   * The IoC container must export the Response class and not it's instance.
   * The instances are meant to created during HTTP request
   */
  const Response: ResponseConstructorContract
  export default Response
}
