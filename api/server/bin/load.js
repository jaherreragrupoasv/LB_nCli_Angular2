'use strict';

// to enable these logs set `DEBUG=boot:03-load-content` or `DEBUG=boot:*`
// var log = require('debug')('boot:load');

var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.mysql;

var Clientes = app.models.Clientes;

var i = 1;

for(var i = 0; 100; i++) {

  Clientes.create(
    {
      codigo:i,
      nombre:"cliente " + i,
      fechaNac: new Date()
    }
    , function (err) {

    }
    );
}


// module.exports = function (app) {
//
//   log('Creating clientes');
//
//   var Category = app.models.Category;
//   var Product = app.models.Product;
//
//   Category.findOrCreate(
//     {where: {name: 'Beer'}}, // find
//     {name: 'Beer'}, // create
//     function (err, category, created) {
//       if (err) {
//         console.error('err', err);
//       }
//       (created) ? log('created Category', category.name)
//         : log('found Category', category.name);
//       Product.findOrCreate(
//         {where: {name: 'Draft beer'}}, // find
//         {
//           name: 'Draft beer',
//           price: '250',
//           categoryId: category.id
//         }, // create
//         function (err, data, created) {
//           if (err) {
//             console.error('err', err);
//           }
//           (created) ? log('created Product', data.name)
//             : log('found Product', data.name);
//         });
//       Product.findOrCreate(
//         {where: {name: 'Bottled beer'}}, // find
//         {
//           name: 'Bottled beer',
//           price: '350',
//           categoryId: category.id
//         }, //create
//         function (err, data, created) {
//           if (err) {
//             console.error('err', err);
//           }
//           (created) ? log('created Product', data.name)
//             : log('found Product', data.name);
//         });
//     });
//
//   Category.findOrCreate({where: {name: 'Wine'}}, {
//     name: 'Wine'
//   }, function (err, category, created) {
//     if (err) {
//       console.error('err', err);
//     }
//     (created) ? log('created Category', category.name)
//       : log('found Category', category.name);
//     Product.findOrCreate({where: {name: 'Red wine'}}, {
//       name: 'Red wine',
//       price: '350',
//       categoryId: category.id
//     }, function (err, data, created) {
//       if (err) {
//         console.error('err', err);
//       }
//       (created) ? log('created Product', data.name)
//         : log('found Product', data.name);
//     });
//     Product.findOrCreate({where: {name: 'White wine'}}, {
//       name: 'White wine',
//       price: '350',
//       categoryId: category.id
//     }, function (err, data, created) {
//       if (err) {
//         console.error('err', err);
//       }
//       (created) ? log('created Product', data.name)
//         : log('found Product', data.name);
//     });
//   });
//
// };
