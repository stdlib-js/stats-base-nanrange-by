<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# nanrangeBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [range][range] of a strided array via a callback function, ignoring `NaN` values.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-nanrange-by
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var nanrangeBy = require( '@stdlib/stats-base-nanrange-by' );
```

#### nanrangeBy( N, x, strideX, clbk\[, thisArg] )

Computes the [range][range] of a strided array via a callback function, ignoring `NaN` values.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0, NaN ];

var v = nanrangeBy( x.length, x, 1, accessor );
// returns 18.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array], [`typed array`][mdn-typed-array], or an array-like object (excluding strings and functions).
-   **strideX**: stride length.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback is provided four arguments:

-   **value**: array element.
-   **aidx**: array index.
-   **sidx**: strided index (`offset + aidx*stride`).
-   **array**: input array/collection.

To set the callback execution context, provide a `thisArg`.

```javascript
function accessor( v ) {
    this.count += 1;
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0, NaN ];

var context = {
    'count': 0
};

var v = nanrangeBy( x.length, x, 1, accessor, context );
// returns 18.0

var cnt = context.count;
// returns 10
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to access every other element

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0, NaN, NaN ];

var v = nanrangeBy( 5, x, 2, accessor );
// returns 12.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function accessor( v ) {
    return v * 2.0;
}

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Access every other element...
var v = nanrangeBy( 3, x1, 2, accessor );
// returns 8.0
```

#### nanrangeBy.ndarray( N, x, strideX, offsetX, clbk\[, thisArg] )

Computes the [range][range] of a strided array via a callback function, ignoring `NaN` values and using alternative indexing semantics.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0, NaN ];

var v = nanrangeBy.ndarray( x.length, x, 1, 0, accessor );
// returns 18.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

var v = nanrangeBy.ndarray( 3, x, 1, x.length-3, accessor );
// returns 22.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   A provided callback function should return a numeric value.
-   If a provided callback function returns `NaN`, the value is ignored.
-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).
-   When possible, prefer using [`dnanrange`][@stdlib/stats/strided/dnanrange], [`snanrange`][@stdlib/stats/strided/snanrange], and/or [`nanrange`][@stdlib/stats/base/nanrange], as, depending on the environment, these interfaces are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-base-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var bernoulli = require( '@stdlib/random-base-bernoulli' );
var nanrangeBy = require( '@stdlib/stats-base-nanrange-by' );

function rand() {
    if ( bernoulli( 0.8 ) < 0.2 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

function accessor( v ) {
    return v * 2.0;
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = nanrangeBy( x.length, x, 1, accessor );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-strided/dnanrange`][@stdlib/stats/strided/dnanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-strided/nanmax-by`][@stdlib/stats/strided/nanmax-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-strided/nanmin-by`][@stdlib/stats/strided/nanmin-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/nanrange`][@stdlib/stats/base/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/range-by`][@stdlib/stats/base/range-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function.</span>
-   <span class="package-name">[`@stdlib/stats-strided/snanrange`][@stdlib/stats/strided/snanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-nanrange-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-nanrange-by

[test-image]: https://github.com/stdlib-js/stats-base-nanrange-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-nanrange-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-nanrange-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-nanrange-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-nanrange-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-nanrange-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-nanrange-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-nanrange-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-nanrange-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-nanrange-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-nanrange-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-nanrange-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-nanrange-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-nanrange-by/main/LICENSE

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/stats/strided/dnanrange]: https://github.com/stdlib-js/stats-strided-dnanrange

[@stdlib/stats/strided/nanmax-by]: https://github.com/stdlib-js/stats-strided-nanmax-by

[@stdlib/stats/strided/nanmin-by]: https://github.com/stdlib-js/stats-strided-nanmin-by

[@stdlib/stats/base/nanrange]: https://github.com/stdlib-js/stats-base-nanrange

[@stdlib/stats/base/range-by]: https://github.com/stdlib-js/stats-base-range-by

[@stdlib/stats/strided/snanrange]: https://github.com/stdlib-js/stats-strided-snanrange

<!-- </related-links> -->

</section>

<!-- /.links -->
