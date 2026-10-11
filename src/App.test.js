import { render, screen } from '@testing-library/react';
import App from './App';

test('service navigation leads to the corresponding sections', () => {
  render(<App />);
  const navigation = screen.getByRole('navigation', { name: 'Services' });
  navigation.querySelectorAll('a').forEach(link => {
    const target = document.querySelector(link.getAttribute('href'));
    expect(target).toBeInTheDocument();
    expect(target).toHaveTextContent(link.textContent);
  });
});

test('offers working email and WhatsApp contact links', () => {
  render(<App />);
  const email = new URL(screen.getByRole('link', { name: 'studioashoka12@gmail.com' }).getAttribute('href'));
  expect(email.protocol).toBe('mailto:');
  expect(email.pathname).toBe('studioashoka12@gmail.com');
  expect(email.searchParams.get('subject')).toBe('Project Enquiry — Studio Ashoka');
  expect(email.searchParams.get('body')).toContain('Hello Studio Ashoka,\r\n\r\n');
  expect(email.searchParams.get('body')).toContain('Project details: ');
  const whatsapp = new URL(screen.getByRole('link', { name: /Chat on WhatsApp: 9834191441/ }).getAttribute('href'));
  expect(whatsapp.origin + whatsapp.pathname).toBe('https://wa.me/919834191441');
  expect(whatsapp.searchParams.get('text')).toContain('Hello Studio Ashoka!');
  expect(whatsapp.searchParams.get('text')).toContain('\n\nName: \n');
  expect(whatsapp.searchParams.get('text')).toContain('Project details: ');
});

test('prioritizes the hero and serves responsive, dimensioned images', () => {
  const { container } = render(<App />);
  const hero = container.querySelector('.hero .section-backdrop');
  expect(hero).toHaveAttribute('loading', 'eager');
  expect(hero).toHaveAttribute('fetchpriority', 'high');
  container.querySelectorAll('img').forEach(image => {
    expect(image).toHaveAttribute('srcset');
    expect(image).toHaveAttribute('sizes');
    expect(Number(image.getAttribute('width'))).toBeGreaterThan(0);
    expect(Number(image.getAttribute('height'))).toBeGreaterThan(0);
  });
  container.querySelectorAll('main img, footer img').forEach(image => {
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});
