import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { username, password } = req.body;
  const body = {
    username,
    password,
  };

  try {
    const response = await fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(400).json({ message_error: (error as Error).message});
  }
}
