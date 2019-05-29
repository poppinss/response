[@poppinss/response](../README.md) > [@poppinss/response](../modules/_poppinss_response.md) > [ResponseContract](../interfaces/_poppinss_response.responsecontract.md)

# Interface: ResponseContract

Main response interface

## Hierarchy

**ResponseContract**

## Implemented by

* [Response](../classes/_poppinss_response.response.md)

## Index

### Properties

* [explicitEnd](_poppinss_response.responsecontract.md#explicitend)
* [finished](_poppinss_response.responsecontract.md#finished)
* [hasLazyBody](_poppinss_response.responsecontract.md#haslazybody)
* [headersSent](_poppinss_response.responsecontract.md#headerssent)
* [isPending](_poppinss_response.responsecontract.md#ispending)
* [lazyBody](_poppinss_response.responsecontract.md#lazybody)
* [request](_poppinss_response.responsecontract.md#request)
* [response](_poppinss_response.responsecontract.md#response)

### Methods

* [append](_poppinss_response.responsecontract.md#append)
* [attachment](_poppinss_response.responsecontract.md#attachment)
* [buildResponseBody](_poppinss_response.responsecontract.md#buildresponsebody)
* [clearCookie](_poppinss_response.responsecontract.md#clearcookie)
* [cookie](_poppinss_response.responsecontract.md#cookie)
* [download](_poppinss_response.responsecontract.md#download)
* [finish](_poppinss_response.responsecontract.md#finish)
* [getHeader](_poppinss_response.responsecontract.md#getheader)
* [header](_poppinss_response.responsecontract.md#header)
* [json](_poppinss_response.responsecontract.md#json)
* [jsonp](_poppinss_response.responsecontract.md#jsonp)
* [location](_poppinss_response.responsecontract.md#location)
* [plainCookie](_poppinss_response.responsecontract.md#plaincookie)
* [redirect](_poppinss_response.responsecontract.md#redirect)
* [removeHeader](_poppinss_response.responsecontract.md#removeheader)
* [safeHeader](_poppinss_response.responsecontract.md#safeheader)
* [safeStatus](_poppinss_response.responsecontract.md#safestatus)
* [send](_poppinss_response.responsecontract.md#send)
* [setEtag](_poppinss_response.responsecontract.md#setetag)
* [status](_poppinss_response.responsecontract.md#status)
* [stream](_poppinss_response.responsecontract.md#stream)
* [type](_poppinss_response.responsecontract.md#type)
* [vary](_poppinss_response.responsecontract.md#vary)

---

## Properties

<a id="explicitend"></a>

###  explicitEnd

**● explicitEnd**: *`boolean`*

___
<a id="finished"></a>

###  finished

**● finished**: *`boolean`*

___
<a id="haslazybody"></a>

###  hasLazyBody

**● hasLazyBody**: *`boolean`*

___
<a id="headerssent"></a>

###  headersSent

**● headersSent**: *`boolean`*

___
<a id="ispending"></a>

###  isPending

**● isPending**: *`boolean`*

___
<a id="lazybody"></a>

###  lazyBody

**● lazyBody**: *[LazyBody](../modules/_poppinss_response.md#lazybody) \| `null`*

___
<a id="request"></a>

###  request

**● request**: *`IncomingMessage`*

___
<a id="response"></a>

###  response

**● response**: *`ServerResponse`*

___

## Methods

<a id="append"></a>

###  append

▸ **append**(key: *`string`*, value: *[CastableHeader](../modules/_poppinss_response.md#castableheader)*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | [CastableHeader](../modules/_poppinss_response.md#castableheader) |

**Returns:** `this`

___
<a id="attachment"></a>

###  attachment

▸ **attachment**(filePath: *`string`*, name?: *`undefined` \| `string`*, disposition?: *`undefined` \| `string`*, generateEtag?: *`undefined` \| `false` \| `true`*, raiseErrors?: *`undefined` \| `false` \| `true`*): `Promise`<`Error` \| `void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| `Optional` name | `undefined` \| `string` |
| `Optional` disposition | `undefined` \| `string` |
| `Optional` generateEtag | `undefined` \| `false` \| `true` |
| `Optional` raiseErrors | `undefined` \| `false` \| `true` |

**Returns:** `Promise`<`Error` \| `void`>

___
<a id="buildresponsebody"></a>

###  buildResponseBody

▸ **buildResponseBody**(body: *`any`*): `object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `object`

___
<a id="clearcookie"></a>

###  clearCookie

▸ **clearCookie**(key: *`string`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `this`

___
<a id="cookie"></a>

###  cookie

▸ **cookie**(key: *`string`*, value: *`any`*, options?: *`CookieOptions`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |
| `Optional` options | `CookieOptions` |

**Returns:** `this`

___
<a id="download"></a>

###  download

▸ **download**(filePath: *`string`*, generateEtag?: *`undefined` \| `false` \| `true`*, raiseErrors?: *`undefined` \| `false` \| `true`*): `Promise`<`Error` \| `void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| `Optional` generateEtag | `undefined` \| `false` \| `true` |
| `Optional` raiseErrors | `undefined` \| `false` \| `true` |

**Returns:** `Promise`<`Error` \| `void`>

___
<a id="finish"></a>

###  finish

▸ **finish**(): `void`

**Returns:** `void`

___
<a id="getheader"></a>

###  getHeader

▸ **getHeader**(key: *`string`*): `string` \| `string`[] \| `number` \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `string` \| `string`[] \| `number` \| `undefined`

___
<a id="header"></a>

###  header

▸ **header**(key: *`string`*, value: *[CastableHeader](../modules/_poppinss_response.md#castableheader)*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | [CastableHeader](../modules/_poppinss_response.md#castableheader) |

**Returns:** `this`

___
<a id="json"></a>

###  json

▸ **json**(body: *`any`*, generateEtag?: *`undefined` \| `false` \| `true`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |
| `Optional` generateEtag | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="jsonp"></a>

###  jsonp

▸ **jsonp**(body: *`any`*, callbackName?: *`undefined` \| `string`*, generateEtag?: *`undefined` \| `false` \| `true`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |
| `Optional` callbackName | `undefined` \| `string` |
| `Optional` generateEtag | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="location"></a>

###  location

▸ **location**(url: *`string`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `this`

___
<a id="plaincookie"></a>

###  plainCookie

▸ **plainCookie**(key: *`string`*, value: *`any`*, options?: *`CookieOptions`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |
| `Optional` options | `CookieOptions` |

**Returns:** `this`

___
<a id="redirect"></a>

###  redirect

▸ **redirect**(url: *`string`*, reflectQueryParams?: *`undefined` \| `false` \| `true`*, statusCode?: *`undefined` \| `number`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` reflectQueryParams | `undefined` \| `false` \| `true` |
| `Optional` statusCode | `undefined` \| `number` |

**Returns:** `void`

___
<a id="removeheader"></a>

###  removeHeader

▸ **removeHeader**(key: *`string`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `this`

___
<a id="safeheader"></a>

###  safeHeader

▸ **safeHeader**(key: *`string`*, value: *[CastableHeader](../modules/_poppinss_response.md#castableheader)*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | [CastableHeader](../modules/_poppinss_response.md#castableheader) |

**Returns:** `this`

___
<a id="safestatus"></a>

###  safeStatus

▸ **safeStatus**(code: *`number`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| code | `number` |

**Returns:** `this`

___
<a id="send"></a>

###  send

▸ **send**(body: *`any`*, generateEtag?: *`undefined` \| `false` \| `true`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |
| `Optional` generateEtag | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="setetag"></a>

###  setEtag

▸ **setEtag**(body: *`any`*, weak?: *`undefined` \| `false` \| `true`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |
| `Optional` weak | `undefined` \| `false` \| `true` |

**Returns:** `this`

___
<a id="status"></a>

###  status

▸ **status**(code: *`number`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| code | `number` |

**Returns:** `this`

___
<a id="stream"></a>

###  stream

▸ **stream**(stream: *[ResponseStream](../modules/_poppinss_response.md#responsestream)*, raiseErrors?: *`undefined` \| `false` \| `true`*): `Promise`<`Error` \| `void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| stream | [ResponseStream](../modules/_poppinss_response.md#responsestream) |
| `Optional` raiseErrors | `undefined` \| `false` \| `true` |

**Returns:** `Promise`<`Error` \| `void`>

___
<a id="type"></a>

###  type

▸ **type**(type: *`string`*, charset?: *`undefined` \| `string`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Optional` charset | `undefined` \| `string` |

**Returns:** `this`

___
<a id="vary"></a>

###  vary

▸ **vary**(field: *`string`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| field | `string` |

**Returns:** `this`

___

