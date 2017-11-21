import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  shoppingCart: service(),

  actions: {
    addToCart(good) {
      this.get('shoppingCart').add(good);
    },

    deleteGood(good) {
      if (confirm('Are you sure?')) {
        good.destroyRecord();
        this.transitionToRoute('goods.index');
      }
    }
  }
});

