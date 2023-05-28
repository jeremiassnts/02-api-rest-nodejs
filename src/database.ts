import { knex as setupKnex, Knex } from 'knex'
import path from 'path'
import { env } from './env'

export const config: Knex.Config = {
    client: 'sqlite',
    connection: {
        filename: path.join(__dirname, env.DATABASE_URL)
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: path.join(__dirname, '../db/migrations')
    }
}
export const knex = setupKnex(config)