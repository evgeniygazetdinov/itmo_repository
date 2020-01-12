


function calculate_time_arrive(){
   let place = moment.tz("Europe/Moscow"); 
   let currentDate = moment.tz('2019-12-28 22:15',"Europe/Moscow");
   let ny = currentDate.clone().tz("America/New_York");
   console.log(currentDate.format("YYYY MMMM DD HH:mm"));
   console.log(ny.format("YYYY MMMM DD HH:mm"));
   let time_arrive = ny.add(11,'hours');
   console.log(time_arrive['_d']);

}
calculate_time_arrive();