import * as React from 'react';
import foo from 'js/foo';

export default function (a: number, b: number): number {
    const jsx = (<div>{a} + {b} = {a + b}</div>);
    console.log(jsx);
    console.log(foo('Michal'));
    return a + b;
}