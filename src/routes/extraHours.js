const router = require("express").Router();
const mongojs = require("mongojs");
const db = mongojs("teleperformance-db", ["extraHours"]);

router.get("/extraHours", (req, res, next) => {
  db.extraHours.find((err, extraHours) => {
    if (err) return next(err);
    res.json(extraHours);
  });
});

router.get("/extraHours/:id", (req, res, next) => {
  db.extraHours.findOne(
    { _id: mongojs.ObjectId(req.params.id) },
    (err, extraHour) => {
      if (err) return next(err);
      res.json(extraHour);
    }
  );
});

router.post("/extraHours", (req, res, next) => {
  const extraHour = req.body;
  // if (
  //   !extraHour.documento ||
  //   !extraHour.nombre ||
  //   !extraHour.apellido ||
  //   !extraHour.fecha_ini ||
  //   !extraHour.fecha_fin ||
  //   !extraHour.horario_ini ||
  //   !extraHour.horario_fin ||
  //   !extraHour.horario_ini_extra ||
  //   !extraHour.horario_fin_extra ||
  //   !extraHour.motivo
  // ) {
  //   res.status(400).json({
  //     error: "Bad data"
  //   });
  // } else {
    db.extraHours.save(extraHour, (err, extraHour) => {
      if (err) return next(err);
      res.json(extraHour);
    });
  // }
});

router.delete("/extraHours/:id", (req, res, next) => {
  db.extraHours.remove(
    { _id: mongojs.ObjectId(req.params.id) },
    (err, result) => {
      if (err) return next(err);
      res.json(result);
    }
    );
});

router.put("/extraHours/:id", (req, res, next) => {
    const extraHour = req.body
    const updateExtraHour = {}
    
    updateExtraHour = extraHour
    
    db.extraHours.update({ _id: mongojs.ObjectId(req.params.id) }, (err, extraHour) => {
        if (err) return next(err);
        res.json(extraHour);
  });
});

module.exports = router;
