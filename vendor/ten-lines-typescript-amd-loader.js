window.define = function(name, required, moduleFn) {
  var require = function() { throw new Error("AMD require not supported!")}
  var exports = window.define.modules[name] = {}
  var resolved = [require, exports]
  for (var i = 2; i < required.length; i++) {
    var m = window.define.modules[required[i]]
    if (!m) throw new Error("AMD module `" + required[i] + "` not found!")
    resolved.push(m)
  }
  moduleFn.apply(null, resolved)
}
window.define.modules = {}