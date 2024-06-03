-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2021 at 05:06 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_florist`
--
CREATE DATABASE IF NOT EXISTS `db_florist` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_florist`;

-- --------------------------------------------------------

--
-- Table structure for table `deals`
--

CREATE TABLE `deals` (
  `deals_id` int(11) NOT NULL,
  `flower_id` int(11) NOT NULL,
  `discount_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deals`
--

INSERT INTO `deals` (`deals_id`, `flower_id`, `discount_price`) VALUES
(1, 1, 110000),
(2, 2, 100000),
(3, 3, 110000),
(4, 4, 90000);

-- --------------------------------------------------------

--
-- Table structure for table `flower`
--

CREATE TABLE `flower` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `stock` int(11) NOT NULL,
  `image` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flower`
--

INSERT INTO `flower` (`id`, `name`, `price`, `description`, `stock`, `image`, `category`) VALUES
(1, 'Bouquet1', 150000, 'Purple Bouquet', 10, 'bouquet1.jpg', 'bouquet'),
(2, 'Bouquet2', 150000, 'Pink Bouquet', 15, 'bouquet2.jpg', 'bouquet'),
(3, 'Bouquet 3', 150000, 'Bouquet 3', 12, 'bouquet3.jpg', 'bouquet'),
(4, 'Bouquet 4', 150000, 'Bouquet 4', 10, 'bouquet4.jpg', 'bouquet');

-- --------------------------------------------------------

--
-- Table structure for table `flower_order`
--

CREATE TABLE `flower_order` (
  `id` int(11) NOT NULL,
  `flower_id` int(11) NOT NULL,
  `recipent_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flower_order`
--

INSERT INTO `flower_order` (`id`, `flower_id`, `recipent_id`, `quantity`, `total_price`) VALUES
(3, 2, 2, 1, 100000),
(4, 1, 3, 2, 220000);

-- --------------------------------------------------------

--
-- Table structure for table `recipient`
--

CREATE TABLE `recipient` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `post_code` varchar(10) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipient`
--

INSERT INTO `recipient` (`id`, `name`, `email`, `city`, `post_code`, `phone`, `address`) VALUES
(2, 'tubagus', '0812121', 'rrr@gmail.com', 'Bandung ', '40511', 'Bandung'),
(3, 'refdinal tubagus', '0912121', 'test@gmail.com', 'Bandung ', '40511', 'Bandung');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `deals`
--
ALTER TABLE `deals`
  ADD PRIMARY KEY (`deals_id`),
  ADD KEY `flower_id` (`flower_id`);

--
-- Indexes for table `flower`
--
ALTER TABLE `flower`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flower_order`
--
ALTER TABLE `flower_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `flower_id` (`flower_id`),
  ADD KEY `recipent_id` (`recipent_id`);

--
-- Indexes for table `recipient`
--
ALTER TABLE `recipient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `deals`
--
ALTER TABLE `deals`
  MODIFY `deals_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `flower`
--
ALTER TABLE `flower`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `flower_order`
--
ALTER TABLE `flower_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `recipient`
--
ALTER TABLE `recipient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `deals`
--
ALTER TABLE `deals`
  ADD CONSTRAINT `flower_id` FOREIGN KEY (`flower_id`) REFERENCES `flower` (`id`);

--
-- Constraints for table `flower_order`
--
ALTER TABLE `flower_order`
  ADD CONSTRAINT `flower_order_id` FOREIGN KEY (`flower_id`) REFERENCES `flower` (`id`),
  ADD CONSTRAINT `recipient` FOREIGN KEY (`recipent_id`) REFERENCES `recipient` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
