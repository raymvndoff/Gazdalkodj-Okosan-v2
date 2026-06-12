<?php
require_once("../egyeb/connect.php");
$egyenleg = $_COOKIE['egyenleg'];
$nev = $_COOKIE['nev'];

$update = "UPDATE jatekosok SET egyenleg = $egyenleg WHERE nev = '$nev'";
mysqli_query($conn, $update);

mysqli_close($conn);
?>