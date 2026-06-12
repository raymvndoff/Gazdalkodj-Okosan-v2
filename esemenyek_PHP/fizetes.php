<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];
$osszeg = $_COOKIE['osszeg'];
$jelenlegiEgyenleg = "";

$select = "SELECT nev, egyenleg FROM `jatekosok`";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    if($row["nev"] == $nev){
        $jelenlegiEgyenleg = $row["egyenleg"];
    }
}

(int)$ujegyenleg = (int)$jelenlegiEgyenleg - (int)$osszeg;
if($osszeg > $jelenlegiEgyenleg){
    echo "false";
    return;
}

$update = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
mysqli_query($conn, $update);
  
mysqli_close($conn);
?>