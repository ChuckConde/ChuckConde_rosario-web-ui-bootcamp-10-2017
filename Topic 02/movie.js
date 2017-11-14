class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    };
    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(eventName);
            });
        } else {
            console.log(`The event ${eventName} doesn't exist`);
        }
    };
    off(eventName, callback) {
        let callbacks = this.events[eventName];
        let index = callbacks.indexOf(callback);
        callbacks.splice(index, 1);
    };
}

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
        else if (Array.isArray(cast)) {
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
class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Logger{
    constructor(){};
    log(info){
        console.log(`The ${info} event has been emitted.`);
    }
}
let social = {
    share: function (friendName) {
        console.log(`${friendName} shared ${this.title}`);
    },
    like: function (friendName) {
        console.log(`${friendName} liked ${this.title}`);
    },
}

const fightClub = new Movie("Fight Club", 2001 , "2 hours and 31 minutes");
const akira = new Movie("Akira", "1988", "2 hours and 5 minutes");
const deadPool = new Movie("Deadpool", "2016", "1 hour and 48 Minutes")
let logg = new Logger();
akira.on("play", logg.log);
akira.play();
let extend = Object.assign(deadPool, social);
extend.like('Francis doesnt ');
let extended = Object.assign(fightClub, social);
extended.share('Jacks liver ');
