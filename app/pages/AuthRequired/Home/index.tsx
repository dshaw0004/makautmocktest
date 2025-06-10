import FloatingTabMenu from "~/components/FloatingTabMenu";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{fontFamily: "sans-serif"}}>
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <h2 className="text-[#161413] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Mock Test</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#161413] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-[#161413]" data-icon="Gear" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
            <div className="flex gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfMaDo9Cu1beNUsXWkZ7tE1L-rrP9xsvUq8J-YybaV6SZVFd-3O0OG3myGyV8CPDygPtsu4wbrxG9kDwVeEWOBeQzvVIWAV9ZizR4iXe6j-HIJnen_hUqUh_ICcckpf-fjW7URfqt2xMBTp4Gx4haIgl_gq730WD5rEm5ZtnB7iwgLqVCOWj5vrS74LdC8hBqMa0wOi7HhGb1Rbbgs2HIXAiMC535Ib0W_5ybwnFamcdx3UFbwdy7-ax8ytjmIiqUWyHeg3aIO2kE")'}}></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#161413] text-[22px] font-bold leading-tight tracking-[-0.015em]">Ethan Bennett</p>
                <p className="text-[#7e756d] text-base font-normal leading-normal">Student</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#161413] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Overall Progress</h2>
        <div className="flex flex-wrap gap-4 px-4 py-6">
          <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#e3e0de] p-6">
            <p className="text-[#161413] text-base font-medium leading-normal">Progress Trend</p>
            <p className="text-[#161413] tracking-light text-[32px] font-bold leading-tight truncate">75%</p>
            <p className="text-[#7e756d] text-base font-normal leading-normal">Last Week</p>
            <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
              <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#7e756d" stroke-width="3" stroke-linecap="round"></path>
                <defs>
                  <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f3f2f1"></stop>
                    <stop offset="1" stop-color="#f3f2f1" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-around">
                <p className="text-[#7e756d] text-[13px] font-bold leading-normal tracking-[0.015em]">Mon</p>
                <p className="text-[#7e756d] text-[13px] font-bold leading-normal tracking-[0.015em]">Tue</p>
                <p className="text-[#7e756d] text-[13px] font-bold leading-normal tracking-[0.015em]">Wed</p>
                <p className="text-[#7e756d] text-[13px] font-bold leading-normal tracking-[0.015em]">Thu</p>
                <p className="text-[#7e756d] text-[13px] font-bold leading-normal tracking-[0.015em]">Fri</p>
                <p className="text-[#7e756d] text-[13px] font-bold leading-normal tracking-[0.015em]">Sat</p>
                <p className="text-[#7e756d] text-[13px] font-bold leading-normal tracking-[0.015em]">Sun</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#e3e0de]">
            <p className="text-[#161413] text-base font-medium leading-normal">Tests Taken</p>
            <p className="text-[#161413] tracking-light text-2xl font-bold leading-tight">12</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#e3e0de]">
            <p className="text-[#161413] text-base font-medium leading-normal">Average Score</p>
            <p className="text-[#161413] tracking-light text-2xl font-bold leading-tight">75%</p>
          </div>
        </div>
        <h2 className="text-[#161413] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Tests</h2>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-[#161413] text-base font-medium leading-normal line-clamp-1">Test 1</p>
            <p className="text-[#7e756d] text-sm font-normal leading-normal line-clamp-2">Math</p>
          </div>
          <div className="shrink-0"><p className="text-[#161413] text-base font-normal leading-normal">80%</p></div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-[#161413] text-base font-medium leading-normal line-clamp-1">Test 2</p>
            <p className="text-[#7e756d] text-sm font-normal leading-normal line-clamp-2">Science</p>
          </div>
          <div className="shrink-0"><p className="text-[#161413] text-base font-normal leading-normal">70%</p></div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-[#161413] text-base font-medium leading-normal line-clamp-1">Test 3</p>
            <p className="text-[#7e756d] text-sm font-normal leading-normal line-clamp-2">English</p>
          </div>
          <div className="shrink-0"><p className="text-[#161413] text-base font-normal leading-normal">75%</p></div>
        </div>
      </div>
      <div>
        <FloatingTabMenu />
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
}
