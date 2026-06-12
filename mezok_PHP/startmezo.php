<?php
require_once("../egyeb/connect.php");
$nev = $_COOKIE['nev'];

$update = "UPDATE jatekosok SET mezo = 0 WHERE nev = '$nev'";
mysqli_query($conn, $update);

mysqli_close($conn);
?>