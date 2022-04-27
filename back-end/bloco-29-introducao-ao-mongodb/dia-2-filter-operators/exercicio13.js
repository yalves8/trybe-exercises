db.heroes.find({$nor: [{"race": "Human"}, {"aspects.height": {$lt:180 }}]});
