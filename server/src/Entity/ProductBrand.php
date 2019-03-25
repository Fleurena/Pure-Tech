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
 * @ORM\Entity(repositoryClass="App\Repository\ProductBrandRepository")
 * @UniqueEntity(fields = {"name"}, message = "Category deja existante")
 */
class ProductBrand
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Assert\NotBlank(message = "Le nom de la marque ne contient pas assé de caracteres")
     * @Assert\Regex(pattern="/^[a-zA-Zçéèêëàâîïôùû\s]+$/", match=true, message="Les chiffres et les caractères spéciaux ne sont pas autorisés")
     * 
     * @Assert\Length(
     * min = 2,
     * max = 25,
     * minMessage = "Le nom de la marque ne contient pas assé de caracteres",
     * maxMessage = "Le nom de la marque ne doit pas depasser 15 caracteres"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $thumbnail;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Assert\NotBlank(message = "L'URL de l'image n'est pas correct")
     */
    private $liens;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Product", mappedBy="product_brand")
     */
    private $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
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

    public function getLiens(): ?string
    {
        return $this->liens;
    }

    public function setLiens(string $liens): self
    {
        $this->liens = $liens;

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setProductBrand($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
            // set the owning side to null (unless already changed)
            if ($product->getProductBrand() === $this) {
                $product->setProductBrand(null);
            }
        }

        return $this;
    }
}
