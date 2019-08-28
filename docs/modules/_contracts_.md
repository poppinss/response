**[@poppinss/response](../README.md)**

[Globals](../README.md) › ["contracts"](_contracts_.md)

# External module: "contracts"

## Index

### Interfaces

* [ResponseContract](../interfaces/_contracts_.responsecontract.md)

### Type aliases

* [CastableHeader](_contracts_.md#castableheader)
* [LazyBody](_contracts_.md#lazybody)
* [ResponseConfigContract](_contracts_.md#responseconfigcontract)
* [ResponseContentType](_contracts_.md#responsecontenttype)
* [ResponseStream](_contracts_.md#responsestream)

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

Ƭ **ResponseStream**: *ReadStream | ReadWriteStream | ReadableStream*

Types of readable stream allowed for HTTP response