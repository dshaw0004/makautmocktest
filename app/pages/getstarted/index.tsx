import {useRef} from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import {useGSAP} from '@gsap/react';
import "./get-started.css";
import Footer from '~/components/footer';
import Header from '~/components/header';
import {Button} from '~/components/ui/button';
import {Link} from 'react-router';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

function GetStarted() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const split = new SplitText('.description', {
        type: 'words',
        wordsClass: 'word',
      });
      gsap.from(split.words, {
        duration: 0.5,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: 'power2.out',
      })
      // const anchorText = new SplitText('span', { type: 'chars' });
      // gsap.from(anchorText.chars, {
      //   duration: 0.05,
      //   opacity: 0,
      //   y: 10,
      //   stagger: 0.05,
      //   ease: "power1.out",
      // })

    },
    {scope: container}
  );

  return (
    <div className="">
      <Header />
      <section className="relative gradient-bg min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="floating-shapes"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={container} className=" animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-200">
                Master Your Exams with&nbsp;
                <span className="bg-gradient-to-r from-[#ff5500] to-[#ff9944] bg-clip-text text-transparent">
                  AI Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed description">
                Ace your exams with our AI-powered mock tests. Get personalized feedback and improve your performance.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-[#ff9944] px-8 py-6 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                  <Link to={'/home'}>Get Started</Link>
                </Button>
              </div>
              <div className="flex text-gray-200 items-center mt-8 space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-blue-200 text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">AI Support</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 glass-effect">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Practice Session Complete</h3>
                      <p className="text-gray-600 text-sm">Mathematics - Calculus</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Accuracy</span>
                      <span className="font-semibold text-green-600">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time Efficiency</span>
                      <span className="font-semibold text-blue-600">+15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full"></div>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all">
                    Continue Learning
                  </button>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Features for Smarter Learning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform adapts to your learning style and helps you achieve your academic goals faster than ever before.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 hover-float">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Get detailed insights into your strengths and weaknesses with comprehensive analytics and personalized improvement suggestions.
              </p>
            </div>



            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-8 hover-float">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-question-circle text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learn with AI</h3>
              <p className="text-gray-600">Leverage the power of AI to cover up your syllabus.</p>
            </div>



            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 hover-float">
              <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-mobile-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Learning</h3>
              <p className="text-gray-600">
                Study anywhere, anytime with our responsive mobile platform that syncs across all your devices seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Exam Preparation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful students who have improved their grades with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              className="bg-gradient-to-r from-[#ff5500] to-[#ff9944] text-white px-8 py-6 rounded-xl font-bold text-xl hover:shadow-lg transition-all transform hover:scale-105"
            ><Link to={'/home'}>Get Started</Link></Button>
          </div>

        </div>
      </section>

      <Footer />


    </div>
  );
}

export default GetStarted;

/*
 <style></style>
<script>
        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('shadow-xl');
            } else {
                nav.classList.remove('shadow-xl');
            }
        });
    </script>
*/
