import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should transition to rentals route', function(assert){
    let route = this.subject({
        replaceWith(routerName) {
            assert.equal(routerName, 'rentals', 'replace with router name rentals');
        }
    });
});
