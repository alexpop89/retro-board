import Ember from 'ember';
const {RSVP: {Promise}} = Ember;

export default function signIn() {
  return {
    anonymous(session) {
      return new Promise((resolve) => {
        session.open('firebase', {provider: 'anonymous'}).then(resolve).catch(resolve);
      });
    }
  }
}
