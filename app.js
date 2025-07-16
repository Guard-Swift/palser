import 'dotenv/config.js'

import express from 'express'
import createLogger from './lib/logger.js'


const app = express()

// ロガー読み込み
const logger = createLogger()

// ポート
const port = process.env.PORT || 3000

// ejsの使用
app.set('view engine', 'ejs')

// publicをアクセス可能にする
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { title: 'メインページ' })
})

app.listen(port, () => {
  logger.info(`lesson to http://localhost:${port}`)
})