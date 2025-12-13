import React from "react";
import bannerImage from "@assets/banner_processed.jpg";
import communitySpotlightImage from "@assets/spotlight_processed.png";

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-[#F5EFE8] flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Email Container - Simulating standard email width */}
      <div className="w-full max-w-[680px] bg-[#F5EFE8]">
        
        {/* Masthead */}
        <header className="mb-16 text-center">
          <h1 className="font-serif text-5xl tracking-widest mb-3 font-extrabold text-[#1C1C1C]">
            <span className="text-[#B22E21]">NO BAD</span> NEWS
          </h1>
          <div className="flex justify-center mb-3">
            <div className="w-16 h-px bg-[#1C1C1C]/20"></div>
          </div>
          <div className="flex items-center justify-center gap-4 text-[#1C1C1C]/60 font-sans text-xs tracking-wide uppercase py-1 font-light">
            <span className="opacity-80">Issue 001</span>
            <span className="opacity-40">•</span>
            <span className="opacity-80">Friday Morning</span>
          </div>
          <div className="font-serif text-base tracking-wider text-[#1C1C1C] mt-2 mb-4">
            For the stories that need to be told.
          </div>
        </header>

        {/* Quiet Top Banner */}
        <div className="w-full h-[160px] mb-12 md:mb-20 overflow-hidden opacity-90">
          <img 
            src={bannerImage}
            alt="Atmospheric texture" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* TL;DR Section */}
        <section className="mb-12 md:mb-20">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] uppercase mb-8 md:mb-10 opacity-90">
            TL;DR - This Week in No Bad News
          </h2>
          <ul className="space-y-6 font-body text-[#1C1C1C] leading-[1.8] max-w-[95%]">
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
        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* Editor's Note */}
        <section className="mb-12 md:mb-20 pt-4">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] mb-8">
            Editor’s Note - Adam’s Corner
          </h2>
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose text-lg">
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

        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* No Bad Company - Community Spotlight (FEATURE) */}
        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>
        <section className="mb-12 md:mb-20 pt-4">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] mb-8">
            No Bad Company
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-8 font-medium">
            A spotlight of beautiful people from our community.
          </p>

          <div className="mb-12 flex justify-center mt-8">
            <div className="w-full max-w-[450px] relative group cursor-pointer">
              {/* Nostalgic Overlay - Kept for hover effect but base image is processed */}
              <div className="absolute inset-0 bg-[#5C4033] mix-blend-screen opacity-0 rounded-sm pointer-events-none z-10 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#B22E21]/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10 rounded-sm"></div>
              
              <img 
                src={communitySpotlightImage}
                alt="Community Spotlight" 
                className="w-full rounded-sm object-cover aspect-square shadow-sm transition-all duration-700 ease-out group-hover:contrast-100 group-hover:brightness-100"
              />
            </div>
          </div>

          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
            <p className="mb-6">
              We’ve been doing this together since high school - Houston suburb kids who watched our neighborhood quietly turn out giants (<span className="italic">shoutout</span> Mo City - 281). Somewhere between then and now, we learned that hosting isn’t about throwing parties. It’s about building rooms where people feel like themselves again.
            </p>
            <p className="mb-6">
              The Yellow House came later. So did the careers. Chloe built her dream home in East Austin, TX - designed for gathering, and a reputation guiding people through life-changing decisions in real estate. I built rooms through culture - my prior events brand Keep It Quiet, and my hospitality foray into Devil May Care. What never changed was the instinct to bring the right people together on purpose.
            </p>
            <p className="mb-6 font-bold text-[#B22E21]">
              No Bad Company is for the stories waiting to be told. For the leaders, the creators, the endlessly curious. For the builders. We believe there’s more than enough room at the top. And it’s better when we climb together.
            </p>
          </div>
        </section>

        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* No Bad Food */}
        <section id="food" className="mb-12 md:mb-20 pt-4">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] mb-8">
            No Bad Food
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-8 font-medium">
            Recipes, restaurants, and things worth cooking slow.
          </p>
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
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
              <li><span className="text-[#B22E21] font-bold mr-2 text-xs uppercase tracking-wider">VIDEO</span> <a href="https://www.youtube.com/shorts/TftOIelM-j8" className="text-[#1C1C1C] hover:text-[#B22E21] transition-colors decoration-[rgba(0,0,0,0.1)] underline underline-offset-4">Watch on YouTube</a></li>
              <li><span className="text-[#B22E21] font-bold mr-2 text-xs uppercase tracking-wider">RECIPE</span> <span className="text-[#1C1C1C] hover:text-[#B22E21] cursor-pointer transition-colors decoration-[rgba(0,0,0,0.1)] underline underline-offset-4">Read full recipe + ingredients</span></li>
            </ul>
            <p>
              This isn’t a “twist” on gumbo. It’s the real thing. Take your time with it.
            </p>
          </div>
        </section>

        {/* Sponsor Slot 1 */}
        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>
        <div className="bg-[#B22E21] py-10 px-4 text-center mb-12 md:mb-20">
          <p className="font-sans text-xs tracking-widest uppercase text-[#F5EFE8] italic opacity-90">
            This space is reserved for a brand we genuinely believe in.
          </p>
        </div>
        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* No Bad Hosting */}
        <section id="hosting" className="mb-12 md:mb-20 pt-4">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] mb-8">
            No Bad Hosting
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-8 font-medium">
            Moves that make rooms feel better.
          </p>
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
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

        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* No Bad Tips */}
        <section id="tips" className="mb-12 md:mb-20 pt-4">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] mb-8">
            No Bad Drops
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-8 font-medium">
            Small insights you can casually drop.
          </p>
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
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

        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* No Bad Music */}
        <section id="music" className="mb-12 md:mb-20 pt-4">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] mb-8">
            No Bad Music
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            One song. One mood. No skips.
          </p>
          
          <div className="mb-12 flex justify-center mt-8">
            <div className="w-full max-w-[400px]">
              <img 
                src="https://media.pitchfork.com/photos/5929adeb9d034d5c69bf444e/1:1/w_320,c_limit/084ee64d.jpg" 
                alt="Frank Ocean Nostalgia Ultra" 
                className="w-full rounded-sm object-cover aspect-square"
              />
            </div>
          </div>
          
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose mb-8">
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
             <a href="https://www.youtube.com/watch?v=G7wcRZWRDdw" className="bg-[#B22E21] text-white font-sans font-medium py-4 px-12 rounded-[4px] hover:bg-[#96261c] transition-colors no-underline tracking-wide">
               Listen on YouTube
             </a>
          </div>
        </section>

        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* No Bad Design */}
        <section id="design" className="mb-12 md:mb-20 pt-4">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] mb-8">
            No Bad Design
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            Objects, spaces, and ideas done with intention.
          </p>
          
          <div className="mb-12 flex justify-center mt-8">
            <div className="w-full max-w-[400px]">
              <img 
                src="https://cdn.sanity.io/images/06qtbc6i/production/d9913e7dbe18fb4f07bd13f96365cb963748fae0-1800x2400.jpg?w=3000&fm=webp&fit=max&auto=format" 
                alt="Nikolas Bentel Studio Design" 
                className="w-full rounded-sm object-cover aspect-[16/9]"
              />
            </div>
          </div>
          
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-relaxed">
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
              <li>Studio: <a href="https://www.nikolasbentelstudio.com" className="text-[#1C1C1C] hover:text-[#B22E21] underline decoration-[rgba(0,0,0,0.1)] underline-offset-4 transition-colors">nikolasbentelstudio.com</a></li>
              <li>Project: <a href="https://www.nikolasbentelstudio.com/projects/1bttwqzx" className="text-[#1C1C1C] hover:text-[#B22E21] underline decoration-[rgba(0,0,0,0.1)] underline-offset-4 transition-colors">View Project</a></li>
            </ul>
          </div>
        </section>

        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* No Bad Plans */}
        <section className="mb-12 md:mb-20 pt-4">
          <h2 className="font-sans text-2xl font-bold tracking-wide text-[#B22E21] mb-8">
            No Bad Plans
          </h2>
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-12 font-medium">
            One thing actually worth leaving the house for.
          </p>

          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
            <div className="mb-6">
              <h3 className="font-serif text-2xl text-[#1C1C1C] mb-2">Chloe’s Game</h3>
              <p className="font-serif italic text-lg text-[#1C1C1C]/60 mb-4">
                A Wednesday night for people who like their rooms electric and their poker competitive.
              </p>
              <div className="flex items-center gap-4 text-xs font-sans tracking-widest uppercase text-[#B22E21]">
                <span>Wednesdays</span>
                <span>•</span>
                <span>Austin, TX</span>
                <span>•</span>
                <a href="#" className="underline decoration-[#B22E21]/30 underline-offset-4 hover:text-[#1C1C1C] transition-colors">Request Invite</a>
              </div>
            </div>
          </div>

          {/* Sponsor Slot 2 (Inside No Bad Plans - Below Feature) */}
          <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>
          <div className="bg-[#B22E21] py-10 px-4 text-center mb-12 md:mb-20">
            <p className="font-sans text-xs tracking-widest uppercase text-[#F5EFE8] italic opacity-90">
              This space is reserved for a brand we genuinely believe in.
            </p>
          </div>
        </section>

        <div className="w-[60%] mx-auto h-px bg-[#1C1C1C]/10 mb-12 md:mb-20"></div>

        {/* Today's Thought (Sign-off) */}
        <section className="mb-24 mt-12 md:mt-20 text-center px-4">
          <h2 className="font-sans text-xl font-bold tracking-tight text-[#B22E21] mb-6">
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
          <button className="bg-[#B22E21] text-white font-sans font-medium py-5 px-20 rounded-md mb-8 hover:bg-[#96261c] transition-colors cursor-pointer text-sm tracking-widest shadow-none opacity-90 hover:opacity-100 uppercase">
            Join The Red List
          </button>
        </div>
      </div>
      
      {/* Full Width Footer Band */}
      <div className="w-full bg-[#2A1F1A]/90 h-[70px] flex items-center justify-center mt-0">
        <p className="font-sans text-xs text-[#F5EFE8]/60 tracking-widest uppercase m-0 p-0">
          “No Bad Company - for stories that need to be told.”
        </p>
      </div>
    </div>
  );
}