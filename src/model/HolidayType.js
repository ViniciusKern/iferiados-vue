class HolidayType {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const All = new HolidayType(0, "Todos");
const Country = new HolidayType(1, "Nacionais");
const State = new HolidayType(2, "Estaduais");
const City = new HolidayType(3, "Municipais");

const Types = {
  All,
  Country,
  State,
  City
};

export default Types;
