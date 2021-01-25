import BASE_URL from "./BASE_URL";
const submitForm = async (type, data) => {
  let respones;
  await fetch(`${BASE_URL}/user/${type}/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) =>
    res
      .json()
      .then((d) => {
        respones = d;
      })
      .catch((err) => {
        console.log(err);
      })
  );

  return respones;
};

export default submitForm;
