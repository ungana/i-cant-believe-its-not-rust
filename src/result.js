export default class JSResult {
  #error;
  #value;

  constructor(result) {
    this.#error = (result instanceof Error) ? result : null;
    this.#value = !(result instanceof Error) ? result : null;
  }

  match(isOk, isErr) {
    if (this.#error === null) return isOk(this.#value);
    if (this.#error !== null) return isErr(this.#error);
  }

  static Err(error) {
    return new this(error);
  }

  static Ok(value) {
    return new this(value);
  }
}
