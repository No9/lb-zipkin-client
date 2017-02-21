module.exports = mw;

function mw () {
   return function(req, res, next) {
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, X-B3-TraceId, X-B3-ParentSpanId, X-B3-SpanId, X-B3-Sampled');
      next();
   };
}
