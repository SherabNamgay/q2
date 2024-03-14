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
	const query = `SELECT * FROM stocks;`
	const { rows } = await client.query(query)
	return rows;
}

const getById = async (id) => {
	await client.connect()
	const query = `SELECT * FROM stocks WHERE id = '${id}';`
	const { rows } = await client.query(query)
	return rows;
}

const create = async ({product_id, store_id, amount, manufacture_date, arrival_datetime}) => {
	await client.connect()
	const query = `INSERT INTO stocks (product_id, store_id, amount, manufacture_date, arrival_datetime) VALUES ('${product_id}', '${store_id}','${amount}','${manufacture_date},'${arrival_datetime}'')`
	const { rows } = await client.query(query)
	return rows;
}

const updateById = async (id, {amount,arrival_datetime}) => {
	await client.connect()
	const query = `UPDATE stocks SET amount ='${amount}', arrival_datetime = '${arrival_datetime}' WHERE id = '${id}'`
	const { rows } = await client.query(query)
	return rows;
}