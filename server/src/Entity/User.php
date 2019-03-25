<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity("email", message="Un compte éxiste déja avec cette adresse email")
 */
class User
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\UserSheet", inversedBy="user", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $user_sheet;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank
     */
    private $email;

    /**
     * @Assert\NotBlank
     * @ORM\Column(type="string", length=255)
     */

    private $password;

    /*
     * @ORM\Column(type="json_array")
     */
    private $roles;

    /**
     * @Assert\NotBlank
     * @ORM\Column(type="string", length=255)
     */
    private $remember_token;

    /**
     * @ORM\Column(type="integer")
     */
    private $verified;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\VerifyUser", mappedBy="user", cascade={"persist", "remove"})
     */
    private $verifyUser;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ShoopingCart", inversedBy="user")
     * @ORM\JoinColumn(nullable=true)
     */
    private $shoopingCart;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserSheet(): ?UserSheet
    {
        return $this->user_sheet;
    }

    public function setUserSheet(UserSheet $user_sheet): self
    {
        $this->user_sheet = $user_sheet;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = hash('sha512', $password);
        return $this;
    }

    public function getRoles()
    {
        return $this->roles;
    }

    public function setRoles($roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getRememberToken(): ?string
    {
        return $this->remember_token;
    }

    public function setRememberToken(string $remember_token): self
    {
        $this->remember_token = $remember_token;

        return $this;
    }

    public function getVerified(): ?int
    {
        return $this->verified;
    }

    public function setVerified(int $verified): self
    {
        $this->verified = $verified;

        return $this;
    }

    public function getVerifyUser(): ?VerifyUser
    {
        return $this->verifyUser;
    }

    public function setVerifyUser(VerifyUser $verifyUser): self
    {
        $this->verifyUser = $verifyUser;

        // set the owning side of the relation if necessary
        if ($this !== $verifyUser->getUser()) {
            $verifyUser->setUser($this);
        }

        return $this;
    }

    public function getShoopingCart(): ?ShoopingCart
    {
        return $this->shoopingCart;
    }

    public function setShoopingCart(?ShoopingCart $shoopingCart): self
    {
        $this->shoopingCart = $shoopingCart;

        return $this;
    }
}
