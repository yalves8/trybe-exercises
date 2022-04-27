db.heroes.countDocuments({$or: [{"aspects.hairColor": {$in: ["Black", "No Hair"]}}]});

//ou

db.heroes.countDocuments({"aspects.hairColor": {$in: ["Black", "No Hair"]}});