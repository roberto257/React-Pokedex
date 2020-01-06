class Pokemon {
    constructor(data) {
        console.log(data.abilities);
        for (var i = 0; i < data.abilities.length; i++) {
            if (data.abilities[i].is_hidden === false) {
                this.ability = data.abilities[i].ability.name;
                break;
            }
        }
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.shinysprite = data.sprites.front_shiny;
        this.type1 = data.types[0].type.name;
        if (data.types[1]) {
            this.type2 = data.types[1].type.name;
        } else {
            this.type2 = false;
        }
    }
}

export default Pokemon;
