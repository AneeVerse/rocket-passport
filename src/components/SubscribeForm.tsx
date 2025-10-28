"use client";

import { useState } from 'react';
import { BiUser, BiEnvelope, BiPhone } from 'react-icons/bi';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
}

const SubscribeForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! We\'ll be in touch soon.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-50">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <BiEnvelope className="w-6 h-6 text-red-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Get In Touch</h3>
        <p className="text-gray-600 text-sm mt-1">Let&apos;s discuss your requirements</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <BiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <div className="relative">
            <BiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 placeholder-gray-500"
              required
            />
          </div>
        </div>

        <div className="relative">
          <BiEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 placeholder-gray-500"
            required
          />
        </div>

        <div className="relative">
          <BiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm text-gray-900 placeholder-gray-500"
            required
          />
        </div>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm text-gray-900"
          required
        >
          <option value="">Select Service</option>
          <option value="consultation">Consultation</option>
          <option value="visa-assistance">Visa Assistance</option>
          <option value="document-review">Document Review</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;