var products = [
  {
    name: 'iPhone',
    price: 9999
  },
  {
    name: 'Kindle',
    price: 300
  }
]

module.exports = {
  'GET /api/products': async (ctx, next) => {
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = {
        products: products
    };
  },
  'POST /api/products': async (ctx, next) => {
    console.log(ctx)
    var p = {
      name: ctx.request.body.name,
      price: ctx.request.body.price
    };
    products.push(p);
    ctx.response.type = 'application/json';
    ctx.response.body = p;
  }
}