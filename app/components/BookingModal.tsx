"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useBooking } from "@/app/context/BookingContext";
import { Services } from "@/types/services";
import { Staff } from "@/types/staff";

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [services, setServices] = useState<Services[]>([]);
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    barber: "",
    date: "",
    time: "",
    paymentMethod: "cash",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Cargar servicios y barberos
  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [servicesRes, staffRes] = await Promise.all([
        fetch("/api/services").catch(() => null),
        fetch("/api/staff").catch(() => null),
      ]);

      if (servicesRes?.ok) {
        const servicesData = await servicesRes.json();
        setServices(servicesData);
      }
      if (staffRes?.ok) {
        const staffData = await staffRes.json();
        setStaff(staffData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "El nombre es requerido";
    if (!formData.lastName.trim()) newErrors.lastName = "El apellido es requerido";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido";
    if (!formData.service) newErrors.service = "Selecciona un servicio";
    if (!formData.barber) newErrors.barber = "Selecciona un barbero";
    if (!formData.date) newErrors.date = "Selecciona una fecha";
    if (!formData.time) newErrors.time = "Selecciona una hora";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Reserva realizada exitosamente! Te contactaremos pronto.");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          service: "",
          barber: "",
          date: "",
          time: "",
          paymentMethod: "cash",
        });
        closeBooking();
      } else {
        alert("Error al realizar la reserva. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Error al realizar la reserva. Intenta de nuevo.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background-dark to-surface-dark rounded-2xl border border-white/10 shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 sm:p-8 border-b border-white/10 bg-black/40 backdrop-blur-sm z-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Reserva tu cita</h2>
                  <p className="text-slate-400 text-sm sm:text-base mt-1">
                    Completa el formulario para agendar tu servicio
                  </p>
                </div>
                <button
                  onClick={closeBooking}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Juan"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition ${
                        errors.firstName ? "border-red-500 ring-red-500" : "border-white/10 focus:border-primary"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Pérez"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition ${
                        errors.lastName ? "border-red-500 ring-red-500" : "border-white/10 focus:border-primary"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-400 mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition ${
                      errors.phone ? "border-red-500 ring-red-500" : "border-white/10 focus:border-primary"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Servicio y Barbero */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Servicio *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition ${
                        errors.service ? "border-red-500 ring-red-500" : "border-white/10 focus:border-primary"
                      }`}
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((srv) => (
                        <option key={srv.title} value={srv.title}>
                          {srv.title} - ${srv.price}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs text-red-400 mt-1">{errors.service}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Barbero *
                    </label>
                    <select
                      name="barber"
                      value={formData.barber}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition ${
                        errors.barber ? "border-red-500 ring-red-500" : "border-white/10 focus:border-primary"
                      }`}
                    >
                      <option value="">Selecciona un barbero</option>
                      {staff.map((barber) => (
                        <option key={barber.name} value={barber.name}>
                          {barber.name} - {barber.speciality}
                        </option>
                      ))}
                    </select>
                    {errors.barber && (
                      <p className="text-xs text-red-400 mt-1">{errors.barber}</p>
                    )}
                  </div>
                </div>

                {/* Fecha y Hora */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Fecha *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition ${
                        errors.date ? "border-red-500 ring-red-500" : "border-white/10 focus:border-primary"
                      }`}
                    />
                    {errors.date && (
                      <p className="text-xs text-red-400 mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Hora *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition ${
                        errors.time ? "border-red-500 ring-red-500" : "border-white/10 focus:border-primary"
                      }`}
                    />
                    {errors.time && (
                      <p className="text-xs text-red-400 mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Tipo de Pago */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-4">
                    Tipo de Pago
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "cash", label: "Efectivo" },
                      { value: "card", label: "Tarjeta de Crédito/Débito" },
                      { value: "transfer", label: "Transferencia Bancaria" },
                    ].map((method) => (
                      <label
                        key={method.value}
                        className="flex items-center gap-3 p-3 border border-white/10 rounded-lg hover:bg-white/5 cursor-pointer transition"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.value}
                          checked={formData.paymentMethod === method.value}
                          onChange={handleChange}
                          className="w-4 h-4 cursor-pointer accent-primary"
                        />
                        <span className="text-white">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Botones */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="flex-1 px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-red-600 text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    Reservar cita
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
