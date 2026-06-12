<?php
require_once("../egyeb/connect.php");
$nev = $_COOKIE['nev_targyatnyer'];
$termek = $_COOKIE['termek'];
$osszeg = $_COOKIE['osszeg'];

$select = "SELECT $termek, egyenleg FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    if($row[$termek] == 0){
        $update = "UPDATE jatekosok SET $termek = 1 WHERE nev = '$nev'";
        mysqli_query($conn, $update);
    }
    else{
        (int)$ujegyenleg = (int)$row['egyenleg'] + (int)$osszeg;
        $update = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
        mysqli_query($conn, $update);
    }
}

mysqli_close($conn);
?>