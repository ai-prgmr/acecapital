import Image from "next/image";

export default function MutualFundsBanners() {
  return (
    <div className="space-y-12 mb-12">
      {/* Banner 1 */}
      <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm flex flex-col md:flex-row min-h-[400px]">
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-muted text-secondary border border-border rounded-full font-bold text-xs tracking-widest uppercase w-fit">
            Systematic Investment Plan · SIP
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4 tracking-tight">
            Small steps today,<br />
            <span className="text-primary">big futures</span> tomorrow.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl">
            Invest a fixed amount every month, automatically. Let steady, disciplined investing do the heavy lifting over time.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="bg-muted text-foreground px-4 py-2 rounded-md font-semibold text-sm">Start at ₹500</span>
            <span className="bg-muted text-foreground px-4 py-2 rounded-md font-semibold text-sm">Fully automatic</span>
            <span className="bg-muted text-foreground px-4 py-2 rounded-md font-semibold text-sm">Pause or step up anytime</span>
          </div>
          <div>
            <button className="button-primary px-8 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg inline-flex items-center gap-2">
              Start your SIP 
              <span className="text-xl leading-none">→</span>
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-[45%] lg:w-[50%] relative">
          <div className="absolute inset-0 bg-primary transform -skew-x-12 origin-top-right translate-x-16 z-0 border-l-[8px] border-white"></div>
          <div className="absolute inset-0 z-10 flex flex-col items-start justify-center pl-16 pr-8 text-primary-foreground h-full" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
            <div className="w-full h-full relative p-8 flex flex-col">
               <h3 className="text-xl font-bold mb-1">The power of consistency</h3>
               <p className="text-primary-foreground/70 text-sm mb-4">Illustrative concept, not indicative of returns</p>
               <div className="relative flex-1 rounded-lg overflow-hidden border border-primary/20 shadow-2xl bg-white">
                 <Image src="/images/sip-graph.jpg" alt="SIP Growth" fill className="object-cover" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm flex flex-col md:flex-row">
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-2 uppercase tracking-tight">
            Creating better investors with <span className="text-primary">SIP</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-bold mb-10">
            (SYSTEMATIC INVESTMENT PLAN IN MUTUAL FUND)
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
            <div className="flex items-center gap-4">
              <div className="text-secondary bg-secondary/10 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div className="text-primary font-bold text-2xl">9 New SIPs</div>
                <div className="text-muted-foreground font-medium">per minute</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-secondary bg-secondary/10 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
              </div>
              <div>
                <div className="text-primary font-bold text-2xl">2588 Cr</div>
                <div className="text-muted-foreground font-medium">Monthly SIP book</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 min-h-[300px] relative mt-8 md:mt-0 opacity-90 mix-blend-multiply hidden md:block">
           <Image src="/images/crowd-arrow.jpg" alt="Crowd forming an upward arrow" fill className="object-cover md:object-contain object-right" />
        </div>
      </div>
    </div>
  );
}
