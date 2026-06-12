<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];
$dobasertek = $_COOKIE['dobasertek'];
$jelenlegiMezo = "";
$jelenlegiEgyenleg = 0;
$ujegyenleg = 0;
$jelenlegiEletBizt = 0;
$kapottemar = 0;

$select = "SELECT mezo, egyenleg, eletbiztositas, bonusz1m, dobasbolkimarad FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    $jelenlegiMezo = $row["mezo"];
    $jelenlegiEgyenleg = $row["egyenleg"];
    $jelenlegiEletBizt = $row["eletbiztositas"];
    $kapottemar = $row["bonusz1m"];
}

(int)$ujmezo = (int)$jelenlegiMezo + (int)$dobasertek;

if($jelenlegiEletBizt == 1 && $ujmezo == 9 && $kapottemar == 0){
    (int)$ujegyenleg = (int)$jelenlegiEgyenleg + 1500000;
    $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg, bonusz1m = 1 WHERE nev = '$nev'";
    mysqli_query($conn, $updateEgyenleg);
}
if($jelenlegiMezo < 8 && $ujmezo > 8){
    (int)$ujegyenleg = (int)$jelenlegiEgyenleg * 1.07;
    $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
    mysqli_query($conn, $updateEgyenleg);
}
if($jelenlegiMezo < 42 && $ujmezo > 42){
    (int)$ujegyenleg = (int)$jelenlegiEgyenleg + 500000;
    $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
    mysqli_query($conn, $updateEgyenleg);
}
if($ujmezo == 42){
    (int)$ujegyenleg = (int)$jelenlegiEgyenleg + 1000000;
    $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
    mysqli_query($conn, $updateEgyenleg);
}
if($jelenlegiMezo == 13){
    $selectKimarad = "SELECT dobasbolkimarad FROM `jatekosok` WHERE nev = '$nev'";
        $resultKimarad = mysqli_query($conn, $selectKimarad);
        while($rowKimarad = mysqli_fetch_array($resultKimarad)){
            if($dobasertek != 1 && $dobasertek != 6){
                if($rowKimarad['dobasbolkimarad'] == null){
                    $updateKimarad = "UPDATE jatekosok SET dobasbolkimarad = 1 WHERE nev = '$nev'";
                    mysqli_query($conn, $updateKimarad);
    
                    $ujmezo = 13;
                    echo $ujmezo;
                    return;
                }
                if($rowKimarad['dobasbolkimarad'] == 1){
                    $updateKimarad = "UPDATE jatekosok SET dobasbolkimarad = 2 WHERE nev = '$nev'";
                    mysqli_query($conn, $updateKimarad);
        
                    $ujmezo = 13;
                    echo $ujmezo;
                    return;
                }
                if($rowKimarad['dobasbolkimarad'] == 2){
                    $updateKimarad = "UPDATE jatekosok SET dobasbolkimarad = null WHERE nev = '$nev'";
                    mysqli_query($conn, $updateKimarad);
                }
            }
            if($rowKimarad['dobasbolkimarad'] == null && $dobasertek == 6){
                echo "ujradob";
        
                $updateKimarad = "UPDATE jatekosok SET dobasbolkimarad = 3 WHERE nev = '$nev'";
                mysqli_query($conn, $updateKimarad);
                return;
            }
            if($rowKimarad['dobasbolkimarad'] == null && $dobasertek == 1){
                echo "ujradob";
        
                $updateKimarad = "UPDATE jatekosok SET dobasbolkimarad = 3 WHERE nev = '$nev'";
                mysqli_query($conn, $updateKimarad);
                return;
            }
    }
}

switch($ujmezo){
    case 43:
        $ujmezo = 1;
        break;
    case 44:
        $ujmezo = 2;
        break;
    case 45:
        $ujmezo = 3;
        break;
    case 46:
        $ujmezo = 4;
        break;
    case 47:
        $ujmezo = 5;
        break;
    case 48:
        $ujmezo = 6;
        break;
}
echo $ujmezo;

$update = "UPDATE jatekosok SET mezo = $ujmezo, dobasbolkimarad = null WHERE nev = '$nev'";
mysqli_query($conn, $update);
  
mysqli_close($conn);
?>