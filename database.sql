-- Active: 1677745599504@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    interests TEXT DEFAULT('{"types:[],"category":[]"}'),
    created_at TEXT NOT NULL
);
CREATE TABLE empresas (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    adress TEXT NOT NULL,
    link TEXT NOT NULL,
    image TEXT NOT NULL
);


CREATE TABLE events (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,     
    empresa_id TEXT NOT NULL,
    isAvalible INTEGER DEFAULT(1) NOT NULL,
    name TEXT NOT NULL,
    price REAL  NOT NULL,
    adress TEXT NOT NULL,
    type TEXT NOT NULL,
    category TEXT NOT NULL,
    links_sales TEXT DEFAULT('') NOT NULL,
    image TEXT NOT NULL,
    about TEXT NOT NULL,
    start_at TEXT NOT NULL,
    created_at TEXT NOT NULL,

    FOREIGN KEY (empresa_id) REFERENCES empresas(id),
    FOREIGN KEY (creator_id) REFERENCES users(id)
);

DROP TABLE events;



CREATE TABLE events_users (
 user_id TEXT NOT NULL,
 event_id TEXT NOT NULL,
 FOREIGN KEY (user_id) REFERENCES users(id)
 FOREIGN KEY (event_id) REFERENCES events(id)
);


INSERT INTO users(id, name, email,password,role,interests,created_at)
VALUES
("7dab31e0-bd9d-4dc3-bc00-e94bed677a5d","Monica","monica@email.com","$2a$12$5/iOw0rmAeqrwjt5tGDF/OE5GA5C.7u5XHQmPcMXr7tIyWNjDTo1e","ADMIN",'{"types":["Arte","Musica"],"category":["Rock","Pop"]}',"2023-03-25T10:52:35.627Z"),
("7dab31e0-bd9d-4dc3-bc00-e94bed677a5c","Marina","marina@email.com","$2a$12$5/iOw0rmAeqrwjt5tGDF/OE5GA5C.7u5XHQmPcMXr7tIyWNjDTo1e","NORMAL",'{"types":["Arte","Musica"],"category":["Rock","Pop"]}',"2023-03-25T10:52:35.627Z"),
("7dab31e0-bd9d-4dc3-bc00-e94bed677a5b","Samantha","samantha@email.com","$2a$12$5/iOw0rmAeqrwjt5tGDF/OE5GA5C.7u5XHQmPcMXr7tIyWNjDTo1e","EMPRESA",'{"types:[],"category":[]"}',"2023-03-25T10:52:35.627Z");

INSERT INTO empresas 
VALUES
("6dab31e0-bd9d-4dc3-bc00-e94bed677a5d","empresa 1",'{"rua":"seila oq","numero":100,"bairro":"Centro","cep":20102102}',"https://empresa.dominio.com","https://picsum.photos/200"),
("6dab31e0-bd9d-4dc3-bc00-e94bed677a5c","empresa 2",'{"rua":"seila oq","numero":100,"bairro":"Barra da Tijuca","cep":20102102}',"https://empresa.dominio.com","https://picsum.photos/200"),
("6dab31e0-bd9d-4dc3-bc00-e94bed677a5b","empresa 3",'{"rua":"seila oq","numero":100,"bairro":"Porto","cep":20102102}',"https://empresa.dominio.com","https://picsum.photos/200");

INSERT INTO events
VALUES
("5dab31e0-bd9d-4dc3-bc00-e94bed677a5d","7dab31e0-bd9d-4dc3-bc00-e94bed677a5b","6dab31e0-bd9d-4dc3-bc00-e94bed677a5d",1,"Evento 1",19.90,'{"rua":"seila oq","numero":100,"bairro":"Centro","cep":"20102-102"}',"Musica","Rock",'["http//teste.com"]',"https://picsum.photos/200","Evento 1 criado para ser mokado e ter uma noção de como a tela de detalhes sera apresentada","2023-04-25T10:52:35.627Z","2023-03-25T10:52:35.627Z"),
("5dab31e0-bd9d-4dc3-bc00-e94bed677a5c","7dab31e0-bd9d-4dc3-bc00-e94bed677a5b","6dab31e0-bd9d-4dc3-bc00-e94bed677a5c",1,"Evento 2",29.90,'{"rua":"seila oq","numero":100,"bairro":"Barra da Tijuca","cep":"20102-102"}',"Teatro","Comedia",'["http//teste.com"]',"https://picsum.photos/200","Evento 2 criado para ser mokado e ter uma noção de como a tela de detalhes sera apresentada","2023-04-25T10:52:35.627Z","2023-03-25T10:52:35.627Z"),
("5dab31e0-bd9d-4dc3-bc00-e94bed677a5b","7dab31e0-bd9d-4dc3-bc00-e94bed677a5b","6dab31e0-bd9d-4dc3-bc00-e94bed677a5b",1,"Evento 3",9.90,'{"rua":"seila oq","numero":100,"bairro":"Porto","cep":"20102-102"}',"Esposição","Moderna",'["http//teste.com"]',"https://picsum.photos/200","Evento 3 criado para ser mokado e ter uma noção de como a tela de detalhes sera apresentada","2023-04-25T10:52:35.627Z","2023-03-25T10:52:35.627Z"),
("5dab31e0-bd9d-4dc3-bc00-e94bed677a5a","7dab31e0-bd9d-4dc3-bc00-e94bed677a5b","6dab31e0-bd9d-4dc3-bc00-e94bed677a5d",1,"Evento 4",49.90,'{"rua":"seila oq","numero":100,"bairro":"Centro","cep":"20102-102"}',"Musica","Pagode",'["http//teste.com"]',"https://picsum.photos/200","Evento 4 criado para ser mokado e ter uma noção de como a tela de detalhes sera apresentada","2023-03-26T10:52:35.627Z","2023-03-25T10:52:35.627Z");
