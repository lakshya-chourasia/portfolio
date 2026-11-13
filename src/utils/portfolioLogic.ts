/**
 * Pure portfolio logic for pricing, form validation, and filtering
 */

export interface PricingPlan {
  id: string;
  badge: string;
  name: string;
  projectPrice: number;
  monthlyPrice: number;
  deliveryTime: string;
  revisions: string;
  fileFormat: string;
  features: string[];
}

export function calculatePrice(plan: PricingPlan, billingCycle: 'monthly' | 'project'): { price: number; unit: string } {
  if (billingCycle === 'monthly') {
    return {
      price: plan.monthlyPrice,
      unit: '/Month',
    };
  }
  return {
    price: plan.projectPrice,
    unit: '/Project',
  };
}

export interface ContactValidationInput {
  name: string;
  email: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function validateContactForm(data: ContactValidationInput): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Message must be at least 5 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
