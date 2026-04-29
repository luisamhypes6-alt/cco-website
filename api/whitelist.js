const crypto = require('crypto');

module.exports = function handler(req, res) {
  const secret = process.env.DEMO_ACCESS_SECRET;
  if (!secret) {
    return res.status(500).send('Server misconfigured: missing DEMO_ACCESS_SECRET');
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/plain');

  const payload = Buffer.from(JSON.stringify({ iat: Date.now() })).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
  const token = `${payload}.${sig}`;

  res.status(200).send(token);
};
