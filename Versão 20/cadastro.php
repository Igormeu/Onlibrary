<?php

require __DIR__.'/vendor/autoload.php';
$nome = $_POST["user"];
$email = $_POST["email1"];
$senha = $_POST["password"];
$confirmarSenha = $_POST["repassword"];
$confirmacao = true;
$baseDir = dirname($_SERVER['SCRIPT_NAME']); // Obter o caminho relativo ao script atual
use Kreait\Firebase\Factory;

function temCaracteresEspeciais($string) {
    return preg_match('/[^a-zA-Z0-9]/', $string) === 1;
}

function temLetraMaiuscula($string) {
    return preg_match('/[A-Z]/', $string) === 1;
}

function temNumero($string) {
    return preg_match('/[0-9]/', $string) === 1;
}

$factory = (new Factory())
        ->withServiceAccount(__DIR__.'/chaves/chavefirebase.json')
        ->withDatabaseUri('https://site-84824-default-rtdb.firebaseio.com/'); 

$database = $factory->createDatabase();

if ($senha == $confirmarSenha) {
    if (strlen($senha) > 8) {
        if (temCaracteresEspeciais($senha) && temLetraMaiuscula($senha) && temNumero($senha)) {
            try {
                $auth = $factory->createAuth();
                $novoUser = $auth->createUserWithEmailAndPassword($email, $senha);
                $auth->updateUser($novoUser->uid, [
                    'displayName' => $nome,
                ]);
                $confirmacao = true;
            } catch (Exception $e) {
                echo '<script> alert("Email já está cadastrado"); window.location.href = "' . $baseDir . '/Cadastro.html" </script>';
                $confirmacao = false;
            }
        } else {
            echo '<script> alert("Senha precisa possuir pelo menos um caracter especial, uma letra maiúscula e um número"); window.location.href = "' . $baseDir . '/Cadastro.html" </script>';
            $confirmacao = false;
        }
    } else {
        echo '<script> alert("Senha muito curta, mínimo 8 caracteres"); window.location.href = "' . $baseDir . '/Cadastro.html" </script>';
        $confirmacao = false;
    }
} else {
    echo '<script> alert("Senhas não correspondem"); window.location.href = "' . $baseDir . '/Cadastro.html" </script>';
    $confirmacao = false;
}

if ($confirmacao == true) {
    $novoUsuario = [
        'nome' => $nome,
        'email' => $email,
        'senha' => $senha
    ];
    try {
        $refUsuarios = $database->getReference('usuario');
        $refUsuarios->push($novoUsuario);
        
        echo '<script> alert("Usuário cadastrado com sucesso"); window.location.href = "' . $baseDir . '/index.html"</script>';
    } catch (Exception $e) {
        echo 'Erro: ' . $e->getMessage();
    }
}

?>
