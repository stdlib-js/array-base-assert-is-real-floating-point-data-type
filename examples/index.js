/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var isRealFloatingPointDataType = require( './../lib' ); // eslint-disable-line id-length

var bool = isRealFloatingPointDataType( 'float32' );
console.log( bool );
// => true

bool = isRealFloatingPointDataType( 'float64' );
console.log( bool );
// => true

bool = isRealFloatingPointDataType( 'generic' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( 'int16' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( 'int32' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( 'int8' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( 'uint16' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( 'uint32' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( 'uint8' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( 'uint8c' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( '' );
console.log( bool );
// => false

bool = isRealFloatingPointDataType( 'foo' );
console.log( bool );
// => false
