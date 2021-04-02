function yummyCookieTracer(){
  try {
    var trace = JSON.parse(unescape(atob(document.cookie.replace(/\s/g, ''))));
  }
  catch(err) {
    var trace = [];
  }
  trace.push(document.location);
  document.cookie = escape(btoa(JSON.stringify(trace)));
};
