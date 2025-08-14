import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Увлажняющий крем с алоэ',
      price: 2890,
      category: 'Уход за лицом',
      skinType: 'Все типы кожи',
      ingredients: 'Алоэ вера, гиалуроновая кислота',
    },
    {
      id: 2,
      name: 'Натуральное масло жожоба',
      price: 1590,
      category: 'Масла',
      skinType: 'Сухая кожа',
      ingredients: 'Масло жожоба, витамин E',
    },
    {
      id: 3,
      name: 'Очищающая пенка с зеленым чаем',
      price: 1290,
      category: 'Очищение',
      skinType: 'Жирная кожа',
      ingredients: 'Экстракт зеленого чая, салициловая кислота',
    },
  ];

  const benefits = [
    {
      icon: 'Leaf',
      title: 'Натуральные ингредиенты',
      description: 'Только органические компоненты без химии',
    },
    {
      icon: 'Heart',
      title: 'Забота о коже',
      description: 'Подходит для всех типов кожи, включая чувствительную',
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Протестировано дерматологами, без вредных добавок',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-br from-eco-beige to-eco-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-montserrat leading-tight">
                Натуральная красота
                <span className="block text-eco-green">для вашей кожи</span>
              </h1>
              <p className="text-lg text-muted-foreground font-open leading-relaxed">
                Откройте силу природы с нашей линейкой органической косметики. 
                Каждый продукт создан с заботой о вашей коже и окружающей среде.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-eco-green hover:bg-eco-sage text-white">
                  <Link to="/catalog">Смотреть каталог</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                  <Link to="/about">О бренде</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d3dcf2a5-1c99-40f4-bbe5-29ac6a58c120.jpg" 
                alt="Натуральная косметика"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground font-montserrat mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наши принципы основаны на заботе о красоте, здоровье и экологии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-eco-beige/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-eco-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-montserrat">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-eco-beige/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground font-montserrat mb-4">
              Популярные товары
            </h2>
            <p className="text-muted-foreground">
              Самые любимые продукты наших покупателей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-eco-beige/20">
                <CardContent className="p-6">
                  <div className="aspect-square bg-eco-beige/30 rounded-xl mb-4 flex items-center justify-center">
                    <Icon name="Package" size={48} className="text-eco-green" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground font-montserrat">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.category} • {product.skinType}
                    </p>
                    <p className="text-xs text-eco-green">
                      {product.ingredients}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xl font-bold text-eco-sage">
                        {product.price}₽
                      </span>
                      <Button size="sm" className="bg-eco-green hover:bg-eco-sage text-white">
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
              <Link to="/catalog">Все товары</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-eco-sage text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={20} className="text-eco-green" />
                </div>
                <span className="text-xl font-semibold font-montserrat">EcoBeauty</span>
              </div>
              <p className="text-eco-beige text-sm">
                Натуральная косметика для заботы о вашей красоте и здоровье
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-eco-beige">
                <li>Уход за лицом</li>
                <li>Уход за телом</li>
                <li>Масла и сыворотки</li>
                <li>Очищение</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-eco-beige">
                <li><Link to="/about">О бренде</Link></li>
                <li><Link to="/delivery">Доставка</Link></li>
                <li><Link to="/reviews">Отзывы</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-eco-beige">
                <p>+7 (495) 123-45-67</p>
                <p>info@ecobeauty.ru</p>
                <div className="flex space-x-3 mt-4">
                  <Button variant="ghost" size="sm" className="text-eco-beige hover:text-white p-2">
                    <Icon name="Instagram" size={18} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-eco-beige hover:text-white p-2">
                    <Icon name="MessageCircle" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-eco-beige/20 mt-8 pt-8 text-center text-sm text-eco-beige">
            <p>&copy; 2024 EcoBeauty. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;