
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Larn Code',notes:'',completed:'true',project_id: 1},
        {description: 'Test Code',notes:'Test',completed:'true',project_id: 2},
        {description: 'Build Week',notes:'Build code',completed:'',project_id: 3},
      ]);
    });
};
