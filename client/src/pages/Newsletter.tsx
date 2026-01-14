import React from "react";
import bannerImage from "@assets/banner_processed.jpg";
import communitySpotlightImage from "@assets/spotlight_processed.png";
import chloeGameImage from "@assets/chloegamestaff_1766515584240.jpeg";

// --- TEMPLATE CONFIGURATION ---
// Editorial Template Component
// Logic: If mediaUrl is provided, it renders a split layout. 
// If mediaUrl is empty, it centers the text container.

const Section = ({ 
  id, 
  title, 
  subtitle, 
  mediaUrl, 
  mediaAlt, 
  children 
}: { 
  id: string; 
  title: string; 
  subtitle?: string; 
  mediaUrl?: string; 
  mediaAlt?: string; 
  children: React.ReactNode; 
}) => {
  const hasMedia = Boolean(mediaUrl);

  return (
    <>
      <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>
      <section id={id} className="mb-12 md:mb-24 pt-8">
        <h2 className="font-serif text-3xl font-normal tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-sm italic text-[#1C1C1C]/60 mb-10 font-medium">
            {subtitle}
          </p>
        )}

        {hasMedia ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div className="order-2 md:order-1">
              <div className="prose prose-neutral max-w-none font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
                {children}
              </div>
            </div>
            
            {/* Media Side */}
            <div className="order-1 md:order-2 w-full">
              <img 
                src={mediaUrl}
                alt={mediaAlt || title} 
                className="w-full object-cover aspect-square shadow-none border border-[#1C1C1C]/6 relative z-[60]"
              />
            </div>
          </div>
        ) : (
          /* Centered Text Layout (No Media) */
          <div className="prose prose-neutral max-w-[600px] mx-auto font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
            {children}
          </div>
        )}
      </section>
    </>
  );
};

export default function Newsletter() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative" style={{ background: 'radial-gradient(circle at center, #F5EFE8 0%, #F2EAE2 100%)' }}>
      <div className="noise-overlay"></div>
      {/* Email Container */}
      <div className="w-full max-w-[680px] bg-transparent relative z-10">
        
        {/* --- #hero (Masthead) --- */}
        <header id="hero" className="mb-12 md:mb-24 pt-8 px-8">
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-6xl tracking-[-0.04em] mb-6 font-normal text-[#1C1C1C] relative text-center w-full">
              <span className="text-[#B22E21] font-normal">NO BAD</span> NEWS
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

        {/* Quiet Top Banner (Optional - kept as part of Hero visual) */}
        <div className="w-full h-[180px] mb-12 md:mb-24 overflow-hidden opacity-90">
          <img 
            src={bannerImage}
            alt="Atmospheric texture" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- #tldr (Index) --- */}
        <section id="tldr" className="mb-12 md:mb-24">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.04em] text-[#1C1C1C] uppercase mb-10 opacity-90 scroll-mt-12">
            TL;DR - This Week in No Bad News
          </h2>
          {/* PASTE TEXT HERE */}
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
                <span className="shrink-0 font-sans text-xs font-bold text-[#B22E21] tracking-wider w-20 pt-1.5">DESIGN</span>
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
              <a href="#plans" className="flex gap-4 w-full no-underline hover:opacity-80 transition-opacity">
                <span className="shrink-0 font-sans text-xs font-bold text-[#B22E21] tracking-wider w-20 pt-1.5">PLANS</span>
                <span className="group-hover:text-[#B22E21] transition-colors border-b border-transparent group-hover:border-[#B22E21]/20">Chloe's Game returns this September</span>
              </a>
            </li>
          </ul>
        </section>

        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/10 mb-12 md:mb-24 mt-12"></div>

        {/* --- #intro (Editor’s Note) --- */}
        <section id="intro" className="mb-12 md:mb-24 pt-8">
          <h2 className="font-serif text-3xl font-normal tracking-[-0.04em] text-[#1C1C1C] mb-10 scroll-mt-12">
            Editor’s Note - Adam’s Corner
          </h2>
          <div className="prose prose-neutral max-w-[600px] mx-auto font-body text-[#1C1C1C] text-[17px] leading-[1.6]">
            {/* PASTE TEXT HERE */}
            <p className="mb-6">
              Every year the holidays come and go. A new year starts, and we’re given this quiet moment to reset - or at least reconsider what we want to focus on. Some people do Dry January. Others commit to workouts. For me, this year has been about something a little less obvious.
            </p>
            <p className="mb-6">
              I’ve never been big on social media. I don’t share much. I repost when I’m tagged, but for the most part, I’ve always stayed quiet. For a long time, I told myself that building a personal brand felt vain - unnecessary. Lately, I’ve realized that was an easy excuse.
            </p>
            <p className="mb-6">
              When your life and work revolve around creating experiences and connecting people, choosing not to share your perspective isn’t humility - it’s absence. And absence doesn’t make anything better. Staying quiet doesn’t mean you don’t have a point of view. It just means you’re opting out of contributing it.
            </p>
            <p className="mb-6">
              I’m not saying I’m always right. I’m not saying the world is better if everyone listens to me. I am saying I now know my opinions matter - and there’s nothing wrong with sharing your voice when it’s honest and considered. It’s a piece of you. Why hide it?
            </p>
            <p className="mb-6">
              Something I’ve been reminding myself lately: you’re not afraid of failure - you’re afraid of being seen failing. That’s ego. We want to look effortless, refined, composed. But the people who actually get better are the ones willing to look a little foolish in pursuit of something real.
            </p>
            <p>
              New year. Same me. Slightly louder.
            </p>
          </div>
        </section>

        {/* --- #people (No Bad Company) --- */}
        <Section 
          id="people" 
          title="No Bad Company" 
          subtitle="A spotlight of beautiful people from our community."
          mediaUrl={communitySpotlightImage}
          mediaAlt="Community Spotlight"
        >
          {/* PASTE TEXT HERE */}
          <p className="mb-6">
            We’ve been doing this together since high school - Houston suburb kids who watched our neighborhood quietly turn out giants (<span className="italic">shoutout</span> Mo City - 281). Somewhere between then and now, we learned that hosting isn’t about throwing parties. It’s about building rooms where people feel like themselves again.
          </p>
          <p className="mb-6">
            The Yellow House came later. So did the careers. Chloe built her dream home in East Austin, TX - designed for gathering, and a reputation guiding people through life-changing decisions in real estate. I built rooms through culture - my prior events brand Keep It Quiet, and my hospitality foray into Devil May Care. What never changed was the instinct to bring the right people together on purpose.
          </p>
          <p className="mb-6 font-bold text-[#B22E21] leading-[1.8]">
            No Bad Company is for the stories waiting to be told. For the leaders, the creators, the endlessly curious. For the builders. We believe there’s more than enough room at the top. And it’s better when we climb together.
          </p>
        </Section>

        {/* --- #food (No Bad Food) --- */}
        <Section 
          id="food" 
          title="No Bad Food" 
          subtitle="Recipes, restaurants, and things worth cooking slow."
          mediaUrl="" /* Empty mediaUrl to test fluent layout - centering text */
        >
          {/* PASTE TEXT HERE */}
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
        </Section>
        
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

        {/* --- #hosting (No Bad Hosting) --- */}
        <Section 
          id="hosting" 
          title="No Bad Hosting" 
          subtitle="Moves that make rooms feel better."
        >
          {/* PASTE TEXT HERE */}
          <p className="mb-6">
            A great host knows how to read a room. They notice who hasn’t been pulled in yet and make introductions before things feel awkward.
          </p>
          <p className="mb-6">
            But not every room has someone doing that work.
          </p>
          <p className="mb-6">
            So here’s a move I’ve learned to trust - at work events, parties, anywhere you’re walking into a room and don’t quite know where to land.
          </p>
          <p className="mb-6">
            If you’re unsure who to talk to, look for two people already in conversation.
          </p>
          <p className="mb-6">
            It’s the easiest place to enter without forcing anything. There’s already energy there. You’re not interrupting a moment or trying to carry a conversation on your own - you’re joining something that’s already moving.
          </p>
          <p className="mb-6">
            I’ve met some of my best collaborators and friends this way. Not by working the room, but by paying attention to it.
          </p>
          <p className="mb-6">
            Good hosting isn’t about being the loudest or the smoothest person there.
            It’s about knowing how to step in - and when to let things unfold naturally.
          </p>
        </Section>

        {/* --- #music (No Bad Music) --- */}
        <Section 
          id="music" 
          title="No Bad Music" 
          subtitle="One song. One mood. No skips."
          mediaUrl="https://media.pitchfork.com/photos/5929adeb9d034d5c69bf444e/1:1/w_320,c_limit/084ee64d.jpg"
          mediaAlt="Frank Ocean Nostalgia Ultra"
        >
          {/* PASTE TEXT HERE */}
          <p className="mb-6">
            I miss the old Kanye.
          </p>
          <p className="mb-6">
            If you’re close to Chloe or me, you know we both love Kanye West. And before anyone jumps there - I’m not talking politics or headlines or anything else he’s done or said. I’m talking strictly about the music.
          </p>
          <p className="mb-6">
            I wouldn’t let him babysit my kids (that I don’t have), but he’s undeniably one of the greatest creative geniuses of our generation.
          </p>
          <p className="mb-6">
            There’s one project we keep coming back to: Runaway - the long-form film that accompanies My Beautiful Dark Twisted Fantasy. It’s about 30 minutes, stitched together from the album, and it’s still one of the most ambitious music projects ever released.
          </p>
          <p className="mb-6">
            Two moments always get me.<br/>
            One - the scene where he’s playing “Power” live on the MPC. It’s raw and physical, a reminder that this all starts with hands on a machine.<br/>
            Two - the dinner scene during “Runaway,” where he’s wearing that tuxedo jacket. I don’t know why, but I’ve wanted that jacket in my arsenal ever since.
          </p>
          <p className="mb-6">
            The visuals are cohesive. The mixes are unreal. But more than anything, Kanye tells a story here - one that we find ourselves coming back to, year after year.
          </p>
          <p className="mb-6">
            Chloe and I revisit this at least once a year, and every time we do, something new clicks. A transition. A choice. A feeling that lands differently depending on where we’re at.
          </p>
          <p className="mb-6">
            Who would I be not to share?
          </p>
          <p className="mb-6">
            Start here:<br/>
            Kanye West - Runaway (the full film)<br/>
            <a href="https://www.youtube.com/watch?v=Jg5wkZ-dJXA&list=RDJg5wkZ-dJXA&start_radio=1" className="underline text-[#B22E21] hover:text-[#96261c] transition-colors decoration-[#B22E21]/30 underline-offset-4">https://www.youtube.com/watch?v=Jg5wkZ-dJXA&list=RDJg5wkZ-dJXA&start_radio=1</a>
          </p>
          <p>
            Sit with it. No multitasking.
          </p>
        </Section>

        {/* --- #tips (No Bad Drops) --- */}
        <Section 
          id="tips" 
          title="No Bad Design" 
          subtitle="Small insights you can casually drop."
          mediaUrl="https://cdn.sanity.io/images/06qtbc6i/production/d9913e7dbe18fb4f07bd13f96365cb963748fae0-1800x2400.jpg?w=3000&fm=webp&fit=max&auto=format"
          mediaAlt="Nikolas Bentel Studio"
        >
           {/* PASTE TEXT HERE */}
           {/* Note: I'm combining the Drops content with the Design content here since Tips/Drops was requested and Design was omitted from the list, but design image was cool. User asked for specific IDs. I'll use the Design content here as 'Tips' or just use the Rockefeller content. Let's use the Design content as it has an image and looks better for the 'media' example. */}
           <p className="mb-6">
              This week’s obsession is <a href="https://www.nikolasbentelstudio.com/" target="_blank" rel="noopener noreferrer" className="underline text-[#B22E21] hover:text-[#96261c] transition-colors decoration-[#B22E21]/30 underline-offset-4">Nikolas Bentel Studio</a>.
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
        </Section>

        {/* --- #plans (No Bad Plans) --- */}
        <Section 
          id="plans" 
          title="No Bad Plans" 
          subtitle="One thing actually worth leaving the house for."
          mediaUrl={chloeGameImage}
          mediaAlt="Chloe's Game Staff"
        >
          {/* PASTE TEXT HERE */}
          <h3 className="font-serif text-2xl text-[#1C1C1C] mb-2">Chloe’s Game</h3>
          <p className="font-serif italic text-lg text-[#1C1C1C]/60 mb-6 tracking-[-0.01em]">
            A Wednesday night for people who like their rooms electric and their poker competitive.
          </p>
          <p className="mb-6">
            This September, we're returning to the table. The buy-in has changed, but the spirit hasn't. It's about the hands you're dealt and the company you keep. We're setting up at a new secret location in East Austin that feels less like a venue and more like a living room you never want to leave.
          </p>
          <p className="mb-6">
            Expect curated cocktails, a soundtrack that doesn't quit, and a room full of people who are building the future of this city. It's not just about the cards; it's about the conversation between the shuffles.
          </p>
          <div className="flex items-center gap-4 text-xs font-sans tracking-widest uppercase text-[#B22E21]">
            <span>Wednesdays</span>
            <span>•</span>
            <span>Austin, TX</span>
            <span>•</span>
            <a href="#" className="underline decoration-[#B22E21]/30 underline-offset-4 hover:text-[#1C1C1C] transition-colors inline-block py-2 md:py-0">Request Invite</a>
          </div>
        </Section>

        {/* Sponsor Slot 2 */}
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

        {/* --- #between-us (Today’s Thought) --- */}
        <section id="between-us" className="mb-12 md:mb-24 mt-12 md:mt-20 text-center px-4">
          <h2 className="font-serif text-xl font-normal tracking-tight text-[#1C1C1C] mb-6 scroll-mt-12">
            Today’s Thought
          </h2>
          {/* PASTE TEXT HERE */}
          <p className="font-serif text-lg italic text-[#1C1C1C]/50 leading-loose">
            “One great conversation can change your life.<br/>
            We just make sure you’re in the right room.”
          </p>
        </section>

        {/* Footer */}
        <div className="text-center mb-24">
          <p className="font-sans text-xs tracking-widest uppercase text-[#1C1C1C]/40 mb-8">
            For those who want the deeper cut…
          </p>
          <button className="bg-[#B22E21] text-white font-sans font-medium py-5 px-20 mb-8 hover:bg-[#96261c] transition-colors cursor-pointer text-sm tracking-widest shadow-none opacity-90 hover:opacity-100 uppercase">
            Join The Red List
          </button>
        </div>

        {/* Final Divider */}
        <div className="w-[80%] mx-auto h-[1px] bg-[#1C1C1C]/6 mb-12 md:mb-24"></div>

        {/* Footer Signature & Legal */}
        <div className="flex flex-col items-center pb-24 text-center w-full">
          <p className="font-serif italic text-[14px] text-[#1C1C1C] tracking-[0.05em] mb-12">
            No Bad Company — For stories that need to be told.
          </p>
          
          <div className="flex flex-col gap-2 font-sans text-[10px] uppercase text-[#1C1C1C] opacity-40 tracking-wider">
             <p>© 2024 No Bad Company. All Rights Reserved.</p>
             <div className="flex gap-4 justify-center">
               <a href="#" className="hover:text-[#B22E21] transition-colors decoration-transparent">Unsubscribe</a>
               <span>•</span>
               <a href="#" className="hover:text-[#B22E21] transition-colors decoration-transparent">Privacy</a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
