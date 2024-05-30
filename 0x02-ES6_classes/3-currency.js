export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  set code(cod) {
    if (typeof cod !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = cod;
  }

  get name() {
    return this._name;
  }

  set name(nam) {
    if (typeof nam !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nam;
  }
}
