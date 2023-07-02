const hour = {
    hits: 0,
    strengthLoss: 0,
    orgLoss: 0,

    firePhase(shots, defensePoints){
        let hits = 0;
        let defense = defensePoints;
        for (i=0; i<shots; i++){
            if (defense > 0){
                defense--;
                //hits roll replaced with average during testing
                hits += .3;
            }
        else hits +=.52;
        };
        hits = Number(hits.toFixed());
        this.damagePhase(hits);
        return hits
    },
        softnessCheck(softness){
            let soft = true;
            //rng heresy detected
            //if (softness < (Math.floor(Math.random()*100)) < softness); soft = false;
            return soft
        },

    damagePhase(hits){
        this.strengthLoss = this.damageToStrength(hits);
        this.orgLoss = this.damageToOrg(hits);
    },

        damageToStrength(hits){
        //  damage roll replaced with average during testing
        let damage = 0;
        for (i=0; i<hits; i++){
            //damage = damage + ((Math.floor((Math.random()*2))+1)*1.5);
            damage += 2.25;
        };
            damage = Number(damage.toFixed(2));
            return damage
        },

        damageToOrg(hits){
        //damage roll replaced with average during testing
        let damage = 0;
        for (i=0; i<hits; i++) {
        //damage = damage + (Math.floor((Math.random()*3)+1)*.1);
            damage += 0.2;
        };
            damage = Number(damage.toFixed(3));
            return damage
        },

    cleanup(){
        this.strengthLoss = 0;
        this.orgLoss = 0;
    },

    };

   module.exports = hour;