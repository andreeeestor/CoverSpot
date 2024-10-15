<?php
// Connect to the database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "CoverSpot";

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
    die("Connection failed: ". mysqli_connect_error());
}

// Get form data
$username = $_POST['username'];
$password = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT * FROM Banda_Cover WHERE nome =? AND senha =?");
$stmt->bind_param("ss", $username, $password);

$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // User found, redirect to success page
    echo "Sucesso ao logar";
} else {
    // User not found, display error message
    echo "Invalid username or password";
}

$stmt->close();
$conn->close();
?>