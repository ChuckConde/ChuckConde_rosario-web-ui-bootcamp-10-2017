import { EventEmitter } from 'eventEmitter.js';

class Movie extends EventEmitter {
    constructor(title,year,duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this._cast = [];
    }
    play(){
        this.emit('play');
    };
    pause(){
        this.emit('pause');
    };
    resume(){
        this.emit('resume');
    };
    addCast(cast) {
        if (cast instanceof Actor) {
            this._cast.push(cast);
        }
        else if (Array.map(cast)) {
            for (let i = 0; i < cast.length; i++) {
                if (cast[i] instanceof Actor) {
                    this._cast.push(cast[i]);
                }
                else {
                    console.log(`What are you trying to do? Of course is an Error, ${cast[i]} isn't an Actor`);
                }
            }
        }
        else {
            console.log(`Nope, ${cast} certanly isn't an actor`);
        }
    }
}


