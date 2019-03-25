<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ApiFilter(SearchFilter::class, properties={"id": "exact", "price": "exact", "sub_category" : "exact", "main_categories" : "exact"})
 * @ApiFilter(DateFilter::class, properties={"date"})
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 */
class Product
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
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SubCategory", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $sub_category;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StockStatus", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $stock_status;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ProductBrand", inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $product_brand;

    /**
     * @ORM\Column(type="float")
     */
    private $price;

    /**
     * @ORM\Column(type="json_array")
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $thumbnail;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantityStock;

    /**
     * @ORM\Column(type="integer")
     */
    private $weight;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\ShoopingCart", mappedBy="product")
     */

    private $shoopingCarts;

    /**
     * @ORM\Column(type="integer")
     */

    private $quantityShoopingProduct = 2;

    public function __construct()
    {
        $this->shoopingCarts = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getSubCategory(): ?SubCategory
    {
        return $this->sub_category;
    }

    public function setSubCategory(?SubCategory $sub_category): self
    {
        $this->sub_category = $sub_category;

        return $this;
    }

    public function getStockStatus(): ?StockStatus
    {
        return $this->stock_status;
    }

    public function setStockStatus(?StockStatus $stock_status): self
    {
        $this->stock_status = $stock_status;

        return $this;
    }

    public function getProductBrand(): ?ProductBrand
    {
        return $this->product_brand;
    }

    public function setProductBrand(?ProductBrand $product_brand): self
    {
        $this->product_brand = $product_brand;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getPicture()
    {
        return $this->picture;
    }

    public function setPicture($picture): self
    {
        $this->picture = $picture;

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

    public function getQuantityStock(): ?int
    {
        return $this->quantityStock;
    }

    public function setQuantityStock(int $quantityStock): self
    {
        $this->quantityStock = $quantityStock;

        return $this;
    }

    public function getQuantityShoopingProduct(): ?int
    {
        return $this->quantityShoopingProduct;
    }

    public function setQuantityShoopingProduct(int $quantityShoopingProduct): self
    {
        $this->quantityShoopingProduct = $quantityShoopingProduct;

        return $this;
    }

    public function getWeight(): ?int
    {
        return $this->weight;
    }

    public function setWeight(int $weight): self
    {
        $this->weight = $weight;

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
     * @return Collection|ShoopingCart[]
     */
    public function getShoopingCarts(): Collection
    {
        return $this->shoopingCarts;
    }

    public function addShoopingCart(ShoopingCart $shoopingCart): self
    {
        if (!$this->shoopingCarts->contains($shoopingCart)) {
            $this->shoopingCarts[] = $shoopingCart;
            $shoopingCart->addProduct($this);
        }

        return $this;
    }

    public function removeShoopingCart(ShoopingCart $shoopingCart): self
    {
        if ($this->shoopingCarts->contains($shoopingCart)) {
            $this->shoopingCarts->removeElement($shoopingCart);
            $shoopingCart->removeProduct($this);
        }

        return $this;
    }
}
