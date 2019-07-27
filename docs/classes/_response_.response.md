> **[@poppinss/response](../README.md)**

[Globals](../README.md) / ["Response"](../modules/_response_.md) / [Response](_response_.response.md) /

# Class: Response

The response is a wrapper over [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)
streamlining the process of writing response body and automatically setting up appropriate headers.

The response class has support for `explicitEnd` mode, which is set to true by default.

When implicit end is set to true, the response class will not write content to the HTTP response
directly and instead waits for an explicit call to the `finish` method. This is done to
allow `return` statements from controllers.

This is how `explicitEnd` mode works in nutshell.

**When set to true**
1. Calls to `send`, `json` and `jsonp` will be buffered until `finish` is called.
2. `response.hasLazyBody` returns `true` after calling `send`, `json` or `jsonp`.
3. If `response.hasLazyBody` return `false`, then server will use the `return value` of the controller
   and set it as body before calling `finish`.

**When set to false**
1. Calls to `send`, `json` and `jsonp` will write the response writeaway.
2. The `return value` of the controller will be discarded.
3. The call to `finish` method is a noop.

## Hierarchy

* `Macroable`

  * **Response**

## Implements

* [ResponseContract](../interfaces/_contracts_.responsecontract.md)

## Index

### Constructors

* [constructor](_response_.response.md#constructor)

### Properties

* [explicitEnd](_response_.response.md#explicitend)
* [lazyBody](_response_.response.md#lazybody)
* [request](_response_.response.md#request)
* [response](_response_.response.md#response)
* [_getters](_response_.response.md#static-protected-_getters)
* [_macros](_response_.response.md#static-protected-_macros)

### Accessors

* [finished](_response_.response.md#finished)
* [hasLazyBody](_response_.response.md#haslazybody)
* [headersSent](_response_.response.md#headerssent)
* [isPending](_response_.response.md#ispending)

### Methods

* [append](_response_.response.md#append)
* [attachment](_response_.response.md#attachment)
* [buildResponseBody](_response_.response.md#buildresponsebody)
* [clearCookie](_response_.response.md#clearcookie)
* [cookie](_response_.response.md#cookie)
* [download](_response_.response.md#download)
* [finish](_response_.response.md#finish)
* [flushHeaders](_response_.response.md#flushheaders)
* [fresh](_response_.response.md#fresh)
* [getHeader](_response_.response.md#getheader)
* [header](_response_.response.md#header)
* [json](_response_.response.md#json)
* [jsonp](_response_.response.md#jsonp)
* [location](_response_.response.md#location)
* [plainCookie](_response_.response.md#plaincookie)
* [redirect](_response_.response.md#redirect)
* [removeHeader](_response_.response.md#removeheader)
* [safeHeader](_response_.response.md#safeheader)
* [safeStatus](_response_.response.md#safestatus)
* [send](_response_.response.md#send)
* [setEtag](_response_.response.md#setetag)
* [status](_response_.response.md#status)
* [stream](_response_.response.md#stream)
* [type](_response_.response.md#type)
* [vary](_response_.response.md#vary)
* [getGetter](_response_.response.md#static-getgetter)
* [getMacro](_response_.response.md#static-getmacro)
* [getter](_response_.response.md#static-getter)
* [hasGetter](_response_.response.md#static-hasgetter)
* [hasMacro](_response_.response.md#static-hasmacro)
* [hydrate](_response_.response.md#static-hydrate)
* [macro](_response_.response.md#static-macro)

## Constructors

###  constructor

\+ **new Response**(`request`: `IncomingMessage`, `response`: `ServerResponse`, `_config`: `DeepReadonly<ResponseConfigContract>`): *[Response](_response_.response.md)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | `IncomingMessage` |
`response` | `ServerResponse` |
`_config` | `DeepReadonly<ResponseConfigContract>` |

**Returns:** *[Response](_response_.response.md)*

## Properties

###  explicitEnd

• **explicitEnd**: *boolean* = false

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md).[explicitEnd](../interfaces/_contracts_.responsecontract.md#explicitend)*

___

###  lazyBody

• **lazyBody**: *[LazyBody](../modules/_contracts_.md#lazybody) | null* =  null

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md).[lazyBody](../interfaces/_contracts_.responsecontract.md#lazybody)*

Lazy body is used to set the response body. However, do not
write it on the socket immediately unless `response.finish`
is called.

Only works with `explicitEnd=true`, which is set to `false` by default

___

###  request

• **request**: *`IncomingMessage`*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md).[request](../interfaces/_contracts_.responsecontract.md#request)*

___

###  response

• **response**: *`ServerResponse`*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md).[response](../interfaces/_contracts_.responsecontract.md#response)*

___

### `Static` `Protected` _getters

▪ **_getters**: *object*

*Overrides void*

#### Type declaration:

___

### `Static` `Protected` _macros

▪ **_macros**: *object*

*Overrides void*

#### Type declaration:

## Accessors

###  finished

• **get finished**(): *boolean*

Returns a boolean telling if response is finished or not.
Any more attempts to update headers or body will result
in raised exceptions.

**Returns:** *boolean*

___

###  hasLazyBody

• **get hasLazyBody**(): *boolean*

Returns a boolean telling if lazy body is already set or not

**Returns:** *boolean*

___

###  headersSent

• **get headersSent**(): *boolean*

Returns a boolean telling if response headers has been sent or not.
Any more attempts to update headers will result in raised
exceptions.

**Returns:** *boolean*

___

###  isPending

• **get isPending**(): *boolean*

Returns a boolean telling if response headers and body is written
or not. When value is `true`, you can feel free to write headers
and body.

**Returns:** *boolean*

## Methods

###  append

▸ **append**(`key`: string, `value`: [CastableHeader](../modules/_contracts_.md#castableheader)): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Append value to an existing header. To replace the value, we suggest using
[header](_response_.response.md#header) method.

If `value` is not existy, then header won't be set.

**`example`** 
```js
response.append('set-cookie', 'username=virk')
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_contracts_.md#castableheader) |

**Returns:** *this*

___

###  attachment

▸ **attachment**(`filePath`: string, `name?`: undefined | string, `disposition?`: undefined | string, `generateEtag?`: undefined | false | true, `raiseErrors?`: undefined | false | true): *`Promise<void | Error>`*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Download the file by forcing the user to save the file vs displaying it
within the browser.

Internally calls [download](_response_.response.md#download)

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |
`name?` | undefined \| string |
`disposition?` | undefined \| string |
`generateEtag?` | undefined \| false \| true |
`raiseErrors?` | undefined \| false \| true |

**Returns:** *`Promise<void | Error>`*

___

###  buildResponseBody

▸ **buildResponseBody**(`body`: any): *object*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Builds the response body and returns it's appropriate type
to be set as the content-type header.

Ideally, you should use [send](_response_.response.md#send) vs using this method. This method will
not set any headers and must be used when you want more control over the
response sending process.

Make sure to appropriately handle the case of `unknown` type, which is returned
when unable to parse the body type.

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |

**Returns:** *object*

___

###  clearCookie

▸ **clearCookie**(`key`: string, `options?`: `Partial<CookieOptions>`): *this*

Clear existing cookie.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`options?` | `Partial<CookieOptions>` |

**Returns:** *this*

___

###  cookie

▸ **cookie**(`key`: string, `value`: any, `options?`: `Partial<CookieOptions>`): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Set signed cookie as the response header. The inline options overrides
all options from the config (means they are not merged).

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`options?` | `Partial<CookieOptions>` |

**Returns:** *this*

___

###  download

▸ **download**(`filePath`: string, `generateEtag`: boolean, `raiseErrors`: boolean): *`Promise<void | Error>`*

Download file by streaming it from the file path. This method will setup
appropriate `Content-type`, `Content-type` and `Last-modified` headers.

Unexpected stream errors are handled gracefully to avoid memory leaks.

If `raiseErrors=false`, then this method will self handle all the exceptions by
writing a generic HTTP response. To have more control over the error, it is
recommended to set `raiseErrors=true` and wrap this function inside a
`try/catch` statement.

**`example`** 
```js
// Errors handled automatically with generic HTTP response
response.download('somefile.jpg')

// Manually handle (note the await call)
try {
  await response.download('somefile.jpg')
} catch (error) {
  response.status(error.code === 'ENOENT' ? 404 : 500)
  response.send('Cannot process file')
}
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filePath` | string | - |
`generateEtag` | boolean |  this._config.etag |
`raiseErrors` | boolean | false |

**Returns:** *`Promise<void | Error>`*

___

###  finish

▸ **finish**(): *void*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Finishes the response by writing the lazy body, when `explicitEnd = true`
and response is already pending.

Calling this method twice or when `explicitEnd = false` is noop.

**Returns:** *void*

___

###  flushHeaders

▸ **flushHeaders**(`statusCode?`: undefined | number): *this*

Writes headers to the response.

**Parameters:**

Name | Type |
------ | ------ |
`statusCode?` | undefined \| number |

**Returns:** *this*

___

###  fresh

▸ **fresh**(): *boolean*

Returns a boolean telling if the new response etag evaluates same
as the request header `if-none-match`. In case of `true`, the
server must return `304` response, telling the browser to
use the client cache.

You won't have to deal with this method directly, since AdonisJs will
handle this for you when `http.etag = true` inside `config/app.js` file.

However, this is how you can use it manually.

**`example`** 
```js
const responseBody = view.render('some-view')

// sets the HTTP etag header for response
response.setEtag(responseBody)

if (response.fresh()) {
  response.sendStatus(304)
} else {
  response.send(responseBody)
}
```

**Returns:** *boolean*

___

###  getHeader

▸ **getHeader**(`key`: string): *any*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Returns the existing value for a given HTTP response
header.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *any*

___

###  header

▸ **header**(`key`: string, `value`: [CastableHeader](../modules/_contracts_.md#castableheader)): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Set header on the response. To `append` values to the existing header, we suggest
using [append](_response_.response.md#append) method.

If `value` is non existy, then header won't be set.

**`example`** 
```js
response.header('content-type', 'application/json')
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_contracts_.md#castableheader) |

**Returns:** *this*

___

###  json

▸ **json**(`body`: any, `generateEtag?`: undefined | false | true): *void*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Alias of [send](_response_.response.md#send)

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |
`generateEtag?` | undefined \| false \| true |

**Returns:** *void*

___

###  jsonp

▸ **jsonp**(`body`: any, `callbackName`: string, `generateEtag`: boolean): *void*

Writes response as JSONP. The callback name is resolved as follows, with priority
from top to bottom.

1. Explicitly defined as 2nd Param.
2. Fetch from request query string.
3. Use the config value `http.jsonpCallbackName` from `config/app.js`.
4. Fallback to `callback`.

This method buffers the body if `explicitEnd = true`, which is the default
behavior and do not change, unless you know what you are doing.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`body` | any | - |
`callbackName` | string |  this._config.jsonpCallbackName |
`generateEtag` | boolean |  this._config.etag |

**Returns:** *void*

___

###  location

▸ **location**(`url`: string): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Set the location header.

**`example`** 
```js
response.location('/login')
```

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *this*

___

###  plainCookie

▸ **plainCookie**(`key`: string, `value`: any, `options?`: `Partial<CookieOptions>`): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Set unsigned cookie as the response header. The inline options overrides
all options from the config (means they are not merged)

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |
`options?` | `Partial<CookieOptions>` |

**Returns:** *this*

___

###  redirect

▸ **redirect**(`url`: string, `sendQueryParams?`: undefined | false | true, `statusCode`: number): *void*

Redirect request to a different URL. Current request `query string` can be forwared
by setting 2nd param to `true`.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`sendQueryParams?` | undefined \| false \| true | - |
`statusCode` | number | 302 |

**Returns:** *void*

___

###  removeHeader

▸ **removeHeader**(`key`: string): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Removes the existing response header from being sent.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *this*

___

###  safeHeader

▸ **safeHeader**(`key`: string, `value`: [CastableHeader](../modules/_contracts_.md#castableheader)): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Adds HTTP response header, when it doesn't exists already.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [CastableHeader](../modules/_contracts_.md#castableheader) |

**Returns:** *this*

___

###  safeStatus

▸ **safeStatus**(`code`: number): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Set's status code only when it's not explictly
set

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

___

###  send

▸ **send**(`body`: any, `generateEtag`: boolean): *void*

Send the body as response and optionally generate etag. The default value
is read from `config/app.js` file, using `http.etag` property.

This method buffers the body if `explicitEnd = true`, which is the default
behavior and do not change, unless you know what you are doing.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`body` | any | - |
`generateEtag` | boolean |  this._config.etag |

**Returns:** *void*

___

###  setEtag

▸ **setEtag**(`body`: any, `weak`: boolean): *this*

Set etag by computing hash from the body. This class will set the etag automatically
when `etag = true` in the defined config object.

Use this function, when you want to compute etag manually for some other resons.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`body` | any | - |
`weak` | boolean | false |

**Returns:** *this*

___

###  status

▸ **status**(`code`: number): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Set HTTP status code

**Parameters:**

Name | Type |
------ | ------ |
`code` | number |

**Returns:** *this*

___

###  stream

▸ **stream**(`body`: [ResponseStream](../modules/_contracts_.md#responsestream), `raiseErrors`: boolean): *`Promise<Error | void>`*

Pipe stream to the response. This method will gracefully destroy
the stream, avoiding memory leaks.

If `raiseErrors=false`, then this method will self handle all the exceptions by
writing a generic HTTP response. To have more control over the error, it is
recommended to set `raiseErrors=true` and wrap this function inside a
`try/catch` statement.

Streaming a file from the disk and showing 404 when file is missing.

**`example`** 
```js
// Errors handled automatically with generic HTTP response
response.stream(fs.createReadStream('file.txt'))

// Manually handle (note the await call)
try {
  await response.stream(fs.createReadStream('file.txt'))
} catch () {
  response.status(404).send('File not found')
}
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`body` | [ResponseStream](../modules/_contracts_.md#responsestream) | - |
`raiseErrors` | boolean | false |

**Returns:** *`Promise<Error | void>`*

___

###  type

▸ **type**(`type`: string, `charset?`: undefined | string): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Set response type by looking up for the mime-type using
partial types like file extensions.

Make sure to read [mime-types](https://www.npmjs.com/package/mime-types) docs
too.

**`example`** 
```js
response.type('.json') // Content-type: application/json
```

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`charset?` | undefined \| string |

**Returns:** *this*

___

###  vary

▸ **vary**(`field`: string): *this*

*Implementation of [ResponseContract](../interfaces/_contracts_.responsecontract.md)*

Set the Vary HTTP header

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |

**Returns:** *this*

___

### `Static` getGetter

▸ **getGetter**(`name`: string): *`MacroableFn` | undefined*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *`MacroableFn` | undefined*

___

### `Static` getMacro

▸ **getMacro**(`name`: string): *`MacroableFn` | undefined*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *`MacroableFn` | undefined*

___

### `Static` getter

▸ **getter**(`name`: string, `callback`: `MacroableFn`, `singleton?`: undefined | false | true): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`callback` | `MacroableFn` |
`singleton?` | undefined \| false \| true |

**Returns:** *void*

___

### `Static` hasGetter

▸ **hasGetter**(`name`: string): *boolean*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

### `Static` hasMacro

▸ **hasMacro**(`name`: string): *boolean*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

### `Static` hydrate

▸ **hydrate**(): *void*

*Inherited from void*

**Returns:** *void*

___

### `Static` macro

▸ **macro**(`name`: string, `callback`: `MacroableFn`): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`callback` | `MacroableFn` |

**Returns:** *void*