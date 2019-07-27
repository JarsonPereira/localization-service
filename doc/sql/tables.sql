
CREATE TABLE State(
 id INT NOT NULL AUTO_INCREMENT ,
 name VARCHAR(80) NOT NULL ,
 initials VARCHAR(2) NOT NULL ,
 createdAt VARCHAR(40) Null,
updateAt VARCHAR(40) Null,
deleteAt VARCHAR(40) Null,
 
 PRIMARY KEY(id)
);


create Table district(
 id INT NOT NULL AUTO_INCREMENT ,
 name VARCHAR(80) NOT NULL ,
 reference VARCHAR(50) NOT NULL ,
  idCity int NOT NULL ,
  createdAt VARCHAR(40) Null,
updateAt VARCHAR(40) Null,
deleteAt VARCHAR(40) Null,
  foreign key (idCity) references city(id),
 PRIMARY KEY(id)
)




create Table street(
 id INT NOT NULL AUTO_INCREMENT ,
 name VARCHAR(80) NOT NULL ,
 postalCode decimal NOT NULL ,
 description VARCHAR(80) NOT NULL ,
 latitude VARCHAR(80) NOT NULL ,
 longitude VARCHAR(80) NOT NULL ,
 reference VARCHAR(80) NOT NULL ,
 idDistrict int  null,
createdAt VARCHAR(40) Null,
updateAt VARCHAR(40) Null,
deleteAt VARCHAR(40) Null,
 
 foreign key (idDistrict) references district(id),
 PRIMARY KEY(id)
)



create table city(
	 id INT NOT NULL AUTO_INCREMENT ,
 name VARCHAR(80) NOT NULL ,
 reference VARCHAR(80) NOT NULL ,
 idState int NOT NULL ,
  createdAt VARCHAR(40) Null,
updateAt VARCHAR(40) Null,
deleteAt VARCHAR(40) Null,
  foreign key (idState) references state(id),
 PRIMARY KEY(id)
)




insert into city (name,reference,idState) values('Araguaina','Bico do papagaio',1)
insert into street (name,postalCode,description,latitude,longitude,
reference,idDistrict) values('Rua 14',77823290,'...','254.635.54','145.987.5','final da rua',1)

Select * from street
Select * from city
select * from state
select * from district

