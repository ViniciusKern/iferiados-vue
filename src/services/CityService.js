export default class CityService {
  constructor(resource, cache) {
    this._resource = resource("cities/{?state}");
    this._cache = cache;

    if (!this._cache.cities) {
      this._cache.cities = {};
    }
  }

  cities(state) {
    if (this._cache.cities[state]) {
      return new Promise(resolve => resolve(this._cache.cities[state]));
    }

    return this._resource.get({ state }).then(
      res => res.json().then(json => json.cities),
      err => {
        console.log(err);
        throw new Error("Erro ao carregar a lista de Cidades");
      }
    );
  }
}
