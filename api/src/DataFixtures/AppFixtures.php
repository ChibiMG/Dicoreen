<?php

namespace App\DataFixtures;

use App\Entity\Theme;
use App\Entity\Word;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);

        $theme = new Theme();
        $theme->setTheme("Nourriture");

        $manager->persist($theme);

        $word = new Word();
        $word->setFrench("Lait");
        $word->setKorean("우유");
        $word->setType("Nom");
        $word->setExample("우유를 마셔요 = Il boit du lait.");
        $word->addTheme($theme);
        $word->setImage("https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg");

        $manager->persist($word);        

        $manager->flush();
    }
}
