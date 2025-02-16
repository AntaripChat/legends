import React, { useState } from 'react';
import { FaUser, FaPhone, FaPen } from 'react-icons/fa';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, 'joinRequests'), {
        name: formData.name,
        phone: formData.phone,
        reason: formData.reason,
        timestamp: new Date(),
      });

      console.log('Document written with ID: ', docRef.id);
      toast.success(`Thank you, ${formData.name}! We will contact you soon.`)
      // Clear the form after submission
      setFormData({
        name: '',
        phone: '',
        reason: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error("An error occurred. Please try again.")
    }
  };

  return (
    <section id="joinUs" className="py-12 bg-gradient-to-r from-purple-500 to-indigo-600">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            Join The Legends Club
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Be part of something legendary. Fill out the form below to join us!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center border-2 border-gray-200 rounded-lg p-3 bg-gray-50 hover:border-purple-500 transition-all">
              <FaUser className="text-xl text-purple-600 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                required
              />
            </div>
            <div className="flex items-center border-2 border-gray-200 rounded-lg p-3 bg-gray-50 hover:border-purple-500 transition-all">
              <FaPhone className="text-xl text-purple-600 mr-3" />
              <input
                type="tel"
                name="phone"
                placeholder="Your WhatsApp Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                required
              />
            </div>
            <div className="flex items-center border-2 border-gray-200 rounded-lg p-3 bg-gray-50 hover:border-purple-500 transition-all">
              <FaPen className="text-xl text-purple-600 mr-3" />
              <textarea
                name="reason"
                placeholder="Why do you want to join us?"
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-700"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;