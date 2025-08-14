import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'О бренде', path: '/about' },
    { name: 'Доставка', path: '/delivery' },
    { name: 'Отзывы', path: '/reviews' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-eco-beige/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center">
              <Icon name="Leaf" size={20} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-eco-sage font-montserrat">EcoBeauty</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-eco-green transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="Search" size={18} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Heart" size={18} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingBag" size={18} />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={18} />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-eco-beige/20">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-foreground hover:text-eco-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;