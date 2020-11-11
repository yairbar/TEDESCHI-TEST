import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        contacts : [
            {id:1, name : 'John Smith', profileImg : 'john-smith.jpg' , jodTitle : 'Graphics designer', companyName : 'Twitter, Inc.', address : '795 Folsom Ave, Suite 600 San Francisco, CA 94107', phone : '(123) 456-7890', location: 'Riviera State 32/106'},
            {id:2, name : 'Alex Johnatan', profileImg : 'alex johnatan.jpg' , jodTitle : 'CEO', companyName : 'Twitter, Inc.', address : '795 Folsom Ave, Suite 600 San Francisco, CA 94107', phone : '(123) 456-7890', location: 'Riviera State 32/106'},
            {id:3, name : 'Monica Smith', profileImg : 'monica smith.jpg' , jodTitle : 'Marketing manager', companyName : 'Twitter, Inc.', address : '795 Folsom Ave, Suite 600 San Francisco, CA 94107', phone : '(123) 456-7890', location: 'Riviera State 32/106'},
            {id:4, name : 'Michael Zimber', profileImg : 'michael zimber.jpf' , jodTitle : 'Sales manager', companyName : 'Twitter, Inc.', address : '795 Folsom Ave, Suite 600 San Francisco, CA 94107', phone : '(123) 456-7890', location: 'Riviera State 32/106'},
            {id:5, name : 'Sandra Smith', profileImg : 'sandra smith.jpg' , jodTitle : 'Graphics designer', companyName : 'Twitter, Inc.', address : '795 Folsom Ave, Suite 600 San Francisco, CA 94107', phone : '(123) 456-7890', location: 'Riviera State 32/106'},
            {id:6, name : 'Janet Carton', profileImg : 'janeth carton.jpg' , jodTitle : 'Graphics designer', companyName : 'Twitter, Inc.', address : '795 Folsom Ave, Suite 600 San Francisco, CA 94107', phone : '(123) 456-7890', location: 'Riviera State 32/106'},
            {id:7, name : 'John Smith', profileImg : 'john-smith.jpg' , jodTitle : 'Graphics designer', companyName : 'Twitter, Inc.', address : '795 Folsom Ave, Suite 600 San Francisco, CA 94107', phone : '(123) 456-7890', location: 'Riviera State 32/106'},
            {id:8, name : 'Alex Johnatan', profileImg : 'alex johnatan.jpg' , jodTitle : 'CEO', companyName : 'Twitter, Inc.', address : '795 Folsom Ave, Suite 600 San Francisco, CA 94107', phone : '(123) 456-7890', location: 'Riviera State 32/106'},

        ]
    },

    getters : {
        contactsList : state => state.contacts
    },

    actions : {
        deleteContact : ({state} , payload, ) => {
            let contactIdx = state.contacts.findIndex( contact => contact.id === payload )
            state.contacts.splice(contactIdx, 1)
        }
    }
    
})

