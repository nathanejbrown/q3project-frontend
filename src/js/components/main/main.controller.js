(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
    /*jshint validthis: true */
    this.guitars = {};

    this.getGuitars = () => {
      $http.get('http://localhost:4567/guitars')
      .then(data => {
        this.guitars = data.data;
        console.log(this.guitars);
      })
      .catch(err => {
        console.log(err);
      });
    };
  }

})();
