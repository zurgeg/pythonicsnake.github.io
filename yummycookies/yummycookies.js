function yummyCookieTracer(){
  try {
    var trace = JSON.parse(unescape(atob(document.cookie)));
  }
  catch(err) {
    var trace = [];
  }
  trace.push(document.location);
  document.cookie = escape(btoa(JSON.stringify(trace)));
};
