import { Request, Response } from 'express';
import * as Config from '../Config';
import * as MyService1 from '../service/MyService1';

export function MyHttpHandlerA(req: Request, res: Response): void {
    console.log('MyHttpHandlerA is called');
    let a: number = 1;
    let b: number = 2;
    let c: number = MyService1.add(a, b);
    res.send('MyHttpHandlerA is called, add is ' + c);
}

export function MyHttpHandlerB(req: Request, res: Response): void {
    console.log('MyHttpHandlerB is called');
    let a: number = 1;
    let b: number = 2;
    let c: number = MyService1.minus(a, b);
    res.send('MyHttpHandlerB is called, minus is ' + c);
}