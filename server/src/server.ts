import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import cors from '@koa/cors';

const app = new Koa();
export const router = new Router();

require('./router/user');
app.use(json());
app.use(logger());
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());
app.listen(3001, () => {
  console.log("started on: 3001");
})