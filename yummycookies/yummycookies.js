function yummyCookieTracer(){
  try {
    var trace = JSON.parse(atob(document.cookie));
  }
  catch(err) {
    var trace = [];
  }
  trace.push(document.location);
  document.cookie = btoa(JSON.stringify(trace));
};
