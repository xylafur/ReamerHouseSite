import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { TotRoaches, Visitors } from '/db/collections.js';

import './roach.html';

Session.set("num_roaches", 0);

Template.Roaches.onCreated(function roachesOnCreated(){});

Template.Roaches.onRendered(function roachesOnRendered() {
  let count = TotRoaches.findOne({name: 'count'});
  Session.set("num_roaches", count.tot_count);
});

Template.Roaches.helpers({
  get_num_roaches() {
    return Session.get("num_roaches");
  },
});

Template.roachLogEntryCreator.events({
  'click .increaseRoach': function() {
    let roomBox = document.getElementsByClassName("roomBox");
    let whoBox = document.getElementsByClassName("whoBox");
    let dateBox = document.getElementsByClassName("dateBox");
    if(!(roomBox['0'].value && whoBox['0'].value && dateBox['0'].value)){
      window.alert("You must enter the room found in along with found by whom and the date found");
      return
    }

    let entry = {
      'room': roomBox['0'].value,
      'who': whoBox['0'].value,
      'date': dateBox['0'].value
    }
    roomBox['0'].value = '';
    whoBox['0'].value = '';
    dateBox['0'].value = '';

    let cur_count = Session.get("num_roaches");
    Session.set("num_roaches", cur_count + 1);

    let count = TotRoaches.findOne({name: 'count'});
    count['tot_count'] += 1;
    TotRoaches.update(count['_id'], count);

    Visitors.insert(entry);
  },

  'click .decreaseRoach': function() {
    let cur_count = Session.get("num_roaches");
    window.alert("All of our visitors must be killed");
    if(cur_count <= 0){
      window.alert("You can't have seen negative roaches");
    } else {
      Session.set("num_roaches", cur_count - 1);
      let count = TotRoaches.findOne({name: 'count'});
      count['tot_count'] -= 1;
      TotRoaches.update(count['_id'], count);
    }
  }
});

Template.roachLogEntries.helpers({
  allVisitors() {
    return Visitors.find({})
  }
});
