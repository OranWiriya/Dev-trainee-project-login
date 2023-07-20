import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const {firstname, lastname, username, password } = req.body;
  const body = {
    firstname,
    lastname,
    username,
    password,
  };

  try {
    const response = await fetch('http://localhost:8000/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Register failed');
    }

    res.status(200).json({ message: 'Register successful' });
  } catch (error) {
    res.status(400).json({ message_error: (error as Error).message});
  }
}
