import * as express from "express";
import { controller, httpGet, interfaces } from 'inversify-express-utils';

@controller('/')
export class HomeController{
  @httpGet('/')
  public get(req:express.Request): string {
    return 'Bookless DB';
  }
}