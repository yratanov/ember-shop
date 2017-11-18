import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  shoppingCart: service(),

  actions: {
    removeGood(good) {
      this.get('shoppingCart').remove(good);
    }
  }
});

