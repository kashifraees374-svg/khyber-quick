import { useState } from "react";

export default function OrderFormSection() {
  const [form, setForm] = useState({
    name: "Guest",
    phone: "+92",
    pickup: "Jehangira",
    dropoff: "Narri",
    parcelType: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = () => {
    const message = `
🚚 New Delivery Order

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 Pickup: ${form.pickup}
🎯 Dropoff: ${form.dropoff}
📦 Parcel Type: ${form.parcelType}
`;

    const url = `https://wa.me/923339433704?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="order"
      className="py-20 px-[5%] bg-gray-100"
    >
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-red-600 font-bold text-xs tracking-[3px] uppercase">
            Book Delivery
          </p>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Place Your Order
          </h2>

          <p className="text-gray-500 mt-4">
            Fill the form and send your order directly to WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              name="pickup"
              placeholder="Pickup Location"
              value={form.pickup}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              name="dropoff"
              placeholder="Dropoff Location"
              value={form.dropoff}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 outline-none"
            />

          </div>

          <select
            name="parcelType"
            value={form.parcelType}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 mt-5 outline-none"
          >
            <option value="">Select Service</option>
            <option>Food Delivery</option>
            <option>Medicine Delivery</option>
            <option>Parcel Delivery</option>
            <option>Grocery Delivery</option>
            <option>Urgent Documents</option>
            <option>Others Things</option>
          </select>

          <button
            onClick={sendToWhatsApp}
            className="w-full mt-6 bg-[#25D366] hover:bg-[#20ba57] text-white py-4 rounded-xl font-bold transition"
          >
            💬 Send Order on WhatsApp
          </button>

        </div>
      </div>
    </section>
  );
}