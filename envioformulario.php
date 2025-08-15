<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome        = trim($_POST["nome"]);
    $telefone    = trim($_POST["telefone"]);
    $email       = trim($_POST["email"]);
    $empresa     = trim($_POST["empresa"]);
    $funcionarios= trim($_POST["funcionarios"]);
    $cargo       = trim($_POST["cargo"]);
    $mensagem    = trim($_POST["mensagem"]);

    $destino = "walter.sneto@mauajr.com";
    $assunto = "Novo contato pelo formulário do site";

    $corpo = "Nome: $nome\n";
    $corpo .= "Telefone: $telefone\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Empresa: $empresa\n";
    $corpo .= "Nº Funcionários: $funcionarios\n";
    $corpo .= "Cargo: $cargo\n\n";
    $corpo .= "Mensagem:\n$mensagem\n";

    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destino, $assunto, $corpo, $headers)) {
        echo "<p>Mensagem enviada com sucesso! Em breve entraremos em contato.</p>";
    } else {
        echo "<p>Ocorreu um erro ao enviar sua mensagem. Tente novamente.</p>";
    }
}
?>