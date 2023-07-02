const hour = require('./BICE/files/hour.js');
describe ('damage methods', function(){
    test ('Inflicts strength damage per hit.', function(){
        expect(hour.damageToStrength(10)).toBe(22.5);
    });
    test ('Inflicts organization damage per hit.', function(){
        expect(hour.damageToOrg(10)).toBeCloseTo(2);
    });
//Restructure means this no longer tests cleanup, test again later
    /*    test ('cleanup function', function(){
        hour.damagePhase(10),
        hour.cleanup(),
        hour.damagePhase(5)
        expect(hour.orgLoss).toBe(1);
    });
*/
});

describe ('damagePhase', function(){
    test('damagePhase correctly calls damageToStrength and DamageToOrg', function(){
        hour.damagePhase(10),
        expect(hour.strengthLoss).toBe(22.5);
        expect(hour.orgLoss).toBeCloseTo(2);
    });
});

describe ('firePhase', function(){
    test('no defense points', function(){
        hour.firePhase(100, 0),
        expect(hour.firePhase(100)).toBe(52);
    });
    test('shots exceed defense points', function(){
        expect(hour.firePhase(200, 100)).toBeCloseTo(82);
    });
    test('defense points exceed shots', function(){
        expect(hour.firePhase(100, 200)).toBeCloseTo(30);
    });
    test('firePhase and damagePhase work together', function(){
        hour.firePhase(100, 0),
        expect(hour.strengthLoss).toBe(52*2.25);
    });
});