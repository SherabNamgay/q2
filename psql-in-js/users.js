const { Client } = require('pg');

const client = new Client({
	host: 'localhost',
	port: 5432,
	database: 'point_of_sale_db',
	user: 'sherab',
	password: '1234',
})

const getAll = async () => {
	await client.connect()
	const query = `SELECT * FROM users;`
	const { rows } = await client.query(query)
	return rows;
}

const getById = async (id) => {
	await client.connect()
	const query = `SELECT * FROM users WHERE id = '${id}';`
	const { rows } = await client.query(query)
	return rows;
}

const create = async ({ firstname, lastname, salary, store_id }) => {
	await client.connect()
	const query = `INSERT INTO users (firstname, lastname, salary, store_id) VALUES ('${firstname}', '${lastname}', '${salary}', '${store_id}')`
	const { rows } = await client.query(query)
	return rows;
}

const updateById = async (id, { salary, store_id }) => {
	await client.connect()
	const query = `UPDATE users SET salary = '${salary}', store_id = '${store_id}' WHERE id = '${id}'`
	const { rows } = await client.query(query)
	return rows;
}