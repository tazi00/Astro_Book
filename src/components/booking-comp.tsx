"use client";

import React, { useState } from "react";
import {
  Star,
  Upload,
  Calendar,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";

interface Booking {
  id: string;
  title: string;
  provider: string;
  image: string;
  date: string;
  time: string;
  location?: string;
  bookingId: string;
  transactionId: string;
  orderDate: string;
  price: string;
  status:
    | "upcoming"
    | "completed"
    | "cancelled"
    | "ongoing"
    | "ordered"
    | "delivered";
}

const BookingManager = () => {
  const [activeTab, setActiveTab] = useState<
    "consultations" | "courses" | "products"
  >("consultations");
  const [noteInputs, setNoteInputs] = useState<{ [key: string]: string }>({});

  // Sample data
  const consultationsData: Booking[] = [
    {
      id: "1",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      location: "Reschedule",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "upcoming",
    },
    {
      id: "2",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "completed",
    },
  ];

  const coursesData: Booking[] = [
    {
      id: "3",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      location: "Reschedule",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "upcoming",
    },
    {
      id: "4",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "ongoing",
    },
    {
      id: "5",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "completed",
    },
  ];

  const productsData: Booking[] = [
    {
      id: "6",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "Arriving",
      location: "Exchange",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "ordered",
    },
    {
      id: "7",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "Delivered on",
      location: "Return",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "delivered",
    },
  ];

  const handleNoteChange = (id: string, value: string) => {
    setNoteInputs({ ...noteInputs, [id]: value });
  };

  const handleSave = (id: string) => {
    console.log("Saving note for booking:", id, noteInputs[id]);
  };

  const handleDone = (id: string) => {
    console.log("Marking as done for booking:", id, noteInputs[id]);
  };

  const renderProgressBar = (
    status: string,
    type: "consultations" | "courses" | "products",
  ) => {
    if (type === "consultations") {
      return null;
    }

    const steps =
      type === "courses"
        ? [
            "Booking\nConfirmed",
            "Course\nStarted",
            "Ongoing",
            "Course\nCompleted",
          ]
        : ["Booking\nConfirmed", "Shipped", "On the way", "Delivered"];

    let activeStep = 0;
    if (type === "courses") {
      if (status === "upcoming") activeStep = 1;
      if (status === "ongoing") activeStep = 2;
      if (status === "completed") activeStep = 4;
    } else {
      if (status === "ordered") activeStep = 1;
      if (status === "delivered") activeStep = 4;
    }

    return (
      <div className="flex items-center justify-between py-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${index < activeStep ? "bg-purple-600 border-purple-600" : "bg-white border-gray-300"}`}
              >
                {index < activeStep && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="text-xs text-gray-600 mt-2 text-center whitespace-pre-line">
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${index < activeStep - 1 ? "bg-purple-600" : "bg-gray-300"}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderBookingCard = (
    booking: Booking,
    type: "consultations" | "courses" | "products",
  ) => {
    const showNote =
      type === "consultations" &&
      (booking.status === "upcoming" || booking.status === "completed");
    const showProgressBar = type !== "consultations";

    return (
      <div
        key={booking.id}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4"
      >
        <div className="flex gap-6">
          {/* Left: Image and basic info */}
          <div className="flex-shrink-0">
            <img
              src={booking.image}
              alt={booking.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
          </div>

          {/* Middle: Details */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            {/* Column 1: Title and Schedule */}
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">{booking.title}</h3>
              <p className="text-sm text-gray-600">by {booking.provider}</p>
              {booking.status === "completed" && type === "consultations" && (
                <p className="text-sm text-gray-600">Completed On</p>
              )}
              {booking.status === "ongoing" && type === "courses" && (
                <p className="text-sm text-gray-600">Ongoing</p>
              )}
              {booking.status === "completed" && type === "courses" && (
                <p className="text-sm text-gray-600">Completed On</p>
              )}
              {booking.status === "delivered" && type === "products" && (
                <p className="text-sm text-gray-600">{booking.time}</p>
              )}
              <p className="text-sm font-medium text-gray-900">
                {booking.time !== "Arriving" && booking.time !== "Delivered on"
                  ? booking.time
                  : ""}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{booking.date}</span>
                {booking.date.includes("Tue") && <span>, Tue</span>}
              </div>
              {booking.location && (
                <button className="text-sm text-purple-600 hover:text-purple-700">
                  {booking.location} {booking.location === "Reschedule" && "⟳"}
                </button>
              )}
            </div>

            {/* Column 2: Session Details or Progress */}
            <div className="space-y-2">
              {!showProgressBar && booking.status === "upcoming" && (
                <>
                  <p className="text-sm text-gray-600">
                    Add details before your session
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-gray-600">Name : </span>
                      <span className="font-medium">Ankush Sarkar</span>
                      <ExternalLink className="w-3 h-3 inline ml-1" />
                    </p>
                    <p className="text-sm text-gray-600">DOB : 12/02/1998</p>
                    <button className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700">
                      <Upload className="w-4 h-4" />
                      Upload file
                    </button>
                  </div>
                </>
              )}
              {!showProgressBar && booking.status === "completed" && (
                <>
                  <p className="text-sm font-medium text-gray-900">
                    Session Details
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-gray-600">Name : </span>
                      <span className="font-medium">Ankush Sarkar</span>
                    </p>
                    <p className="text-sm text-gray-600">DOB : 12/02/1998</p>
                    <p className="text-sm text-purple-600">Uploaded</p>
                  </div>
                </>
              )}
              {showProgressBar && (
                <div className="pt-2">
                  {renderProgressBar(booking.status, type)}
                  {booking.status === "completed" && type === "courses" && (
                    <button className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 mt-2">
                      <Download className="w-4 h-4" />
                      Download Certificate
                    </button>
                  )}
                  {booking.status === "delivered" && type === "products" && (
                    <button className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 mt-2">
                      <Download className="w-4 h-4" />
                      Download Invoice
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Column 3: Notes or Booking Info */}
            <div className="space-y-2">
              {showNote ? (
                <div className="space-y-2">
                  <textarea
                    placeholder={
                      booking.status === "upcoming"
                        ? "Describe your issue with 0/200 words"
                        : "I want to get married."
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={4}
                    maxLength={200}
                    value={noteInputs[booking.id] || ""}
                    onChange={(e) =>
                      handleNoteChange(booking.id, e.target.value)
                    }
                  />
                  <div className="flex justify-end">
                    {booking.status === "upcoming" ? (
                      <button
                        onClick={() => handleSave(booking.id)}
                        className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDone(booking.id)}
                        className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Done
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-1 text-sm">
                  <p className="text-gray-600">
                    Booking ID:{" "}
                    <span className="font-medium text-gray-900">
                      {booking.bookingId}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Transaction ID:{" "}
                    <span className="font-medium text-gray-900">
                      {booking.transactionId}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Order placed on{" "}
                    <span className="font-medium text-gray-900">
                      {booking.orderDate}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Price */}
          <div className="flex-shrink-0 text-right">
            <p className="text-sm text-gray-600">Price</p>
            <p className="text-lg font-semibold text-gray-900">
              {booking.price}
            </p>
            <button className="text-sm text-purple-600 hover:text-purple-700">
              Customer details →
            </button>
          </div>
        </div>

        {/* Star Rating */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 fill-purple-600 text-purple-600"
              />
            ))}
          </div>
          <button className="text-purple-600 hover:text-purple-700 font-medium">
            Write a review
          </button>
        </div>
      </div>
    );
  };

  const renderSection = (
    title: string,
    count: number,
    bookings: Booking[],
    type: "consultations" | "courses" | "products",
  ) => {
    if (count === 0) return null;

    return (
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-600">
            {title} ({count})
          </h2>
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            See more →
          </button>
        </div>
        {bookings.map((booking) => renderBookingCard(booking, type))}
      </div>
    );
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case "consultations":
        return consultationsData;
      case "courses":
        return coursesData;
      case "products":
        return productsData;
    }
  };

  const currentData = getCurrentData();
  const upcomingBookings = currentData.filter(
    (b) => b.status === "upcoming" || b.status === "ordered",
  );
  const ongoingBookings = currentData.filter((b) => b.status === "ongoing");
  const completedBookings = currentData.filter(
    (b) => b.status === "completed" || b.status === "delivered",
  );
  const cancelledBookings = currentData.filter((b) => b.status === "cancelled");

  return (
    <div className=" bg-gray-200">
      <div className=" mx-auto  p-[50px]">
        {/* Header */}
        <div className="mb-6">
          <button className="bg-primary text-white px-8 py-2 rounded-sm font-medium hover:bg-purple-700">
            My Bookings
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-t-lg border border-gray-200">
          <div className="flex border-b border-gray-200 bg-red-400 shadow-sm ">
            <button
              onClick={() => setActiveTab("consultations")}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors
                ${
                  activeTab === "consultations"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Consultations
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors
                ${
                  activeTab === "courses"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Courses
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors
                ${
                  activeTab === "products"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Products
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-lg shadow-sm border border-t-0 border-gray-200 p-8">
          {activeTab === "consultations" && (
            <>
              {renderSection(
                "Upcoming",
                upcomingBookings.length,
                upcomingBookings,
                "consultations",
              )}
              {renderSection(
                "Completed",
                completedBookings.length,
                completedBookings,
                "consultations",
              )}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-purple-600">
                  Cancelled (0)
                </h2>
              </div>
            </>
          )}
          {activeTab === "courses" && (
            <>
              {renderSection(
                "Upcoming",
                upcomingBookings.length,
                upcomingBookings,
                "courses",
              )}
              {renderSection(
                "Ongoing",
                ongoingBookings.length,
                ongoingBookings,
                "courses",
              )}
              {renderSection(
                "Completed",
                completedBookings.length,
                completedBookings,
                "courses",
              )}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-purple-600">
                  Cancelled (0)
                </h2>
              </div>
            </>
          )}
          {activeTab === "products" && (
            <>
              {renderSection(
                "Ordered",
                upcomingBookings.length,
                upcomingBookings,
                "products",
              )}
              {renderSection(
                "Delivered",
                completedBookings.length,
                completedBookings,
                "products",
              )}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-purple-600">
                  Cancelled (0)
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingManager;
