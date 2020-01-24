<?php

class Unit{
    private $name = 'Unit';
    private $ap;
    private $hp;
    public function __construct(int $ap, int $hp){

        $this->ap = $ap;
        $this->hp = $hp;
    }
    public function attack(Unit $who){
        $who ->hp -=$this->ap;
    }
    public function getHp():int{
        return $this->hp;
    }
    public function setAp($ap){
        if($ap <= 0){
            throw InvalidArgumentException('Hевозможно создать без');
        }
        this->ap = $ap;
    }
}