const hour = require('./BICE/files/hour.js');
describe ('damage methods', function() {
    test ('Inflicts strength damage per hit.', function() {
        expect(hour.damageToStrength(10)).toBe(22.5);
    });
    test ('Inflicts organization damage per hit.', function() {
        expect(hour.damageToOrg(10)).toBe(2);
    });
});

