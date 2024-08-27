const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

app.get('/openfile', (req, res) => {
    const fileUrl = req.query.fileUrl; // Get the URL from query parameters

    // Serve HTML with embedded JavaScript to open the URL in a new tab
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Open File</title>
        </head>
        <body>
            <script>
                const fileUrl = ${JSON.stringify(fileUrl)};
                window.open(fileUrl, '_blank');  // Open the URL in a new browser tab
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
