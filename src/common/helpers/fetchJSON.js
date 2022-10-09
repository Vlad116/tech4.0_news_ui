// import cors from "cors";

// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// cors(corsOptions);

export const fetchJSON = async (url, reqParams) => {
  console.log(url);

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  const params = {
    method: "GET",
    mode: "cors",
    headers: headers,
    referrer: "",
    ...reqParams,
  };

  let response = await fetch(url, params);
  //   let response =
  //     reqParams === null
  //       ? await fetch(url, {
  //           mode: "no-cors",
  //           method: "GET",
  //         })
  //       : await fetch(url, reqParams);

  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
};
