const API_BASE_URL = "http://localhost:3000/api/v1";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string | null;
    phone: string | null;
    name: string;
    role: string;
    isOnboarded: boolean;
  };
}

export const authService = {
  // Login with Firebase ID token
  async login(idToken: string, deviceInfo?: any): Promise<LoginResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken, deviceInfo }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  },

  // Refresh access token
  async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Token refresh failed");
    }

    return response.json();
  },

  // Logout
  async logout(refreshToken: string): Promise<void> {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
  },
};
