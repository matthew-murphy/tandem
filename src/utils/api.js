import axios from 'axios';

class API {
  axiosInstance = null;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: "https:// secure.shippingapis.com/TrackRequest/122PERSO425",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async uspsTrack(trackID) {
    try {
      const response = await this.axiosInstance.get(`/${trackID}`)
      return response;
    } catch (err) {
      helpMe(err);
    }
  }


  async upsTrack() {
    try {
      const response = await this.axiosInstance.get("/messages?limit=100&offset=0")
      return Object.keys(response.messages).map(key => response.messages[key])
    } catch (err) {
      helpMe(err);
    }
  }

  async createUser(user) {
    try {
      await this.axiosInstance.post('/users',
        user
      );
    } catch (err) {
      helpMe(err);
      return err;
    }
  }

  async deleteUser(username) {
    try {
      await this.axiosInstance.delete(`/users/${username}`);
    } catch (err) {
      return err;
    }
  }

  async putUserPicture(username, formData) {
    try {
      await this.axiosInstance.put(`/users/${username}/picture`,
        formData
      );
    } catch (err) {
      return err;
    }
  }

  async postMessage(text) {
    try {
      const response = await this.axiosInstance.post('/messages',
        text
      );
      return response
    } catch (err) {
      return err;
    }
  }

  async postlike(messageId) {
    try {
      const response = await this.axiosInstance.post('/likes', {
        messageId
      });
      return response
    } catch (err) {
      return err;
    }
  }

  async deleteLike(likeId) {
    try {
      const response = await this.axiosInstance.delete(`/likes/${likeId}`);
      console.log(response)
      return response
    } catch (err) {
      return err;
    }
  }

  async updateUser({ password, about, displayName }, username) {
    try {
      const response = await this.axiosInstance.patch(`/users/${username}`,
        { password, about, displayName }
      );
      return response
    } catch (err) {
      console.log(err)
      return err;
    }
  }

  async getUserPicture(username) {
    try {
      await this.axiosInstance.get(`/users​/${username}​/picture`);
    } catch (err) {
      helpMe(err);
      return err;
    }
  }

  async userList(limit, offset) {
    try {
      const response = await this.axiosInstance.get(`/users?limit=${limit}&offset=${offset}`)
      return response
    } catch (err) {
      helpMe(err);
    }
  }

}




function helpMe(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
