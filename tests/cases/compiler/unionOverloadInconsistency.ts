// @strict: true

// Switching the declaration order changes things too
interface Alpha {
    foo(type: "num", opts?: unknown): number;
    foo(type: "str", opts?: unknown): string;
    foo(type: string, opts?: unknown): number | string;
}

interface Beta {
    foo(type: "num", opts?: { a?: string }): number;
    foo(type: "str", opts?: { b?: string }): string;
    foo(type: "num" | "str", opts?: unknown): number | string;
}

declare let b: Beta;
// Commenting this line out causes an error on the bottom line -- It makes the order of overloads change
const b_res = b.foo("str");

declare let ab: Alpha | Beta;
const x: string = ab.foo("str"); // resolves to 'string | number'
// 'string | number' not assignable to 'string'