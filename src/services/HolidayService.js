import Holiday from "../model/Holiday";
import Types from "../model/HolidayType";

export default class HolidayService {
  constructor(resource) {
    this._resource = resource("holidays/{?state}");
  }

  holidays(state, cityId) {
    return this._resource.get({ state }).then(
      res =>
        res.json().then(json => {
          let holidays = [];

          json.country.forEach(data =>
            holidays.push(this._fetchHoliday(Types.Country.id, data))
          );

          if (json.state) {
            json.state.forEach(data =>
              holidays.push(this._fetchHoliday(Types.State.id, data))
            );
          }

          if (json.cities) {
            let cityHolidays = json.cities[cityId];

            if (cityHolidays) {
              cityHolidays.forEach(data =>
                holidays.push(this._fetchHoliday(Types.City.id, data))
              );
            }
          }

          holidays.sort((a, b) => a.date - b.date);

          return holidays;
        }),
      err => {
        console.log(err);
        throw new Error("Erro ao carregar a lista de Feriados");
      }
    );
  }

  _fetchHoliday(typeId, data) {
    return new Holiday(
      data.name,
      typeId,
      data.type,
      data.date,
      data.mobileDates,
      data.info
    );
  }
}
