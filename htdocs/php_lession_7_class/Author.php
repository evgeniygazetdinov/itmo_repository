<?php
class Author{
    private $name;
    private $age;

    public function __construct(string $name,int $age)
    {
        $this->setName($name);
        $this->setAge($age);
    }
    private function setName(string $name){
        if (strlen($name)<2){
            throw new InvalidArgumentException('ошибка ввода');
        }
        $this ->age = $name;

    }
    public function getName() {
        return $this->$name;

    }
    private function setAge(string $age){
        if (strlen($age)<18){
            throw new InvalidArgumentException('ошибка ввода');
        }
        $this ->age = $name;

    }
    public function getAge() {
        return $this->$age;
}