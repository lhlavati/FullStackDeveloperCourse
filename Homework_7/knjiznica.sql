CREATE DATABASE knjiznica;
USE knjiznica;

CREATE TABLE knjige (
	id INT PRIMARY KEY NOT NULL,
    naslov VARCHAR(100) NOT NULL,
    zanr VARCHAR(100),
    autor INT
);

CREATE TABLE autori (
	id INT PRIMARY KEY NOT NULL,
    ime VARCHAR(50) NOT NULL,
    prezime VARCHAR(50) NOT NULL,
    datumRodenja DATE
);

CREATE TABLE clanovi (
	id INT PRIMARY KEY NOT NULL,
    ime VARCHAR(50) NOT NULL,
    prezime VARCHAR(50) NOT NULL,
    adresa VARCHAR(100),
    kontakt VARCHAR(50) NOT NULL,
    clanarina FLOAT,
    posudba INT
);

CREATE TABLE posudbe (
	id INT PRIMARY KEY NOT NULL,
    datumPosudbe DATE NOT NULL,
    datumVracanja DATE NOT NULL,
    knjiga INT
);

ALTER TABLE knjige ADD FOREIGN KEY (autor) REFERENCES autori(id);
ALTER TABLE clanovi ADD FOREIGN KEY (posudba) REFERENCES posudbe(id);
ALTER TABLE posudbe ADD FOREIGN KEY (knjiga) REFERENCES knjige(id);

INSERT INTO knjige VALUES(1, "Romeo i Julija", "Tragedija", 1);
INSERT INTO autori VALUES(1, "William", "Shakespeare", null);
INSERT INTO clanovi VALUES(1, "Luka", "Hlavati", null, "lukahlavati@gmail.com", 4.99, 1);
INSERT INTO posudbe VALUES(1, "2023-01-01", "2023-02-01", 1);

UPDATE clanovi SET clanarina = 3.99 WHERE clanovi.id=1;

DELETE FROM knjige WHERE knjige.id=1;
DELETE FROM autori WHERE autori.id=1;
DELETE FROM clanovi WHERE clanovi.id=1;
DELETE FROM posudbe WHERE posudbe.id=1;

SELECT * FROM knjige;
SELECT * FROM autori;
SELECT * FROM clanovi;
SELECT * FROM posudbe;