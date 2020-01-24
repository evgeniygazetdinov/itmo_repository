create table if not exists course_backup(
    id int not null AUTO_INCREMENT
    PRIMARY key,
    id_course int unsigned not null,
    duration int unsigned not null
    );


--delimiter $$ смена разделителя что бы инструкции выполнялись 
-- create triger triger_name
-- before after время по отношению к событию
-- update /insert/delete название события
-- on table_name
-- for each row
-- begin
--  инструкции
-- что должно произойти если произойдут событие в таблице
--  cобытия разделяются точкой с запятой 
-- end$$
-- delimiter ;


delimiter $$
create trigger update_course
before update on course
for each row 
begin
insert into course_backup set
id_course = old.id,
duration = old.duration;
end$$
delimiter ;


update course
set duration = 10
where id = 1


use mysql_lessions;
select round(avg(sr),0)
from (selects sum(cg.count * g,price) as sr
from cart_good cg,good g
where cg.idGood = g.idGood
group by cg.idCart) a;





create table mountains( 
    id_mountain int not null
     AUTO_INCREMENT PRIMARY key, 
     length int not null,
      place varchar(50),
       name varchar(50) )


create table has_clumbing(
    id_tourist int,
    id_mountain int
)

create table jorney(
    id_journey int not null
     AUTO_INCREMENT PRIMARY key, 
    date_start DATE,
    date_end DATE,
    id_mountain int

)


create table tourist(
 id_tourist int not null
AUTO_INCREMENT PRIMARY key, 
 name varchar(100)
 address varchar(100)

)
create table country(
    id_country int,
    name varchar(80), 
    area varchar(100)

)
