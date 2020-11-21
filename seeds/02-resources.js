
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'computer',description:'Learn code',project_id: 1},
        {resource_name: 'microphone',description:'',project_id: 2},
        {resource_name: 'conference room',description:'',project_id: 3},
         {resource_name: 'delivery van',description:'Test code',project_id: 3},
        {resource_name: 'computer',description:' ',project_id: 2} 
      ]);
    });
};
