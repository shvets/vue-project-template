import Router from 'vue-router';

import routes from './routes';

export class AppRouter extends Router {
  constructor(base: string) {
    super({
      mode: 'history',
      base,
      routes
    });
  }
}

export default AppRouter;
