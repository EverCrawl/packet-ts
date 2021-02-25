"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){void 0===e&&(e=0),this.pointer=0,this.arrayView=new Uint8Array(t,e),this.view=new DataView(t,e),this.decoder=new TextDecoder,this.failed=!1}return t.prototype.read_uint8=function(){return this.pointer+=1,this.failed||this.pointer>this.view.byteLength?(this.failed=!0,0):this.view.getUint8(this.pointer-1)},t.prototype.read_uint16=function(){return this.pointer+=2,this.failed||this.pointer>this.view.byteLength?(this.failed=!0,0):this.view.getUint16(this.pointer-2,!0)},t.prototype.read_uint32=function(){return this.pointer+=4,this.failed||this.pointer>this.view.byteLength?(this.failed=!0,0):this.view.getUint32(this.pointer-4,!0)},t.prototype.read_int8=function(){return this.pointer+=1,this.failed||this.pointer>this.view.byteLength?(this.failed=!0,0):this.view.getInt8(this.pointer-1)},t.prototype.read_int16=function(){return this.pointer+=2,this.failed||this.pointer>this.view.byteLength?(this.failed=!0,0):this.view.getInt16(this.pointer-2,!0)},t.prototype.read_int32=function(){return this.pointer+=4,this.failed||this.pointer>this.view.byteLength?(this.failed=!0,0):this.view.getInt32(this.pointer-4,!0)},t.prototype.read_float=function(){return this.pointer+=4,this.failed||this.pointer>this.view.byteLength?(this.failed=!0,0):this.view.getFloat32(this.pointer-4,!0)},t.prototype.read_string=function(t){if(this.pointer+=t,this.failed||this.pointer>this.view.byteLength)return this.failed=!0,"";var e=this.pointer-t;return this.decoder.decode(this.arrayView.slice(e,e+t))},t.prototype.read_bytes=function(t){if(this.pointer+=t,this.failed||this.pointer>this.view.byteLength)return this.failed=!0,new Uint8Array;var e=this.pointer-t;return this.arrayView.slice(e,e+t)},t}(),e=new(function(){function t(){this.encoder=new TextEncoder,this.byteLength=0,this.buffer=new Uint8Array(1024)}return t.prototype.encode=function(t){return this.byteLength=this.encoder.encodeInto(t,this.buffer).written,this.byteLength},t.prototype.getInto=function(t,e){t.set(this.buffer.slice(0,this.byteLength),e)},t}()),i=function(){function t(t,e){void 0===e&&(e=0),this.pointer=0;var i=t instanceof ArrayBuffer?t:new ArrayBuffer(null!=t?t:0);this.arrayView=new Uint8Array(i,e),this.view=new DataView(i)}return t.prototype.ensure=function(t){if(!(this.view.byteLength>=this.pointer+t)){var e=new ArrayBuffer(this.view.byteLength+2*t),i=new Uint8Array(e);i.set(this.arrayView),this.arrayView=i,this.view=new DataView(e)}},t.prototype.advance=function(t){return this.pointer+=t,this.pointer-t},t.prototype.write_uint8=function(t){this.ensure(1),this.view.setUint8(this.advance(1),t)},t.prototype.write_uint16=function(t){this.ensure(2),this.view.setUint16(this.advance(2),t,!0)},t.prototype.write_uint32=function(t){this.ensure(4),this.view.setUint32(this.advance(4),t,!0)},t.prototype.write_int8=function(t){this.ensure(1),this.view.setInt8(this.advance(1),t)},t.prototype.write_int16=function(t){this.ensure(2),this.view.setInt16(this.advance(2),t,!0)},t.prototype.write_int32=function(t){this.ensure(4),this.view.setInt32(this.advance(4),t,!0)},t.prototype.write_float=function(t){this.ensure(4),this.view.setFloat32(this.advance(4),t,!0)},t.prototype.write_string=function(t){var i=e.encode(t);this.ensure(i),e.getInto(this.arrayView,this.advance(i))},t.prototype.write_bytes=function(t){this.ensure(t.byteLength),this.arrayView.set(t,this.advance(t.byteLength))},t.prototype.finish=function(){return this.view.buffer.slice(0,this.pointer)},t}();exports.Reader=t,exports.Writer=i;
