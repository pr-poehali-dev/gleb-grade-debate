
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-700">Почему Глебу следует поставить 3, а не 2</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="mb-10">
          <Card className="mb-8 border-none shadow-lg">
            <CardHeader className="bg-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Award" size={24} /> Ключевые аргументы
              </CardTitle>
              <CardDescription className="text-indigo-100">
                Объективные причины для выставления оценки "3"
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Проявленные усилия</h3>
                    <p className="text-gray-600">Глеб затратил значительное количество времени на выполнение этого проекта, работая допоздна несколько недель подряд.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Прогресс в обучении</h3>
                    <p className="text-gray-600">По сравнению с начальными знаниями, Глеб продемонстрировал значительный рост навыков и понимания материала.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Преодоление трудностей</h3>
                    <p className="text-gray-600">Несмотря на сложности, Глеб не сдался и смог преодолеть множество технических проблем при работе над проектом.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-md border-none">
              <CardHeader className="bg-blue-50 border-b border-blue-100">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gauge" size={20} className="text-blue-700" /> Технические навыки
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">Структура кода</span>
                      <span className="text-sm text-gray-500">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">Оптимизация</span>
                      <span className="text-sm text-gray-500">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">Функциональность</span>
                      <span className="text-sm text-gray-500">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-none">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="LineChart" size={20} className="text-green-700" /> Дополнительные факторы
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-amber-500" />
                    <span>Своевременность сдачи промежуточных этапов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="MessageSquare" size={16} className="text-indigo-500" />
                    <span>Активное участие в обсуждениях и консультациях</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="BookOpen" size={16} className="text-purple-500" />
                    <span>Изучение дополнительных материалов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="PenTool" size={16} className="text-blue-500" />
                    <span>Творческий подход к решению задач</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Icon name="Scale" size={24} className="text-indigo-600" /> Сравнение оценок
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-yellow-50 border-yellow-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-800">Оценка "2" означает</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-500 mt-1" />
                    <span>Полное отсутствие понимания материала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-500 mt-1" />
                    <span>Отказ от выполнения задания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-500 mt-1" />
                    <span>Нежелание изучать предмет</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">Оценка "3" отражает</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-500 mt-1" />
                    <span>Базовое понимание материала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-500 mt-1" />
                    <span>Выполнение основных требований задания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-500 mt-1" />
                    <span>Стремление к улучшению результатов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <Card className="border-none shadow-lg bg-indigo-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Заключение</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Учитывая все вышеперечисленные факторы, проект Глеба соответствует критериям оценки "3". 
                Он демонстрирует базовое понимание материала, приложил существенные усилия и показал 
                прогресс в обучении.
              </p>
              <p>
                Оценка "3" будет справедливым отражением проделанной работы и поможет 
                мотивировать Глеба на дальнейшее развитие навыков.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-white text-indigo-700 hover:bg-indigo-100">
                Я согласен с аргументами
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="py-6 px-4 bg-gray-50 border-t mt-20">
        <div className="container mx-auto text-center text-gray-500">
          <p>© 2025 В поддержку Глеба. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
