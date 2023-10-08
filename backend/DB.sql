CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `login` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `results` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `accepted` BOOLEAN NOT NULL,
  `guests` INTEGER NOT NULL,
  `namesGuests` TEXT NOT NULL,
  `dietaryReq` TEXT,
  `contactName` VARCHAR(255),
  `contactPhone` VARCHAR(255),
  `contactEmail` VARCHAR(255),
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);
/* 
crear bd invitation
preferible usar: migraciones

comandos para las migraciones y seeder para el usuario admin: 
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all   
*/
