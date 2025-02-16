import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsList = querySnapshot.docs.map((doc) => doc.data());
      setEvents(eventsList);
    };
    fetchEvents();
  }, []);

  return (
    <section className="p-10 bg-gradient-to-br from-gray-200 to-gray-300 min-h-screen flex flex-col items-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Upcoming Events
      </motion.h2>

      <div className="w-full max-w-2xl space-y-6">
        {events.length > 0 ? (
          events.map((event, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white bg-opacity-25 backdrop-blur-lg shadow-xl rounded-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  className="p-3 bg-blue-500 text-white rounded-full shadow-md"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaCalendarAlt className="text-3xl" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900">{event.name}</h3>
              </div>
              <p className="text-gray-700 mt-2 ml-12 text-lg font-medium">
                📅 {event.date}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-lg text-gray-600">No upcoming events found.</p>
        )}
      </div>
    </section>
  );
};

export default Events;
