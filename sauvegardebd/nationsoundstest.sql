-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : dim. 25 fév. 2024 à 15:45
-- Version du serveur : 11.2.2-MariaDB
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nationsoundstest`
--

-- --------------------------------------------------------

--
-- Structure de la table `alerte`
--

DROP TABLE IF EXISTS `alerte`;
CREATE TABLE IF NOT EXISTS `alerte` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Titre` varchar(191) NOT NULL,
  `Type` varchar(191) NOT NULL,
  `Texte` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Id_user` bigint(20) UNSIGNED NOT NULL,
  `Id_concert` bigint(20) UNSIGNED NOT NULL,
  `Texte` text NOT NULL,
  `Note` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `commentaire_id_user_foreign` (`Id_user`),
  KEY `commentaire_id_concert_foreign` (`Id_concert`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `concert`
--

DROP TABLE IF EXISTS `concert`;
CREATE TABLE IF NOT EXISTS `concert` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Groupe` varchar(191) NOT NULL,
  `Horaires` int(11) NOT NULL,
  `Scene` varchar(191) NOT NULL,
  `Descriptif` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `Id_lieu` bigint(20) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `concert_id_lieu_foreign` (`Id_lieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `genre`
--

DROP TABLE IF EXISTS `genre`;
CREATE TABLE IF NOT EXISTS `genre` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nom` varchar(191) NOT NULL,
  `Id_concert` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `Id_lieu` bigint(20) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `genre_id_concert_foreign` (`Id_concert`),
  KEY `genre_id_lieu_foreign` (`Id_lieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `lieu`
--

DROP TABLE IF EXISTS `lieu`;
CREATE TABLE IF NOT EXISTS `lieu` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_12_18_163524_create_alerte_table', 1),
(5, '2023_12_18_163535_create_commentaire_table', 1),
(6, '2023_12_18_163542_create_concert_table', 1),
(7, '2023_12_18_163558_create_genre_table', 1),
(8, '2023_12_18_163603_create_lieu_table', 1),
(9, '2023_12_18_163801_create_partenaire_table', 1),
(10, '2023_12_18_163830_create_points_interets_table', 1),
(11, '2023_12_18_163855_create_preference_table', 1),
(12, '2023_12_18_163919_create_scene_table', 1),
(13, '2023_12_18_163938_create_utilisateurs_table', 1),
(14, '2023_12_18_190448_delete_id_double', 1);

-- --------------------------------------------------------

--
-- Structure de la table `partenaire`
--

DROP TABLE IF EXISTS `partenaire`;
CREATE TABLE IF NOT EXISTS `partenaire` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Catégories` varchar(191) NOT NULL,
  `Nom` varchar(191) NOT NULL,
  `Logo` bigint(20) UNSIGNED NOT NULL,
  `Url` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `Id_concert` bigint(20) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partenaire_id_concert_foreign` (`Id_concert`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `points_interets`
--

DROP TABLE IF EXISTS `points_interets`;
CREATE TABLE IF NOT EXISTS `points_interets` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Type` varchar(191) NOT NULL,
  `Nom` varchar(191) NOT NULL,
  `Id_lieu` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `points_interets_id_lieu_foreign` (`Id_lieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `preference`
--

DROP TABLE IF EXISTS `preference`;
CREATE TABLE IF NOT EXISTS `preference` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Id_user` bigint(20) UNSIGNED DEFAULT NULL,
  `Theme` varchar(191) NOT NULL,
  `Genre` varchar(191) NOT NULL,
  `Notification` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `preference_id_user_foreign` (`Id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `scene`
--

DROP TABLE IF EXISTS `scene`;
CREATE TABLE IF NOT EXISTS `scene` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nom` varchar(191) NOT NULL,
  `Type` varchar(191) NOT NULL,
  `Id_lieu` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `scene_id_lieu_foreign` (`Id_lieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `utilisateurs_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `fk_commentaire_concert` FOREIGN KEY (`Id_concert`) REFERENCES `concert` (`id`),
  ADD CONSTRAINT `fk_commentaire_user` FOREIGN KEY (`Id_user`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `concert`
--
ALTER TABLE `concert`
  ADD CONSTRAINT `fk_concert_lieu` FOREIGN KEY (`Id_lieu`) REFERENCES `lieu` (`id`);

--
-- Contraintes pour la table `genre`
--
ALTER TABLE `genre`
  ADD CONSTRAINT `fk_genre_concert` FOREIGN KEY (`Id_concert`) REFERENCES `concert` (`id`),
  ADD CONSTRAINT `fk_genre_lieu` FOREIGN KEY (`Id_lieu`) REFERENCES `lieu` (`id`);

--
-- Contraintes pour la table `partenaire`
--
ALTER TABLE `partenaire`
  ADD CONSTRAINT `fk_partenaire_concert` FOREIGN KEY (`Id_concert`) REFERENCES `concert` (`id`);

--
-- Contraintes pour la table `points_interets`
--
ALTER TABLE `points_interets`
  ADD CONSTRAINT `fk_points_interets_lieu` FOREIGN KEY (`Id_lieu`) REFERENCES `lieu` (`id`);

--
-- Contraintes pour la table `preference`
--
ALTER TABLE `preference`
  ADD CONSTRAINT `fk_preference_user` FOREIGN KEY (`Id_user`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `scene`
--
ALTER TABLE `scene`
  ADD CONSTRAINT `fk_scene_lieu` FOREIGN KEY (`Id_lieu`) REFERENCES `lieu` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
