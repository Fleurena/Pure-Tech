<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\MainCategoryRepository")
 * @UniqueEntity(fields = {"name"}, message = "Category deja existante")
 */
class MainCategory
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * 
     * @Assert\NotBlank(message = "Le nom de la categorie ne contient pas assé de caracteres")
     * @Assert\Regex(pattern="/^[a-zA-Zçéèêëàâîïôùû\s]+$/", match=true, message="Les chiffres et les caractères spéciaux ne sont pas autorisés")
     * 
     * @Assert\Length(
     * min = 3,
     * max = 25,
     * minMessage = "Le nom de la categorie ne contient pas assé de caracteres",
     * maxMessage = "Le nom de la categorie ne doit pas depasser 15 caracteres"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Assert\NotBlank(message = "L'URL de l'image n'est pas correct")
     */
    private $thumbnail;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SubCategory", mappedBy="main_category")
     */
    private $subCategories;

    public function __construct()
    {
        $this->subCategories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getThumbnail(): ?string
    {
        return $this->thumbnail;
    }

    public function setThumbnail(string $thumbnail): self
    {
        $this->thumbnail = $thumbnail;

        return $this;
    }

    /**
     * @return Collection|SubCategory[]
     */
    public function getSubCategories(): Collection
    {
        return $this->subCategories;
    }

    public function addSubCategory(SubCategory $subCategory): self
    {
        if (!$this->subCategories->contains($subCategory)) {
            $this->subCategories[] = $subCategory;
            $subCategory->setMainCategory($this);
        }

        return $this;
    }

    public function removeSubCategory(SubCategory $subCategory): self
    {
        if ($this->subCategories->contains($subCategory)) {
            $this->subCategories->removeElement($subCategory);
            // set the owning side to null (unless already changed)
            if ($subCategory->getMainCategory() === $this) {
                $subCategory->setMainCategory(null);
            }
        }

        return $this;
    }
}
