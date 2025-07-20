import React from 'react'
import "./style.css"
import Footer from '~/components/footer'
import Header from '~/components/header'
export default function PricingPage() {
  return (
    <div className="bg-gray-50">
   <Header/> 

    <section className="relative gradient-bg pt-24 pb-12 overflow-hidden">
        <div className="floating-elements">
            <div className="floating-circle" style={{width: "100px", height: "100px", top: "20%", left: "10%", animationDelay: "0s"}}></div>
            <div className="floating-circle" style={{width: "150px", height: "150px", top: "60%", right: "15%", animationDelay: "2s"}}></div>
            <div className="floating-circle" style={{width: "80px", height: "80px", top: "80%", left: "70%", animationDelay: "4s"}}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Choose Your
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Learning Path
                </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
                Select the perfect plan to accelerate your exam preparation with AI-powered learning tools
            </p>
            
            <div className="flex items-center justify-center mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <span className="text-white font-medium mr-4">Monthly</span>
                <label className="toggle-switch">
                    <input type="checkbox" id="billingToggle"/>
                    <span className="slider"></span>
                </label>
                <span className="text-white font-medium ml-4">Yearly</span>
                <span className="ml-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Save 20%</span>
            </div>
        </div>
    </section>

    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
                
        
                <div className="pricing-card bg-white rounded-2xl shadow-lg p-8 relative animate-fade-in">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                        <p className="text-gray-600">Perfect for getting started</p>
                        <div className="mt-6">
                            <span className="text-5xl font-bold text-gray-900 monthly-price">$9</span>
                            <span className="text-5xl font-bold text-gray-900 yearly-price hidden">$7</span>
                            <span className="text-gray-600 ml-2">/month</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 yearly-savings hidden">Billed annually ($84/year)</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">5 AI practice sessions/month</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Basic performance analytics</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Standard question bank</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Email support</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-times feature-cross mr-3"></i>
                            <span className="text-gray-400">Personalized study plans</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-times feature-cross mr-3"></i>
                            <span className="text-gray-400">Advanced AI tutoring</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-times feature-cross mr-3"></i>
                            <span className="text-gray-400">Priority support</span>
                        </li>
                    </ul>
                    
                    <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105">
                        Start Free Trial
                    </button>
                </div>

                <div className="pricing-card bg-white rounded-2xl shadow-2xl p-8 relative border-2 border-blue-500 hover-scale animate-fade-in" style={{animationDelay: "0.2s"}}>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="popular-badge text-white px-6 py-2 rounded-full text-sm font-bold">
                            <i className="fas fa-star mr-1"></i>
                            MOST POPULAR
                        </span>
                    </div>
                    
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                        <p className="text-gray-600">Best for serious students</p>
                        <div className="mt-6">
                            <span className="text-5xl font-bold text-blue-600 monthly-price">$29</span>
                            <span className="text-5xl font-bold text-blue-600 yearly-price hidden">$23</span>
                            <span className="text-gray-600 ml-2">/month</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 yearly-savings hidden">Billed annually ($276/year)</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Unlimited AI practice sessions</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Advanced performance analytics</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Premium question bank (10K+ questions)</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Personalized study plans</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">AI-powered weak area detection</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">24/7 AI tutor support</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Priority customer support</span>
                        </li>
                    </ul>
                    
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
                        Start Free Trial
                    </button>
                </div>

                <div className="pricing-card bg-white rounded-2xl shadow-lg p-8 relative animate-fade-in" style={{animationDelay: "0.4s"}}>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                        <p className="text-gray-600">For institutions & teams</p>
                        <div className="mt-6">
                            <span className="text-5xl font-bold text-gray-900 monthly-price">$99</span>
                            <span className="text-5xl font-bold text-gray-900 yearly-price hidden">$79</span>
                            <span className="text-gray-600 ml-2">/month</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 yearly-savings hidden">Billed annually ($948/year)</p>
                        <p className="text-sm text-blue-600 mt-1">Up to 50 users</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Everything in Pro</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Multi-user dashboard</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Advanced team analytics</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Custom content creation</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">White-label solutions</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">Dedicated account manager</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check feature-check mr-3"></i>
                            <span className="text-gray-700">API access & integrations</span>
                        </li>
                    </ul>
                    
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare All Features</h2>
                <p className="text-xl text-gray-600">See what's included in each plan</p>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Features</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">Basic</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 border-b bg-blue-50">Pro</th>
                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">Enterprise</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-900">AI Practice Sessions</td>
                            <td className="px-6 py-4 text-center text-sm text-gray-600">5/month</td>
                            <td className="px-6 py-4 text-center text-sm text-gray-600 bg-blue-50">Unlimited</td>
                            <td className="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-900">Question Bank Size</td>
                            <td className="px-6 py-4 text-center text-sm text-gray-600">1,000+</td>
                            <td className="px-6 py-4 text-center text-sm text-gray-600 bg-blue-50">10,000+</td>
                            <td className="px-6 py-4 text-center text-sm text-gray-600">10,000+</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-900">Personalized Study Plans</td>
                            <td className="px-6 py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                            <td className="px-6 py-4 text-center bg-blue-50"><i className="fas fa-check text-green-500"></i></td>
                            <td className="px-6 py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-900">24/7 AI Tutor</td>
                            <td className="px-6 py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                            <td className="px-6 py-4 text-center bg-blue-50"><i className="fas fa-check text-green-500"></i></td>
                            <td className="px-6 py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-900">Multi-user Dashboard</td>
                            <td className="px-6 py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                            <td className="px-6 py-4 text-center bg-blue-50"><i className="fas fa-times text-red-500"></i></td>
                            <td className="px-6 py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-900">API Access</td>
                            <td className="px-6 py-4 text-center"><i className="fas fa-times text-red-500"></i></td>
                            <td className="px-6 py-4 text-center bg-blue-50"><i className="fas fa-times text-red-500"></i></td>
                            <td className="px-6 py-4 text-center"><i className="fas fa-check text-green-500"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
            </div>
            
            <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How does the free trial work?</h3>
                    <p className="text-gray-600">Start with a 14-day free trial of any plan. No credit card required. Cancel anytime during the trial period.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I switch plans anytime?</h3>
                    <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What subjects are covered?</h3>
                    <p className="text-gray-600">We cover all major subjects including Mathematics, Science, English, History, and more. New subjects are added regularly.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a student discount?</h3>
                    <p className="text-gray-600">Yes! Students get 30% off all plans with a valid student ID. Contact our support team to apply the discount.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Ace Your Exams?</h2>
            <p className="text-xl text-gray-300 mb-8">
                Join thousands of students who have improved their grades by an average of 23% with ExamAI Pro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105">
                    Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all">
                    Schedule Demo
                </button>
            </div>
            <p className="text-gray-400 mt-6">
                <i className="fas fa-shield-alt mr-2"></i>
                30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
        </div>
    </section>

    <Footer/>

    </div>
  )
}
