import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  const deliveryMethods = [
    {
      icon: 'Truck',
      title: 'Курьерская доставка',
      description: 'По Москве и Московской области',
      price: 'от 300₽',
      time: '1-2 дня',
      features: ['Доставка до двери', 'Оплата при получении', 'Бесплатно от 3000₽'],
    },
    {
      icon: 'Package',
      title: 'Пункт выдачи',
      description: 'СДЭК, Boxberry, PickPoint',
      price: 'от 150₽',
      time: '2-5 дней',
      features: ['Более 5000 пунктов', 'Удобный график работы', 'Бесплатно от 2000₽'],
    },
    {
      icon: 'Mail',
      title: 'Почта России',
      description: 'По всей России',
      price: 'от 200₽',
      time: '5-14 дней',
      features: ['Доставка в любую точку России', 'Отслеживание посылки', 'Надежная упаковка'],
    },
  ];

  const regions = [
    { name: 'Москва и МО', time: '1-2 дня', price: 'от 300₽' },
    { name: 'Санкт-Петербург и ЛО', time: '2-3 дня', price: 'от 350₽' },
    { name: 'Крупные города', time: '3-5 дней', price: 'от 400₽' },
    { name: 'Остальные регионы', time: '5-14 дней', price: 'от 500₽' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground font-montserrat mb-4">
              Доставка и оплата
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы доставляем нашу продукцию быстро и надежно по всей России
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {deliveryMethods.map((method, index) => (
              <Card key={index} className="border-eco-beige/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={method.icon as any} size={32} className="text-eco-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-montserrat">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {method.description}
                    </p>
                    <div className="flex justify-center gap-2 mb-4">
                      <Badge variant="outline" className="border-eco-green text-eco-green">
                        {method.price}
                      </Badge>
                      <Badge variant="outline" className="border-eco-sage text-eco-sage">
                        {method.time}
                      </Badge>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {method.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-eco-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground font-montserrat text-center mb-8">
              Стоимость доставки по регионам
            </h2>
            <div className="bg-white rounded-lg border border-eco-beige/20 overflow-hidden">
              <div className="grid grid-cols-3 bg-eco-beige/20 p-4 font-semibold text-foreground">
                <div>Регион</div>
                <div className="text-center">Срок доставки</div>
                <div className="text-center">Стоимость</div>
              </div>
              {regions.map((region, index) => (
                <div key={index} className="grid grid-cols-3 p-4 border-t border-eco-beige/20 hover:bg-eco-beige/10 transition-colors">
                  <div className="text-foreground font-medium">{region.name}</div>
                  <div className="text-center text-muted-foreground">{region.time}</div>
                  <div className="text-center text-eco-green font-semibold">{region.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-eco-beige/20">
              <CardContent className="pt-8">
                <div className="flex items-center mb-4">
                  <Icon name="CreditCard" size={24} className="text-eco-green mr-3" />
                  <h3 className="text-xl font-semibold text-foreground font-montserrat">
                    Способы оплаты
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Icon name="Check" size={16} className="text-eco-green mr-2" />
                    Банковские карты (Visa, MasterCard, МИР)
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Icon name="Check" size={16} className="text-eco-green mr-2" />
                    Электронные кошельки (ЮMoney, QIWI)
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Icon name="Check" size={16} className="text-eco-green mr-2" />
                    Оплата при получении (наличными или картой)
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Icon name="Check" size={16} className="text-eco-green mr-2" />
                    Банковский перевод для юридических лиц
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-eco-beige/20">
              <CardContent className="pt-8">
                <div className="flex items-center mb-4">
                  <Icon name="Shield" size={24} className="text-eco-green mr-3" />
                  <h3 className="text-xl font-semibold text-foreground font-montserrat">
                    Гарантии
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Icon name="Check" size={16} className="text-eco-green mr-2" />
                    Возврат товара в течение 14 дней
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Icon name="Check" size={16} className="text-eco-green mr-2" />
                    Проверка качества перед отправкой
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Icon name="Check" size={16} className="text-eco-green mr-2" />
                    Надежная упаковка для защиты товара
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Icon name="Check" size={16} className="text-eco-green mr-2" />
                    Отслеживание посылки на всех этапах
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-eco-beige/20 to-eco-white rounded-2xl p-8 text-center">
            <Icon name="Gift" size={48} className="text-eco-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground font-montserrat mb-4">
              Бесплатная доставка
            </h2>
            <p className="text-muted-foreground mb-6">
              Получите бесплатную доставку при заказе от определенной суммы
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-eco-beige/20">
                <div className="text-lg font-bold text-eco-green">от 2000₽</div>
                <div className="text-sm text-muted-foreground">в пункты выдачи</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-eco-beige/20">
                <div className="text-lg font-bold text-eco-green">от 3000₽</div>
                <div className="text-sm text-muted-foreground">курьерская доставка по Москве</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-eco-beige/20">
                <div className="text-lg font-bold text-eco-green">от 5000₽</div>
                <div className="text-sm text-muted-foreground">курьерская доставка по России</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;