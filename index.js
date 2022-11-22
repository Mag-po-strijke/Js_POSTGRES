const db = require('./db')
async function create(name) {
    await db.query(`
        INSERT INTO person(
            name
        ) VALUES('${name}')
    `)
    console.log(`successe create`);
}
async function getAllPersons() {
    const users = await db.query(`
        SELECT * FROM person
    `)
    console.log(
        users.rows
    );
}
getAllPersons()