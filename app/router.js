import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('goods', function() {
    this.route('new');
    this.route('edit', { path: '/:good_id' });
  });
  this.route('shopping-cart');
});

export default Router;
