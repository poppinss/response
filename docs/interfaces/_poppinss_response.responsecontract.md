> **[@poppinss/response](../README.md)**

[Globals](../README.md) / [@poppinss/response](../modules/_poppinss_response.md) / [ResponseContract](_poppinss_response.responsecontract.md) /

# Interface: ResponseContract

Main response interface

## Hierarchy

* **ResponseContract**

## Implemented by

* [Response](../classes/_poppinss_response.response.md)

### Index

#### Properties

* [explicitEnd](_poppinss_response.responsecontract.md#explicitend)
* [finished](_poppinss_response.responsecontract.md#finished)
* [hasLazyBody](_poppinss_response.responsecontract.md#haslazybody)
* [headersSent](_poppinss_response.responsecontract.md#headerssent)
* [isPending](_poppinss_response.responsecontract.md#ispending)
* [lazyBody](_poppinss_response.responsecontract.md#lazybody)
* [request](_poppinss_response.responsecontract.md#request)
* [response](_poppinss_response.responsecontract.md#response)

#### Methods

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

## Properties

###  explicitEnd

• **explicitEnd**: *boolean*

___

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

• **lazyBody**: *[LazyBody](../modules/_poppinss_response.md#lazybody) | null*

___

###  request

• **request**: *`IncomingMessage`*

___

###  response

• **response**: *`ServerResponse`*

## Methods

###  append

▸ **append**(`key`: *string*, `value`: *[CastableHeader](../modules/_poppinss_response.md#castableheader)*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_poppinss_response.md#castableheader) |

**Returns:** *this*

___

###  attachment

▸ **attachment**(`filePath`: *string*, `name?`: *undefined | string*, `disposition?`: *undefined | string*, `generateEtag?`: *undefined | false | true*, `raiseErrors?`: *undefined | false | true*): *`Promise<Error | void>`*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`name?` | undefined \| string |
`disposition?` | undefined \| string |
`generateEtag?` | undefined \| false \| true |
`raiseErrors?` | undefined \| false \| true |

**Returns:** *`Promise<Error | void>`*

___

###  buildResponseBody

▸ **buildResponseBody**(`body`: *any*): *object*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |

**Returns:** *object*

___

###  clearCookie

▸ **clearCookie**(`key`: *string*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  cookie

▸ **cookie**(`key`: *string*, `value`: *any*, `options?`: *`Partial<CookieOptions>`*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`options?` | `Partial<CookieOptions>` |

**Returns:** *this*

___

###  download

▸ **download**(`filePath`: *string*, `generateEtag?`: *undefined | false | true*, `raiseErrors?`: *undefined | false | true*): *`Promise<Error | void>`*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`generateEtag?` | undefined \| false \| true |
`raiseErrors?` | undefined \| false \| true |

**Returns:** *`Promise<Error | void>`*

___

###  finish

▸ **finish**(): *void*

**Returns:** *void*

___

###  getHeader

▸ **getHeader**(`key`: *string*): *string | string[] | number | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string | string[] | number | undefined*

___

###  header

▸ **header**(`key`: *string*, `value`: *[CastableHeader](../modules/_poppinss_response.md#castableheader)*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_poppinss_response.md#castableheader) |

**Returns:** *this*

___

###  json

▸ **json**(`body`: *any*, `generateEtag?`: *undefined | false | true*): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`generateEtag?` | undefined \| false \| true |

**Returns:** *void*

___

###  jsonp

▸ **jsonp**(`body`: *any*, `callbackName?`: *undefined | string*, `generateEtag?`: *undefined | false | true*): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`callbackName?` | undefined \| string |
`generateEtag?` | undefined \| false \| true |

**Returns:** *void*

___

###  location

▸ **location**(`url`: *string*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *this*

___

###  plainCookie

▸ **plainCookie**(`key`: *string*, `value`: *any*, `options?`: *`Partial<CookieOptions>`*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`options?` | `Partial<CookieOptions>` |

**Returns:** *this*

___

###  redirect

▸ **redirect**(`url`: *string*, `reflectQueryParams?`: *undefined | false | true*, `statusCode?`: *undefined | number*): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`reflectQueryParams?` | undefined \| false \| true |
`statusCode?` | undefined \| number |

**Returns:** *void*

___

###  removeHeader

▸ **removeHeader**(`key`: *string*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  safeHeader

▸ **safeHeader**(`key`: *string*, `value`: *[CastableHeader](../modules/_poppinss_response.md#castableheader)*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_poppinss_response.md#castableheader) |

**Returns:** *this*

___

###  safeStatus

▸ **safeStatus**(`code`: *number*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

___

###  send

▸ **send**(`body`: *any*, `generateEtag?`: *undefined | false | true*): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`generateEtag?` | undefined \| false \| true |

**Returns:** *void*

___

###  setEtag

▸ **setEtag**(`body`: *any*, `weak?`: *undefined | false | true*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`weak?` | undefined \| false \| true |

**Returns:** *this*

___

###  status

▸ **status**(`code`: *number*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

___

###  stream

▸ **stream**(`stream`: *[ResponseStream](../modules/_poppinss_response.md#responsestream)*, `raiseErrors?`: *undefined | false | true*): *`Promise<Error | void>`*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | [ResponseStream](../modules/_poppinss_response.md#responsestream) |
`raiseErrors?` | undefined \| false \| true |

**Returns:** *`Promise<Error | void>`*

___

###  type

▸ **type**(`type`: *string*, `charset?`: *undefined | string*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`charset?` | undefined \| string |

**Returns:** *this*

___

###  vary

▸ **vary**(`field`: *string*): *this*

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |

**Returns:** *this*