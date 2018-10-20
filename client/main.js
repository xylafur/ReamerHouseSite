'use strict'

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './main.html';
import './roaches/roach.js'

import { TotRoaches } from '/db/collections.js';

Meteor.startup(() => {
  Router.route('/', function() {
    if(this.ready()){
      this.render("homePage");
    }
    
  }),

  Router.route('/roaches', {
    waitOn: function() {
      return Meteor.subscribe('num_roaches');
    },
    action: function() {
      if(this.ready()){
        this.render("Roaches");
      }
    }
  }),

  Router.route('tickets', {
    waitOn: function() {
      return 
    },
    action: function() {
      this.render("homePage");
    }
  })
})


