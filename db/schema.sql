DROP DATABASE IF EXISTS `tech_blog`;
CREATE DATABASE `tech_blog`;

USE `tech_blog`;

/* one to many posts, one to many comments */
CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30),
  `password` VARCHAR(32),
  PRIMARY KEY (`id`)  
);

/* many to one user, one to many comments */
CREATE TABLE `posts` (
  `id` INT NOT NULL,
  `time` DATETIME NOT NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_id) 
		REFERENCES user(id)
		ON DELETE SET NULL
);

/* many to one user, many to one post */
CREATE TABLE `comments` (
  `id` INT NOT NULL,
  `comment` VARCHAR(150) NOT NULL,
  `user_id` INT NULL,
  `post_id` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_id) 
		REFERENCES user(id)
		ON DELETE SET NULL,
  FOREIGN KEY (post_id) 
		REFERENCES posts(id)
		ON DELETE SET NULL  
);

