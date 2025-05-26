import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    { icon: "📍", text: "г. Москва, ул. Школьная, д. 15" },
    { icon: "📞", text: "+7 (495) 123-45-67" },
    { icon: "✉️", text: "info@school1.ru" },
    { icon: "🕒", text: "Пн-Пт: 8:00-18:00" },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-montserrat">
              Свяжитесь с нами
            </h2>
            <div className="space-y-4 font-open-sans">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">
              Записаться на консультацию
            </h3>
            <div className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Онлайн-запись
              </Button>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-gray-900"
              >
                Виртуальная экскурсия
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
