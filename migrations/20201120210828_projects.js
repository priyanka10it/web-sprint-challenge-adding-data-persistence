
exports.up = function(knex,Promise) {
  return knex.schema
  .createTable('projects',tbl=>{
      tbl.increments('');
      tbl.string('project_name',130).notNullable();
      tbl.string('description',130);
      tbl.boolean('completed').defaultTo('false').notNullable();
  })

  .createTable('resources',tbl=>{
      tbl.increments('');
      tbl.string('resource_name',130).notNullable().unique();
      tbl.string('description',300);
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete("RESTRICT")
      .OnUpdate("CASCADE");;
  })

  .createTable('tasks',tbl=>{
      tbl.increments('');
      tbl.string('description',300).notNullable();
      tbl.string('notes',300);
      tbl.boolean('completed').defaultTo('false').notNullable();
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  })
};

exports.down = function(knex,Promise) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
