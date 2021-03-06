app.factory("collections", function () {

  /**
  * All avialable query types.
  */
  var queryType = {
    daily: "Daily",
    monthly: "Monthly",
    yearly: "Yearly"
  };

  /**
  * Class SubType.
  * @member {String} click.
  * @member {String} interval.
  */
  function SubTab(){
    this.click = "3080634";
    this.interval = "9403803"
  }

  /**
  * Class QueryInfo, represent all query condition.
  * @member {String} queryType.
  * @member {Number} dailyMonth.
  * @member {Number} dailyYear.
  * @member {Number} monthlyFrom.
  * @member {Number} monthlyTo.
  * @member {Number} yearlyFrom.
  * @member {Number} yearlyTo.
  * @member {Number} timeFrom.
  * @member {Number} timeTo.
  * @member {String} categoryA => category id.
  * @member {String} categoryB => category id.
  * @member {String} categoryC => category id.
  * @member {String} product => product id.
  * @member {String} branch => branch id.
  * @member {Boolean} groupByTime.
  */
  function QueryInfo() {
    this.queryType = queryType.daily;

    // Daily
    this.dailyMonth = 0;
    this.dailyYear = 0;

    // Monthly
    this.monthlyFrom = 0;
    this.monthlyTo = 0;

    // Yearly
    this.yearlyFrom = 0;
    this.yearlyTo = 0;

    // All type
    this.timeFrom = 0;
    this.timeTo = 0;

    this.categoryA = "";
    this.categoryB = "";
    this.categoryC = "";
    this.product = "";
    this.branch = "";

    // Group by time 10.00 - 11.00, 10.00 - 12.00
    this.groupByTime = false;

    // Prevent extend property.
    Object.preventExtensions(this);
  };

  /**
  * Function parse().
  * Convert all member from String to Number.
  */
  QueryInfo.prototype.parse = function () {

    this.dailyMonth = parseInt(this.dailyMonth);
    this.dailyYear = parseInt(this.dailyYear);
    this.monthlyFrom = parseInt(this.monthlyFrom);
    this.monthlyTo = parseInt(this.monthlyTo);
    this.yearlyFrom = parseInt(this.yearlyFrom);
    this.yearlyTo = parseInt(this.yearlyTo);
    this.timeFrom = parseInt(this.timeFrom);
    this.timeTo = parseInt(this.timeTo);

    var idLength = 24;

    if (this.categoryA.length != idLength) this.categoryA = "";
    if (this.categoryB.length != idLength) this.categoryB = "";
    if (this.categoryC.length != idLength) this.categoryC = "";
    if (this.product.length != idLength) this.product = "";
    if (this.branch.length != idLength) this.branch = "";
  };

  /**
  * Class Property.
  * @param {Object} key.
  * @param {Object} value.
  */
  function Property(key, value) {
    this.key = key;
    this.value = value;
  }

  /**
  * List of months and years.
  */
  var monthList = [];
  var yearList = [];

  /**
  * Append data into months.
  */
  for (var i = 0; i < 12; i++) {
    var text = moment(new Date(2012, i, 10)).format("MMMM");
    var month = new Property(i, text);
    monthList.push(month);
  }

  /**
  * Append data into years.
  */
  for (var i = 2014; i < 2020; i++) {
    var year = new Property(i, i.toString());
    yearList.push(year);
  }

  /**
  * Function getTimeList().
  * Return list of time series from 00 - 24.
  * @param {Boolean} plusInterval {Append (-) or not}
  * @return {Array}
  */
  function getTimeList(plusInterval) {
    var timeList = [];

    function genText(value) {
      if (value == "25") value = "1";

      var text = ("00" + value + ".00").substring(value.length);
      return text;
    }

    for (var i = 1; i <= 24; i++) {
      var value = (i ).toString();
      var text = genText(value);
      if (plusInterval) {
        text = text + " - " + genText((i + 1).toString());
      }$
      var time = new Property(i, text);
      timeList.push(time);
    }
    return timeList
  }

  /**
  * Publish all data here.
  */
  return {
    Property: Property,
    yearList: yearList,
    monthList: monthList,
    getTimeList: getTimeList,
    QueryInfo: QueryInfo,
    queryType: queryType,
    SubTab : SubTab
  }
});
