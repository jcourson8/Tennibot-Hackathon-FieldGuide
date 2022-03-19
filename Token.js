import base64 from 'react-native-base64';

const client_id = 'ab69ed803f9d42d1b35bba71b0ce9237';
const client_secret = 'ab69ed803f9d42d1b35bba71b0ce9237';
var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (base64.encode(client_id + ':' + client_secret))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

export default async () => {
    const res = await fetch(url , {authOptions});
    const json = await res.json();
    const newToken = json.access_token;
    return newToken
}