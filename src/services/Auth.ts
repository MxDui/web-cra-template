import axios from "axios";

export const Auth = {
  async login(email: string, password: string): Promise<unknown> {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/login",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to authenticate");
    }
  },

  async logout(): Promise<void> {
    try {
      await axios.post(import.meta.env.VITE_API_URL + "/logout");
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
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/register",
        {
          email,
          password,
          name,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to register");
    }
  },
};
