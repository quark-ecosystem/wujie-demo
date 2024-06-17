const map = {
    "//localhost:7200/": "//hellof2e.github.io/wujie-vue2.io/",
    "//localhost:7400/": "//hellof2e.github.io/wujie-angular.io/",
    "//localhost:7600/": "//hellof2e.github.io/wujie-react.io/",
  };
  
  const env = import.meta.env.MODE || 'pro';
  export default function hostMap(host) {
    if (env === "pro") return map[host];
    return host;
  }