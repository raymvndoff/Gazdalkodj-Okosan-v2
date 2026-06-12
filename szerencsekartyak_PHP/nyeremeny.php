<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev_nyeremeny'];
$osszeg = $_COOKIE['osszeg'];
$jelenlegiEgyenleg = "";

echo $nev;

$select = "SELECT nev, egyenleg FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    $jelenlegiEgyenleg = $row["egyenleg"];
}

(int)$ujegyenleg = (int)$jelenlegiEgyenleg + (int)$osszeg;

$update = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
mysqli_query($conn, $update);
  
mysqli_close($conn);
?>