function main() {
    const fightNow = (state) => ({
        fight: () => {
            state.stamina--;
            console.log(`${state.name} slashes at the foe!`);
        }
    });

    const castSpell = (state) => ({
        cast: (spell) => {
            state.mana--;
            console.log(`${state.name} cast ${spell}`);
        }
    });

    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100,
        };

        return Object.assign(state, fightNow(state));
    };

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100,
        };

        return Object.assign(state, castSpell(state));
    };

    return { mage, fighter };
}

let create = main();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
