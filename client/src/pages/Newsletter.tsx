import React from "react";

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-[#F5EFE8] flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Email Container - Simulating standard email width */}
      <div className="w-full max-w-[600px] bg-[#F5EFE8]">
        
        {/* Masthead */}
        <header className="mb-12 text-center">
          <h1 className="font-serif text-5xl tracking-tight mb-4 font-bold">
            <span className="text-[#B22E21]">NO BAD</span> <span className="text-[#1C1C1C]">NEWS</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-[#1C1C1C] font-sans text-sm tracking-wide uppercase border-y border-[rgba(0,0,0,0.06)] py-3">
            <span>Issue 001</span>
            <span>•</span>
            <span>Friday Morning</span>
          </div>
        </header>

        {/* TL;DR Section */}
        <section className="mb-16">
          <h2 className="font-sans text-xs font-bold tracking-widest text-[#B22E21] uppercase mb-6">
            TL;DR - This Week in No Bad News
          </h2>
          <ul className="space-y-3 font-body text-[#1C1C1C] leading-relaxed">
            <li className="flex gap-3">
              <span className="shrink-0">🍲</span>
              <span>My family’s Cajun gumbo recipe - finally on video</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0">🕯</span>
              <span>A hosting move that instantly upgrades conversation</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0">🥃</span>
              <span>A Rockefeller Center flex you can steal at the bar</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0">🎶</span>
              <span>Frank Ocean “Strawberry Swing” - still undefeated</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0">🎨</span>
              <span>A brand that turns desktop icons into real life</span>
            </li>
          </ul>
        </section>

        <div className="w-full h-px bg-[rgba(0,0,0,0.06)] mb-12"></div>

        {/* Editor's Note */}
        <section className="mb-16">
          <h2 className="font-sans text-xl font-bold tracking-tight text-[#B22E21] mb-6">
            Editor’s Note - Adam’s Corner
          </h2>
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
            <p className="mb-6">
              I’ve built companies, helped shape brands, and thrown more nights than I can count. But the only thing that’s ever really driven me is the moment someone feels something because of a room, a song, a dish, or a person they just met. Goosebumps have always been the goal.
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

        <div className="w-full h-px bg-[rgba(0,0,0,0.06)] mb-12"></div>

        {/* No Bad Food */}
        <section className="mb-16">
          <h2 className="font-sans text-xl font-bold tracking-tight text-[#B22E21] mb-6">
            No Bad Food - My Family Gumbo
          </h2>
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
            <p className="mb-6">
              I come from a Cajun family of cooks and restaurant owners. My family ran a BBQ spot in Houston called Lockwood Inn from 1928 to 1996 before it burned down. My grandmother was a Cajun caterer. My mom made the best gumbo I’ve ever had - and everyone who’s ever eaten it agrees.
            </p>
            <p className="mb-6">
              This is the gumbo I grew up on. The one people still ask about years later. The one that shows up at holidays, late nights, and when it really matters.
            </p>
            <p className="mb-6">
              I finally filmed it.
            </p>
            <ul className="list-none space-y-2 mb-6 pl-0">
              <li>🎥 Full video: <a href="https://www.youtube.com/shorts/TftOIelM-j8" className="text-[#B22E21] underline decoration-[#B22E21]/30 underline-offset-4">Watch on YouTube</a></li>
              <li>📝 Written recipe + ingredients: <span className="text-[#B22E21] underline decoration-[#B22E21]/30 underline-offset-4 cursor-pointer">RECIPE LINK HERE</span></li>
            </ul>
            <p>
              This isn’t a “twist” on gumbo. It’s the real thing. Take your time with it.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-[rgba(0,0,0,0.06)] mb-12"></div>

        {/* No Bad Hosting */}
        <section className="mb-16">
          <h2 className="font-sans text-xl font-bold tracking-tight text-[#B22E21] mb-6">
            No Bad Hosting
          </h2>
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
            <p className="mb-6">
              The fastest way to level up any conversation at a party is to stop asking, “What do you do?”
            </p>
            <p className="mb-6">Try this instead:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-[#B22E21]">
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

        <div className="w-full h-px bg-[rgba(0,0,0,0.06)] mb-12"></div>

        {/* Cocktail Bites */}
        <section className="mb-16">
          <h2 className="font-sans text-xl font-bold tracking-tight text-[#B22E21] mb-6">
            Cocktail Bites
          </h2>
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
            <p className="mb-6">
              They lit the Rockefeller Center Christmas tree this week - star and all. That star on top?
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-[#B22E21]">
              <li>It weighs over 900 pounds</li>
              <li>It’s covered in millions of crystals</li>
              <li>And it’s custom-engineered so the wind doesn’t rip it off the building</li>
            </ul>
            <p>
              It looks effortless.<br/>
              It absolutely is not.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-[rgba(0,0,0,0.06)] mb-12"></div>

        {/* No Bad Music */}
        <section className="mb-16">
          <h2 className="font-sans text-xl font-bold tracking-tight text-[#B22E21] mb-6">
            No Bad Music - Frank Ocean “Strawberry Swing”
          </h2>
          
          <div className="mb-8">
            <img 
              src="https://media.pitchfork.com/photos/5929adeb9d034d5c69bf444e/1:1/w_320,c_limit/084ee64d.jpg" 
              alt="Frank Ocean Nostalgia Ultra" 
              className="w-full rounded-[12px] object-cover aspect-square sm:aspect-auto"
            />
          </div>
          
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
            <p className="mb-6">
              Where the hell are you, Frank?
              Seriously. You disappear like this every few years and just leave us hanging.
            </p>
            <p className="mb-6">
              But this week I went back to “Strawberry Swing” by Frank Ocean off Nostalgia, Ultra, and yeah… it still hits. Hard.
            </p>
            <ul className="list-none space-y-2 pl-0">
              <li>🎶 Listen here: <a href="https://www.youtube.com/watch?v=G7wcRZWRDdw" className="text-[#B22E21] underline decoration-[#B22E21]/30 underline-offset-4">YouTube Link</a></li>
              <li>Mood: reflective, wide-open, slightly unraveled</li>
            </ul>
          </div>
        </section>

        <div className="w-full h-px bg-[rgba(0,0,0,0.06)] mb-12"></div>

        {/* No Bad Design */}
        <section className="mb-16">
          <h2 className="font-sans text-xl font-bold tracking-tight text-[#B22E21] mb-6">
            No Bad Design
          </h2>
          
          <div className="mb-8">
            <img 
              src="https://cdn.sanity.io/images/06qtbc6i/production/d9913e7dbe18fb4f07bd13f96365cb963748fae0-1800x2400.jpg?w=3000&fm=webp&fit=max&auto=format" 
              alt="Nikolas Bentel Studio Design" 
              className="w-full rounded-[12px] object-cover"
            />
          </div>
          
          <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] leading-loose">
            <p className="mb-6">
              This week’s obsession is Nikolas Bentel Studio.
            </p>
            <p className="mb-6">
              He pulls digital objects into the real world - desktop folders, UI windows, system icons - and turns them into physical products. Laptop cases that look like software panels. Bags that feel like pop-ups.
            </p>
            <p className="mb-6">
              It works because it does three things at once:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-[#B22E21]">
              <li>Feels stupid simple</li>
              <li>Looks insanely clean</li>
              <li>Quietly messes with your sense of reality</li>
            </ul>
            <p className="mb-6">
              It doesn’t try to feel futuristic.<br/>
              It just shifts the world one notch sideways.
            </p>
            <ul className="list-none space-y-2 pl-0">
              <li>Studio: <a href="https://www.nikolasbentelstudio.com" className="text-[#B22E21] underline decoration-[#B22E21]/30 underline-offset-4">nikolasbentelstudio.com</a></li>
              <li>Project: <a href="https://www.nikolasbentelstudio.com/projects/1bttwqzx" className="text-[#B22E21] underline decoration-[#B22E21]/30 underline-offset-4">View Project</a></li>
            </ul>
          </div>
        </section>

        <div className="w-full h-px bg-[rgba(0,0,0,0.06)] mb-12"></div>

        {/* Soft Close */}
        <section className="mb-24 text-center">
          <h2 className="font-sans text-xl font-bold tracking-tight text-[#B22E21] mb-4">
            The Soft Close
          </h2>
          <p className="font-body text-[#1C1C1C] leading-loose">
            That’s it for this week.<br/>
            Same time next Friday.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center pb-12">
          <button className="bg-[#B22E21] text-white font-sans font-medium py-3 px-8 rounded-full mb-8 hover:bg-[#96261c] transition-colors cursor-pointer">
            Join The Red List
          </button>
          
          <p className="font-sans text-xs text-[#2A1F1A]/60 tracking-wide uppercase">
            “No Bad Company - Curated, not crowded.”
          </p>
        </footer>

      </div>
    </div>
  );
}
