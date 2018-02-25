USE competencias;

CREATE TABLE `competencias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_competencia` varchar(100) DEFAULT NULL,
  
  PRIMARY KEY (`id`)
);


INSERT INTO `competencias` (`id`, `nombre_competencia`) VALUES (1,'Cual es la mejor comedia?'), (2,'Cual es el peor drama?'),(3, 'Cual es la mejor película de Steven Spielberg?'),(4, 'Cual es la mejor película de Di Caprio?'),(5, 'Cual es la peli de terror que mas te asusto?'),(6, 'Cual es la mejor peli de acción?'), (7, 'Cual es la mejor película de suspenso?');

UNLOCK TABLES;

