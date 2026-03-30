'use client'
import React, { useState } from 'react'

const plans = [
    {
        name: 'Starter',
        monthly: 49,
        yearly: 39,
        description: 'Perfect for solo businesses getting started with AI.',
        popular: false,
        buttonVariant: 'filled',
        features: [
            '1 AI Voice Agent',
            'Website Chatbot',
            '100 Calls/month',
            'Appointment Booking',
            'Email Support',
        ],
        featuresLabel: 'Includes :',
        dark: false,
    },
    {
        name: 'Professional',
        monthly: 149,
        yearly: 119,
        description: 'For growing businesses that need more automation.',
        popular: true,
        buttonVariant: 'white',
        features: [
            '3 AI Voice Agent',
            'Website + WhatsApp Chatbot',
            '500 Calls/month',
            'Advanced Analytics',
            'Calendar Sync',
            'Priority Support',
        ],
        featuresLabel: 'Includes all Starter features :',
        dark: true,
    },
    {
        name: 'Enterprise',
        monthly: 399,
        yearly: 319,
        description: 'Full-scale automation for multi-location businesses.',
        popular: false,
        buttonVariant: 'filled',
        features: [
            'Unlimited AI Agents',
            'All Channels',
            'Unlimited Calls',
            'White-label Option',
            'API Access',
            'Dedicated Account Manager',
            'Custom Integrations',
            'SLA Guarantee',
        ],
        featuresLabel: 'Includes :',
        dark: false,
    },
]

const CheckIcon = ({ dark }: { dark: boolean }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 mt-0.5"
    >
        <circle cx="10" cy="10" r="10" fill={dark ? 'rgba(255,255,255,0.15)' : '#EEF0FF'} />
        <path
            d="M6 10.5L8.5 13L14 7.5"
            stroke={dark ? '#FFFFFF' : '#5C5CE0'}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default function Pricing() {
    const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly')

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-poppins">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="font-poppins text-2xl sm:text-4xl font-bold text-[#323338] leading-12">
                    Simple, Transparent Pricing
                </h2>
                <p className="font-poppins text-sm sm:text-lg font-light text-[#333333] leading-8 mt-3">
                    Start free. Scale as you grow. No hidden fees.
                </p>
            </div>

            {/* Toggle */}
            <div className="flex justify-center mb-10">
                <div className="flex items-center gap-1 border border-gray-200 rounded-full px-2 py-1.5 bg-white shadow-sm">
                    <button
                        onClick={() => setBilling('monthly')}
                        className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${billing === 'monthly'
                                ? 'bg-[#1a1a2e] text-white'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Monthly
                    </button>
                    <div className="w-px h-4 bg-gray-200 mx-1" />
                    <button
                        onClick={() => setBilling('yearly')}
                        className={`flex items-center gap-2 px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${billing === 'yearly'
                                ? 'bg-[#1a1a2e] text-white'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Yearly
                        <span
                            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${billing === 'yearly'
                                    ? 'bg-white text-[#1a1a2e]'
                                    : 'bg-[#5C5CE0] text-white'
                                }`}
                        >
                            20% off
                        </span>
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl p-7 flex flex-col shadow-md transition-transform duration-200 hover:-translate-y-1 ${plan.dark
                                ? 'bg-linear-to-br from-[#0F1048] via-[#6161FF] to-[#7A7AFF] text-white'
                                : 'bg-white border border-gray-100 text-[#1a1a2e]'
                            }`}
                        style={
                            plan.dark
                                ? {}
                                : {
                                    background:
                                        'radial-gradient(ellipse at top right, #e8eaff 0%, #fff 55%)',
                                }
                        }
                    >
                        {/* Decorative blob */}
                        {!plan.dark && (
                            <div
                                className="absolute top-4 right-4 w-24 h-24 rounded-full opacity-40 pointer-events-none"
                                style={{
                                    background:
                                        plan.name === 'Enterprise'
                                            ? 'radial-gradient(circle, #c0bfff 0%, transparent 70%)'
                                            : 'radial-gradient(circle, #b3d9f7 0%, transparent 70%)',
                                }}
                            />
                        )}

                        {/* Plan name + badge */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`text-base font-bold ${plan.dark ? 'text-white' : 'text-[#1a1a2e]'}`}>
                                {plan.name}
                            </span>
                            {plan.popular && (
                                <span className="flex items-center gap-1.5 text-xs font-semibold bg-white/20 border border-white/30 text-white rounded-full px-3 py-1">
                                    <span className="w-2 h-2 rounded-full bg-[#7c7cff] inline-block" />
                                    Popular
                                </span>
                            )}
                        </div>

                        {/* Price */}
                        <div className="flex items-end gap-1 mb-1">
                            <span className={`text-5xl font-extrabold leading-none ${plan.dark ? 'text-white' : 'text-[#1a1a2e]'}`}>
                                ${billing === 'yearly' ? plan.yearly : plan.monthly}
                            </span>
                            <span className={`text-sm mb-1 ${plan.dark ? 'text-white/70' : 'text-gray-400'}`}>
                                / month
                            </span>
                        </div>

                        {/* Description */}
                        <p className={`text-sm mt-2 mb-5 leading-relaxed ${plan.dark ? 'text-white/80' : 'text-gray-500'}`}>
                            {plan.description}
                        </p>

                        {/* CTA */}
                        <button
                            className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-6 cursor-pointer ${plan.buttonVariant === 'white'
                                    ? 'bg-white text-[#2d2d8f] hover:bg-gray-100'
                                    : 'bg-[#5C5CE0] text-white hover:bg-[#4b4bc9]'
                                }`}
                        >
                            Get Started Now
                        </button>

                        {/* Features */}
                        <p className={`text-xs font-medium mb-3 ${plan.dark ? 'text-white/70' : 'text-gray-400'}`}>
                            {plan.featuresLabel}
                        </p>
                        <ul className="flex flex-col gap-3">
                            {plan.features.map((f) => (
                                <li key={f} className="flex items-start gap-3">
                                    <CheckIcon dark={plan.dark} />
                                    <span className={`text-sm ${plan.dark ? 'text-white/90' : 'text-[#333]'}`}>
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}