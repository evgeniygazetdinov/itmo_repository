<?php 
require_once 'Unit.php';
class Knight extends Unit{
    public function __construct(int $ap, int $hp, int $armor){
        parent::__construct($ap, $hp);
        $this->armor = $armor;

    }
}