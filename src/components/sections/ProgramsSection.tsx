import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Начальная школа",
      grades: "1-4 классы",
      color: "blue",
      features: [
        "Основы математики и русского языка",
        "Развитие творческих способностей",
        "Адаптация к школьной среде",
        "Внеурочная деятельность",
      ],
    },
    {
      title: "Средняя школа",
      grades: "5-9 классы",
      color: "amber",
      features: [
        "Углубленное изучение предметов",
        "Профориентационная работа",
        "Научно-исследовательские проекты",
        "Подготовка к ОГЭ",
      ],
    },
    {
      title: "Старшая школа",
      grades: "10-11 классы",
      color: "green",
      features: [
        "Профильное обучение",
        "Подготовка к ЕГЭ",
        "Университетские программы",
        "Карьерное консультирование",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Образовательные программы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-open-sans">
            Выберите программу, которая подходит вашему ребенку
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-shadow border-l-4 border-l-${program.color}-500`}
            >
              <CardHeader>
                <CardTitle
                  className={`font-montserrat text-${program.color}-600`}
                >
                  {program.title}
                </CardTitle>
                <CardDescription className="font-open-sans">
                  {program.grades}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-open-sans">
                  {program.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
