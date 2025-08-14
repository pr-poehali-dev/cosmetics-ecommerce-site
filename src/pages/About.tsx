import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Мы используем только натуральные ингредиенты и экологически чистую упаковку',
    },
    {
      icon: 'Heart',
      title: 'Забота о коже',
      description: 'Каждый продукт разработан с учетом потребностей разных типов кожи',
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Строгий контроль качества на всех этапах производства',
    },
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Мы создаем сообщество людей, которые ценят натуральную красоту',
    },
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Основатель и CEO',
      description: 'Эксперт в области натуральной косметологии с 15-летним опытом',
    },
    {
      name: 'Михаил Иванов',
      position: 'Главный технолог',
      description: 'Разработчик уникальных формул на основе растительных компонентов',
    },
    {
      name: 'Елена Смирнова',
      position: 'Дерматолог-консультант',
      description: 'Врач-дерматолог, консультант по продуктам для чувствительной кожи',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground font-montserrat mb-4">
              О бренде EcoBeauty
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы верим, что красота должна быть естественной, а уход за кожей — безопасным и эффективным
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground font-montserrat">
                Наша история
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EcoBeauty был основан в 2018 году с простой идеей: создать линейку косметики, 
                которая была бы одновременно эффективной и безопасной для кожи и окружающей среды.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Мы начали с небольшой лаборатории и мечты о том, чтобы каждый мог наслаждаться 
                красотой натуральных ингредиентов. Сегодня наши продукты помогают тысячам людей 
                по всей стране чувствовать себя уверенно и красиво.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Каждый наш продукт проходит тщательное тестирование и создается с любовью к природе 
                и заботой о наших клиентах.
              </p>
            </div>
            <div className="bg-eco-beige/20 rounded-2xl p-8 text-center">
              <Icon name="Sparkles" size={64} className="text-eco-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground font-montserrat mb-2">
                6 лет
              </h3>
              <p className="text-muted-foreground mb-4">на рынке натуральной косметики</p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-eco-green">50+</div>
                  <div className="text-sm text-muted-foreground">продуктов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-eco-green">10K+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground font-montserrat text-center mb-8">
              Наши ценности
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-eco-beige/20 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={value.icon as any} size={32} className="text-eco-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-montserrat">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground font-montserrat text-center mb-8">
              Наша команда
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-eco-beige/20">
                  <CardContent className="pt-8">
                    <div className="w-24 h-24 bg-eco-beige/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="User" size={40} className="text-eco-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 font-montserrat">
                      {member.name}
                    </h3>
                    <p className="text-eco-green font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-eco-beige/20 to-eco-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground font-montserrat mb-4">
              Наша миссия
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы стремимся сделать натуральную косметику доступной для каждого, предлагая 
              продукты высочайшего качества, которые заботятся о вашей коже и окружающей среде. 
              Наша цель — помочь вам почувствовать себя красивыми и уверенными, используя силу природы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;