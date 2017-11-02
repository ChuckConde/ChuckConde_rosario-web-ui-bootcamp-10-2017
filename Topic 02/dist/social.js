'use strict';

var _eventEmitter = require('eventEmitter.js');

var _movie = require('movie.js');

var _actor = require('actor.js');

var _logger = require('logger.js');

var social = {
    share: function share(friendName) {
        console.log(friendName + ' shared ' + this.title);
    },
    like: function like(friendName) {
        console.log(friendName + ' liked ' + this.title);
    }
};

var fightClub = new _movie.Movie("Fight Club", 2001, "2 hours and 31 minutes");
var akira = new _movie.Movie("Akira", "1988", "2 hours and 5 minutes");
var deadPool = new _movie.Movie("Deadpool", "2016", "1 hour and 48 Minutes");
var logg = new _logger.Logger();
akira.on("play", logg.log);
akira.play();
var extend = Object.assign(deadPool, social);
extend.like('Francis doesnt ');
var extended = Object.assign(fightClub, social);
extended.share('Jacks liver ');