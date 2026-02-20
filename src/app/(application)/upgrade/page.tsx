"use client";

// src/components/UpgradeToAstrologer.tsx
import { useState } from "react";

export default function UpgradeToAstrologer() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUpgrade = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch(
        "http://localhost:3000/api/v1/users/upgrade-to-astrologer",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();

        // Update user in localStorage
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        user.role = "astrologer";
        user.isAstrologer = true;
        localStorage.setItem("user", JSON.stringify(user));

        setSuccess(true);
        alert("Successfully upgraded to Astrologer! 🎉");
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (err) {
      console.error("Upgrade failed:", err);
      alert("Upgrade failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user.isAstrologer) {
    return (
      <div className="bg-green-100 p-4 rounded">
        ✅ You are already an Astrologer!
      </div>
    );
  }

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Become an Astrologer</h3>
      <p className="mb-4 text-gray-700">
        Upgrade your account to start offering astrology services!
      </p>
      <button
        onClick={handleUpgrade}
        disabled={loading || success}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading
          ? "Upgrading..."
          : success
            ? "Upgraded!"
            : "Upgrade to Astrologer"}
      </button>
    </div>
  );
}
