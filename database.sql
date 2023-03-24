-- Active: 1677745599504@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    interests TEXT DEFAULT("[]")
    created_at TEXT NOT NULL
);
CREATE TABLE empresas (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    adress TEXT NOT NULL,
    link TEXT NOT NULL,
    image TEXT NOT NULL,
);
CREATE TABLE events (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    empresa_id TEXT NOT NULL,
    isAvalible INTEGER DEFAULT(1) NOT NULL,
    name TEXT NOT NULL,
    price REAL  NOT NULL,
    adress TEXT NOT NULL,
    type TEXT NOT NULL,
    category TEXT NOT NULL,
    buy_at TEXT NOT NULL,
    created_at TEXT NOT NULL,

    FOREIGN KEY (empresa_id) REFERENCES empresas(id)
);
CREATE TABLE events_users (
 user_id TEXT NOT NULL,
 event_id TEXT NOT NULL,
 FOREIGN KEY (user_id) REFERENCES users(id)
 FOREIGN KEY (event_id) REFERENCES events(id)
);
