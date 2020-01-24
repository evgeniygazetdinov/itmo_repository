


function calculate_time_arrive(){
   let place = moment.tz("Europe/Moscow"); 
   let currentDate = moment.tz('2019-12-28 22:15',"Europe/Moscow");
   let ny = currentDate.clone().tz("America/New_York");
   console.log(currentDate.format("YYYY MMMM DD HH:mm"));
   console.log(ny.format("YYYY MMMM DD HH:mm"));
   let diff_beetween =currentDate.format("HH") - ny.format("HH");
   console.log(diff_beetween);
   let time_arrive = currentDate.add(10-diff_beetween,'hours');
   console.log(time_arrive);
}
calculate_time_arrive();