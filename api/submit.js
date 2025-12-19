export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // Optional: log data to console (visible in Vercel dashboard)
      console.log('New submission:', data);

      // TODO: If using sheet.best, send the data there:
      // const sheetRes = await fetch('https://api.sheetbest.com/sheets/YOUR-SHEET-ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      // const sheetResult = await sheetRes.json();

      res.status(200).json({ success: true, result: data });
    } catch (err) {
      console.error('Submit error:', err);
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
