import {Interceptor} from '@loopback/core';
import {RestBindings} from '@loopback/rest';
import {ApplicationConfig, MedistreamLoopbackApplication} from './application';

export * from './application';

const SimpleHeaderAuthInterceptor: Interceptor = async (ctx, next) => {
  const reqCtx : any = await ctx.get(RestBindings.Http.REQUEST);
  console.log(reqCtx.headers)
  if(!reqCtx.headers['authorization']) {
    return;
  } else {
    if (reqCtx.headers['authorization'] !== '9e9d41f893e621c23fe5e58acdea310ed8e055c16ea5a6ff806908ac7ae834ba') {
      return;
    } else {
      const result = await next();
      return result
    }
  }
};

export async function main(options: ApplicationConfig = {}) {
  const app = new MedistreamLoopbackApplication(options);

  // app.interceptor(SimpleHeaderAuthInterceptor, {
    // global: true
  // });

  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
