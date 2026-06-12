<?php
require_once("../egyeb/connect.php");

$jatekosokTruncate = "TRUNCATE TABLE `gazdalkodj_okosan`.`jatekosok`";
mysqli_query($conn, $jatekosokTruncate);

$jatekosokIdSet = "ALTER TABLE jatekosok AUTO_INCREMENT = 1";
mysqli_query($conn, $jatekosokIdSet);

$szerencsekartyakOsszesElerheto = "UPDATE `szerencse_kartyak` SET elerheto = 1";
mysqli_query($conn, $szerencsekartyakOsszesElerheto);

mysqli_close($conn);
?>