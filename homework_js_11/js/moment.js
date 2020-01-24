let someDate = moment('2019-01-05');
let currentDate = moment(); // текущая дата
let someDateTime = moment('2019-03-05 16:40');
console.log(someDate.format("YYYY MMMM dddd"));
console.log(currentDate.format("YY MM dd"));
console.log(someDateTime.format("YYYY MMM d"));

someDate.add(1, 'day'); // увеличение на 1 день
someDate.add(2, 'hours'); // увеличение на 2 часа
someDate.add(3, 'year'); // увеличение на 3 года

console.log(someDate.format("LLL"));
console.log(someDate.format("LL"));

// parse from string
let strDate = "01/12/2019";
let parseDate = moment(strDate, "DD/MM/YYYY", true);

// временные зоны
let moscow = currentDate.tz("Europe/Moscow");
let london = moscow.clone().tz("Europe/London");
console.log(moscow.format("YYYY MMMM DD HH:mm"));
console.log(london.format("YYYY MMMM DD HH:mm"));

// самолет москва - нью-йорк
// время в полете 10 часов
// когда (дата и время) самолет
// прилетит в нью-йорк (по местному времени),
// если из Москвы он вылетает
// в 22:15 28 декабря 2019 года