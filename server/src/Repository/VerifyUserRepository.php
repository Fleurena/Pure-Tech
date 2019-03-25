<?php

namespace App\Repository;

use App\Entity\VerifyUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method VerifyUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method VerifyUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method VerifyUser[]    findAll()
 * @method VerifyUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VerifyUserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, VerifyUser::class);
    }

    // /**
    //  * @return VerifyUser[] Returns an array of VerifyUser objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VerifyUser
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
