"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const {
    loginWithPhone,
    verifyOTP,
    loginWithEmail,
    loginWithGoogle,
    loading,
    error,
  } = useAuth();

  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);

  // Phone OTP Login
  const handleSendOTP = async () => {
    try {
      const confirmation = await loginWithPhone(phoneNumber);
      setConfirmationResult(confirmation);
      setStep("otp");
    } catch (err) {
      console.error("OTP send failed:", err);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await verifyOTP(confirmationResult, otp);

      // Check if onboarded
      if (!response.user.isOnboarded) {
        router.push("/onboarding");
      } else {
        router.push("/");
      }
    } catch (err) {
      console.error("OTP verification failed:", err);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const response = await loginWithGoogle();

      if (!response.user.isOnboarded) {
        router.push("/onboarding");
      } else {
        router.push("/home");
      }
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Login to Astrobook</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Phone Login */}
        {step === "phone" && (
          <div className="space-y-4">
            <input
              type="tel"
              placeholder="+91 1234567890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
            <button
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>

            <div className="text-center my-4">OR</div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-white border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
          </div>
        )}

        {/* OTP Verification */}
        {step === "otp" && (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Enter the OTP sent to {phoneNumber}
            </p>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="w-full px-4 py-2 border rounded text-center text-2xl"
            />
            <button
              onClick={handleVerifyOTP}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
            <button
              onClick={() => setStep("phone")}
              className="w-full text-sm text-gray-600"
            >
              Change phone number
            </button>
          </div>
        )}

        {/* reCAPTCHA container (invisible) */}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
