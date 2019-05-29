-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: student_management_db
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grades` (
  `idgrades` int(11) NOT NULL,
  `grade` varchar(50) NOT NULL,
  PRIMARY KEY (`idgrades`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,'1'),(2,'2'),(3,'3'),(4,'4'),(5,'5'),(6,'6'),(7,'7'),(8,'8'),(9,'9'),(10,'10'),(11,'necules');
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gradessubject`
--

DROP TABLE IF EXISTS `gradessubject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gradessubject` (
  `idgradessubject` int(11) NOT NULL,
  `idgrade` int(11) NOT NULL,
  `idsubject` int(11) NOT NULL,
  PRIMARY KEY (`idgradessubject`),
  KEY `idgrade_idx` (`idgrade`),
  KEY `idsubject_idx` (`idsubject`),
  CONSTRAINT `idgrade` FOREIGN KEY (`idgrade`) REFERENCES `grades` (`idgrades`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idsubject` FOREIGN KEY (`idsubject`) REFERENCES `subject` (`idsubject`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gradessubject`
--

LOCK TABLES `gradessubject` WRITE;
/*!40000 ALTER TABLE `gradessubject` DISABLE KEYS */;
INSERT INTO `gradessubject` VALUES (1,1,1),(2,5,2),(3,6,3),(4,7,4),(5,9,7),(6,7,2),(7,1,2),(8,10,2),(10,3,2),(12,2,2);
/*!40000 ALTER TABLE `gradessubject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupa`
--

DROP TABLE IF EXISTS `grupa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupa` (
  `idgroup` int(11) NOT NULL,
  `denumire` varchar(255) NOT NULL,
  PRIMARY KEY (`idgroup`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupa`
--

LOCK TABLES `grupa` WRITE;
/*!40000 ALTER TABLE `grupa` DISABLE KEYS */;
INSERT INTO `grupa` VALUES (1,'30645'),(2,'30643'),(3,'30228'),(4,'30227'),(5,'30236'),(6,'30238'),(7,'30218'),(8,'30215'),(9,'aaa');
/*!40000 ALTER TABLE `grupa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (42),(42),(42),(42),(42);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proffesor`
--

DROP TABLE IF EXISTS `proffesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proffesor` (
  `idprof` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `subject` int(11) NOT NULL,
  PRIMARY KEY (`idprof`),
  KEY `email_idx` (`user`),
  KEY `idsubject_idx` (`subject`),
  CONSTRAINT `subject` FOREIGN KEY (`subject`) REFERENCES `subject` (`idsubject`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proffesor`
--

LOCK TABLES `proffesor` WRITE;
/*!40000 ALTER TABLE `proffesor` DISABLE KEYS */;
INSERT INTO `proffesor` VALUES (1,'prof',2);
/*!40000 ALTER TABLE `proffesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session` (
  `idsession` int(11) NOT NULL,
  `date` varchar(45) DEFAULT NULL,
  `idprof` int(11) DEFAULT NULL,
  `sala` varchar(45) DEFAULT NULL,
  `materia` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idsession`),
  KEY `idprof_idx` (`idprof`),
  CONSTRAINT `idprof` FOREIGN KEY (`idprof`) REFERENCES `proffesor` (`idprof`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES (31,'12.12.1212 12:12',NULL,'f16','inutila'),(32,'12.12.1212 12:12',1,NULL,NULL),(33,'13.13.1313 13:13',1,'f16','inutila'),(34,'2020202020',1,'s20','in plus'),(35,'333 333 333',1,'d1','asd plus'),(36,'22 22 22 22',1,'asfa','asd plus'),(37,'22 22 22 22',NULL,'asfa','asd plus'),(38,'Thu May 30 2019  16:00',NULL,'40',NULL),(39,'Sat May 25 2019  12',NULL,'1w2','asdasd'),(40,'Sun May 26 2019  12',1,'13d','gsadgad'),(41,'Sun May 26 2019  12',1,'13d','gsadgad');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `idstudent` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `cnp` varchar(45) NOT NULL,
  `idgroup` int(11) NOT NULL,
  `anstudiu` varchar(45) NOT NULL,
  `telefon` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idstudent`),
  UNIQUE KEY `cnp_UNIQUE` (`cnp`),
  KEY `idgroup_idx` (`idgroup`),
  KEY `email_idx` (`email`),
  CONSTRAINT `email` FOREIGN KEY (`email`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idgroup` FOREIGN KEY (`idgroup`) REFERENCES `grupa` (`idgroup`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (2,'aaa.aaa@student.utcluj.ro','541523',2,'3','333333'),(4,'aaa.aaa@student.utcluj.ro','12344',1,'1','0000'),(5,'andrada.luca@student.utcluj.ro','234567',2,'2','23456'),(19,'aaa.bbb@profesor.utcluj.ro','135134134',2,'6','123456'),(22,'aaa.bbb@profesor.utcluj.ro','13513224134',1,'7','123456'),(25,'aaa.bbb@profesor.utcluj.ro','092823',2,'10','14513'),(30,'aaa.aaa@student.utcluj.ro','134431314',1,'5','13131');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentgrade`
--

DROP TABLE IF EXISTS `studentgrade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `studentgrade` (
  `idstudentgrade` int(11) NOT NULL,
  `idstudent` int(11) NOT NULL,
  `idgradesubject` int(11) NOT NULL,
  PRIMARY KEY (`idstudentgrade`),
  KEY `idstudent_idx` (`idstudent`),
  KEY `idgradesubject_idx` (`idgradesubject`),
  CONSTRAINT `idgradesubject` FOREIGN KEY (`idgradesubject`) REFERENCES `gradessubject` (`idgradessubject`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idstudent` FOREIGN KEY (`idstudent`) REFERENCES `student` (`idstudent`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentgrade`
--

LOCK TABLES `studentgrade` WRITE;
/*!40000 ALTER TABLE `studentgrade` DISABLE KEYS */;
INSERT INTO `studentgrade` VALUES (1,5,2),(2,5,4),(3,5,3),(5,5,7),(6,5,2),(9,2,8),(11,2,10),(13,2,12),(16,2,1);
/*!40000 ALTER TABLE `studentgrade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subject` (
  `idsubject` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `credits` int(11) NOT NULL,
  PRIMARY KEY (`idsubject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES (1,'Calcul Numeric',4),(2,'ArhitecturaCalculatoarelor',5),(3,'Sisteme Distribuite',4),(4,'Algoritmi Fundamentali',5),(5,'Analiza Matematica',5),(6,'Matematici Speciale',4),(7,'Tehnologii Multimedia',5),(8,'Programare Orientata pe Obiecte',5);
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('aaa.aaa@student.utcluj.ro','aaa'),('aaa.bbb@profesor.utcluj.ro','123'),('aaa@secretariat.ut','123'),('admin','admin'),('andrada.luca@student.utcluj.ro','parola'),('prof','prof'),('secretara','secretara'),('user','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-30  1:51:19
