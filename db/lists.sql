-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2021 at 06:00 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `calculatucompra`
--

-- --------------------------------------------------------

--
-- Table structure for table `lists`
--

CREATE TABLE `lists` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `fecha` TIMESTAMP NOT NULL DEFAULT (now()),
  `fk_user` int(11) NOT NULL,
  `favorite` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lists`
--

INSERT INTO `lists` (`id`, `titulo`, `fecha`, `fk_user`, `favorite`) VALUES
(1, 'Mi Lista', '2021-01-25', 5, 0),
(2, 'juans list', '2021-01-25', 5, 0),
(3, 'juans list', '2021-01-25', 5, 0),
(4, 'juans list', '2021-01-25', 5, 0),
(5, 'juans list', '2021-01-25', 5, 0),
(6, 'Mi Lista', '2021-01-25', 5, 0),
(7, 'Mi Lista', '2021-01-25', 5, 0),
(8, 'Lista Fav', '2021-01-25', 5, 0),
(9, 'Mi Lista', '2021-01-26', 5, 0),
(10, 'Mi Lista', '2021-01-26', 5, 0),
(11, 'Mi Lista', '2021-01-26', 5, 0),
(12, 'Mi Lista', '2021-02-01', 5, 0),
(13, 'Mi Lista', '2021-01-26', 5, 0),
(14, 'Mi Lista', '2021-01-26', 5, 0),
(15, 'Compra de la semana', '2021-01-26', 5, 0),
(16, 'Mi Lista', '2021-01-26', 5, 0),
(17, 'Mi Lista', '2021-01-26', 5, 0),
(18, 'Lista Fav', '2021-01-26', 5, 0),
(19, 'Lista Fav', '2021-01-26', 5, 0),
(20, 'Lista Fav', '2021-01-26', 5, 0),
(21, 'Lista Fav', '2021-01-26', 5, 0),
(22, 'Mi Lista', '2021-01-26', 5, 0),
(23, 'Mi Lista', '2021-01-26', 5, 0),
(24, 'Mi Lista', '2021-01-26', 5, 0),
(25, 'Mi Lista', '2021-01-26', 5, 0),
(26, 'Lista', '2021-01-26', 5, 0),
(27, 'Mi Lista', '2021-01-26', 5, 0),
(28, 'Mi Lista', '2021-01-26', 5, 0),
(29, 'Mi Lista', '2021-01-26', 5, 0),
(30, 'Mi Lista', '2021-01-26', 5, 0),
(31, 'Mi Lista', '2021-01-26', 5, 0),
(32, 'Mi Lista', '2021-01-26', 5, 0),
(33, 'Mi Lista', '2021-01-26', 5, 0),
(34, 'Mi Lista', '2021-01-26', 5, 0),
(35, 'Mi Lista', '2021-01-26', 5, 0),
(36, 'Mi Lista', '2021-01-26', 5, 0),
(37, 'Mi Lista', '2021-01-27', 5, 0),
(38, 'lista pocoyo', '2021-01-27', 5, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
