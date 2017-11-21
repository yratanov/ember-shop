import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.get('model').save().then(() => {
        this.transitionToRoute('goods.index');
      });
    }
  }
});
