import axios from "axios";

const API_ENDPOINT = "https://yourapi.com/login"; // replace with your server's endpoint

export const Auth = {
  async login(email: string, password: string): Promise<unknown> {
    // Replace any with your expected return type
    try {
      const response = await axios.post(API_ENDPOINT, { email, password });
      return response.data;
    } catch (error) {
      throw new Error("Failed to authenticate");
    }
  },

  async logout(): Promise<void> {
    try {
      await axios.post(API_ENDPOINT);
    } catch (error) {
      throw new Error("Failed to logout");
    }
  },

  async register(
    email: string,
    password: string,
    name: string
  ): Promise<unknown> {
    // Replace any with your expected return type
    try {
      const response = await axios.post(API_ENDPOINT, {
        email,
        password,
        name,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to register");
    }
  },
};
