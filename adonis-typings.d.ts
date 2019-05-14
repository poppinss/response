/*
* @poppinss/response
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

declare module '@ioc:Adonis/Src/Response' {
  /// <reference path="./src/contracts.ts" />
  import { ResponseConstructorContract, ResponseContract as BaseContract } from '@poppinss/response/contracts'
  interface ResponseContract extends BaseContract {}

  const Response: ResponseConstructorContract
  export default Response
}
