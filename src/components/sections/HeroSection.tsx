import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6 font-montserrat">
          Добро пожаловать в нашу школу
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto font-open-sans">
          Мы создаем будущее через качественное образование, индивидуальный
          подход и развитие талантов каждого ученика
        </p>
        <div className="space-x-4">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3"
          >
            Записаться на экскурсию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
