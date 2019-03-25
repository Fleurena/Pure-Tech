<?php

namespace App\Repository;

use App\Entity\UserSheetAdress;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UserSheetAdress|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserSheetAdress|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserSheetAdress[]    findAll()
 * @method UserSheetAdress[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserSheetAdressRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UserSheetAdress::class);
    }

    // /**
    //  * @return UserSheetAdress[] Returns an array of UserSheetAdress objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserSheetAdress
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
