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
$nomeCover = $_POST['nomeCover'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$senha = $_POST['senha'];
$generoMusical = $_POST['generoMusical'];
$biografia = $_POST['biografia'];
$portfolio = $_POST['portfolio'];
$disponibilidade = $_POST['disponibilidade'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO Banda_Cover (nomeCover, nome, email, telefone, senha, generoMusical, biografia, portfolio, disponibilidade) VALUES (?,?,?,?,?,?,?,?,?)");
if (!$stmt) {
    echo "Prepare failed: (" . $conn->errno . ") " . $conn->error;
}

$stmt->bind_param("sssssssss", $nomeCover, $nome, $email, $telefone, $senha, $generoMusical, $biografia, $portfolio, $disponibilidade);
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