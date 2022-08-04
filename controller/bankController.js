const conn = require("../config/db.config");

//All bank list
let bankList_q = "SELECT * FROM `auth_user`";
const bankList = (req, res, next) => {
  conn.execute(bankList_q, function (err, result, field) {
    if (err) {
      console.log(err);
      res.end("{ message:'Error getting data', statuscode:400 }");
    } else {
      res.render("index", { title: "Banks", banks: result });
    }
  });
};

module.exports = {
  bankList,
};
