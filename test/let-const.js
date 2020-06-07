var assert = require('assert');

describe('let and const test', () => {
  it('loop: let controls the loop variables', () => {
    var arr = [];

    for (let i = 0; i < 5; i++) {
      arr[i] = function() {
        return i;
      };
    }

    assert.ok(arr[4]() === 4);
  });

  it('loop: var doesn\'t controls the loop variables', () => {
    var arr = [];

    for (var i = 0; i < 5; i++) {
      arr[i] = function() {
        return i;
      };
    }

    assert.ok(arr[0]() === 5);
  });

  it('block context: let variables: 1st, block context; 2nd, upper code context', () => {
    let foo = 1;

    assert.throws(() => {
      foo = 2;
      let foo = 3;
    });
  });

  it('typeof: it would throw error if declare variables before let', () => {
    assert.throws(() => {
      typeof foo;
      let foo = 1;
    });
  });

  it('typeof: it would not throw error if no declarations about a variable', () => {
    assert.doesNotThrow(() => {
      typeof foo;
    });
  });

  it('repeated variables: let would not allow that happen', () => {
    // assert.throws(() => {
      // let x = 1;
      // let x = 2;
    // });
    // it would throw error
  });
});
