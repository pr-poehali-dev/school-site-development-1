import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Ш</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 font-montserrat">
                Школа №1
              </span>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Главная
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    О школе
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Программы
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Контакты
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <CardTitle className="font-montserrat">
                  Качественное образование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans">
                  Современные методики преподавания и опытные педагоги
                  обеспечивают высокий уровень знаний
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👥</span>
                </div>
                <CardTitle className="font-montserrat">
                  Индивидуальный подход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans">
                  Мы учитываем особенности каждого ребенка и помогаем развивать
                  его уникальные способности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <CardTitle className="font-montserrat">Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans">
                  Наши ученики регулярно побеждают в олимпиадах и поступают в
                  лучшие вузы страны
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="font-montserrat text-blue-600">
                  Начальная школа
                </CardTitle>
                <CardDescription className="font-open-sans">
                  1-4 классы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-open-sans">
                  <li>• Основы математики и русского языка</li>
                  <li>• Развитие творческих способностей</li>
                  <li>• Адаптация к школьной среде</li>
                  <li>• Внеурочная деятельность</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="font-montserrat text-amber-600">
                  Средняя школа
                </CardTitle>
                <CardDescription className="font-open-sans">
                  5-9 классы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-open-sans">
                  <li>• Углубленное изучение предметов</li>
                  <li>• Профориентационная работа</li>
                  <li>• Научно-исследовательские проекты</li>
                  <li>• Подготовка к ОГЭ</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="font-montserrat text-green-600">
                  Старшая школа
                </CardTitle>
                <CardDescription className="font-open-sans">
                  10-11 классы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-open-sans">
                  <li>• Профильное обучение</li>
                  <li>• Подготовка к ЕГЭ</li>
                  <li>• Университетские программы</li>
                  <li>• Карьерное консультирование</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-montserrat">
                Свяжитесь с нами
              </h2>
              <div className="space-y-4 font-open-sans">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📍</span>
                  <span>г. Москва, ул. Школьная, д. 15</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📞</span>
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">✉️</span>
                  <span>info@school1.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🕒</span>
                  <span>Пн-Пт: 8:00-18:00</span>
                </div>
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

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-open-sans">
            © 2024 Школа №1. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
