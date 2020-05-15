import { Middleware } from "koa";

class UserController {
  getUserInfo: Middleware = async (ctx, next) => {
    ctx.body = { id: 123, name: "Tom" };
    return next();
  };
}

export default new UserController();
