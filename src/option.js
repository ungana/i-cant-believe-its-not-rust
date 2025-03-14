export default class JSOption {
  #value;

  constructor(option) {
    this.#value = option ?? null;
  }

  match(hasSome, hasNone) {
    if (this.#value !== null) return hasSome(this.#value);
    if (this.#value === null) return hasNone();
  }

  static get None() {
    return new this();
  }

  static Some(value) {
    return new this(value);
  }
}
