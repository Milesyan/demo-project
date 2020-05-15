import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import cors from '@koa/cors';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello world!'};
  await next()
})

app.use(json());
app.use(logger());
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log("started");
})