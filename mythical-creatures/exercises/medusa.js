var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []
    };

    gazeAtVictim(victim) {
        if (this.statues.length < 3) {
            var newStatue = new Statue(victim.name);
            this.statues.push(newStatue);
        } else if (this.statues.length === 3) {
            var newStatue = new Statue(victim.name);
            this.statues.push(newStatue);
            var freed = new Person(this.statues[0].name);
            freed.mood = "relieved";
            this.statues.shift(this.statues);
            return freed;    
        };
    };
};





module.exports = Medusa;