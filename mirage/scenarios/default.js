export default function(server) {
  server.create('good', { name: 'Kettle', description: 'Boils your water!', price: 22.3 });
  server.create('good', { name: 'Apple', description: 'Fresh!', price: 11.3 });
  server.create('good', { name: 'Juice', description: 'Orange', price: 2.3 });
  server.create('good', { name: 'Cucumber', description: 'Tasty', price: 2.6 });
}
