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
	const query = `SELECT * FROM products;`
	const { rows } = await client.query(query)
	return rows;
}

const getById = async (id) => {
	await client.connect()
	const query = `SELECT * FROM products WHERE id = '${id}';`
	const { rows } = await client.query(query)
	return rows;
}

const create = async ({ name, barcode, is_perishable, days_to_perish }) => {
	await client.connect()
	const query = `INSERT INTO products (name, barcode, is_perishable, days_to_perish) VALUES ('${name}', '${barcode}','${is_perishable}','${days_to_perish}')`
	const { rows } = await client.query(query)
	return rows;
}

const updateById = async (id, {days_to_perish}) => {
	await client.connect()
	const query = `UPDATE products SET days_to_perish = '${days_to_perish}' WHERE id = '${id}'`
	const { rows } = await client.query(query)
	return rows;
}