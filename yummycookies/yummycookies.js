function yummyCookieTracer(){
  var trace = JSON.parse(atob(document.cookie));
  trace.push(document.location);
  document.cookie = btoa(JSON.stringify(trace));
};
