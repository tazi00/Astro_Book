import { useState } from "react";
import {
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  type ConfirmationResult,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { authService } from "@/services/authService";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1️⃣ PHONE LOGIN (OTP)
  const loginWithPhone = async (phoneNumber: string) => {
    try {
      setLoading(true);
      setError(null);

      // 🔐 DEV MODE ONLY — disable app verification
      if (process.env.NODE_ENV === "development") {
        auth.settings.appVerificationDisabledForTesting = true;
      }

      // ✅ Create reCAPTCHA only once
      if (!(window as any).recaptchaVerifier) {
        (window as any).recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
          },
        );

        // Optional: pre-render (avoids some race conditions)
        await (window as any).recaptchaVerifier.render();
      }

      const appVerifier = (window as any).recaptchaVerifier;

      // 📩 Send OTP
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier,
      );

      return confirmationResult;
    } catch (err: any) {
      setError(err.message);

      // 🔁 Reset reCAPTCHA on failure
      if ((window as any).recaptchaVerifier) {
        try {
          await (window as any).recaptchaVerifier
            .render()
            .then((widgetId: number) => {
              if (window.grecaptcha) {
                window.grecaptcha.reset(widgetId);
              }
            });
        } catch {}
      }

      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and login to backend
  const verifyOTP = async (
    confirmationResult: ConfirmationResult,
    otp: string,
  ) => {
    try {
      setLoading(true);
      setError(null);

      // Verify OTP with Firebase
      const userCredential = await confirmationResult.confirm(otp);

      // Get Firebase ID token
      const idToken = await userCredential.user.getIdToken();

      // Login to your backend
      const response = await authService.login(idToken, {
        userAgent: navigator.userAgent,
        platform: "web",
      });

      // Store tokens
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));

      return response;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 2️⃣ EMAIL LOGIN
  const loginWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Get ID token
      const idToken = await userCredential.user.getIdToken();

      // Login to backend
      const response = await authService.login(idToken);

      // Store tokens
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));

      return response;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 3️⃣ GOOGLE LOGIN
  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      setError(null);

      const provider = new GoogleAuthProvider();

      // Sign in with Google popup
      const userCredential = await signInWithPopup(auth, provider);

      // Get ID token
      const idToken = await userCredential.user.getIdToken();

      // Login to backend
      const response = await authService.login(idToken);

      // Store tokens
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));

      return response;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        await authService.logout(refreshToken);
      }

      await auth.signOut();
      localStorage.clear();
    } catch (err: any) {
      console.error("Logout error:", err);
    }
  };

  return {
    loading,
    error,
    loginWithPhone,
    verifyOTP,
    loginWithEmail,
    loginWithGoogle,
    logout,
  };
}
