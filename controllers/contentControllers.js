exports.postContent = function (req, res) {
  let content = req.body.content;
  res.send(`the content posted was: ${content}`);
};

exports.getLatestContent = function (req, res) {
  res.send("The latest submitted content was");
};
