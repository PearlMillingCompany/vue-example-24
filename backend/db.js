import path from "path";
import sqlite from "sqlite3";
const dbFile = path.join("database.sqlite");
const db = new sqlite.Database(dbFile, (error) => {
    if (error) return console.error(error.message);
    console.log(`Connected to database ${dbFile}`);
});



export const getPlayerById = (req, res) => {

    const playerId = parseInt(req.params.id);
    const query = `SELECT * FROM Player WHERE id = ?`;

    db.get(query, [playerId], (error, result) => {
        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;
        }

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });

};




export const getTeamById = (req, res) => {


    const teamId = parseInt(req.params.id);
    const query = `SELECT * FROM Team WHERE id = ?`;

    db.get(query, [teamId], (error, result) => {
        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;
        }

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });
};


export const getCountryById = (req, res) => {
    const countryId = parseInt(req.params.id);
    const query = `SELECT * FROM Country WHERE id = ?`;


    db.get(query, [countryId], (error, result) => {
        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;
        }

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });
};


export const getLeagueById = (req, res) => {
    const leagueId = parseInt(req.params.id);
    const query = `SELECT * FROM League`;

    db.get(query, [leagueId], (error, results) => {
        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;
        }

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });
};


export const getPlayerByName = app.get('/search', (req, res) => {
    const { query } = req.query;
    const sql = `SELECT * FROM players WHERE name LIKE ?`;
    const values = [`%${query}%`];
    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});




//#endregion Routes

// module.exports = {
//     getLeagueById,
//     getCountryById,
//     getTeamById,
//     getPlayerById,
// };

