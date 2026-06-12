<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];
$egyenleg = $_COOKIE['egyenleg'];
$utolsonev = "";

$select = "SELECT nev FROM `jatekosok`";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
  if($row["nev"] == $nev){
    echo "Már létezik";
    return;
  }
}

$insert = "INSERT INTO `jatekosok`(`nev`, `egyenleg`, `mezo`, `dobasbolkimarad`, `bonusz1m`, `berlet`, `lakasbiztositas`, `eletbiztositas`, `autobiztositas`, `auto`, `konyhabutor`, `szobabutor`, `mosogep`, `hutoszekreny`, `tuzhely`, `televizio`, `lakas`) 
VALUES ('$nev','$egyenleg','0',null,'0','0','0','0','0','0','0','0','0','0','0','0','0')";

if (mysqli_query($conn, $insert)) {
  echo "<br> Sikeres játékos rögzítés";
} else {
  echo "<br> Error: " . $insert . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>