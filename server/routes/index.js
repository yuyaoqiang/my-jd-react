const router = require('koa-router')()
const DB = require("../module/db.js");

router.get('/', async (ctx, next) => {
   let result = await DB.find("user",{});
   console.log(result)
  
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
