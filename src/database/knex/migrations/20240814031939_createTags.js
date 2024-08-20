exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name").notNullable();
  
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); // quando uma nota é deletada, ou seja seu note_id é deletado faz com que a tags tambem seja deletada
    table.integer("user_id").references("id").inTable("users");
  });
  
  exports.down = knex => knex.schema.dropTable("tags");