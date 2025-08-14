import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  product: string;
  text: string;
  helpful: number;
  verified: boolean;
}

const Reviews = () => {
  const [filter, setFilter] = useState<'all' | 5 | 4 | 3 | 2 | 1>('all');
  
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Анна К.',
      rating: 5,
      date: '2024-01-15',
      product: 'Увлажняющий крем с алоэ',
      text: 'Потрясающий крем! У меня очень сухая и чувствительная кожа, и этот крем стал настоящим спасением. Впитывается быстро, не оставляет жирности, а кожа становится мягкой и увлажненной на весь день.',
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      name: 'Мария С.',
      rating: 5,
      date: '2024-01-10',
      product: 'Натуральное масло жожоба',
      text: 'Использую это масло уже полгода и очень довольна! Прекрасно подходит для ночного ухода, кожа стала более упругой и сияющей. Натуральный состав - это большой плюс.',
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      name: 'Елена В.',
      rating: 4,
      date: '2024-01-08',
      product: 'Очищающая пенка с зеленым чаем',
      text: 'Хорошая пенка для ежедневного использования. Мягко очищает кожу, не сушит. Единственный минус - хотелось бы больший объем упаковки.',
      helpful: 5,
      verified: true,
    },
    {
      id: 4,
      name: 'Ольга Н.',
      rating: 5,
      date: '2024-01-05',
      product: 'Сыворотка с витамином С',
      text: 'Невероятная сыворотка! Заметила результат уже через неделю использования - кожа стала более ровной, пигментные пятна посветлели. Обязательно буду заказывать еще.',
      helpful: 15,
      verified: true,
    },
    {
      id: 5,
      name: 'Татьяна Л.',
      rating: 4,
      date: '2024-01-03',
      product: 'Скраб с морской солью',
      text: 'Деликатный скраб, не травмирует кожу. После использования кожа становится гладкой и мягкой. Приятный натуральный аромат.',
      helpful: 7,
      verified: false,
    },
    {
      id: 6,
      name: 'Ирина П.',
      rating: 5,
      date: '2024-01-01',
      product: 'Крем для рук с ши',
      text: 'Лучший крем для рук, который я пробовала! Быстро впитывается, долго защищает от сухости. Особенно хорош в зимнее время.',
      helpful: 9,
      verified: true,
    },
  ];

  const filteredReviews = filter === 'all' ? reviews : reviews.filter(review => review.rating === filter);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  const renderStars = (rating: number, size: number = 16) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={size}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground font-montserrat mb-4">
              Отзывы покупателей
            </h1>
            <p className="text-lg text-muted-foreground">
              Узнайте, что думают наши клиенты о продукции EcoBeauty
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card className="border-eco-beige/20 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground font-montserrat mb-4">
                    Рейтинг товаров
                  </h3>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex justify-center mb-2">
                      {renderStars(Math.round(averageRating), 20)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      На основе {reviews.length} отзывов
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {[5, 4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-foreground w-6">{rating}</span>
                        <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full" 
                            style={{ width: `${(ratingCounts[rating as keyof typeof ratingCounts] / reviews.length) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-6">
                          {ratingCounts[rating as keyof typeof ratingCounts]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground mb-3">Фильтр по рейтингу</h4>
                    <Button
                      variant={filter === 'all' ? 'default' : 'outline'}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter('all')}
                    >
                      Все отзывы ({reviews.length})
                    </Button>
                    {[5, 4, 3, 2, 1].map(rating => (
                      <Button
                        key={rating}
                        variant={filter === rating ? 'default' : 'outline'}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setFilter(rating)}
                      >
                        <div className="flex items-center">
                          {renderStars(rating, 14)}
                          <span className="ml-2">({ratingCounts[rating as keyof typeof ratingCounts]})</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <Card key={review.id} className="border-eco-beige/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarFallback className="bg-eco-green/10 text-eco-green">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-foreground">{review.name}</h4>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs border-eco-green text-eco-green">
                                  <Icon name="CheckCircle" size={12} className="mr-1" />
                                  Проверено
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {formatDate(review.date)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Badge variant="secondary" className="mb-3 bg-eco-beige/20 text-eco-sage">
                        {review.product}
                      </Badge>

                      <p className="text-foreground leading-relaxed mb-4">
                        {review.text}
                      </p>

                      <div className="flex items-center justify-between">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-eco-green">
                          <Icon name="ThumbsUp" size={16} className="mr-2" />
                          Полезно ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-eco-green">
                          <Icon name="MessageCircle" size={16} className="mr-2" />
                          Ответить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredReviews.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="MessageSquare" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Отзывы не найдены
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Попробуйте изменить фильтр
                  </p>
                  <Button variant="outline" onClick={() => setFilter('all')} className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                    Показать все отзывы
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-eco-beige/20 to-eco-white rounded-2xl p-8 text-center">
            <Icon name="Edit3" size={48} className="text-eco-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground font-montserrat mb-4">
              Поделитесь своим мнением
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ваш отзыв поможет другим покупателям сделать правильный выбор. 
              Расскажите о своем опыте использования наших продуктов.
            </p>
            <Button className="bg-eco-green hover:bg-eco-sage text-white">
              Написать отзыв
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;