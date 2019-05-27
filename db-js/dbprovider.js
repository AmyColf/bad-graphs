const dbProvider = (inDb) => {
  var db = inDb;
  return function(req, res, next) {
    req.db = inDb;
    next();
  };
};

module.exports = dbProvider;
