declare module "test-export-20190923140546" {
    class _Foo {
    }
    class _Bar extends _Foo {
    }
    class _Baz {
    }
    /**
     * Named export with 'export default {name: ...}' on a named class.
     */
    class Qux extends _Baz {
        constructor(bar: _Bar);
        readonly foo: _Foo;
    }
}
