import { knex as setupKnex, Knex } from 'knex'
import path from 'path'
export const config: Knex.Config = {
    client: 'sqlite',
    connection: {
        filename: path.join(__dirname, '../db/app.db')
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: path.join(__dirname, '../db/migrations')
    }
}
export const knex = setupKnex(config)