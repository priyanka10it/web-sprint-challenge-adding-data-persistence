
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Lambda School',description:'Learn Code',completed:'true'},
        {project_name: 'Sprint Challenge',description:'Test Code learning',completed:''},
        {project_name: 'Build Week',description:'',completed:'true'},
      ]);
    });
};
