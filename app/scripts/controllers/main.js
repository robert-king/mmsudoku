'use strict';

/* global prompt */

angular.module('sudokuCliApp')
  .controller('MainCtrl', function ($scope, sudokuPuzzle/*, user*/) {
    //$scope.user = user;
    //$scope.size = 50;
    $scope.cell = function(i, j) {
      return sudokuPuzzle.getVal(i, j);
    };
    $scope.pickNumber = function(i, j) {
      var val = sudokuPuzzle.getVal(i, j);
      if (val.found || val.wrong) {
        return;
      }
      var guess = prompt('Enter your number');
      sudokuPuzzle.setVal(i, j, guess);
    };
  });
