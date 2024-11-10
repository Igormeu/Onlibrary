<?php
require __DIR__.'/vendor/autoload.php';

$email = $_POST["email"];
$senha = $_POST["password"];
$nomeLogado = null;
$baseDir = dirname($_SERVER['SCRIPT_NAME']);
use Kreait\Firebase\Factory;

$factory = (new Factory())
    ->withServiceAccount(__DIR__.'/chaves/chavefirebase.json')
    ->withDatabaseUri('https://site-84824-default-rtdb.firebaseio.com/');

try {
    
    $userAuth = $factory->createAuth()
            ->signInWithEmailAndPassword($email, $senha);
    $database = $factory->createDatabase();
    $usuarios = $database->getReference('usuario')->getSnapshot();

    foreach ($usuarios->getValue() as $usuario){
        if ($usuario['email']===$email){
            $nomeLogado = $usuario['nome'];

            break;
        }
    }
    echo '<script> alert("Login realizado com sucesso"); window.location.href = "' . $baseDir . '/index.html"</script>';    
    
} catch (Exception $e) {

    echo '<script> alert("Login realizado com sucesso"); window.location.href = "' . $baseDir . '/login.html"</script>';
}


