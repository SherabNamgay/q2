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
	const query = `SELECT * FROM stores;`
	const { rows } = await client.query(query)
	return rows;
}

const getById = async (id) => {
	await client.connect()
	const query = `SELECT * FROM stores WHERE id = '${id}';`
	const { rows } = await client.query(query)
	return rows;
}

const create = async ({ address, phone }) => {
	await client.connect()
	const query = `INSERT INTO stores (phone, address) VALUES ('${phone}', '${address}')`
	const { rows } = await client.query(query)
	return rows;
}

const updateById = async (id, { address, phone }) => {
	await client.connect()
	const query = `UPDATE stores SET address = '${address}', phone = '${phone}' WHERE id = '${id}'`
	const { rows } = await client.query(query)
	return rows;
}