[@poppinss/response](../README.md) > [@poppinss/response](../modules/_poppinss_response.md) > [Response](../classes/_poppinss_response.response.md)

# Class: Response

The response is a wrapper over [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) streamlining the process of writing response body and automatically setting up appropriate headers.

The response class has support for `explicitEnd` mode, which is set to true by default.

When implicit end is set to true, the response class will not write content to the HTTP response directly and instead waits for an explicit call to the `finish` method. This is done to allow `return` statements from controllers.

This is how `explicitEnd` mode works in nutshell.

**When set to true**

1.  Calls to `send`, `json` and `jsonp` will be buffered until `finish` is called.
2.  `response.hasLazyBody` returns `true` after calling `send`, `json` or `jsonp`.
3.  If `response.hasLazyBody` return `false`, then server will use the `return value` of the controller and set it as body before calling `finish`.

**When set to false**

1.  Calls to `send`, `json` and `jsonp` will write the response writeaway.
2.  The `return value` of the controller will be discarded.
3.  The call to `finish` method is a noop.

## Hierarchy

 `Macroable`

**↳ Response**

## Implements

* `ResponseContract`

## Index

### Constructors

* [constructor](_poppinss_response.response.md#constructor)

### Properties

* [explicitEnd](_poppinss_response.response.md#explicitend)
* [lazyBody](_poppinss_response.response.md#lazybody)
* [request](_poppinss_response.response.md#request)
* [response](_poppinss_response.response.md#response)
* [_getters](_poppinss_response.response.md#_getters)
* [_macros](_poppinss_response.response.md#_macros)

### Accessors

* [finished](_poppinss_response.response.md#finished)
* [hasLazyBody](_poppinss_response.response.md#haslazybody)
* [headersSent](_poppinss_response.response.md#headerssent)
* [isPending](_poppinss_response.response.md#ispending)

### Methods

* [append](_poppinss_response.response.md#append)
* [attachment](_poppinss_response.response.md#attachment)
* [buildResponseBody](_poppinss_response.response.md#buildresponsebody)
* [clearCookie](_poppinss_response.response.md#clearcookie)
* [cookie](_poppinss_response.response.md#cookie)
* [download](_poppinss_response.response.md#download)
* [finish](_poppinss_response.response.md#finish)
* [flushHeaders](_poppinss_response.response.md#flushheaders)
* [fresh](_poppinss_response.response.md#fresh)
* [getHeader](_poppinss_response.response.md#getheader)
* [header](_poppinss_response.response.md#header)
* [json](_poppinss_response.response.md#json)
* [jsonp](_poppinss_response.response.md#jsonp)
* [location](_poppinss_response.response.md#location)
* [plainCookie](_poppinss_response.response.md#plaincookie)
* [redirect](_poppinss_response.response.md#redirect)
* [removeHeader](_poppinss_response.response.md#removeheader)
* [safeHeader](_poppinss_response.response.md#safeheader)
* [safeStatus](_poppinss_response.response.md#safestatus)
* [send](_poppinss_response.response.md#send)
* [setEtag](_poppinss_response.response.md#setetag)
* [status](_poppinss_response.response.md#status)
* [stream](_poppinss_response.response.md#stream)
* [type](_poppinss_response.response.md#type)
* [vary](_poppinss_response.response.md#vary)
* [getGetter](_poppinss_response.response.md#getgetter)
* [getMacro](_poppinss_response.response.md#getmacro)
* [getter](_poppinss_response.response.md#getter)
* [hasGetter](_poppinss_response.response.md#hasgetter)
* [hasMacro](_poppinss_response.response.md#hasmacro)
* [hydrate](_poppinss_response.response.md#hydrate)
* [macro](_poppinss_response.response.md#macro)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Response**(request: *`IncomingMessage`*, response: *`ServerResponse`*, _config: *`DeepReadonly`<`ResponseConfigContract`>*): [Response](_poppinss_response.response.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `IncomingMessage` |
| response | `ServerResponse` |
| _config | `DeepReadonly`<`ResponseConfigContract`> |

**Returns:** [Response](_poppinss_response.response.md)

___

## Properties

<a id="explicitend"></a>

###  explicitEnd

**● explicitEnd**: *`boolean`* = false

___
<a id="lazybody"></a>

###  lazyBody

**● lazyBody**: *`LazyBody` \| `null`* =  null

Lazy body is used to set the response body. However, do not write it on the socket immediately unless `response.finish` is called.

Only works with `explicitEnd=true`, which is set to `false` by default

___
<a id="request"></a>

###  request

**● request**: *`IncomingMessage`*

___
<a id="response"></a>

###  response

**● response**: *`ServerResponse`*

___
<a id="_getters"></a>

### `<Static>``<Protected>` _getters

**● _getters**: *`object`*

#### Type declaration

___
<a id="_macros"></a>

### `<Static>``<Protected>` _macros

**● _macros**: *`object`*

#### Type declaration

___

## Accessors

<a id="finished"></a>

###  finished

**get finished**(): `boolean`

Returns a boolean telling if response is finished or not. Any more attempts to update headers or body will result in raised exceptions.

**Returns:** `boolean`

___
<a id="haslazybody"></a>

###  hasLazyBody

**get hasLazyBody**(): `boolean`

Returns a boolean telling if lazy body is already set or not

**Returns:** `boolean`

___
<a id="headerssent"></a>

###  headersSent

**get headersSent**(): `boolean`

Returns a boolean telling if response headers has been sent or not. Any more attempts to update headers will result in raised exceptions.

**Returns:** `boolean`

___
<a id="ispending"></a>

###  isPending

**get isPending**(): `boolean`

Returns a boolean telling if response headers and body is written or not. When value is `true`, you can feel free to write headers and body.

**Returns:** `boolean`

___

## Methods

<a id="append"></a>

###  append

▸ **append**(key: *`string`*, value: *`CastableHeader`*): `this`

Append value to an existing header. To replace the value, we suggest using [header](_poppinss_response.response.md#header) method.

If `value` is not existy, then header won't be set.

*__example__*:
 ```js
response.append('set-cookie', 'username=virk')
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `CastableHeader` |

**Returns:** `this`

___
<a id="attachment"></a>

###  attachment

▸ **attachment**(filePath: *`string`*, name?: *`undefined` \| `string`*, disposition?: *`undefined` \| `string`*, generateEtag?: *`undefined` \| `false` \| `true`*, raiseErrors?: *`undefined` \| `false` \| `true`*): `Promise`<`void` \| `Error`>

Download the file by forcing the user to save the file vs displaying it within the browser.

Internally calls [download](_poppinss_response.response.md#download)

**Parameters:**

| Name | Type |
| ------ | ------ |
| filePath | `string` |
| `Optional` name | `undefined` \| `string` |
| `Optional` disposition | `undefined` \| `string` |
| `Optional` generateEtag | `undefined` \| `false` \| `true` |
| `Optional` raiseErrors | `undefined` \| `false` \| `true` |

**Returns:** `Promise`<`void` \| `Error`>

___
<a id="buildresponsebody"></a>

###  buildResponseBody

▸ **buildResponseBody**(body: *`any`*): `object`

Builds the response body and returns it's appropriate type to be set as the content-type header.

Ideally, you should use [send](_poppinss_response.response.md#send) vs using this method. This method will not set any headers and must be used when you want more control over the response sending process.

Make sure to appropriately handle the case of `unknown` type, which is returned when unable to parse the body type.

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `object`

___
<a id="clearcookie"></a>

###  clearCookie

▸ **clearCookie**(key: *`string`*, options?: *`Partial`<`CookieOptions`>*): `this`

Clear existing cookie.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` options | `Partial`<`CookieOptions`> |

**Returns:** `this`

___
<a id="cookie"></a>

###  cookie

▸ **cookie**(key: *`string`*, value: *`any`*, options?: *`Partial`<`CookieOptions`>*): `this`

Set signed cookie as the response header. The inline options overrides all options from the config (means they are not merged).

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |
| `Optional` options | `Partial`<`CookieOptions`> |

**Returns:** `this`

___
<a id="download"></a>

###  download

▸ **download**(filePath: *`string`*, generateEtag?: *`boolean`*, raiseErrors?: *`boolean`*): `Promise`<`void` \| `Error`>

Download file by streaming it from the file path. This method will setup appropriate `Content-type`, `Content-type` and `Last-modified` headers.

Unexpected stream errors are handled gracefully to avoid memory leaks.

If `raiseErrors=false`, then this method will self handle all the exceptions by writing a generic HTTP response. To have more control over the error, it is recommended to set `raiseErrors=true` and wrap this function inside a `try/catch` statement.

*__example__*:
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

| Name | Type | Default value |
| ------ | ------ | ------ |
| filePath | `string` | - |
| `Default value` generateEtag | `boolean` |  this._config.etag |
| `Default value` raiseErrors | `boolean` | false |

**Returns:** `Promise`<`void` \| `Error`>

___
<a id="finish"></a>

###  finish

▸ **finish**(): `void`

Finishes the response by writing the lazy body, when `explicitEnd = true` and response is already pending.

Calling this method twice or when `explicitEnd = false` is noop.

**Returns:** `void`

___
<a id="flushheaders"></a>

###  flushHeaders

▸ **flushHeaders**(statusCode?: *`undefined` \| `number`*): `this`

Writes headers to the response.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` statusCode | `undefined` \| `number` |

**Returns:** `this`

___
<a id="fresh"></a>

###  fresh

▸ **fresh**(): `boolean`

Returns a boolean telling if the new response etag evaluates same as the request header `if-none-match`. In case of `true`, the server must return `304` response, telling the browser to use the client cache.

You won't have to deal with this method directly, since AdonisJs will handle this for you when `http.etag = true` inside `config/app.js` file.

However, this is how you can use it manually.

*__example__*:
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

**Returns:** `boolean`

___
<a id="getheader"></a>

###  getHeader

▸ **getHeader**(key: *`string`*): `any`

Returns the existing value for a given HTTP response header.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `any`

___
<a id="header"></a>

###  header

▸ **header**(key: *`string`*, value: *`CastableHeader`*): `this`

Set header on the response. To `append` values to the existing header, we suggest using [append](_poppinss_response.response.md#append) method.

If `value` is non existy, then header won't be set.

*__example__*:
 ```js
response.header('content-type', 'application/json')
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `CastableHeader` |

**Returns:** `this`

___
<a id="json"></a>

###  json

▸ **json**(body: *`any`*, generateEtag?: *`undefined` \| `false` \| `true`*): `void`

Alias of [send](_poppinss_response.response.md#send)

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |
| `Optional` generateEtag | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="jsonp"></a>

###  jsonp

▸ **jsonp**(body: *`any`*, callbackName?: *`string`*, generateEtag?: *`boolean`*): `void`

Writes response as JSONP. The callback name is resolved as follows, with priority from top to bottom.

1.  Explicitly defined as 2nd Param.
2.  Fetch from request query string.
3.  Use the config value `http.jsonpCallbackName` from `config/app.js`.
4.  Fallback to `callback`.

This method buffers the body if `explicitEnd = true`, which is the default behavior and do not change, unless you know what you are doing.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `any` | - |
| `Default value` callbackName | `string` |  this._config.jsonpCallbackName |
| `Default value` generateEtag | `boolean` |  this._config.etag |

**Returns:** `void`

___
<a id="location"></a>

###  location

▸ **location**(url: *`string`*): `this`

Set the location header.

*__example__*:
 ```js
response.location('/login')
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `this`

___
<a id="plaincookie"></a>

###  plainCookie

▸ **plainCookie**(key: *`string`*, value: *`any`*, options?: *`Partial`<`CookieOptions`>*): `this`

Set unsigned cookie as the response header. The inline options overrides all options from the config (means they are not merged)

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |
| `Optional` options | `Partial`<`CookieOptions`> |

**Returns:** `this`

___
<a id="redirect"></a>

###  redirect

▸ **redirect**(url: *`string`*, sendQueryParams?: *`undefined` \| `false` \| `true`*, statusCode?: *`number`*): `void`

Redirect request to a different URL. Current request `query string` can be forwared by setting 2nd param to `true`.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| url | `string` | - |
| `Optional` sendQueryParams | `undefined` \| `false` \| `true` | - |
| `Default value` statusCode | `number` | 302 |

**Returns:** `void`

___
<a id="removeheader"></a>

###  removeHeader

▸ **removeHeader**(key: *`string`*): `this`

Removes the existing response header from being sent.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `this`

___
<a id="safeheader"></a>

###  safeHeader

▸ **safeHeader**(key: *`string`*, value: *`CastableHeader`*): `this`

Adds HTTP response header, when it doesn't exists already.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `CastableHeader` |

**Returns:** `this`

___
<a id="safestatus"></a>

###  safeStatus

▸ **safeStatus**(code: *`number`*): `this`

Set's status code only when it's not explictly set

**Parameters:**

| Name | Type |
| ------ | ------ |
| code | `number` |

**Returns:** `this`

___
<a id="send"></a>

###  send

▸ **send**(body: *`any`*, generateEtag?: *`boolean`*): `void`

Send the body as response and optionally generate etag. The default value is read from `config/app.js` file, using `http.etag` property.

This method buffers the body if `explicitEnd = true`, which is the default behavior and do not change, unless you know what you are doing.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `any` | - |
| `Default value` generateEtag | `boolean` |  this._config.etag |

**Returns:** `void`

___
<a id="setetag"></a>

###  setEtag

▸ **setEtag**(body: *`any`*, weak?: *`boolean`*): `this`

Set etag by computing hash from the body. This class will set the etag automatically when `etag = true` in the defined config object.

Use this function, when you want to compute etag manually for some other resons.

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `any` | - |
| `Default value` weak | `boolean` | false |

**Returns:** `this`

___
<a id="status"></a>

###  status

▸ **status**(code: *`number`*): `this`

Set HTTP status code

**Parameters:**

| Name | Type |
| ------ | ------ |
| code | `number` |

**Returns:** `this`

___
<a id="stream"></a>

###  stream

▸ **stream**(body: *`ResponseStream`*, raiseErrors?: *`boolean`*): `Promise`<`Error` \| `void`>

Pipe stream to the response. This method will gracefully destroy the stream, avoiding memory leaks.

If `raiseErrors=false`, then this method will self handle all the exceptions by writing a generic HTTP response. To have more control over the error, it is recommended to set `raiseErrors=true` and wrap this function inside a `try/catch` statement.

Streaming a file from the disk and showing 404 when file is missing.

*__example__*:
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

| Name | Type | Default value |
| ------ | ------ | ------ |
| body | `ResponseStream` | - |
| `Default value` raiseErrors | `boolean` | false |

**Returns:** `Promise`<`Error` \| `void`>

___
<a id="type"></a>

###  type

▸ **type**(type: *`string`*, charset?: *`undefined` \| `string`*): `this`

Set response type by looking up for the mime-type using partial types like file extensions.

Make sure to read [mime-types](https://www.npmjs.com/package/mime-types) docs too.

*__example__*:
 ```js
response.type('.json') // Content-type: application/json
```

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

Set the Vary HTTP header

**Parameters:**

| Name | Type |
| ------ | ------ |
| field | `string` |

**Returns:** `this`

___
<a id="getgetter"></a>

### `<Static>` getGetter

▸ **getGetter**(name: *`string`*): `MacroableFn` \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `MacroableFn` \| `undefined`

___
<a id="getmacro"></a>

### `<Static>` getMacro

▸ **getMacro**(name: *`string`*): `MacroableFn` \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `MacroableFn` \| `undefined`

___
<a id="getter"></a>

### `<Static>` getter

▸ **getter**(name: *`string`*, callback: *`MacroableFn`*, singleton?: *`undefined` \| `false` \| `true`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| callback | `MacroableFn` |
| `Optional` singleton | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="hasgetter"></a>

### `<Static>` hasGetter

▸ **hasGetter**(name: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="hasmacro"></a>

### `<Static>` hasMacro

▸ **hasMacro**(name: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="hydrate"></a>

### `<Static>` hydrate

▸ **hydrate**(): `void`

**Returns:** `void`

___
<a id="macro"></a>

### `<Static>` macro

▸ **macro**(name: *`string`*, callback: *`MacroableFn`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| callback | `MacroableFn` |

**Returns:** `void`

___

