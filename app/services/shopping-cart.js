import Service from '@ember/service';

export default Service.extend({
  goods: [],

  add(good) {
    this.get('goods').addObject(good);
  },

  remove(good) {
    this.get('goods').removeObject(good);
  }
});
