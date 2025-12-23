import React from "react";
import bannerImage from "@assets/banner_processed.jpg";
import communitySpotlightImage from "@assets/spotlight_processed.png";
import chloeGameImage from "@assets/chloegamestaff_1766515584240.jpeg";

export default function Newsletter() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative" style={{ background: 'radial-gradient(circle at center, #F5EFE8 0%, #F2EAE2 100%)' }}>
      <div className="noise-overlay"></div>
      {/* Email Container - Simulating standard email width */}
      <div className="w-full max-w-[680px] bg-transparent relative z-10">
        
        {/* Masthead */}
        <header className="mb-12 md:mb-24 pt-8 px-8">
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-6xl tracking-[-0.04em] mb-6 font-extrabold text-[#1C1C1C] relative text-center w-full">
              <span className="text-[#B22E21]">NO BAD</span> NEWS
            </h1>
            
            <div className="w-full max-w-[400px] flex flex-col items-center sm:items-start pl-0 sm:pl-12">
              <div className="w-20 h-[1px] bg-[#1C1C1C] mb-6"></div>
              <div className="flex items-center gap-4 text-[#1C1C1C]/60 font-sans text-xs tracking-wide uppercase py-1 font-light">
                <span className="opacity-80">Issue 001</span>
                <span className="opacity-40">•</span>
                <span className="opacity-80">Friday Morning</span>
              </div>
            </div>
            
            <div className="font-serif italic text-lg tracking-[0.05em] text-[#1C1C1C] mt-6 mb-6 text-center">
              For the stories that need to be told.
            </div>
          </div>
        </header>

        {/* Quiet Top Banner */}
        <div className="w-full h-[180px] mb-12 md:mb-24 overflow-hidden opacity-90">
          <img 
            src={bannerImage}
            alt="Atmospheric texture" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* TL;DR Section */}
        <section className="mb-12 md:mb-24">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] uppercase mb-10 opacity-90 scroll-mt-12">
            TL;DR - This Week in No Bad News
          </h2>
          <ul className="space-y-6 font-body text-[#1C1C1C] text-[17px] leading-[1.6] max-w-[95%]">
            <li className="group">
              <a href="#food" className="flex gap-4 w-full no-underline hover:opacity-80 transition-opacity">
                <span className="shrink-0 font-sans text-xs font-bold text-[#B22E21] tracking-wider w-20 pt-1.5">FOOD</span>
                <span className="group-hover:text-[#B22E21] transition-colors border-b border-transparent group-hover:border-[#B22E21]/20">My family’s Cajun gumbo recipe - finally on video</span>
              </a>
            </li>
            <li className="group">
              <a href="#hosting" className="flex gap-4 w-full no-underline hover:opacity-80 transition-opacity">
                <span className="shrink-0 font-sans text-xs font-bold text-[#B22E21] tracking-wider w-20 pt-1.5">HOSTING</span>
                <span className="group-hover:text-[#B22E21] transition-colors border-b border-transparent group-hover:border-[#B22E21]/20">A hosting move that instantly upgrades conversation</span>
              </a>
            </li>
            <li className="group">
              <a href="#tips" className="flex gap-4 w-full no-underline hover:opacity-80 transition-opacity">
                <span className="shrink-0 font-sans text-xs font-bold text-[#B22E21] tracking-wider w-20 pt-1.5">DROPS</span>
                <span className="group-hover:text-[#B22E21] transition-colors border-b border-transparent group-hover:border-[#B22E21]/20">A Rockefeller Center flex you can steal at the bar</span>
              </a>
            </li>
            <li className="group">
              <a href="#music" className="flex gap-4 w-full no-underline hover:opacity-80 transition-opacity">
                <span className="shrink-0 font-sans text-xs font-bold text-[#B22E21] tracking-wider w-20 pt-1.5">MUSIC</span>
                <span className="group-hover:text-[#B22E21] transition-colors border-b border-transparent group-hover:border-[#B22E21]/20">Frank Ocean “Strawberry Swing” - still undefeated</span>
              </a>
            </li>
            <li className="group">
              <a href="#design" className="flex gap-4 w-full no-underline hover:opacity-80 transition-opacity">
                <span className="shrink-0 font-sans text-xs font-bold text-[#B22E21] tracking-wider w-20 pt-1.5">DESIGN</span>
                <span className="group-hover:text-[#B22E21] transition-colors border-b border-transparent group-hover:border-[#B22E21]/20">A brand that turns desktop icons into real life</span>
              </a>
            </li>
          </ul>
        </section>
        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* Editor's Note */}
        <section className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            Editor’s Note - Adam’s Corner
          </h2>
          <div className="prose prose-neutral max-w-[600px] font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
            <p className="mb-6">
              I’ve built companies, helped shape brands, and thrown more nights than I can count. But the only thing that’s ever really driven me is the moment someone feels something because of a room, a song, a dish, or a person they just met. <strong>Goosebumps have always been the goal.</strong>
            </p>
            <p className="mb-6">
              I love beautiful things. I love music, food, people in their element. I love discovering something special and sharing it with the right person at the right time - that look on their face when you know you just showed them something they didn’t know they needed.
            </p>
            <p className="mb-6">
              That’s why Chloe and I built No Bad Company. And this - No Bad News - is the extension of that instinct. A weekly drop of what I’m paying attention to, who I’m learning from, and the details I think are worth your time.
            </p>
            <p>
              I’m not here to perform. I’m here to share. Read it. Forward it. Or reply and tell me what I should be chasing next.
            </p>
          </div>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* No Bad Company - Community Spotlight (FEATURE) */}
        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>
        <section className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            No Bad Company
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            A spotlight of beautiful people from our community.
          </p>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-[450px] relative group cursor-pointer">
                {/* Nostalgic Overlay - Kept for hover effect but base image is processed */}
                <div className="absolute inset-0 bg-[#5C4033] mix-blend-screen opacity-0 pointer-events-none z-10 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B22E21]/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10"></div>
                
                <img 
                  src={communitySpotlightImage}
                  alt="Community Spotlight" 
                  className="w-full object-cover aspect-square shadow-none transition-all duration-700 ease-out group-hover:contrast-100 group-hover:brightness-100"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center">
              <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
                <p className="mb-6">
                  We’ve been doing this together since high school - Houston suburb kids who watched our neighborhood quietly turn out giants (<span className="italic">shoutout</span> Mo City - 281). Somewhere between then and now, we learned that hosting isn’t about throwing parties. It’s about building rooms where people feel like themselves again.
                </p>
                <p className="mb-6">
                  The Yellow House came later. So did the careers. Chloe built her dream home in East Austin, TX - designed for gathering, and a reputation guiding people through life-changing decisions in real estate. I built rooms through culture - my prior events brand Keep It Quiet, and my hospitality foray into Devil May Care. What never changed was the instinct to bring the right people together on purpose.
                </p>
                <p className="mb-6 font-bold text-[#B22E21] leading-[1.8]">
                  No Bad Company is for the stories waiting to be told. For the leaders, the creators, the endlessly curious. For the builders. We believe there’s more than enough room at the top. And it’s better when we climb together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* No Bad Food */}
        <section id="food" className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            No Bad Food
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            Recipes, restaurants, and things worth cooking slow.
          </p>
          <div className="prose prose-neutral max-w-[600px] font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
            <p className="mb-6">
              I come from a Cajun family of cooks and restaurant owners. My family ran a BBQ spot in Houston called Lockwood Inn from 1928 to 1996 before it burned down. My grandmother was a Cajun caterer. My mom made the best gumbo I’ve ever had - and everyone who’s ever eaten it agrees.
            </p>
            <p className="mb-6">
              This is the gumbo I grew up on. The one people still ask about years later. The one that shows up at holidays, late nights, and when it really matters.
            </p>
            <p className="mb-8">
              I finally filmed it.
            </p>
            <ul className="list-none space-y-4 mb-6 pl-0">
              <li><span className="text-[#B22E21] font-bold mr-2 text-xs uppercase tracking-wider">VIDEO</span> <a href="https://www.youtube.com/shorts/TftOIelM-j8" className="text-[#1C1C1C] hover:text-[#B22E21] transition-colors decoration-[rgba(26,26,26,0.1)] underline underline-offset-4">Watch on YouTube</a></li>
              <li><span className="text-[#B22E21] font-bold mr-2 text-xs uppercase tracking-wider">RECIPE</span> <span className="text-[#1C1C1C] hover:text-[#B22E21] cursor-pointer transition-colors decoration-[rgba(26,26,26,0.1)] underline underline-offset-4">Read full recipe + ingredients</span></li>
            </ul>
            <p>
              This isn’t a “twist” on gumbo. It’s the real thing. Take your time with it.
            </p>
          </div>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-24 mt-12"></div>

        {/* Sponsor Slot 1 */}
        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>
        <div 
          className="border-[0.5px] border-[#1C1C1C] py-12 px-6 text-center mb-12 md:mb-24 bg-transparent"
          style={{ boxShadow: 'inset 2px 0 0 0 #B22E21' }}
        >
          <p className="font-sans font-bold text-xs tracking-widest uppercase text-[#1C1C1C] opacity-90 text-balance">
            <span className="text-[#B22E21]">PARTNER OPPORTUNITY:</span> THIS SPACE IS <span className="text-[#B22E21]">RESERVED</span> FOR A BRAND WE GENUINELY BELIEVE IN.
          </p>
        </div>
        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* No Bad Hosting */}
        <section id="hosting" className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            No Bad Hosting
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            Moves that make rooms feel better.
          </p>
          <div className="prose prose-neutral max-w-[600px] font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
            <p className="mb-6">
              The fastest way to level up any conversation at a party is to stop asking, “What do you do?”
            </p>
            <p className="mb-6">Try this instead:</p>
            <ul className="list-disc pl-5 mb-6 space-y-4 marker:text-[#B22E21]">
              <li>“What keeps you busy during the day?”</li>
            </ul>
            <p className="mb-6">
              It’s broader. It’s softer. And it lets people answer however they want - career, creative projects, family, fitness, building something on the side. The energy shifts instantly.
            </p>
            <p>
              Work can feel like a label.<br/>
              Busy feels like a story.
            </p>
          </div>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* No Bad Tips */}
        <section id="tips" className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            No Bad Drops
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            Small insights you can casually drop.
          </p>
          <div className="prose prose-neutral max-w-[600px] font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
            <p className="mb-6">
              They lit the Rockefeller Center Christmas tree this week - star and all. That star on top?
            </p>
            <ul className="list-disc pl-5 mb-8 space-y-6 marker:text-[#B22E21] font-light">
              <li>It weighs over 900 pounds</li>
              <li>It’s covered in millions of crystals</li>
              <li>And it’s custom-engineered so the wind doesn’t rip it off the building</li>
            </ul>
            <div className="mt-8 space-y-3">
              <p className="font-medium">It looks effortless.</p>
              <p className="font-medium">It absolutely is not.</p>
            </div>
          </div>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* No Bad Music */}
        <section id="music" className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            No Bad Music
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            One song. One mood. No skips.
          </p>
          
          <div className="mb-14 flex justify-center mt-10">
            <div className="w-full max-w-[400px]">
              <img 
                src="https://media.pitchfork.com/photos/5929adeb9d034d5c69bf444e/1:1/w_320,c_limit/084ee64d.jpg" 
                alt="Frank Ocean Nostalgia Ultra" 
                className="w-full object-cover aspect-square shadow-none"
              />
            </div>
          </div>
          
          <div className="prose prose-neutral max-w-[600px] font-body text-[#1C1C1C] text-[17px] leading-[1.6] mb-8">
            <p className="mb-6">
              Where the hell are you, Frank?
            </p>
            <p className="mb-6">
              But this week I went back to “Strawberry Swing” by Frank Ocean off Nostalgia, Ultra, and yeah… it still hits. Hard.
            </p>
            <p className="mb-4">
              Mood: reflective, wide-open, slightly unraveled
            </p>
          </div>

          <div className="flex justify-center">
             <a href="https://www.youtube.com/watch?v=G7wcRZWRDdw" className="bg-[#B22E21] text-white font-sans font-medium py-4 px-12 hover:bg-[#96261c] transition-colors no-underline tracking-wide shadow-none">
               Listen on YouTube
             </a>
          </div>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* No Bad Design */}
        <section id="design" className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            No Bad Design
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            Objects, spaces, and ideas done with intention.
          </p>
          
          <div className="mb-14 flex justify-center mt-10">
            <div className="w-full max-w-[400px]">
              <img 
                src="https://cdn.sanity.io/images/06qtbc6i/production/d9913e7dbe18fb4f07bd13f96365cb963748fae0-1800x2400.jpg?w=3000&fm=webp&fit=max&auto=format" 
                alt="Nikolas Bentel Studio Design" 
                className="w-full object-cover aspect-[16/9] shadow-none"
              />
            </div>
          </div>
          
          <div className="prose prose-neutral max-w-[600px] font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
            <p className="mb-6">
              This week’s obsession is Nikolas Bentel Studio.
            </p>
            <p className="mb-6">
              He pulls digital objects into the real world - desktop folders, UI windows, system icons - and turns them into physical products. Laptop cases that look like software panels. Bags that feel like pop-ups.
            </p>
            <p className="mb-6">
              It works because it does three things at once:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-1.5 marker:text-[#B22E21]">
              <li>Feels stupid simple</li>
              <li>Looks insanely clean</li>
              <li>Quietly messes with your sense of reality</li>
            </ul>
            <p className="mb-6">
              It just shifts the world one notch sideways.
            </p>
            <ul className="list-none space-y-3 pl-0 mt-8 text-center sm:text-left">
              <li>Studio: <a href="https://www.nikolasbentelstudio.com" className="text-[#1C1C1C] hover:text-[#B22E21] underline decoration-[rgba(26,26,26,0.1)] underline-offset-4 transition-colors">nikolasbentelstudio.com</a></li>
              <li>Project: <a href="https://www.nikolasbentelstudio.com/projects/1bttwqzx" className="text-[#1C1C1C] hover:text-[#B22E21] underline decoration-[rgba(26,26,26,0.1)] underline-offset-4 transition-colors">View Project</a></li>
            </ul>
          </div>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* No Bad Plans */}
        <section className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-bold tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            No Bad Plans
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-12 font-medium">
            One thing actually worth leaving the house for.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:mb-24">
            <div className="order-2 md:order-1">
              <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
                <h3 className="font-serif text-2xl text-[#1C1C1C] mb-2">Chloe’s Game</h3>
                <p className="font-serif italic text-lg text-[#1C1C1C]/60 mb-6 tracking-[-0.01em]">
                  A Wednesday night for people who like their rooms electric and their poker competitive.
                </p>
                <div className="flex items-center gap-4 text-xs font-sans tracking-widest uppercase text-[#B22E21]">
                  <span>Wednesdays</span>
                  <span>•</span>
                  <span>Austin, TX</span>
                  <span>•</span>
                  <a href="#" className="underline decoration-[#B22E21]/30 underline-offset-4 hover:text-[#1C1C1C] transition-colors inline-block py-2 md:py-0">Request Invite</a>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 w-full">
              <img 
                src={chloeGameImage}
                alt="Chloe's Game Staff" 
                className="w-full object-cover aspect-[3/2] shadow-none border border-[#1C1C1C]/6 opacity-95"
              />
            </div>
          </div>

          {/* Sponsor Slot 2 (Inside No Bad Plans - Below Feature) */}
          <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>
          <div 
            className="border-[0.5px] border-[#1C1C1C] py-12 px-6 text-center mb-12 md:mb-24 bg-transparent"
            style={{ boxShadow: 'inset 2px 0 0 0 #B22E21' }}
          >
            <p className="font-sans font-bold text-xs tracking-widest uppercase text-[#1C1C1C] opacity-90 text-balance">
              <span className="text-[#B22E21]">PARTNER OPPORTUNITY:</span> THIS SPACE IS <span className="text-[#B22E21]">RESERVED</span> FOR A BRAND WE GENUINELY BELIEVE IN.
            </p>
          </div>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* Today's Thought (Sign-off) */}
        <section className="mb-12 md:mb-24 mt-12 md:mt-20 text-center px-4">
          <h2 className="font-serif text-xl font-bold tracking-tight text-[#1C1C1C] mb-6 scroll-mt-12">
            Today’s Thought
          </h2>
          <p className="font-serif text-lg italic text-[#1C1C1C]/50 leading-loose">
            “One great conversation can change your life.<br/>
            We just make sure you’re in the right room.”
          </p>
        </section>

        {/* Footer */}
        <div className="text-center pb-32">
          <p className="font-sans text-xs tracking-widest uppercase text-[#1C1C1C]/40 mb-8">
            For those who want the deeper cut…
          </p>
          <button className="bg-[#B22E21] text-white font-sans font-medium py-5 px-20 mb-8 hover:bg-[#96261c] transition-colors cursor-pointer text-sm tracking-widest shadow-none opacity-90 hover:opacity-100 uppercase">
            Join The Red List
          </button>
        </div>
      </div>
      
      {/* Full Width Footer Band */}
      <div className="w-full bg-[#1C1C1C]/95 h-[70px] flex items-center justify-center mt-0">
        <p className="font-sans text-xs text-[#F5EFE8]/60 tracking-widest uppercase m-0 p-0">
          “No Bad Company - for stories that need to be told.”
        </p>
      </div>
    </div>
  );
}