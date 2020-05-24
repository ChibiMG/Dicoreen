<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ConjugationRepository")
 */
class Conjugation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $past;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $present;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $future;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPast(): ?string
    {
        return $this->past;
    }

    public function setPast(string $past): self
    {
        $this->past = $past;

        return $this;
    }

    public function getPresent(): ?string
    {
        return $this->present;
    }

    public function setPresent(string $present): self
    {
        $this->present = $present;

        return $this;
    }

    public function getFuture(): ?string
    {
        return $this->future;
    }

    public function setFuture(string $future): self
    {
        $this->future = $future;

        return $this;
    }
}
