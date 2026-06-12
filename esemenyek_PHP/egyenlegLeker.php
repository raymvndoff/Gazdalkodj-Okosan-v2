<?php
require_once("../egyeb/connect.php");
$nev = $_COOKIE['nev'];

$select = "SELECT egyenleg FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    echo $row["egyenleg"];
}

mysqli_close($conn);
?>