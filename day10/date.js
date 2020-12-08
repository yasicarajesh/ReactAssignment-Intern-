Date.prototype.addDays = function (day) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + day);
  return date;
};

function beGetDatebetween(start_date, end_date) {
  let dateArr = [];
  let currDate = start_date;
  while (currDate <= end_date) {
    dateArr.push(new Date(currDate));
    currDate = currDate.addDays(1);
  }
  return dateArr;
}

beGetDatebetween(new Date(), new Date().addDays(2)).forEach(function (date) {
  console.log(date);
});