
const path = require('path')
const fs = require('fs')
const YAML = require('yaml')

module.exports = function () {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(process.cwd(), './app/CONFIG.yaml'), 'utf-8', (err, data) => {
      if (err) reject(err)

      resolve(YAML.parse(data))
    })
  })
}

/*
const path = require('path')

function loadConfig () {
  require('dotenv').config({
    path: path.resolve(process.cwd(), './app/.config')
  })
}

module.exports = loadConfig
*/
