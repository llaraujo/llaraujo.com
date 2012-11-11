/**
 * Faz request de um arquivo jsonp
 */
(function(window, document, head) {
  if(!window.jsonp) {
    window.jsonp = function(url, callback, scope, charset) {
      // se for jsonp, append arquivo
      var sc     = document.createElement('script');
      sc.type    = 'text/javascript';
      sc.async   = true;
      sc.charset = charset || "utf-8";
      sc.src     = (url.url || url);// + '?ts=' + (+ new Date());

      sc.onload = sc.onreadystatechange = (function(url, callback, scope, sc){
        return function(){
          if (!sc.readyState || sc.readyState == "loaded" || sc.readyState == "complete") {
            head.removeChild(sc);
            sc.onload = sc.onreadystatechange = null;
            if(typeof callback == "function") {
              callback.call(scope || null);
            }
          }
        }
      })(url, callback, scope, sc);

      head.insertBefore(sc, head.firstChild);
      return {"o":sc};
    }
  }
}(window, document, document.getElementsByTagName("head")[0]));