CREATE TABLE IF NOT EXISTS `cart_good`( `idGood` INT NOT NULL, `idCart` INT NOT NULL, `count` INT NOT NULL, CONSTRAINT good_fk -- название связи FOREIGN KEY (`idGood`) -- внешний ключ в текущей таблице REFERENCES good(`idGood`) -- первичный ключ в связанной таблице ON DELETE CASCADE, CONSTRAINT cart_fk FOREIGN KEY (`idCart`) REFERENCES cart(`idCart`) ON DELETE CASCADE )ENGINE=InnoDB DEFAULT CHARSET='utf8mb4'
INSERT INTO `cart_good` (`idGood`,`idCart`, `count`) VALUES (1,1,2), (1,2,2), (2,1,2), (2,3,3), (3,1,2), (3,2,3), (3,3,3), (4,1,1), (5,1,1), (5,3,1)


-- получить минимальную стоимость

select min(`price`)  as min_price
from `good`;


-- максимальное количество купленного товара

select max(`count`) as min_price
from `cart_good`;



select sum(cg.count * g.price) as ref
from cart_good cg, good g
where cg.idGood = g.idGood
and idCart = 3;



--id корзины и сумма заказа



select cg.idCart,
sum(cg.count * g.price) as  res 
from cart_good cg, good g
where cg.idGood = g.idGood
GROUP by cg.idCart
HAVING sum(cg.count * g.price) > 4000;




--вложение select
--avg средняя по столбу
 select avg(price) from good;


select `name`,`price` from good 
where price =
(select min(price) from good);



select `name` from good
where idGood NOT in 
(select idGood from cart_good
 where idCart = 3);-- шапка пальто


select `name` from good 
where idGood = ANY
(select idGood from cart_good
where `count` > 2); --кеды 
                    -- лыжи


create table if not exists java(
    id int not null Primary KEY
    auto_increment,
    first_name VARCHAR(60) not NULL,
    last_name VARCHAR(60) not NULL,
    sum int NOT NULL
) ENGINE = InnoDB
DEFAULT CHARSET = 'utfmb4';

create table if not exists python(
    id int not null Primary KEY
    auto_increment,
    first_name VARCHAR(60) not NULL,
    last_name VARCHAR(60) not NULL,
    sum int NOT NULL
) ENGINE = InnoDB
DEFAULT CHARSET = 'utfmb4';

insert into  java
(first_name, last_name, sum)
VALUES
('григорий', 'иванов', 12000),
('Андрей', 'петрова', 5000),
('федор', 'измайлов', 900)
;


select first_name, last_name, sum
from java
union
select first_name, last_name, sum
from python
order by last_name ASC; 


select first_name, last_name,
5000 * 0.2 as sale
from java where sum > 10000
union
select first_name, last_name,
5000 * 0.2 as sale
from java where sum <= 10000



CREATE TABLE IF NOT EXISTS course(
	id INT NOT NULL AUTO_INCREMENT 
    PRIMARY KEY,
    title VARCHAR(70) NOT NULL,
    duration TINYINT UNSIGNED NOT NULL,
    pic VARCHAR(250) DEFAULT 'course.png',
    date_start DATE NOT NULL
);

insert into course(title,duration,date_start)
VALUES
('web developer', 4, '2020-02-26'),
('java', 3, '2020-03-03');

create view course_view as
select title,
duration * 2 as duration
from course;



