export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('Payload received:', req.body);

      // You can add your actual saving logic here (e.g., database, Google Sheets, etc.)
      res.status(200).json({ success: true, result: 'Submission received' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
