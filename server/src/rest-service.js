'use strict';

const employeeService = require('./employee-service');

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

async function logger(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.path} - ${ms}ms`);
}

router.get('/employee', async (ctx, next) => {
    ctx.body = await employeeService.getEmployees();
    ctx.status = 200;
});

app
    .use(logger)
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

module.exports = {
    app
}