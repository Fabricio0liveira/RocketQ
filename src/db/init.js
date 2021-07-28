//Database, estã importando oq colocamos no config.
const Database = require('./config')

//initDb =  Essa variável é para guardar nossas functions aqui dentro
const initDb = {
    async init() {
        const db = await Database()

        //no exex() é onde vai o código para criar a nossa tabela.
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        //Depois de fazer tudo, fecha a conexão com o banco de dados
        await db.close()
    }
}

initDb.init();

