<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];
$jelenlegiEgyenleg = "";
$osszeg = 0;

$select = "SELECT egyenleg, autobiztositas, auto FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    $jelenlegiEgyenleg = $row["egyenleg"];

    if($row["autobiztositas"] == "1" && $row["auto"] == "1"){
       $osszeg = $osszeg + 2500000;
    }
}

(int)$ujegyenleg = (int)$jelenlegiEgyenleg + (int)$osszeg;

$update = "UPDATE jatekosok SET egyenleg = $ujegyenleg, auto = 0, autobiztositas = 0 WHERE nev = '$nev'";
mysqli_query($conn, $update);
  
mysqli_close($conn);
?>