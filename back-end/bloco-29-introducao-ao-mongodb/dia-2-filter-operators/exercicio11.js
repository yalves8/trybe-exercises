db.heroes.countDocuments({$nor: [{"aspects.hairColor": {$in: ["Black", "No Hair"]}}]});
