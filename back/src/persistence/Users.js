const db = require('./db');

module.exports = {
  async getByEmail(email) {
     try {
       let rows = await db('users').where({ email });
       if (!rows || !rows.length) throw 'USER_NOT_FOUND';
       const user = rows[0];
       return user;
     } catch (error) {
       throw error;
     }
  }
}