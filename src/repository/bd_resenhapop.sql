create database bd_resenhapop;
use bd_resenhapop;

create table users(
	id_users  	int auto_increment primary key,
    name 	  	varchar(64),
    surname		varchar(64),
	username  	varchar(64),
	email		varchar(64),
    password  	varchar(34),
    telephone 	varchar(11)
);