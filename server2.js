let app = require('express')()

app.get('/', (req, res) => {
    res.json("Welcome");
})

app.listen(3000, () => {
    console.log('server running at')
})