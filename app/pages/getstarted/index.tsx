import {useRef} from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import {useGSAP} from '@gsap/react';

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

    },
    {scope: container}
  );

  return (
    <div ref={container} className="container relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden">
      <div>
        <h1 className="text-[#181310] tracking-light text-9xl font-bold leading-tight px-4 text-center pb-3 pt-6">Your Exam Guide</h1>
        <p className="text-[#181310] text-4xl font-normal leading-normal pb-3 pt-1 px-4 text-center description">
          Ace your exams with our AI-powered mock tests. Get personalized feedback and improve your performance.
        </p>
      </div>
      <div>
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#fe7323] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <a className="truncate" href="/homepage.html">Get Started</a>
          </button>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
}

export default GetStarted;
