const express = require("express");
const app = express();
const port = 3000;

app.get("/openfile", (req, res) => {
  const fileUrl = req.query.url;

  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Open File</title>
        </head>
        <body>
            <script>
                const fileUrl = ${JSON.stringify(fileUrl)};
                   window.open(fileUrl); 
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
