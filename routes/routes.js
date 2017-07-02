var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data){
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    })
  });
  
  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.name
    }).then(function() {
      res.redirect("/");
    });
  });

  app.post("/:id", function(req, res) {
    db.Burger.update({
      devoured: true,
      customer: req.body.cname
    }, {
      where: {
        id: req.body.id
      }
    }).then(function() {
      res.redirect("/");
    });
  });

  app.post("/delete", function(req, res) {
    db.Burger.destroy({
      where: {
        devoured: true
      }
    }).then(function() {
      res.redirect("/");
    });
  });
};