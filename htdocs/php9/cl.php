<?php
class FitnessClub{
    private zones =[];
    public function addClient(Pass $pass,string $zone_type){
        //регистрация абонем в желаемой зоне
        $this->zones[$zone_type][] = $pass;

    }
    public function clearZones(){
        
    }
}

class FitnessConstants{
    const GYM = 'Gym';
}