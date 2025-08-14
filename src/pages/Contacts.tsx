import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      description: 'Ежедневно с 9:00 до 21:00',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@ecobeauty.ru',
      description: 'Ответим в течение 24 часов',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Тверская, д. 15',
      description: 'Наш главный офис',
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      content: 'Пн-Пт: 9:00-18:00',
      description: 'Сб-Вс: выходные',
    },
  ];

  const socialMedia = [
    { icon: 'Instagram', name: 'Instagram', handle: '@ecobeauty_official' },
    { icon: 'MessageCircle', name: 'Telegram', handle: '@ecobeauty_support' },
    { icon: 'Mail', name: 'VK', handle: 'vk.com/ecobeauty' },
  ];

  const stores = [
    {
      name: 'Флагманский магазин',
      address: 'г. Москва, ул. Тверская, д. 15',
      hours: 'Пн-Вс: 10:00-22:00',
      phone: '+7 (495) 123-45-67',
    },
    {
      name: 'Магазин в ТЦ Европейский',
      address: 'г. Москва, пл. Киевского Вокзала, д. 2',
      hours: 'Пн-Вс: 10:00-23:00',
      phone: '+7 (495) 123-45-68',
    },
    {
      name: 'Магазин в ТЦ Афимолл',
      address: 'г. Москва, Пресненская наб., д. 2',
      hours: 'Пн-Вс: 10:00-22:00',
      phone: '+7 (495) 123-45-69',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground font-montserrat mb-4">
              Контакты
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы всегда готовы помочь вам с выбором и ответить на ваши вопросы
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card className="border-eco-beige/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground font-montserrat mb-6">
                    Напишите нам
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Имя *
                        </label>
                        <Input placeholder="Ваше имя" className="border-eco-beige/30" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input placeholder="your@email.com" type="email" className="border-eco-beige/30" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Телефон
                      </label>
                      <Input placeholder="+7 (___) ___-__-__" className="border-eco-beige/30" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Тема обращения
                      </label>
                      <Input placeholder="О чем хотите спросить?" className="border-eco-beige/30" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Сообщение *
                      </label>
                      <Textarea 
                        placeholder="Опишите ваш вопрос подробнее..." 
                        rows={6}
                        className="border-eco-beige/30"
                      />
                    </div>
                    
                    <Button className="w-full bg-eco-green hover:bg-eco-sage text-white">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-eco-beige/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground font-montserrat mb-4">
                    Контактная информация
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-eco-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name={info.icon as any} size={20} className="text-eco-green" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{info.title}</h4>
                          <p className="text-foreground font-semibold">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-eco-beige/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground font-montserrat mb-4">
                    Мы в социальных сетях
                  </h3>
                  <div className="space-y-3">
                    {socialMedia.map((social, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-eco-beige/10 transition-colors cursor-pointer">
                        <Icon name={social.icon as any} size={20} className="text-eco-green" />
                        <div>
                          <div className="font-medium text-foreground">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground font-montserrat text-center mb-8">
              Наши магазины
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {stores.map((store, index) => (
                <Card key={index} className="border-eco-beige/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground font-montserrat mb-3">
                      {store.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Icon name="MapPin" size={16} className="text-eco-green mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{store.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-eco-green flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{store.hours}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" size={16} className="text-eco-green flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{store.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-eco-beige/20 to-eco-white rounded-2xl p-8 text-center">
            <Icon name="Headphones" size={48} className="text-eco-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground font-montserrat mb-4">
              Служба поддержки
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Наши специалисты готовы помочь вам с выбором продукции, консультацией по уходу 
              за кожей и решением любых вопросов. Мы работаем каждый день с 9:00 до 21:00.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-eco-green hover:bg-eco-sage text-white">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить нам
              </Button>
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Написать в чат
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;