import { knex as setupKnex, Knex } from 'knex'
import path from 'path'
import { env } from './env'

export const config: Knex.Config = {
    client: env.DATABASE_CLIENT === 'sqlite' ? {
        filename: env.DATABASE_URL
    } : env.DATABASE_URL,
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