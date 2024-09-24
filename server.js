const express = require("express");
const app = express();
const port = 5001;
//need to create a route for it /openfile

//inorder to access the path /openfile 

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
                console.log('Opening URL:', fileUrl); // Debugging line
                window.open(fileUrl); 
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
