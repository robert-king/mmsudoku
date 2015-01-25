'use strict';

angular.module('sudokuCliApp')
  .factory('sudokuPuzzle', ['$timeout', 'sudokuSolver', 'ref', 'user', function ($timeout, sudokuSolver, ref, user) {

    var sudoku = ref.sudoku();

    var board = [];
    var populateBoard = function() {
      board = [];
      for (var i = 0; i < 9; i++) {
        var row = [];
        for (var j = 0; j < 9; j++) {
          row.push(sudokuSolver.getVal(i, j));
        }
        board.push(row);
      }
    };

    var isFinished = function() {
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          if (!board[i][j].found) {
            return false;
          }
        }
      }
      return true;
    };

    var prepareReset = function() {
      console.log('preparing to reset in 10 sec..');
      $timeout(function() {
        console.log('resetting..');
        for (var i = 0; i < 9; i++) {
          sudoku[i] = sudoku[i] || {};
          for (var j = 0; j < 9; j++) {
            sudoku[i][j] = sudokuSolver.getVal(i, j).found;
          }
        }
        sudoku.$save();
        populateBoard();
      }, 10*1000)
    };

    var sp = {
      getVal: function(i, j) {
        return board[i][j];
      },
      setVal: function(i, j, v) {
        var val = sp.getVal(i, j);
        if (val.found) {
          return;
        }
        if (val.val === v) {
          val.found = true;
          sudoku[i] = sudoku[i] || {};
          sudoku[i][j] = true;
          sudoku.$save();
          console.log(user);
          user.increaseScore();

          if (isFinished()) {
            prepareReset();
          }
        } else {
          val.wrong = true;
        }
      }
    };

    var init = function() {
      populateBoard();
      sudoku.$watch(function() {
        console.log('here');
        for (var i = 0; i < 9; i++) {
          for (var j = 0; j < 9; j++) {
            if (sudoku[i] && sudoku[i][j]) {
              board[i][j].found = true;
            } else {
              board[i][j].found = sudokuSolver.getVal(i, j).found;
            }
          }
        }
        if (isFinished()) {
            prepareReset();
          }
      });
      if (isFinished()) {
        prepareReset();
      }
    };
    init();
    return sp;
  }]);
