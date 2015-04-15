'use strict';

describe('Service: mmS.puzzle', function () {
  var sudokuSolver

  // load the puzzle service's module
  beforeEach(module('mmS.puzzle'));

  // instantiate service
  beforeEach(inject(function (_sudokuSolver_) {
    sudokuSolver = _sudokuSolver_;
  }));

  it('it should retrieve founds cells', function(){
    expect(sudokuSolver.getVal(0, 0)).toEqual({ found: true, val: '8' });
  });

  it('it should retrieve empty cells', function(){
    expect(sudokuSolver.getVal(8, 8)).toEqual({ found: false, val: '4' });
  });
});
