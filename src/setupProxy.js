const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/getpipeline',
    createProxyMiddleware({
      target: 'http://asia.hevodata.com/api/public/v2.0/pipelines',
      changeOrigin: true,
      pathRewrite: {
        '^/getpipeline': '',
      },
      headers: {
        Connection: 'keep-alive',
        accept: 'application/json',
        Authorization: 'Basic SVBITk9LSUlNUjpaRFJQNTZGN3FaWmY3RGg0SThnbQ==',
      },
    })
  );
};
