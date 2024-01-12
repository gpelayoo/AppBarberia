let mysql = require("mysql");

export default class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: "localhost",
            database: "barberia",
            user: "root",
            password: ""
        });

        this.connection.connect(function (err) {
            if (err) {
                throw err;
            } else {
                console.log("Conexión exitosa");
            }
        });
    }

    // Insertar
    insertData(table, data, callback) {
		const query = `INSERT INTO ${table} SET ?`;
		this.connection.query(query, data, function (err, rows) {
			if (err) {
				console.error(err);
				callback(err, null);
			} else {
				console.log("Datos insertados correctamente");
				this.connection.commit();
				callback(null, rows);
			}
		});
	}
	

    // Actualizar
    updateData(table, newData, condition) {
        const query = `UPDATE ${table} SET ? WHERE ${condition}`;
        this.connection.query(query, newData, function (err, list) {
            if (err) {
                throw err;
            } else {
                console.log("Dato modificado correctamente");
            }
        });
    }

    // Eliminar
    deleteData(table, condition) {
        const query = `DELETE FROM ${table} WHERE ${condition}`;
        this.connection.query(query, function (err, list) {
            if (err) {
                throw err;
            } else {
                console.log("Datos eliminados correctamente");
            }
        });
    }

    // Mostrar
    showData(table) {
        const query = `SELECT * FROM ${table}`;
        this.connection.query(query, function (err, list) {
            if (err) {
                throw err;
            } else {
                console.log(list);
                this.connection.end();
            }
        });
    }
}
