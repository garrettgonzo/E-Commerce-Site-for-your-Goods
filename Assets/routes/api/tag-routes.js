const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// router.get("/", (req, res) => {
//   // find all tags
//   res.send("connectedmonke");
//   // next();
// });

router.get("/", (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body).then((tagData) => {
    res.json(tagData);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((updatedTag) => {
    res.json(updatedTag);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedId) => {
      res.json(deletedId);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
