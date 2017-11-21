import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  shoppingCart: service(),

  actions: {
    addToCart(good) {
      this.get('shoppingCart').add(good);
    },

    deleteGood(good_id) {
      return this.store.findRecord('good', good_id).then(function (good) {
        if (confirm('Are you sure?')) {
          good.destroyRecord();
        }
      }).catch(function () {
        console.log('Good not found');
      }).finally(function () {
        this.transitionToRoute('goods.index');
      })
    }
  }
});

