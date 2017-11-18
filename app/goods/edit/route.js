import Route from '@ember/routing/route';

export default Route.extend({
  model({ good_id }) {
    return this.store.findRecord('good', good_id);
  },

  resetController(controller) {
    controller.get('model').rollbackAttributes();
  }
});
