'use strict';

angular.module('mmS.puzzle',[])
  .factory('sudokuSolver', function () {
    //http://www.puzzles.ca/sudoku_puzzles/sudoku_easy_197.html
    var q = '8....1.425.........9.823.....1.3.7.......8..5....59...1.6..48.......5.6738..7.2..';
    //http://www.puzzles.ca/sudoku_puzzles/sudoku_easy_197_solution.html
    var s = '837561942512947638694823571451632789963718425728459316176294853249385167385176294';

    var solver = {
      getVal: function(i, j) {
        var idx = 9 * i + j;
        return {found: q[idx] !== '.', val: s[idx]};
      }
    };
    return solver;
  });