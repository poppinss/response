**[@poppinss/response](../README.md)**

[Globals](../README.md) › ["contracts"](../modules/_contracts_.md) › [ResponseContract](_contracts_.responsecontract.md)

# Interface: ResponseContract

Main response interface

## Hierarchy

* **ResponseContract**

## Implemented by

* [Response](../classes/_response_.response.md)

## Index

### Properties

* [finished](_contracts_.responsecontract.md#finished)
* [hasLazyBody](_contracts_.responsecontract.md#haslazybody)
* [headersSent](_contracts_.responsecontract.md#headerssent)
* [isPending](_contracts_.responsecontract.md#ispending)
* [lazyBody](_contracts_.responsecontract.md#lazybody)
* [request](_contracts_.responsecontract.md#request)
* [response](_contracts_.responsecontract.md#response)

### Methods

* [append](_contracts_.responsecontract.md#append)
* [attachment](_contracts_.responsecontract.md#attachment)
* [buildResponseBody](_contracts_.responsecontract.md#buildresponsebody)
* [clearCookie](_contracts_.responsecontract.md#clearcookie)
* [cookie](_contracts_.responsecontract.md#cookie)
* [download](_contracts_.responsecontract.md#download)
* [finish](_contracts_.responsecontract.md#finish)
* [getHeader](_contracts_.responsecontract.md#getheader)
* [header](_contracts_.responsecontract.md#header)
* [json](_contracts_.responsecontract.md#json)
* [jsonp](_contracts_.responsecontract.md#jsonp)
* [location](_contracts_.responsecontract.md#location)
* [plainCookie](_contracts_.responsecontract.md#plaincookie)
* [redirect](_contracts_.responsecontract.md#redirect)
* [removeHeader](_contracts_.responsecontract.md#removeheader)
* [safeHeader](_contracts_.responsecontract.md#safeheader)
* [safeStatus](_contracts_.responsecontract.md#safestatus)
* [send](_contracts_.responsecontract.md#send)
* [setEtag](_contracts_.responsecontract.md#setetag)
* [status](_contracts_.responsecontract.md#status)
* [stream](_contracts_.responsecontract.md#stream)
* [type](_contracts_.responsecontract.md#type)
* [vary](_contracts_.responsecontract.md#vary)

## Properties

###  finished

• **finished**: *boolean*

___

###  hasLazyBody

• **hasLazyBody**: *boolean*

___

###  headersSent

• **headersSent**: *boolean*

___

###  isPending

• **isPending**: *boolean*

___

###  lazyBody

• **lazyBody**: *[LazyBody](../modules/_contracts_.md#lazybody) | null*

___

###  request

• **request**: *IncomingMessage*

___

###  response

• **response**: *ServerResponse*

## Methods

###  append

▸ **append**(`key`: string, `value`: [CastableHeader](../modules/_contracts_.md#castableheader)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_contracts_.md#castableheader) |

**Returns:** *this*

___

###  attachment

▸ **attachment**(`filePath`: string, `name?`: undefined | string, `disposition?`: undefined | string, `generateEtag?`: undefined | false | true, `errorCallback?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`name?` | undefined \| string |
`disposition?` | undefined \| string |
`generateEtag?` | undefined \| false \| true |
`errorCallback?` | undefined \| function |

**Returns:** *void*

___

###  buildResponseBody

▸ **buildResponseBody**(`body`: any): *object*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |

**Returns:** *object*

___

###  clearCookie

▸ **clearCookie**(`key`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  cookie

▸ **cookie**(`key`: string, `value`: any, `options?`: Partial‹CookieOptions›): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`options?` | Partial‹CookieOptions› |

**Returns:** *this*

___

###  download

▸ **download**(`filePath`: string, `generateEtag?`: undefined | false | true, `errorCallback?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`generateEtag?` | undefined \| false \| true |
`errorCallback?` | undefined \| function |

**Returns:** *void*

___

###  finish

▸ **finish**(): *void*

**Returns:** *void*

___

###  getHeader

▸ **getHeader**(`key`: string): *string | string[] | number | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string | string[] | number | undefined*

___

###  header

▸ **header**(`key`: string, `value`: [CastableHeader](../modules/_contracts_.md#castableheader)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_contracts_.md#castableheader) |

**Returns:** *this*

___

###  json

▸ **json**(`body`: any, `generateEtag?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`generateEtag?` | undefined \| false \| true |

**Returns:** *void*

___

###  jsonp

▸ **jsonp**(`body`: any, `callbackName?`: undefined | string, `generateEtag?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`callbackName?` | undefined \| string |
`generateEtag?` | undefined \| false \| true |

**Returns:** *void*

___

###  location

▸ **location**(`url`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *this*

___

###  plainCookie

▸ **plainCookie**(`key`: string, `value`: any, `options?`: Partial‹CookieOptions›): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`options?` | Partial‹CookieOptions› |

**Returns:** *this*

___

###  redirect

▸ **redirect**(`url`: string, `reflectQueryParams?`: undefined | false | true, `statusCode?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`reflectQueryParams?` | undefined \| false \| true |
`statusCode?` | undefined \| number |

**Returns:** *void*

___

###  removeHeader

▸ **removeHeader**(`key`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  safeHeader

▸ **safeHeader**(`key`: string, `value`: [CastableHeader](../modules/_contracts_.md#castableheader)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_contracts_.md#castableheader) |

**Returns:** *this*

___

###  safeStatus

▸ **safeStatus**(`code`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

___

###  send

▸ **send**(`body`: any, `generateEtag?`: undefined | false | true): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`generateEtag?` | undefined \| false \| true |

**Returns:** *void*

___

###  setEtag

▸ **setEtag**(`body`: any, `weak?`: undefined | false | true): *this*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`weak?` | undefined \| false \| true |

**Returns:** *this*

___

###  status

▸ **status**(`code`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

___

###  stream

▸ **stream**(`stream`: [ResponseStream](../modules/_contracts_.md#responsestream), `errorCallback?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ResponseStream](../modules/_contracts_.md#responsestream) |
`errorCallback?` | undefined \| function |

**Returns:** *void*

___

###  type

▸ **type**(`type`: string, `charset?`: undefined | string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`charset?` | undefined \| string |

**Returns:** *this*

___

###  vary

▸ **vary**(`field`: string): *this*

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |

**Returns:** *this*