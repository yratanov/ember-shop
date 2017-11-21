import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['search', 'selectedIds'],

  search: '',
  selectedIds: [],

  actions: {
    deleteSelected() {
      this.get('selectedIds').forEach(id => {
        let good = this.store.peekRecord('good', id);
        good.destroyRecord();
      });
      this.set('selectedIds', []);
    }
  }
});
