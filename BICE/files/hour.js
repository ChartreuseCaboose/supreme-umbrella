const hour = {
    strengthLoss: 0,
    orgLoss: 0,
    
    damageToStrength(hits){
    //  damage roll replaced with average during testing
    for (i=0; i<hits; i++){
        this.strengthLoss += 2.25;
    };
        this.strengthLoss = Number(this.strengthLoss.toFixed(2));
        return this.strengthLoss
    },

    damageToOrg(hits){
     //damage roll replaced with average during testing
    for (i=0; i<hits; i++) {
        this.orgLoss += 0.2;
    };
        this.orgLoss = Number(this.orgLoss.toFixed(2));
        return this.orgLoss
    },

    cleanup(){
        this.strengthLoss = 0;
        this.orgLoss = 0;
    },

    };

   module.exports = hour;