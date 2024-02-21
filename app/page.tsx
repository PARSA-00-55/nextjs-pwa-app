"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // * =============== Notification access request func ================== * //
  // const requestNotificationPermission = () => {
  //   if ("Notification" in window) {
  //     Notification.requestPermission().then((status) => {
  //       console.log("Notification permission status:", status);

  //       if (status === "denied") {
  //         Notification.requestPermission().then((status) => {});
  //         alert(
  //           "Notification access denied. Please grant the notification permission"
  //         );
  //       } else if (status === "granted") {
  //         showNotification();
  //         console.log("Notification access granted!");
  //       }
  //     });
  //   } else {
  //     console.log("Notifications not supported in this environment");
  //   }
  // };

  // const showNotification = () => {
  //   const notificationOptions = {
  //     body: "This is the body of the notification",
  //     icon: "/path/to/icon.png", // Replace with the path to your notification icon
  //   };

  //   const notification = new Notification(
  //     "Notification Title",
  //     notificationOptions
  //   );

  //   navigator.serviceWorker.getRegistration().then((reg) => {
  //     reg?.showNotification("Hello, World!", {
  //       body: "This is the body of the notification",
  //       data: { primaryKey: 1 },
  //     });
  //   });

  //   notification.onclick = () => {
  //     console.log("Notification clicked");
  //     // Handle notification click event if needed
  //   };
  // };

  // // useEffect(() => {
  // //   showNotification();
  // // }, []);
  // useEffect(() => {
  //   if (Notification.permission === "granted") {
  //     showNotification();
  //   }
  // }, []);

  const handleNotificationClick = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("hello pips");
      }
    });
  };

  // * =============== Location access request func ================== * //
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);

  const requestLocationPermission = () => {
    // window.navigator.geolocation.getCurrentPosition(console.log);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation not supported in this environment");
    }
  };

  return (
    <main className="flex flex-col align-middle justify-center">
      <h1 className="text-3xl font-bold text-center">This is Home 🏠</h1>

      <Link href="/order" className="mt-5 text-blue-500 font-bold text-center">
        Go to Order page
      </Link>

      {currentLocation && (
        <p className="text-center mt-3">Current Location: {currentLocation}</p>
      )}

      <div>
        {/* <button
          className="text-sky-500 hover:text-sky-600"
          onClick={requestNotificationPermission}
        >
          Request for notification &rarr;
        </button> */}
        <br />
        <br />
        <button
          className="text-sky-500 hover:text-sky-600"
          onClick={handleNotificationClick}
        >
          Push for notification &rarr;
        </button>
        <br />
        <br />
        <button
          className="text-sky-500 hover:text-sky-600"
          onClick={requestLocationPermission}
        >
          Request for location &rarr;
        </button>
      </div>
    </main>
  );
}
