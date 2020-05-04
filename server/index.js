const express = require('express')
const { Nuxt } = require('nuxt')
const serverless = require('serverless-http')
// Add Nuxt
let nuxtConfig = require('../nuxt.config.js')

const config = {
  dev: false,
  ...nuxtConfig
}

const nuxt = new Nuxt(config)

const app = express()

app.use('/_nuxt', (req, res) =>
  res.redirect(process.env.ASSETS_BUCKET_URL + req.path)
)

app.use('/static', (req, res) =>
  res.redirect(process.env.STATIC_BUCKET_URL + req.path)
)

app.use(async (req, res, next) => {
  await nuxt.ready()

  req.url = `${nuxtConfig.router.base}${req.url}`.replace('//', '/')

  console.log(`うんこ`)
  console.log(`${req.url}`)
  nuxt.render(req, res, next)
})

exports.render = serverless(app)
