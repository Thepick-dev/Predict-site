export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const response = await fetch(
        'https://api.sheetbest.com/sheets/69572731-4558-4770-bf3e-fb0330e0f190',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
      );
      const result = await response.json();
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
