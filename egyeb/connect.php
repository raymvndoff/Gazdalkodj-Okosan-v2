<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "gazdalkodj_okosan";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
  die("Csatlakozás sikertelen: " . mysqli_connect_error());
}
// echo "Csatlakozás sikeres <br>";
?>