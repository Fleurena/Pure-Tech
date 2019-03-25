<?php

namespace App\Controller;

use App\Entity\User;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ConnectionController extends AbstractController
{
    /**
     * @Route("/connection_verify_identifiant", name="connection")
     */
    public function index(Request $request, LoggerInterface $logger)
    {

        $email = json_decode($request->getContent())->email;
        $password = hash('sha512', json_decode($request->getContent())->password);

        $entityManager = $this->getDoctrine();

        $users = $entityManager->getRepository(User::class)->findBy(array("email" => $email, "password" => $password));
        if (array_key_exists(0, $users)) {
            $user_id = $users[0]->getId();
        }

        if (array_key_exists(0, $users)) {
            return $this->json(array('email' => $email, "password" => $password, 'id' => $user_id));

        } else {
            return $this->json(array('Identifiant incorrect'));
        }
    }
}
