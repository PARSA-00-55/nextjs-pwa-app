"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // * =============== Notification access request func ================== * //
  const requestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((status) => {
        console.log("Notification permission status:", status);

        if (status === "denied") {
          Notification.requestPermission().then((status) => {});
          alert(
            "Notification access denied. Please grant the notification permission"
          );
        } else if (status === "granted") {
          showNotification();
          console.log("Notification access granted!");
        }
      });
    } else {
      console.log("Notifications not supported in this environment");
    }
  };

  const showNotification = () => {
    const notificationOptions = {
      body: "This is the body of the notification",
      icon: "/path/to/icon.png", // Replace with the path to your notification icon
    };

    const notification = new Notification(
      "Notification Title",
      notificationOptions
    );

    notification.onclick = () => {
      console.log("Notification clicked");
      // Handle notification click event if needed
    };
  };

  useEffect(() => {
    // You can also show a notification when the component mounts (just as an example)
    showNotification();
  }, []);

  return (
    <main className="flex flex-col align-middle justify-center">
      <h1 className="text-3xl font-bold text-center">This is Home 🏠</h1>

      <Link href="/order" className="mt-5 text-blue-500 font-bold text-center">
        Go to Order page
      </Link>

      <div>
        <button
          className="text-sky-500 hover:text-sky-600"
          onClick={requestNotificationPermission}
        >
          Request for notification &rarr;
        </button>
      </div>
    </main>
  );
}
