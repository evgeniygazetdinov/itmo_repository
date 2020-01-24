<?php
class Healer extends Unit{
public function __construct(int $ap, int $hp){

    parrent:: __construct($ap, $hp);
}
public function attack(Unit $who){
    $who-> this+= $hp;
}
?>