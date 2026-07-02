-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 11. 15:38
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `gazdalkodj_okosan`
--
CREATE DATABASE IF NOT EXISTS `gazdalkodj_okosan` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `gazdalkodj_okosan`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `berendezesek`
--

CREATE TABLE `berendezesek` (
  `id` int(11) NOT NULL,
  `mezo_id` int(11) NOT NULL,
  `szerencse_id` int(11) DEFAULT NULL,
  `ar` int(9) NOT NULL,
  `megnevezes` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `berendezesek`
--

INSERT INTO `berendezesek` (`id`, `mezo_id`, `szerencse_id`, `ar`, `megnevezes`) VALUES
(1, 5, 35, 2500000, 'auto'),
(2, 11, 27, 300000, 'konyhabutor'),
(3, 19, NULL, 9500000, 'lakas'),
(4, 33, 30, 90000, 'mosogep'),
(5, 33, 30, 80000, 'hutoszekreny'),
(6, 33, 30, 70000, 'tuzhely'),
(7, 38, 19, 900000, 'szobabútor'),
(8, 39, NULL, 9500000, 'lakas'),
(9, 40, 7, 70000, 'televizio');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatekosok`
--

CREATE TABLE `jatekosok` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `egyenleg` int(9) NOT NULL,
  `mezo` tinyint(4) NOT NULL,
  `dobasbolkimarad` tinyint(4) DEFAULT NULL,
  `bonusz1m` tinyint(1) NOT NULL,
  `berlet` tinyint(1) NOT NULL,
  `lakasbiztositas` tinyint(1) NOT NULL,
  `eletbiztositas` tinyint(1) NOT NULL,
  `autobiztositas` tinyint(1) NOT NULL,
  `auto` tinyint(1) NOT NULL,
  `konyhabutor` tinyint(1) NOT NULL,
  `szobabutor` tinyint(1) NOT NULL,
  `mosogep` tinyint(1) NOT NULL,
  `hutoszekreny` tinyint(1) NOT NULL,
  `tuzhely` tinyint(1) NOT NULL,
  `televizio` tinyint(1) NOT NULL,
  `lakas` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `mezok`
--

CREATE TABLE `mezok` (
  `id` int(11) NOT NULL,
  `osszeg_id` int(11) DEFAULT NULL,
  `leiras` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `mezok`
--

INSERT INTO `mezok` (`id`, `osszeg_id`, `leiras`) VALUES
(1, 1, 'Kézi csomózású perzsaszönyegekkel díszited lakásod. Fizess 30.000 Ft-ot!'),
(2, 2, 'Megvásárolhatod éves bérletedet 9.000 Ft-ért a BKV-nál. Ha már van bérleted, a BKV mezöin (2-es, 15-ös. 27-es) nem kell többet fizetned.'),
(3, NULL, 'Kövesd a szerencsekerék kártya utasításait!'),
(4, 3, 'Szereted az izgalmas rejtvényeket, ezert Füles magazin elöfizetést vásároltál. Fizess 6.000 Ft-ot.'),
(5, 4, 'Megveheted álmaid autóját egy összegben, vagy részletre. A vásárlás módját lásd a játékszabályban!'),
(6, 5, 'Jól kihasználtad a REGIO játékkereskedés akcióit. Vásárlásodért most csak 5.000 Ft-ot kell fizetned.'),
(7, NULL, 'A sport szórakozás, egészség. Sportolj!'),
(8, NULL, '7% kamatjóvairásban részesülsz, amikor ezen a mezön áthaladsz, vagy rálépsz.'),
(9, NULL, 'Megkötheted az Eletbiztositásodat 60.000 Ft-ért, Lakásbiztositásod 40.000 Ft- ért, és Autóbiztositá-sodat 30.000 Ft-ért. Amennyiben a következö körökben erre a mezőre lépsz és van életbiztositásod, a játék során egyszeri alkalommal 1.500.000 Ft -al gazdagodhatsz.'),
(10, NULL, 'Kövesd a szerencsekerék kártya utasításait!'),
(11, 6, 'Ha van pénzed és lakásod, vásárolj modern konyhabútort. Fizess 300.000 Ft-ot.'),
(12, NULL, 'Meglátogattad fővárosunk kedvenc allatait az Állat- és Növénykertben.'),
(13, NULL, 'Túl sokat idegeskedsz, vonulj szanatóriumba! Kimaradsz két dobásból.\r\nHa 1 -est vagy 6 -ost dobsz kiléphetsz a mezőböl.'),
(14, 7, 'Tönkrement a cipód, vásárolnod kell egy újat a DEICHMANN valamelyik üzletében. A legjobb minoséget kapod a legjobb áron. Fizess 15.000 Ft-ot.'),
(15, NULL, 'Jegy nélkül utaztál az autóbuszon, 6.000 Ft büntetést fizetsz. Ha van bérleted, a büntetést most megúsztad.'),
(16, NULL, 'Kövesd a szerencsekerék kártya utasításait!'),
(17, 8, 'A film tanít, szórakoztat. Nézd meg a legújabb sikerfilmet barátaiddal, és fizess 1.500 Ft-ot.'),
(18, 9, 'Minden könyvújdonságot megtalálsz, és kedvedre böngészhetsz az ALEXANDRA könyváruházak-ban. A vásárolt könyvekért fizess 8.000 Ft-ot.'),
(19, NULL, 'Takarékoskodj, mert igy szép lakáshoz juthatsz. Ha van pénzed, fizess be 9.500.000 Ft-ot az OTP Bank Nyrt. pénztárába, és megapod a lakásod.\r\nAmennyiben részletfizetésre van csak lehetosé-ged, fizess 2.000.000 Ft-ot! A fennmaradó 9.000 000 Ft-ot pedig 90.000 Ft-os részletekben törlesztheted.'),
(20, 10, 'Sportszereket vásároltál a DECATHLON Sport-\r\náruházban az akciós termékekből, 25.000 Ft-ot kell fizetned. Vásárlás után sportoltál is, ezért jutalmul kapsz egy szerencsekerék kártyát!'),
(21, 11, 'Pihenj Siófok Balatonparti mediterrán szállodajában, a Hotel Azúrban.\r\nA háromnapos pihenésedért fizess 90 000 Ft-ot.'),
(22, NULL, 'Megtekintetted a NEMZETI GALÉRIA gyönyörű\r\nkiállitását.'),
(23, NULL, 'Kövesd a szerencsekerék kártya utasításait!'),
(24, 12, 'Visegrádi hajokiránduláson voltál. Fizess 12.000 Ft-ot.'),
(25, 13, 'Ma étteremben ebédelsz barátaiddal. Ez Neked 10.000 Ft-ba kerül.'),
(26, NULL, 'Kellemes séta közben tekintsd meg a Margitsziget nevezetességeit!'),
(27, NULL, 'Tömegközlekedést vettél igénybe, lemondtál a kényelmedröl. Kövesd a szerencsekerék kártya utasításait.'),
(28, NULL, 'Kövesd a szerencsekerék kártya utasításait!'),
(29, NULL, 'Sétálj a Halászbástyán! Innen gyönyörű kilátás nyílik Budapestre.'),
(30, 14, 'Az utazási irodákban elintézhetsz mindent az utazásoddal kapcsolatosan kényelmesen és gyorsan. Fizess 150.000 Ft-ot!'),
(31, 15, 'Bevásároltál az élelmiszer boltban. Fizess 7.000 Ft-ot!'),
(32, NULL, 'Kövesd a szerencsekerék kártya utasításait!'),
(33, NULL, 'Ha van pénzed, vásárolj elektromos gépeket: hűtoszekrényt, mosógépet, sütőt!'),
(34, 16, 'Beléptél az IKEA áruházba.\r\nKonyhafelszerelésért fizess 40.000 Ft-ot!'),
(35, 7, 'Vásároltal a regiojatek. hu web áruházban. Fizess 15.000 Ft-ot!'),
(36, 3, '„Kettő az egyben\" csomagra szerződtél, mely a telefon mellett az Internet-hozzáférés díját is tartalmazza, így ez neked csak 6.000 Ft-ba kerül.\r\n'),
(37, NULL, 'Kövesd a szerencsekerék kártya utasításait!'),
(38, 17, 'Ha már van lakásod most vásárolhatsz bele szobabútort. A szobabútor ára 900.000 Ft.'),
(39, NULL, 'Takarékoskodj, mert igy szép lakáshoz juthatsz. Ha van pénzed, fizess be 9.500.000 Ft-ot az OTP Bank Nyrt. pénztárába, és megapod a lakásod.\r\nAmennyiben részletfizetésre van csak lehetöséged, fizess 2.000.000 Ft-ot! A fennmaradó 9.000.000 Ft-ot pedig 90.000 Ft-os részletekben törlesztheted.'),
(40, 18, 'Az EURONICS Műszaki Aruházában minőséget vásárolhatsz olcsón. Most vedd meg a televiziód! Fizess 70.000 Ft-ot!'),
(41, 19, 'Jól választottál! A Lufthansa járataival Európa minden nagyvárosába eljuthatsz. Fizesd ki repülőjegyed árát, amely 60.000 Ft.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `osszegek`
--

CREATE TABLE `osszegek` (
  `id` int(11) NOT NULL,
  `osszeg` mediumint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `osszegek`
--

INSERT INTO `osszegek` (`id`, `osszeg`) VALUES
(1, 30000),
(2, 9000),
(3, 6000),
(4, 2500000),
(5, 5000),
(6, 300000),
(7, 15000),
(8, 1500),
(9, 8000),
(10, 25000),
(11, 90000),
(12, 12000),
(13, 10000),
(14, 150000),
(15, 7000),
(16, 40000),
(17, 900000),
(18, 70000),
(19, 60000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szerencse_kartyak`
--

CREATE TABLE `szerencse_kartyak` (
  `id` int(11) NOT NULL,
  `leiras` text NOT NULL,
  `elerheto` tinyint(1) NOT NULL,
  `osszeg` mediumint(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `szerencse_kartyak`
--

INSERT INTO `szerencse_kartyak` (`id`, `leiras`, `elerheto`, `osszeg`) VALUES
(1, 'Kivetted éves szabadságod. Kétszer kimaradsz a dobásból.', 1, NULL),
(2, 'Lakásod dísztítsd fel kézi csomózású perzsaszönyegekkel! Vásárlásod 30.000 Ft. Lépj az 1-es mezőre!', 1, NULL),
(3, 'Jól választottál! A Lufthansa járataival Európa minden nagyvárosába eljuthatsz. Fizesd ki repülőjegyed árát, amely 60.000 Ft! Lépj a 41-es mezőre!', 1, NULL),
(4, 'Kiégett a lakásod! Vissza kell adnod a berendezési tárgyaidat! Ha van lakásbiztosításod, a Biztosító kifizeti a károdat. Ha nincs, lépj a 9-es mezőre, és most befizetheted a biztosításokat.', 1, NULL),
(5, 'Menj ki a Margitszigetre autóbusszal, Lépj a 26-os mezőre!', 1, NULL),
(6, 'Az Utazási Irodák nyeremény sorsolásán utazást nyertél. Kipihenten folytathatod utad. Lépj a 30-as mezőre!', 1, NULL),
(7, 'Az EURONICS boltjaiban most akciósan vásárolhatod meg a televíziódat. Így 70.000 Ft helyett most csak 60.000 Ft-ot kell fizetned. Lépj a 40-es mezőre!', 1, NULL),
(8, 'Pihenj úgy, mintha már most a Hotel Azúr Törzsvendége lennél! Azúr Deluxe Klubkártyáddal érvényesítsd most 30% kedvezményedet. Lépj a 21-es mezőre! Még egyszer dobhatsz!', 1, 27000),
(9, 'Helyesen fejtetted meg a Füles magazin legújabb rejtvényét, 90.000 Ft-ot nyertél. Lépj a 4-es mezőre!', 1, 90000),
(10, 'Jó munkádért 300.000 Ft jutalomban részesülsz.', 1, 300000),
(11, 'Jól takarékoskodtál, ezért az OTP Bank Nyrt., a Lakossági folyószámlán elhelyzett pénzed után 15% kamatot fizet.', 1, NULL),
(12, 'Ebédelj barátaiddal étteremben, egy csendes, mediterrán hangulatú helyen, ahová mindig szívesen térsz majd vissza. Lépj a 25-ös mezőre! Fizess 10.000 Ft-ot!', 1, NULL),
(13, 'Lépj előre 1 mezőt!', 1, NULL),
(14, 'A program fejlesztője megajádnékozott egy televízióval. Ha már van tv -d, 70 000Ft -ot ír neked jóvá a bank.', 1, NULL),
(15, 'Menj a START mezőre! A pénztár 1.000.000 Ft-ot a folyószámládra helyez!', 1, NULL),
(16, 'A TOTÓN 11-es találattal 600.000 Ft-ot nyertél, amelyet a pénztár a folyószámládra helyez.', 1, 600000),
(17, 'Térj be cipőt vásárolni a DEICHMANN valamelyik üzletébe! Kényelmes cipőben lépj a 14-es mezőre! Fizess 15.000 Ft-ot!', 1, NULL),
(18, 'A TOTÓN 10-es találattal 120.000 Ft-ot nyertél, amelyet a pénztár a folyószámládra helyez.', 1, 120000),
(19, 'Sorsjátékon szobabútort nyertél. Ha nincs lakásod, vagy már megvetted, 900.000 Ft-ot a pénztár a folyószámládra helyez.', 1, NULL),
(20, '7.000 Ft-ért telepakolhatod a kosaradat mindféle finomsággal. Lépj a 31-es mezőre!', 1, NULL),
(21, 'Újításért 750.000 Ft-ot kapsz, amelyet a pénztár a folyószámládra helyez.', 1, 750000),
(22, 'A TOTÓN 12-es találattal 1.800.000 Ft-ot nyertél, amelyet a pénztár a folyószámládra helyez.', 1, 1800000),
(23, 'Fizesd ki gáz- és villanyszámládat az OTP Bank Nyrt.-nél nyitott Lakossági folyószámlán keresztül, melynek összege 15.000 Ft. Lépj a 8-as mezőre!', 1, 15000),
(24, 'Takarékoskodj! A megtakarított pénzedet tartsd a Lakossági folyószámládon, melyre az OTP Bank Nyrt. 7% kamatot fizet.', 1, NULL),
(25, 'Most vedd meg álmaid autóját, egy összegben, vagy részletre! Lépj az 5-ös mezőre, és élvezd az új gépkocsit!', 1, NULL),
(26, 'Látogass el az Alexandra könyvtáráruházakba! A könyvek árából most törzsvásárlói kedvezményt adunk. Lépj a 18-as mezőre!', 1, 3000),
(27, 'Lépj a 11-es mezőre, ahol konyhabútort vásárolhatsz, ha már van lakásod. A konyhabútor ára 300.000 Ft.', 1, NULL),
(28, 'A Budapesti Nemzetközi Vásár sorsjátékán mosógépet nyertél. Ha már van mosógéped, a pénztár kifizeti az árát. (90.000 Ft)', 1, NULL),
(29, 'Visegrádi hajókiránduláson veszel részt. Lépj a 24-es mezőre! A Kirándulás 12.000 Ft. Fizesd be a pénztárba!', 1, NULL),
(30, 'Házartásodat elektromos készülékekkel szerelheted fel, amelyek megkönnyíthetik hétköznapjaidat. Lépj a 33.as mezőre, vásárolj a kínálatból!', 1, NULL),
(31, 'Ellopták az autódat! Add vissza az autókártyádat! Ha van autóbiztosításod, a bank kifizeti a károdat. Add vissza az autókártyád és az autóbiztosításod.', 1, NULL),
(32, 'A LOTTÓ nyereménysorsolásán hűtőszekrényt nyertél. Ha már megvetted, a pénztár kifizeti az árát. (80.000 Ft)', 1, NULL),
(33, '\"Kettő az egyben\" csomagra szerződtél, mely a telefon mellet az Internet-hozzáférés díját is tartalmazza, így ez csak 6.000 Ft-ba kerül. Fizetés után lépj a 36-os mezőre!', 1, NULL),
(34, 'Lépj vissza 3 mezőt!', 1, NULL),
(35, 'Megnyerted a főnyereményt, az autót! Ha már van autód, a pénztár a folyószámládra helyezi annak árát.', 1, NULL),
(36, '3-as találatod volt a LOTTÓN, a 250.000 Ft-ot a pénztár a folyószámládra helyezi.', 1, 250000);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `berendezesek`
--
ALTER TABLE `berendezesek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mezo_berendezes_kapcs` (`mezo_id`),
  ADD KEY `szerencsek_berendezes_kapcs` (`szerencse_id`);

--
-- A tábla indexei `jatekosok`
--
ALTER TABLE `jatekosok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `mezok`
--
ALTER TABLE `mezok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `osszeg_id` (`osszeg_id`) USING BTREE;

--
-- A tábla indexei `osszegek`
--
ALTER TABLE `osszegek`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `szerencse_kartyak`
--
ALTER TABLE `szerencse_kartyak`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `berendezesek`
--
ALTER TABLE `berendezesek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `jatekosok`
--
ALTER TABLE `jatekosok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `mezok`
--
ALTER TABLE `mezok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT a táblához `osszegek`
--
ALTER TABLE `osszegek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `szerencse_kartyak`
--
ALTER TABLE `szerencse_kartyak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `berendezesek`
--
ALTER TABLE `berendezesek`
  ADD CONSTRAINT `mezo_berendezes_kapcs` FOREIGN KEY (`mezo_id`) REFERENCES `mezok` (`id`),
  ADD CONSTRAINT `szerencsek_berendezes_kapcs` FOREIGN KEY (`szerencse_id`) REFERENCES `szerencse_kartyak` (`id`);

--
-- Megkötések a táblához `mezok`
--
ALTER TABLE `mezok`
  ADD CONSTRAINT `mezo_osszeg_kapcs` FOREIGN KEY (`osszeg_id`) REFERENCES `osszegek` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
