export default class Holiday {
  constructor(name, typeId, type, date, mobileDates, info) {
    this.name = name;
    this.typeId = typeId;
    this.type = type;
    this.info = info;

    if (mobileDates) {
      this._initMobileDate(mobileDates);
    } else {
      this._initDate(date);
    }
  }

  countdown() {
    let today = new Date();

    if (
      today.getDate() == this.date.getDate() &&
      today.getMonth() == this.date.getMonth() &&
      today.getFullYear() == this.date.getFullYear()
    ) {
      return "É hoje!";
    }

    var diff = Math.ceil((this.date - today) / 86400000);

    if (diff == 1) {
      return "Falta 1 dia!";
    } else {
      return "Faltam " + diff + " dias!";
    }
  }

  fullDate() {
    return this._formatDate({
      year: "numeric",
      month: "long",
      day: "2-digit",
      weekday: "long"
    });
  }

  dayOfMonth() {
    return this._formatDate({
      day: "2-digit"
    });
  }

  month() {
    return this._formatDate({
      month: "long"
    });
  }

  id() {
    return this.name + "-" + this.type;
  }

  _formatDate(options) {
    return this.date.toLocaleDateString("pt-BR", options);
  }

  _initDate(date) {
    let today = new Date();

    let currentYear = today.getFullYear();
    let month = parseInt(date.substring(0, 2)) - 1;
    let day = parseInt(date.substring(3));

    this.date = new Date(currentYear, month, day);

    if (this.date < today) {
      this.date = new Date(currentYear + 1, month, day);
    }
  }

  _initMobileDate(dates) {
    let currentYear = new Date().getFullYear();
    this._initDate(dates[currentYear]);
  }
}
