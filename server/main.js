import { Meteor } from 'meteor/meteor';

import { TotRoaches, Visitors } from '/db/collections.js';

Meteor.startup(() => {
  Meteor.publish('num_roaches', function() {
    return TotRoaches.find({});
  })
  Meteor.publish('visitor_list', function() {
    return Visitors.find({});
  })
});
