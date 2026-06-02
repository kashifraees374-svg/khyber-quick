import team from "../../assets/images/team.png";
import { Rocket, Briefcase, Handshake, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-20 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <div className="w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src={team}
                alt="Khyber Quick Team"
                className="w-full h-auto object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-red-600 font-bold text-xs tracking-[3px] uppercase mb-4">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              Built for the People of Jehangira & Beyond
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              Khyber Quick was founded with a simple vision: give local people
              fast, reliable delivery while creating real job opportunities for
              local youth.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Starting from Jehangira, Narri, and Noudeh, we aim to build the
              fastest local delivery network across Jehangira and surrounding
              areas — one area at a time.
            </p>

            <div className="space-y-4">
              <ul className="space-y-4">
                {[
                  {
                    icon: <Rocket size={20} className="text-red-600" />,
                    text: "Started in Jehangira, expanding across surrounding areas",
                  },
                  {
                    icon: <Briefcase size={20} className="text-red-600" />,
                    text: "Creating employment opportunities for local youth",
                  },
                  {
                    icon: <Handshake size={20} className="text-red-600" />,
                    text: "Partnering with 50+ local shops & restaurants",
                  },
                  {
                    icon: <TrendingUp size={20} className="text-red-600" />,
                    text: "Growing across Jehangira and surrounding regions",
                  },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-gray-700 font-medium"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
