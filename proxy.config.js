const proxy = [
    {
      context: '/api/3c1aef2bfa25421aa22f34db8ac5ddd0',
      target: 'https://crudcrud.com',
      pathRewrite: {'^/api/3c1aef2bfa25421aa22f34db8ac5ddd0' : ''}
    }
  ];
  module.exports = proxy;

  var proxyMiddleware = require('http-proxy-middleware');

module.exports = {
    server: {
        middleware: {
            1: proxyMiddleware('/crudcrud-api', {
                target: 'https://crudcrud.com',
                changeOrigin: true,
                pathRewrite: {
                '^/news-at-api': '/api'
                }
            })
        }
    }
};