export const saveContact = (info) => {
  fetch("http://localhost:3004/amigos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(info)
  })
    .then(res => res.json())
    .then(result => {
      console.log(result, 'result');
    });
}