'use strict';
module.exports = function(req,res,next) {
  var schema = (req.headers['x-forwarded-proto'] || '').toLowerCase();
  if (req.headers.host.indexOf('localhost')<0 && schema!=='https') {
    res.redirect('https://' + req.headers.host + req.url);
  } else {
    next();
  }
};