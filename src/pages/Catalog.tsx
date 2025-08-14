import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  skinType: string[];
  ingredients: string[];
  brand: string;
  inStock: boolean;
}

const Catalog = () => {
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');

  const products: Product[] = [
    {
      id: 1,
      name: 'Увлажняющий крем с алоэ',
      price: 2890,
      category: 'Уход за лицом',
      skinType: ['Все типы кожи', 'Сухая кожа'],
      ingredients: ['Алоэ вера', 'Гиалуроновая кислота'],
      brand: 'EcoBeauty',
      inStock: true,
    },
    {
      id: 2,
      name: 'Натуральное масло жожоба',
      price: 1590,
      category: 'Масла',
      skinType: ['Сухая кожа', 'Чувствительная кожа'],
      ingredients: ['Масло жожоба', 'Витамин E'],
      brand: 'EcoBeauty',
      inStock: true,
    },
    {
      id: 3,
      name: 'Очищающая пенка с зеленым чаем',
      price: 1290,
      category: 'Очищение',
      skinType: ['Жирная кожа', 'Комбинированная кожа'],
      ingredients: ['Экстракт зеленого чая', 'Салициловая кислота'],
      brand: 'GreenLine',
      inStock: true,
    },
    {
      id: 4,
      name: 'Сыворотка с витамином С',
      price: 3490,
      category: 'Сыворотки',
      skinType: ['Все типы кожи'],
      ingredients: ['Витамин C', 'Гиалуроновая кислота'],
      brand: 'VitaGlow',
      inStock: false,
    },
    {
      id: 5,
      name: 'Скраб с морской солью',
      price: 990,
      category: 'Очищение',
      skinType: ['Жирная кожа', 'Комбинированная кожа'],
      ingredients: ['Морская соль', 'Масло кокоса'],
      brand: 'EcoBeauty',
      inStock: true,
    },
    {
      id: 6,
      name: 'Крем для рук с ши',
      price: 790,
      category: 'Уход за телом',
      skinType: ['Сухая кожа', 'Чувствительная кожа'],
      ingredients: ['Масло ши', 'Пантенол'],
      brand: 'NaturalCare',
      inStock: true,
    },
  ];

  const skinTypes = ['Все типы кожи', 'Сухая кожа', 'Жирная кожа', 'Комбинированная кожа', 'Чувствительная кожа'];
  const ingredients = ['Алоэ вера', 'Гиалуроновая кислота', 'Масло жожоба', 'Витамин E', 'Экстракт зеленого чая', 'Салициловая кислота', 'Витамин C', 'Морская соль', 'Масло кокоса', 'Масло ши', 'Пантенол'];
  const brands = ['EcoBeauty', 'GreenLine', 'VitaGlow', 'NaturalCare'];

  const filteredProducts = products.filter(product => {
    const skinTypeMatch = selectedSkinTypes.length === 0 || selectedSkinTypes.some(type => product.skinType.includes(type));
    const ingredientMatch = selectedIngredients.length === 0 || selectedIngredients.some(ingredient => product.ingredients.includes(ingredient));
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    
    return skinTypeMatch && ingredientMatch && brandMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleSkinTypeChange = (skinType: string, checked: boolean) => {
    if (checked) {
      setSelectedSkinTypes([...selectedSkinTypes, skinType]);
    } else {
      setSelectedSkinTypes(selectedSkinTypes.filter(type => type !== skinType));
    }
  };

  const handleIngredientChange = (ingredient: string, checked: boolean) => {
    if (checked) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    } else {
      setSelectedIngredients(selectedIngredients.filter(ing => ing !== ingredient));
    }
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const clearFilters = () => {
    setSelectedSkinTypes([]);
    setSelectedIngredients([]);
    setSelectedBrands([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground font-montserrat mb-2">
            Каталог косметики
          </h1>
          <p className="text-muted-foreground">
            Найдите идеальные продукты для вашего типа кожи
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-eco-beige/20 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground font-montserrat">Фильтры</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-eco-green">
                  Сбросить
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Тип кожи</h4>
                  <div className="space-y-2">
                    {skinTypes.map((skinType) => (
                      <div key={skinType} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skin-${skinType}`}
                          checked={selectedSkinTypes.includes(skinType)}
                          onCheckedChange={(checked) => handleSkinTypeChange(skinType, checked as boolean)}
                        />
                        <label htmlFor={`skin-${skinType}`} className="text-sm text-foreground cursor-pointer">
                          {skinType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Состав</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {ingredients.map((ingredient) => (
                      <div key={ingredient} className="flex items-center space-x-2">
                        <Checkbox
                          id={`ingredient-${ingredient}`}
                          checked={selectedIngredients.includes(ingredient)}
                          onCheckedChange={(checked) => handleIngredientChange(ingredient, checked as boolean)}
                        />
                        <label htmlFor={`ingredient-${ingredient}`} className="text-sm text-foreground cursor-pointer">
                          {ingredient}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Бренд</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                        />
                        <label htmlFor={`brand-${brand}`} className="text-sm text-foreground cursor-pointer">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Найдено товаров: {sortedProducts.length}
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-asc">По цене (возрастание)</SelectItem>
                  <SelectItem value="price-desc">По цене (убывание)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-eco-beige/20">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-eco-beige/30 rounded-xl mb-4 flex items-center justify-center relative">
                      <Icon name="Package" size={48} className="text-eco-green" />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                          <span className="text-white text-sm font-medium">Нет в наличии</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-foreground font-montserrat line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {product.category} • {product.brand}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {product.skinType.map((type) => (
                          <span key={type} className="text-xs bg-eco-beige/50 text-eco-sage px-2 py-1 rounded">
                            {type}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-xs text-eco-green">
                        {product.ingredients.join(', ')}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xl font-bold text-eco-sage">
                          {product.price}₽
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-eco-green hover:bg-eco-sage text-white"
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'В корзину' : 'Нет в наличии'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="SearchX" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Товары не найдены
                </h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить фильтры поиска
                </p>
                <Button variant="outline" onClick={clearFilters} className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;