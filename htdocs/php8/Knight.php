<?php
require_once 'Unit.php';
require_once 'AddHp.php';
require_once 'AddAp.php';
// extends - наследование
// Knight - дочерний класс
// Unit - родительский (базовый) класс
class Knight extends Unit implements AddHp, AddAp
{
    private $armor = 3; // значение по-умолчанию
    public function
    __construct(int $ap, int $hp)
    {
//      parent:: имя_метода() - вызов метода родителя
       // вызов конструктора родителя
    }

    public function attack(Unit $who)
    {
        parent::attack($who); // вызов метода ролителя
        if ($this->isAlive() && $who->isAlive()){
            $who->hp -= 1;
        }
    }
    function addAp(){
        $this->ap+=2;
    }
    function addHp(){
        $this->hp +=1;
    }


}