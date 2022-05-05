// at_dNtGmPIIcnmeKXKEmzGwGMV1CTz6P API_KEY

// https://geo.ipify.org/api/v2/country?apiKey=at_dNtGmPIIcnmeKXKEmzGwGMV1CTz6P&ipAddress=8.8.8.8
// https://geo.ipify.org/api/v2/country?apiKey=at_dNtGmPIIcnmeKXKEmzGwGMV1CTz6P&ipAddress=8.8.8.8

// 103.136.221.164
let objectData = {};
const getAPI = async function (ip) {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_dNtGmPIIcnmeKXKEmzGwGMV1CTz6P&ipAddress=${ip}`
    );
    const data = await response.json();
    const dataObj = {
      ip: data.ip,
      location: `${data.location.city} ${data.location.country}`,
      timezone: data.location.timezone,
      isp: data.isp,
      coords: {
        lat: data.location.lat,
        lng: data.location.lng,
      },
    };
    Object.assign(objectData, dataObj);
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
};
export default getAPI;
