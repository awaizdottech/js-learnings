let makerequest = (resource) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(request);
      } else if (request.readyState === 4) {
        reject(request.status);
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

let request = {
  json: function (data) {
    return JSON.parse(data.responseText);
  },
};

makerequest("p.json")
  .then((data) => {
    console.log(data);
    return request.json(data);
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
