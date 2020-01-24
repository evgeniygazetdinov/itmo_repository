<?php

// имя, возраст - устанавливаются в момент
// создания объекта
// возраст от 18 лет
// имя - не менее 2х символов
class Author

{
    private $name;
    private $age;

    public function __construct(string $name, int $age)
    {
        $this->setName($name);
        $this->setAge($age);
    }

    private function setName(string $name) {
        if (strlen($name) < 2){
            throw new InvalidArgumentException("Слишком короткое имя");
        }
        $this->name = $name;
    }

    public function getName():string {
        return $this->name;
    }

    private function setAge(int $age) {
        if ($age < 18){
            throw new InvalidArgumentException("Мало лет");
        }
        $this->age = $age;
    }

    public function getAge():int {
        return $this->age;
    }



}
