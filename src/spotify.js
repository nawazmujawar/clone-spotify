export const authEndPoint = "https://accounts.spotify.com/authorize";

//* redirect URI after authorizing
const redirectUri = "http://localhost:3000/";
const clientId = "4f55a2c5140c416eba4cf02ce3b617ee";

//* scope : to give user following permission
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//* get token from response
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1) // hoping 1st section
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

//*sending everything to spotify
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
