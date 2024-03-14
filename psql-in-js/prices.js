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
	const query = `SELECT * FROM prices;`
	const { rows } = await client.query(query)
	return rows;
}

const getById = async (id) => {
	await client.connect()
	const query = `SELECT * FROM prices WHERE id = '${id}';`
	const { rows } = await client.query(query)
	return rows;
}

const create = async ({ product_id, store_id, price, valid_from}) => {
	await client.connect()
	const query = `INSERT INTO prices (product_id, store_id, price, valid_from) VALUES ('${product_id}', '${store_id}',${price}', '${valid_from}')`
	const { rows } = await client.query(query)
	return rows;
}

const updateById = async (id, { price, valid_from }) => {
	await client.connect()
	const query = `UPDATE prices SET price = '${price}', valid_from = '${valid_from}' WHERE id = '${id}'`
	const { rows } = await client.query(query)
	return rows;
}