'use strict';

/* global Firebase */

angular.module('sudokuCliApp')
  .factory('ref',['$firebase', '$firebaseAuth', function ($firebase, $firebaseAuth) {
    var ref = new Firebase('https://mmsudoku.firebaseio.com/');

    var wrapper = {
      auth: $firebaseAuth(ref),
      userinfo: function(uid) {
        return $firebase(ref.child('userinfo').child(uid)).$asObject();
      },
      sudoku: function() {
        return $firebase(ref.child('sudoku')).$asObject();
      }
    };

    return wrapper;
  }]);
