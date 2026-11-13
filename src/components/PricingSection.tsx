import React, { useState } from 'react';
import { ArrowUpRight, Zap, Check } from 'lucide-react';
import { calculatePrice, PricingPlan } from '../utils/portfolioLogic';

interface PricingSectionProps {
  onNavigate: (view: string) => void;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    badge: 'COMPLETE PACKAGE',
    name: 'BASIC DESIGN PACKAGE',
    projectPrice: 200,
    monthlyPrice: 1200,
    deliveryTime: '2-3 Weeks',
    revisions: 'Up to 2',
    fileFormat: 'Figma',
    features: [
      'Homepage + up to 2 inner pages',
      'Starter Design System',
      'Basic Website Setup & Flow',
      'Initial Competitor Analysis',
      'Basic SEO & Meta Setup',
      '1 Months Dedicated Support',
    ],
  },
  {
    id: 'pro',
    badge: 'MOST POPULAR',
    name: 'PRO PRODUCT PACKAGE',
    projectPrice: 300,
    monthlyPrice: 2400,
    deliveryTime: '3-4 Weeks',
    revisions: 'Up to 4',
    fileFormat: 'Figma + React',
    features: [
      'Homepage + up to 5 inner pages',
      'Comprehensive Design System',
      'Mobile-Optimized & Responsive Flow',
      'User Research & Usability Testing',
      'Advanced SEO & Analytics Setup',
      '3 Months Extended Support',
    ],
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('basic');

  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[0];
  const { price, unit } = calculatePrice(selectedPlan, billingCycle);

  return (
    <section className="w-full bg-white py-20 sm:py-28 text-[#111111] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header Tag */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ff4d15] uppercase">
            // PRICING
          </span>
        </div>

        {/* Headline & Toggle Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none max-w-2xl">
            SIMPLE PLANS <br />
            <span className="text-neutral-500 font-extrabold">FOR EVERY NEED</span>
          </h2>

          {/* Monthly vs Project Based Toggle matching video */}
          <div className="flex items-center bg-neutral-100 p-1.5 rounded-sm border border-neutral-300 self-start md:self-auto">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer rounded-xs ${
                billingCycle === 'monthly'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer rounded-xs ${
                billingCycle === 'project'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              PROJECT BASED
            </button>
          </div>
        </div>

        {/* Plan Selector Pills */}
        <div className="flex items-center gap-3 mb-8">
          {PRICING_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-all cursor-pointer border rounded-sm ${
                selectedPlanId === plan.id
                  ? 'bg-[#111111] text-white border-[#111111]'
                  : 'bg-white text-neutral-600 border-neutral-300 hover:border-black'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Pricing Card matching the exact dark card layout in video */}
        <div className="bg-[#0e0e0e] text-white p-8 sm:p-12 rounded-xs shadow-2xl border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Metadata & Details */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-neutral-800 pb-8 lg:pb-0 lg:pr-10">
            <div>
              <span className="inline-block px-3 py-1 bg-neutral-800 text-[#ff4d15] text-[10px] font-mono uppercase font-bold tracking-wider rounded-xs mb-4">
                {selectedPlan.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-6">
                {selectedPlan.name}
              </h3>
            </div>

            <div className="space-y-4 font-mono text-xs text-neutral-400">
              <div className="flex items-center justify-between py-2 border-b border-neutral-800/80">
                <span className="uppercase text-neutral-500">Delivery Time:</span>
                <span className="font-bold text-white">{selectedPlan.deliveryTime}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-neutral-800/80">
                <span className="uppercase text-neutral-500">Revisions:</span>
                <span className="font-bold text-white">{selectedPlan.revisions}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="uppercase text-neutral-500">File Format:</span>
                <span className="font-bold text-white">{selectedPlan.fileFormat}</span>
              </div>
            </div>
          </div>

          {/* Middle Column: Price & Guarantee */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-neutral-800 pb-8 lg:pb-0 lg:pr-10">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                {billingCycle === 'monthly' ? 'MONTHLY RETAINER' : 'ONE-TIME PAYMENT'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tight">
                  ${price}
                </span>
                <span className="text-sm font-mono text-neutral-400">
                  {unit}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-[#ff4d15] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    SATISFACTION GUARANTEE
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    We are committed to delivering high-quality design work that exceeds expectations.
                  </p>
                </div>
              </div>

              {/* Get Started Button */}
              <button
                onClick={() => onNavigate('contact')}
                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-[#ff4d15] text-[#111111] hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-wider font-bold rounded-xs cursor-pointer group"
              >
                <span>GET STARTED</span>
                <div className="w-6 h-6 bg-[#ff4d15] group-hover:bg-black text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Features List with Bullets */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-4">
              WHAT'S INCLUDED
            </span>
            <ul className="space-y-3">
              {selectedPlan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <div className="w-4 h-4 rounded-full bg-[#ff4d15]/20 text-[#ff4d15] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
