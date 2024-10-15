<?php
// Connect to the database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "CoverSpot";

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$nome = $_POST['nome'];
$cnpj = $_POST['cnpj'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$senha = $_POST['senha'];
$endereco = $_POST['endereco'];
$tipoEndereco = $_POST['tipoEndereco'];
$descricao = $_POST['descricao'];
$horarioFuncionamento = $_POST['horarioFuncionamento'];
$capacidade = $_POST['capacidade'];
$preferenciaMusical = $_POST['preferenciaMusical'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO Estabelecimento (nome, cnpj, email, telefone, senha, endereco, tipoEndereco, descricao, horarioFuncionamento, capacidade, preferenciaMusical) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
$stmt->bind_param("ssssssssiss", $nome, $cnpj, $email, $telefone, $senha, $endereco, $tipoEndereco, $descricao, $horarioFuncionamento, $capacidade, $preferenciaMusical);

// Set parameters and execute
$nome = $_POST['nome'];
$cnpj = $_POST['cnpj'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$senha = $_POST['senha'];
$endereco = $_POST['endereco'];
$tipoEndereco = $_POST['tipoEndereco'];
$descricao = $_POST['descricao'];
$horarioFuncionamento = $_POST['horarioFuncionamento'];
$capacidade = $_POST['capacidade'];
$preferenciaMusical = $_POST['preferenciaMusical'];

$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <title>Document</title>
</head>

<body>
    <a href="/index.php"><button class="btn btn-primary">Voltar</button></a>
</body>

</html>