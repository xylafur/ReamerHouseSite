'use strict'

import { Meteor } from 'meteor/meteor'

const TotRoaches = new Mongo.Collection('num_roaches');
const Visitors = new Mongo.Collection('visitor_list');

export {
    TotRoaches,
    Visitors
}
