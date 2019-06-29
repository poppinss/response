> **[@poppinss/response](../README.md)**

[Globals](../README.md) / [@poppinss/response](_poppinss_response.md) /

# External module: @poppinss/response

### Index

#### Classes

* [Response](../classes/_poppinss_response.response.md)

#### Interfaces

* [ResponseContract](../interfaces/_poppinss_response.responsecontract.md)

#### Type aliases

* [CastableHeader](_poppinss_response.md#castableheader)
* [LazyBody](_poppinss_response.md#lazybody)
* [ResponseConfigContract](_poppinss_response.md#responseconfigcontract)
* [ResponseContentType](_poppinss_response.md#responsecontenttype)
* [ResponseStream](_poppinss_response.md#responsestream)

## Type aliases

###  CastableHeader

Ƭ **CastableHeader**: *string | number | boolean | string[] | number[] | boolean[]*

Types from which response header can be casted to a
string

___

###  LazyBody

Ƭ **LazyBody**: *object*

Lazy body packet

#### Type declaration:

___

###  ResponseConfigContract

Ƭ **ResponseConfigContract**: *object*

Config accepted by response class

#### Type declaration:

___

###  ResponseContentType

Ƭ **ResponseContentType**: *"text/html" | "text/plain" | "application/octet-stream" | "application/json" | "unknown" | "null"*

Content types after processing response body

___

###  ResponseStream

Ƭ **ResponseStream**: *`ReadStream` | `ReadWriteStream` | `ReadableStream`*

Types of readable stream allowed for HTTP response