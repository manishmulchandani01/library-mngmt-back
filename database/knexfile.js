// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "librarydb",
            user: "postgres",
            password: "admin",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_students_migrations",
        },
    },
};
