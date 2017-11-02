import { EventEmitter } from 'eventEmitter.js';
import { Movie } from 'movie.js';
import { Actor } from 'actor.js';
import { Logger } from 'logger.js';

let social = {
    share: function (friendName) {
        console.log(`${friendName} shared ${this.title}`);
    },
    like: function (friendName) {
        console.log(`${friendName} liked ${this.title}`);
    },
}

const fightClub = new Movie("Fight Club", 2001, "2 hours and 31 minutes");
const akira = new Movie("Akira", "1988", "2 hours and 5 minutes");
const deadPool = new Movie("Deadpool", "2016", "1 hour and 48 Minutes")
let logg = new Logger();
akira.on("play", logg.log);
akira.play();
let extend = Object.assign(deadPool, social);
extend.like('Francis doesnt ');
let extended = Object.assign(fightClub, social);
extended.share('Jacks liver ');