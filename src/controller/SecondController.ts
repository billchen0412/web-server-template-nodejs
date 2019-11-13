import { Request, Response } from 'express';
import * as Config from '../Config';
import * as MyService2 from '../service/MyService2';

export function MyHttpHandlerC(req: Request, res: Response): void {
    console.log('MyHttpHandlerC is called');
    let a: number = 1;
    let b: number = 2;
    let c: number = MyService2.mul(a, b);
    res.send('MyHttpHandlerC is called, mul is ' + c);
}

export function MyHttpHandlerD(req: Request, res: Response): void {
    console.log('MyHttpHandlerD is called');
    let a: number = 1;
    let b: number = 2;
    let c: number = MyService2.div(a, b);
    res.send('MyHttpHandlerD is called, div is ' + c);
}