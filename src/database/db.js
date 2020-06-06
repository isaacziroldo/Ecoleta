const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     const query = `
//         INSERT INTO places(
//             image,name, address, address2, state, city, items
//         ) VALUES(
//             ?,?,?,?,?,?,?
//         );
// `
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Colectoria",
//         "Guilherme Gembalia, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log('cadastrado com sucesso!')
//         console.log(this)
//     }
//     //db.run(query, values, afterInsertData);

//     //consulta

    // db.all(` SELECT * FROM places`,(err,rows)=>{
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão os seus registros")
    //     console.log(rows)
    // })

    //delete

    // db.run(`DELETE FROM places WHERE id = ?`,[6], err=>{
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Deletado com sucesso")
    // })
})

