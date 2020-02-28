'use strict'

const config = env => {
  const definedKeys = process.env

  if (!definedKeys[env]) throw new Error(`${env} is not defined`)

  return definedKeys[env]
}

module.exports = config
