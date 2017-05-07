import Ember from 'ember';
const {RSVP: {Promise}} = Ember;

export default function signIn() {
  return {
    anonymous(session) {
      new Promise((resolve, reject) => {
        session.open('firebase', {provider: 'anonymous'}).then(resolve).catch(reject);
      });
    }
  }
}
