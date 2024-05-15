const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'pingpong@1',
    database: 'mobile',
});

async function getAll() {
    const query = 'SELECT * FROM Mobiles';
    const [data] = await connection.promise().query(query);
    return data;
}

async function remove(id) {
    const query = 'DELETE FROM Mobiles WHERE id = ?';
    await connection.promise().query(query, [id]);
    return;
 
}

async function insert(mobile) {
    const query = 'INSERT INTO Mobiles (timecreate, product, description, price, quantity) VALUES ( ?, ?, ?, ?, ?)';
    const [result] = await connection.promise().query(query, [mobile.timecreate, mobile.product, mobile.description,mobile.price,mobile.quantity]);
    return { ...mobile, id: result.insertId };
}
  
async function update(mobile) {
    const query = 'UPDATE Mobiles SET timecreate = ?, product = ?, description = ?, price = ?, quantity = ? WHERE id = ?';
    await connection.promise().query(query, [mobile.timecreate, mobile.product, mobile.description,mobile.price,mobile.quantity, mobile.id]);
    return mobile;
}

  
async function get(id) {
    const query = 'SELECT * FROM Mobiles WHERE id = ?';
    const [data] = await connection.promise().query(query, [id]);
    return data.pop();
}
function save(mobile) {
    if (!mobile.id) {
      return insert(mobile);
    } else {
      return update(mobile);
    }
}

module.exports = {getAll, remove, get,save};

