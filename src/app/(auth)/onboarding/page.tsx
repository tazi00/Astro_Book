"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const INTERESTS = [
  "Numerology",
  "Vastu",
  "Past Life",
  "Reiki",
  "Tarot",
  "Astrology",
  "Palmistry",
  "Face Reading",
];

export default function OnboardingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    interests: [] as string[],
  });
  const [loading, setLoading] = useState(false);

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch(
        "http://localhost:3000/api/v1/users/onboarding",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        // Update user in localStorage
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        user.isOnboarded = true;
        localStorage.setItem("user", JSON.stringify(user));

        router.push("/home");
      }
    } catch (err) {
      console.error("Onboarding failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6">Complete Your Profile</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="date"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            className="w-full px-4 py-2 border rounded"
          />

          <div>
            <label className="block text-sm font-medium mb-2">
              Select Your Interests
            </label>
            <div className="grid grid-cols-2 gap-2">
              {INTERESTS.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 rounded border ${
                    formData.interests.includes(interest)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={
              loading || !formData.name || formData.interests.length === 0
            }
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Completing..." : "Complete Onboarding"}
          </button>
        </div>
      </div>
    </div>
  );
}
