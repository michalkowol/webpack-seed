import * as React from 'react';
import * as _ from 'lodash';
import foo from 'js/foo';

export default function (a: number, b: number): number {
    const jsx = (<div>{a} + {b} = {a + b}</div>);
    console.log(jsx);
    console.log(foo('Michal'));
    console.log(_.padStart("Hello TypeScript!", 20, " "));
    return a + b;
}