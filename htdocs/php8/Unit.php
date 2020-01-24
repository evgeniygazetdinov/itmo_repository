<?php

// имя (default = Юнит)
// количество атаки
// количество здоровья
// метод атаки другого юнита
abstract class Unit
{

    // защищенный тип доступа
    // protected свойства и методы доступны
    // внутри класса и его потомков
    protected $ap;
    protected $hp;
    //свойства со значениями по-умолчанию
    protected $name = 'Unit';
    protected $isAlive = true;

    public function __construct(int $ap, int $hp) {
        $this->setHp($hp);
        $this->setAp($ap);
    }
    public function getHp():int {
        return $this->hp;
    }
    public function getAp():int {
        return $this->ap;
    }

    protected function setHp($hp) {
        if($hp <= 0) {
            throw new InvalidArgumentException
            ("Невозможно создать нежить");
        }
        $this->hp = $hp;
    }
    protected function setAp($ap) {
        if($ap < 0) {
            throw new InvalidArgumentException
            ("Невозможно создать 
            беспомощного персонажа");
        }
        $this->ap = $ap;
    }

    public function isAlive():bool
    {
        return $this->hp > 0;
    }

    public function attack(Unit $who);
    //{
    //    $who->hp -= $this->ap;
    //}
    public static function getUnit(string $name){
        if($name =='knight'){
            return new Knight(12,23);
        }
        elseif($name == 'healer'){
            return new Healer(10, 20)
        }
    }
    $unit = ucfirst($name);
    $file_name = $unit . '.php';//Knight.php
    if(!file_exists($file_name)){
        throw new LogicException('файла не существует');
    }
    require_once $file_name;
    if(!class_exists($unit)){
        throw new LogicException('класса не существует');
    }
    return new $unit(rand(0, 20), rand(0, 30);)
}