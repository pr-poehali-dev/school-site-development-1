import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: "🎓",
      title: "Качественное образование",
      description:
        "Современные методики преподавания и опытные педагоги обеспечивают высокий уровень знаний",
      bgColor: "bg-blue-100",
    },
    {
      icon: "👥",
      title: "Индивидуальный подход",
      description:
        "Мы учитываем особенности каждого ребенка и помогаем развивать его уникальные способности",
      bgColor: "bg-amber-100",
    },
    {
      icon: "🏆",
      title: "Достижения",
      description:
        "Наши ученики регулярно побеждают в олимпиадах и поступают в лучшие вузы страны",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            О нашей школе
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-open-sans">
            Уже 25 лет мы предоставляем качественное образование и помогаем
            детям раскрывать свой потенциал
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <CardTitle className="font-montserrat">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
