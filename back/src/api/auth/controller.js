const bcrypt = require('bcrypt');
const User = require('../../persistence/Users');
const jwt = require('jsonwebtoken');

module.exports = {
  async login(req, res) {
    try {
      let { email, password } = req.body;

      if (!email) return res.status(400).json({ message: 'Email Required!'});
      if (!password) return res.status(400).json({ message: 'Password Required!'});

      email = email.toLowerCase();

      const user = await User.getByEmail(email);

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return res.status(401).json({ message: 'Incorrect email or password.' });

      const body = { id: user.id, email: user.email, name: user.name, image: user.image };
      const token = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: '1d' });
        
      return res.status(200).json({ token });
    } catch (error) {
      if (error === 'USER_NOT_FOUND') return res.status(401).json({ message: 'Incorrect email or password.' });
      console.log(error);
      return res.status(500).json({ message: 'An unexpected error occured.' });
    }
  }
}