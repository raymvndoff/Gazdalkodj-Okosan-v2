<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];
$jelenlegiEgyenleg = "";
$osszeg = 0;

$select = "SELECT egyenleg, lakasbiztositas, konyhabutor, szobabutor, mosogep, hutoszekreny, tuzhely, televizio FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    $jelenlegiEgyenleg = $row["egyenleg"];
    if($row["lakasbiztositas"] == "1"){
        if($row["konyhabutor"] == "1"){
            $osszeg = $osszeg + 300000;
        }
        if($row["szobabutor"] == "1"){
            $osszeg = $osszeg + 900000;
        }
        if($row["mosogep"] == "1"){
            $osszeg = $osszeg + 90000;
        }
        if($row["hutoszekreny"] == "1"){
            $osszeg = $osszeg + 80000;
        }
        if($row["tuzhely"] == "1"){
            $osszeg = $osszeg + 70000;
        }
        if($row["televizio"] == "1"){
            $osszeg = $osszeg + 70000;
        }
    }
    if($row["lakasbiztositas"] == "0"){
        echo "biztositas";
    }
}

(int)$ujegyenleg = (int)$jelenlegiEgyenleg + (int)$osszeg;

$update = "UPDATE jatekosok SET egyenleg = $ujegyenleg, lakasbiztositas = 0, konyhabutor = 0, szobabutor = 0, mosogep = 0, hutoszekreny = 0, tuzhely = 0, televizio = 0 WHERE nev = '$nev'";
mysqli_query($conn, $update);
  
mysqli_close($conn);
?>