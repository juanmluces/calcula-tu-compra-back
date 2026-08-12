-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2021 at 05:58 PM
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
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `image` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`) VALUES
(1, 'aperitivos', 'https://images.pexels.com/photos/4109910/pexels-photo-4109910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(2, 'bebes y niños', 'https://images.unsplash.com/photo-1584839404042-8bc21d240e91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'),
(3, 'bebidas', 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(4, 'cafés cacaos e infunsiones', 'https://images.pexels.com/photos/47316/cocoa-beans-cocoa-cacao-candy-47316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(5, 'cereales y galletas', 'https://images.pexels.com/photos/4110541/pexels-photo-4110541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(6, 'chocolates y dulces', 'https://images.pexels.com/photos/65547/pexels-photo-65547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(7, 'congelados', 'https://images.pexels.com/photos/1352245/pexels-photo-1352245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(8, 'conservas, condimentos y aceites', 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(9, 'drogueria', 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(10, 'fresco y charcutería', 'https://images.pexels.com/photos/457444/pexels-photo-457444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(11, 'lácteos y huevos', 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(12, 'mascotas', 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(13, 'panadería y repostería', 'https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
(14, 'perfumeria y parafarmacia', 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
