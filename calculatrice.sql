-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 02 mai 2023 à 19:18
-- Version du serveur :  5.7.24
-- Version de PHP : 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `calculatrice`
--

-- --------------------------------------------------------

--
-- Structure de la table `echec`
--

CREATE TABLE `echec` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `echec`
--

INSERT INTO `echec` (`id`, `created_at`) VALUES
(5, '2023-04-25 21:22:33'),
(6, '2023-04-25 21:22:42');

-- --------------------------------------------------------

--
-- Structure de la table `succes`
--

CREATE TABLE `succes` (
  `id` int(11) NOT NULL,
  `timeTakenMs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `succes`
--

INSERT INTO `succes` (`id`, `timeTakenMs`) VALUES
(1, 100),
(2, 1000),
(3, 4650),
(4, 5002),
(5, 3158),
(6, 3947),
(7, 1913),
(8, 1025),
(9, 1207);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `echec`
--
ALTER TABLE `echec`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `succes`
--
ALTER TABLE `succes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `echec`
--
ALTER TABLE `echec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `succes`
--
ALTER TABLE `succes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
