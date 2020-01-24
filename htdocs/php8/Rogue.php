<?php
require_once 'Unit.php';

class Rogue extends Unit{
    public function __construct($ap, $hp){
        parrent::__construct($ap, $hp);
    }

    public function attack(Unit $who){
        if(property_exists($who,'armor')){
            $who->hp-=$this->ap - $who->armor;
        }
        else{
            $who->hp -= $this->ap;
        }
    }
}