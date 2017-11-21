import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  shoppingCart: service(),

  totalPrice: computed('shoppingCart.goods.[]', function() {
    return this.get('shoppingCart.goods').reduce((sum, good) => sum + good.get('price'), 0);
  }),

  actions: {
    removeGood(good) {
      this.get('shoppingCart').remove(good);
    }
  }
});

