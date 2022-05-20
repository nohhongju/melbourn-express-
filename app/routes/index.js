import express from "express"
const indexRouter = express.Router();

indexRouter.route('/').get(function(_req, res) {
  res.json({"현재 시간 : ": new Date().toLocaleString()})
});

export default indexRouter;
