<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];

$select = "SELECT `berlet`, `lakasbiztositas`, `eletbiztositas`, `autobiztositas`, `auto`, `konyhabutor`, `szobabutor`, `mosogep`, `hutoszekreny`, `tuzhely`, `televizio`, `lakas` FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while ($row = mysqli_fetch_array($result)) {
    if($row['berlet'] == "1"){
        echo "berlet";
    }
    if($row['lakasbiztositas'] == "1"){
        echo "lakasbiztositas";
    }
    if($row['eletbiztositas'] == "1"){
        echo "eletbiztositas";
    }
    if($row['autobiztositas'] == "1"){
        echo "autobiztositas";
    }
    if($row['auto'] == "1"){
        echo "kocsi";
    }
    if($row['konyhabutor'] == "1"){
        echo "konyhabutor";
    }
    if($row['szobabutor'] == "1"){
        echo "szobabutor";
    }
    if($row['mosogep'] == "1"){
        echo "mosogep";
    }
    if($row['hutoszekreny'] == "1"){
        echo "hutoszekreny";
    }
    if($row['tuzhely'] == "1"){
        echo "tuzhely";
    }
    if($row['televizio'] == "1"){
        echo "televizio";
    }
    if($row['lakas'] == "1"){
        echo "lakas";
    }
}
mysqli_close($conn);
?>