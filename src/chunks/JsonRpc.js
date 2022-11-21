class JsonRpc {
  constructor(url) {
    const me = this;
    if (typeof url !== "string") {
      console.error("JsonRpc constructor: the first argument (url) must be a string");
    }
    me.url = url;
  }

  genId() {
    return Math.random().toString(20).substr(2, 6);
  }

  exec(methodName, params = {}) {
    const me = this;
    const data = {
      method: methodName,
      jsonrpc: "2.0",
      id: me.genId(),
    };

    if (typeof params === "object") {
      data.params = params;
    }

    const promise = fetch(me.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json-rpc",
      },
      body: JSON.stringify(data),
    }).then(function (response) {
      return response.json();
    });

    return promise;
  }
}

const rpc = new JsonRpc(process.env.REACT_APP_BACKEND_API_URL);

export { JsonRpc, rpc };
