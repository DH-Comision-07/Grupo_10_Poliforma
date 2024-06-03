-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: grupo_10_poliforma
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito_productos`
--

DROP TABLE IF EXISTS `carrito_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `fecha_agregado` date NOT NULL,
  `precio_total` decimal(10,2) NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `productos_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carrito_productos_usuarios1_idx` (`usuarios_id`),
  KEY `fk_carrito_productos_productos1_idx` (`productos_id`),
  CONSTRAINT `fk_carrito_productos_productos1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrito_productos_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito_productos`
--

LOCK TABLES `carrito_productos` WRITE;
/*!40000 ALTER TABLE `carrito_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'mates'),(2,'jarrones'),(3,'macetas'),(4,'figuritas'),(5,'oficina'),(6,'lamparas');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` longtext NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `descuento` varchar(45) DEFAULT NULL,
  `categorias_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_categorias1_idx` (`categorias_id`),
  CONSTRAINT `fk_productos_categorias1` FOREIGN KEY (`categorias_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Mate Dragon','Mate de diseño con forma de dragón, ideal para disfrutar de tu bebida favorita.','mate-dragon.png',25.99,50,'10',1),(2,'Mate Wavy','Mate moderno con forma ondulada, perfecto para disfrutar del tradicional mate argentino.','pm2.jpg',19.99,40,'20',1),(3,'Lapicero Fins','Lapicero elegante y sofisticado con diseño de aletas de pez.','pm4.jpeg',9.99,30,'20',5),(4,'Jarrón Blanco','Jarrón minimalista de color blanco, perfecto para decorar tu hogar u oficina.','jarron-blanco.jpg',34.99,30,'10',2),(5,'jarron azul','un jarron azul muy bonito','image1712796675640.jpg',30.00,20,'10',2),(6,'Regadera pelota','Regadera en forma esférica con relieve de hojas','image1712345478793.jpg',20.00,10,'20',3),(7,'Coso rojo feo','un coso rojo de un fiat palio','image1712351894084.jpg',30.00,10,'20',4);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registro_compras`
--

DROP TABLE IF EXISTS `registro_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registro_compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarios_id` int(11) NOT NULL,
  `productos_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_compra` decimal(10,2) NOT NULL,
  `fecha_compra` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_registro_compras_usuarios1_idx` (`usuarios_id`),
  KEY `fk_registro_compras_productos1_idx` (`productos_id`),
  CONSTRAINT `fk_registro_compras_productos1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_registro_compras_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro_compras`
--

LOCK TABLES `registro_compras` WRITE;
/*!40000 ALTER TABLE `registro_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `registro_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `productos_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tags_productos1_idx` (`productos_id`),
  CONSTRAINT `fk_tags_productos1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `fechaNacimiento` date NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'ruben','ferrer','rubenferrerl@gmail.com','123456','administrador','mickey.jpg','1999-07-09','+58424625654','rubo'),(2,'María','González','mariagonzalez@hotmail.com','contraseña456','usuario','usuario-vacio.jpg','1992-09-22','+541987654321','mariposa'),(3,'Roberto','Suarez','admin@gmail.com','admin123','administrador','usuario-vacio.jpg','1985-12-10','+541555123456','robinhood'),(4,'Miguel','López','miguellopez@hotmail.com','mipass123','usuario','usuario-vacio.jpg','1991-07-03','+541444333222','miguelicious'),(5,'Laura','Rodríguez','laurarodriguez@gmail.com','abc123','usuario','usuario-vacio.jpg','1988-04-28','+541666777888','lauralicious'),(6,'Carlos','Gómez','carlosgomez@hotmail.com','pass123','usuario','usuario-vacio.jpg','1994-01-07','+541777888999','carlitox'),(7,'Ana','Fernández','anafernandez@gmail.com','ana123','usuario','usuario-vacio.jpg','1993-06-12','+541888999000','anabelle'),(8,'Luis','Torres','luistorres@hotmail.com','luis123','usuario','usuario-vacio.jpg','1990-09-30','+541999888777','thunderluis'),(9,'Sofía','Martínez','sofiamartinez@gmail.com','sofia456','usuario','usuario-vacio.jpg','1992-02-14','+541222333444','sofisticada'),(10,'Javier','López','javierlopez@hotmail.com','missecreto','usuario','usuario-vacio.jpg','1987-11-18','+541333444555','javelin'),(11,'Sebastián','Cavecedo','seba2100@gmail.com','popopo','administrador','image1714518520405.jpg','1987-03-08','02616570128','sebastianc'),(12,'Ernesto','Poliforma','pepepe@aasdfas','asdfasdf','usuario','image1714518844468.PNG','0004-02-01','12345678','poliformico'),(13,'prueba','hash','admin1@example.com','$2a$10$1C9R5lyuCfpuASC.wcbKvub3/Q2TJ6AOVqCrZG','usuario','image1714543424346.png','2024-05-02','+541987654323','clave');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-03 19:27:56
