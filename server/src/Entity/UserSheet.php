<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\UserSheetRepository")
 */
class UserSheet
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Regex(
     *     pattern     = "/^[a-z]+$/i",
     *     match=true,
     *     message="Votre prénom containt des caractères indésirable"
     * )
     */

    private $first_name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Regex(
     *     pattern     = "/^[a-z]+$/i",
     *     match=true,
     *     message="Votre nom containt des caractères indésirable"
     * )
     */
    private $last_name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserSheetAdress", mappedBy="user_sheet")
     */
    private $userSheetAdresses;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", mappedBy="user_sheet", cascade={"persist", "remove"})
     */
    private $user;

    public function __construct()
    {
        $this->userSheetAdresses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    public function setFirstName(string $first_name): self
    {
        $this->first_name = $first_name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    public function setLastName(string $last_name): self
    {
        $this->last_name = $last_name;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    /**
     * @return Collection|UserSheetAdress[]
     */
    public function getUserSheetAdresses(): Collection
    {
        return $this->userSheetAdresses;
    }

    public function addUserSheetAdress(UserSheetAdress $userSheetAdress): self
    {
        if (!$this->userSheetAdresses->contains($userSheetAdress)) {
            $this->userSheetAdresses[] = $userSheetAdress;
            $userSheetAdress->setUserSheet($this);
        }

        return $this;
    }

    public function removeUserSheetAdress(UserSheetAdress $userSheetAdress): self
    {
        if ($this->userSheetAdresses->contains($userSheetAdress)) {
            $this->userSheetAdresses->removeElement($userSheetAdress);
            // set the owning side to null (unless already changed)
            if ($userSheetAdress->getUserSheet() === $this) {
                $userSheetAdress->setUserSheet(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        // set the owning side of the relation if necessary
        if ($this !== $user->getUserSheet()) {
            $user->setUserSheet($this);
        }

        return $this;
    }
}
