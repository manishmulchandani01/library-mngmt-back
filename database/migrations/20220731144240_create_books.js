/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("books", (table) => {
        table.increments("id"); //PK AI
        table.string("name").notNullable();
        table.string("author").notNullable();
        table.string("borrowedBy").nullable();
        table.date("borrowDate").nullable();
        table.date("returnDate").nullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("books");
};
