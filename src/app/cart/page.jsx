
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartPage = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        const storedBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        setBookings(storedBookings);

    }, []);

    const handleDelete = (index) => {

        const updatedBookings = bookings.filter(
            (_, i) => i !== index
        );

        setBookings(updatedBookings);

        localStorage.setItem(
            "bookings",
            JSON.stringify(updatedBookings)
        );

        toast.success("Booking removed!");

    };

    if (bookings.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">

                <h1 className="text-4xl font-bold mb-4">
                    No Bookings Yet
                </h1>

                <p className="text-gray-500">
                    Your booked animals will appear here
                </p>

            </div>
        );
    }

    return (
        <div className="px-5 md:px-10 py-10">

            <h1 className="text-4xl font-bold text-center mb-10">
                My Bookings
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {bookings.map((booking, index) => (

                    <div
                        key={index}
                        className="border rounded-3xl p-4 shadow-xl bg-base-100"
                    >

                        <Image
                            src={booking.animalImage}
                            alt={booking.animalName}
                            width={400}
                            height={300}
                            className="rounded-2xl w-full h-60 object-cover"
                        />

                        <div className="mt-4 space-y-2">

                            <h2 className="text-2xl font-bold">
                                {booking.animalName}
                            </h2>

                            <p className="text-green-600 font-semibold">
                                ৳ {booking.animalPrice}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Booked By:
                                </span>{" "}
                                {booking.bookedBy}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Email:
                                </span>{" "}
                                {booking.email}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Phone:
                                </span>{" "}
                                {booking.phone}
                            </p>

                            <p>
                                <span className="font-semibold">
                                    Address:
                                </span>{" "}
                                {booking.address}
                            </p>

                        </div>

                        <button
                            onClick={() => handleDelete(index)}
                            className="btn btn-error text-white w-full mt-5"
                        >
                            Remove Booking
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default CartPage;