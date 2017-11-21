import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: { refreshModel: true }
  },

  model({ search }) {
    return this.store.query('good', { filter: { search } });
  }
});
