import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'Premium Cement',
      category: 'Building Materials',
      image: '/images/PremiumCement.jpg',
      description: 'High-grade Portland cement for superior construction strength and durability.',
      features: ['OPC 53 Grade', 'IS 12269 Certified', '50kg bags', 'Bulk available'],
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      name: 'Steel Reinforcement Bars',
      category: 'Structural Steel',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Corrosion-resistant TMT bars ensuring long-lasting structural integrity.',
      features: ['Fe 500D Grade', 'Earthquake resistant', 'Various diameters', 'IS 1786 compliant'],
      rating: 4.8,
      popular: false
    },
    {
      id: 3,
      name: 'Clay Bricks',
      category: 'Masonry',
      image: '/images/PremiumCement.jpg',
      description: 'Premium fired clay bricks with excellent thermal and structural properties.',
      features: ['Class A quality', 'Standard size', 'High compressive strength', 'Weather resistant'],
      rating: 4.7,
      popular: true
    },
    {
      id: 4,
      name: 'Ready Mix Concrete',
      category: 'Concrete',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Pre-mixed concrete solutions for various construction applications.',
      features: ['Multiple grades', 'Quality controlled', 'Timely delivery', 'Pump-ready'],
      rating: 4.9,
      popular: false
    },
    {
      id: 5,
      name: 'Roofing Materials',
      category: 'Roofing',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Complete roofing solutions including tiles, sheets, and accessories.',
      features: ['Weather proof', 'UV resistant', 'Easy installation', '10-year warranty'],
      rating: 4.6,
      popular: false
    },
    {
      id: 6,
      name: 'Construction Tools',
      category: 'Tools & Equipment',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional-grade tools and equipment for construction projects.',
      features: ['Heavy-duty quality', 'Ergonomic design', 'Rental available', 'Maintenance support'],
      rating: 4.8,
      popular: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
            Our Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Construction
            <span className="block text-blue-600">Materials & Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality construction materials, 
            tools, and supplies designed to meet all your building needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.popular && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-1 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="flex-1 mr-2">
                    Get Quote
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}