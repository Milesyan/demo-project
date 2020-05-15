import { router } from '../server';
import UserController from '../controller/user';

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello world!'};
  await next()
})

router.get('/user', UserController.getUserInfo)