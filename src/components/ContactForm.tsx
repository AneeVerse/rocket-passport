"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24-48 hours.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-sm relative before:absolute before:inset-0 before:rounded-lg before:shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.3),0_10px_25px_-5px_rgba(0,0,0,0.3)] before:-z-10">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
        Start Your Passport Application Today
      </h3>
      <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed">
        Ready to get your passport without the bureaucratic hassles? Our certified consultants have successfully processed over 100,000 applications with a 100% approval rate.
      </p>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 text-sm">{statusMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 text-sm">{statusMessage}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
        
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={3}
            className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm resize-none text-gray-900 placeholder-gray-500"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#027b7a] text-white py-3 sm:py-2 px-4 rounded-md hover:bg-[#026968] transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Now →'}
        </button>
      </form>
    </div>
  );
}
