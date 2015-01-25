'use strict';

/* global prompt */

angular.module('sudokuCliApp')
  .controller('MainCtrl', function ($scope, sudokuPuzzle, user) {
    $scope.user = user;
    $scope.size = 50;
    $scope.getVal = sudokuPuzzle.getVal;
    $scope.range9 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $scope.pickNumber = function(i, j) {
      var val = sudokuPuzzle.getVal(i, j);
      if (val.found || val.wrong) {
        return;
      }
      var guess = prompt('Enter your number');
      sudokuPuzzle.setVal(i, j, guess);
    };
  });
