(function(){

  function isValidEmail(v, opts) {
    if (!v) return false;
    opts = opts || {};
    var len = opts.length || 4;
    var re = new RegExp('^[0-9]{' + len + '}$', 'gi');
    return re.test(v);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidEmail;
  } else {
    window.isValidEmail = isValidEmail;
  }

})();
