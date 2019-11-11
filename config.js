import dotenv from 'dotenv'

dotenv.config({ path: `${__dirname}/.env` })

if (process.env.TC_ENV) {
  const config = dotenv.config({ path: `${__dirname}/.env.${process.env.TC_ENV}` })
  Object.assign(process.env, config.parsed)
}

export default process.env
