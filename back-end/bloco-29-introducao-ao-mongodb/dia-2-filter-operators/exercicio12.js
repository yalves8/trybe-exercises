db.heroes.countDocuments({"aspects.height": {$not: {$lte: 180}}});
