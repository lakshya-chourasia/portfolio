import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePrice,
  validateContactForm,
  calculateReadingTime,
  PricingPlan,
} from './portfolioLogic';

test('calculatePrice returns monthly and project pricing correctly', () => {
  const plan: PricingPlan = {
    id: 'basic',
    badge: 'COMPLETE PACKAGE',
    name: 'BASIC DESIGN PACKAGE',
    projectPrice: 200,
    monthlyPrice: 1200,
    deliveryTime: '2-3 Weeks',
    revisions: 'Up to 2',
    fileFormat: 'Figma',
    features: ['Homepage + up to 2 inner pages'],
  };

  const projectPrice = calculatePrice(plan, 'project');
  assert.equal(projectPrice.price, 200);
  assert.equal(projectPrice.unit, '/Project');

  const monthlyPrice = calculatePrice(plan, 'monthly');
  assert.equal(monthlyPrice.price, 1200);
  assert.equal(monthlyPrice.unit, '/Month');
});

test('validateContactForm checks name, email, and message correctly', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    message: 'hi',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Jane Smith',
    email: 'jane@framer.com',
    message: 'We would love to collaborate on our new product redesign.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('calculateReadingTime calculates estimated reading minutes', () => {
  const shortText = 'One two three four five';
  assert.equal(calculateReadingTime(shortText), 1);

  const longText = new Array(450).fill('design').join(' ');
  assert.equal(calculateReadingTime(longText), 3);
});
