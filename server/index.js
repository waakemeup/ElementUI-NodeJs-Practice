const express = require('express')
const app = express()
app.use(express.json())
app.use(require('cors')())
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const Article = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    body: { type: String }
}))

app.get('/', async(req, res) => {
    res.send('index')
})

// 新增文章
app.post('/api/articles', async(req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})

app.listen(3003, () => {
    console.log("http://localhost:3003/");
    console.log("app is listening at port 3003");
})