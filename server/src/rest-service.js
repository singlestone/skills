'use strict';

const employeeService = require('./employee-service');

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

router.get('/employee', (ctx, next) => {
    ctx.status = 200;
    ctx.body = employeeService.getEmployees();
});

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

module.exports = {
    app
}