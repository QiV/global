/*var mock = {
  location: {
    ancestorOrigins: {},
    origin: "",
    hash: "",
    search: "",
    pathname: "",
    port: "",
    hostname: "",
    host: "",
    protocol: "",
    href: ""
  }
};*/

if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = Object.assign(global, {});
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}


