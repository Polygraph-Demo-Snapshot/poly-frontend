import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProductDetail } from './ProductDetail';

describe('ProductDetail', () => {
  it('renders product details', () => {
    render(
      <ProductDetail
        product={{
          id: '1',
          name: 'Wireless Headphones',
          price: 249.99,
          description: 'Noise cancelling wireless headphones.',
          images: ['https://picsum.photos/seed/headphones/400/400'],
          rating: 4.5,
          reviewCount: 120,
          inStock: true,
        }}
      />
    );

    expect(screen.getByText('Wireless Headphones')).toBeTruthy();
    expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeTruthy();
    expect(screen.getByText(/In Stock/)).toBeTruthy();
  });
});
