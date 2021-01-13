export default class StateService {
  constructor(resource, cache) {
    this._resource = resource("states");
    this._cache = cache;
  }

  states() {
    if (this._cache.states) {
      console.log("cache");
      return new Promise(resolve => resolve(this._cache.states));
    }

    console.log("api");
    return this._resource.query().then(
      res => res.json().then(json => json.states),
      err => {
        console.log(err);
        throw new Error("Erro ao carregar a lista de Estados");
      }
    );
  }
}
