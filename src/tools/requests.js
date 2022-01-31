import axios from 'axios';

export async function requestUser(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response;
  }
  catch (err) {
    return err.response;
  }
}