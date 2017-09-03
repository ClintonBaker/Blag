// Watch specified paths.
// On change, deactivate watcher.
// Run specified tasks.
// On done, restart watch.

import { observable, action, autorun, computed } from 'mobx';

type StatusString = 'IDLE' | 'WORKING' | 'OFF';

function shout(title: string, messages: any[]) {
  console.log(`\n\n\n[ Witness ][ ${title} ]:\n\n`);
  messages.map(message => { console.log(message) });
  console.log(`\n[ end ][ ${title} ]`);
}

class Witness {
  status: StatusString = 'OFF';

  getValueOf = (which: string) => {
    shout(`getValueOf(${which})`, [this[which]]);
  }
}
