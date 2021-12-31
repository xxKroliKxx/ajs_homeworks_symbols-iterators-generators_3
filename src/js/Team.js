export default class Team {
  constructor() {
    this.myTeam = [];
  }

  addPerson(person) {
    this.myTeam.push(person);
  }

  * [Symbol.iterator]() {
    for (const e of this.myTeam) {
      yield e;
    }
  }
}
