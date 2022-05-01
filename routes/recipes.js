var recipes = require("../recipes.json");
var router = require("express").Router();

router.get("/shopping-list", (req, res) => {
  console.log(` RRR ${req}`);
  const ids = req.query.ids || [];

  if (ids && ids.length === 0) {
    res.status(400).send();
    return;
  }
  let ingredientArray = [];
  const idsArray = ids.split(",");
  for (const recipe of recipes) {
    if (idsArray && idsArray.includes(recipe.id.toString())) {
      ingredientArray = [...ingredientArray, ...recipe.ingredients];
    }
  }
  if (ingredientArray.length > 0) {
    res.status(200).send(ingredientArray);
    return;
  } else {
    res.status(404).send("NOT_FOUND");
    return;
  }
});
module.exports = router;
