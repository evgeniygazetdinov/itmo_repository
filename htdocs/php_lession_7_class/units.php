<?php
require_once 'Knight.php';
$knight = new Knight(10,12,3);
$knight2 = new Knight(12,11,1);

$knight->attack($knight2);