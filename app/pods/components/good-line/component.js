import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  shoppingCart: service(),
  router: service(),

  checked: computed('selectedIds', {
    get() {
      return this.get('selectedIds').includes(this.get('good.id'));
    },
    set(_, value) {
      if (value) {
        this.get('selectedIds').pushObject(this.get('good.id'));
      } else {
        this.get('selectedIds').removeObject(this.get('good.id'));
      }
      return value;
    }
  }),

  actions: {
    addToCart(good) {
      this.get('shoppingCart').add(good);
    },

    deleteGood(good) {
      if (confirm('Are you sure?')) {
        good.destroyRecord();
        this.get('router').transitionTo('goods.index');
      }
    }
  }
});
