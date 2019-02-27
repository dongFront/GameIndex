SET NAMES UTF8;
DROP DATABASE IF EXISTS ms;
CREATE DATABASE ms CHARSET=UTF8;
USE ms;


CREATE TABLE ms_images (
  gid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128)
 );

INSERT INTO `ms_images`(`gid`, `img`)
	VALUES (NULL,'img/1.jpg'),
	(NULL,'img/2.jpg'),
	(NULL,'img/3.jpg'),
	(NULL,'img/4.jpg'),
	(NULL,'img/5.jpg'),
	(NULL,'img/6.jpg'),
	(NULL,'img/7.jpg'),
	(NULL,'img/8.jpg'),
	(NULL,'img/9.jpg');



CREATE TABLE ms_rotate (
  gid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128)
 );

 INSERT INTO `ms_rotate`(`gid`, `img`)
	VALUES (NULL,'img/bk1.jpg'),
	(NULL,'img/bk5.jpg'),
	(NULL,'img/bk6.jpg'),
	(NULL,'img/bk7.jpg');
	
	