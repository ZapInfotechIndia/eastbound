"use client";

import React from "react";

export default function Sustainability({
  imageSrc = "/images/services-bg.jpg",
}: {
  imageSrc?: string;
}) {
  return (
    <section className="container my-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div
          className="relative h-100 rounded-lg bg-cover bg-center md:col-span-2 md:h-full"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="absolute inset-0 rounded-lg bg-black/40" />
          <div className="relative z-10 max-w-xl p-6 text-white md:p-16">
            <p className="eyebrow text-blue-light mb-4">sustainability</p>
            <h2 className="mb-6 font-serif text-3xl leading-tight">
              Quietly responsible
            </h2>

            <p className="mb-8 text-sm leading-relaxed">
              For Eastbound, responsible travel is not a separate product. It is
              part of how we design every journey.
              <br />
              We believe that when you travel it should leave the places you
              visit with something in return. We work with local communities,
              independent artisans, naturalists, guides, conservation
              initiatives and responsible hospitality partners to create
              journeys that respect the places and people at their heart.
              <br />
              <br />
              From choosing local experiences and supporting regional businesses
              to creating meaningful encounters with communities and
              contributing to conservation, we look for ways to make every
              journey more thoughtful.
              <br />
              Because the most rewarding way to experience a place is to
              understand it, respect it and help ensure that it remains
              extraordinary for the people who call it home.
            </p>
          </div>
        </div>

        <div aria-hidden="true" />
      </div>
      <div className="mt-10 grid gap-6 text-xs text-neutral-500 sm:grid-cols-2">
        <p className="leading-relaxed">
          We collaborate with the Faith Foundation, an NGO providing financial
          independence to destitute and widowed women and schooling children
          living in the slums of Delhi and & the NCR region. We also endeavour
          to work closely with the Signature Foundation, an old-age home in
          Kochi. This organisation works relentlessly to provide a helping hand
          and a better-retired life to the elderly abandoned by their families.
        </p>

        <p className="leading-relaxed">
          As a company, wildlife conservation is a cause we hold very close to
          our heart and we are always willing to throw our weight behind any
          eco-friendly crusade. We are primary affiliates of TOFT, an unique
          international campaign advocating and supporting responsible tourism
          as a way to save the Tiger, India’s wildlife and its wilderness areas.
        </p>

        <p className="leading-relaxed">
          Eastbound sponsored the guide training of Sudarshan Singh Dhurvey in
          association with The Indian Institute of Forest Management (IIFM) Park
          Guide training programme. This training focuses on creating a balance
          between class room based theoretical teaching and field studies to
          nurture the remarkable skill these Park Guides already possess, having
          be born and brought up within forest habitats. Dhurvey is now the
          official guide at the Tala Zone in Kanha National Park and is
          gainfully employed leading groups in the Park. Kanha National Park is
          one of the biggest national parks in Madhya Pradesh, India, and is a
          Tiger Reserve in the Mandla and Balaghat districts of Madhya Pradesh,
          India.
        </p>

        <p className="leading-relaxed">
          We also endorse SOS’s Bear Rescue Village that works for the humane
          treatment of Indian bears.
          <br />
          We sincerely believe that it is our duty to look beyond the
          traditionally perceived capitalist mandate of purely making a return
          on investment for our company’s owners or shareholders -- we want to
          make every effort to manage the social, environmental and economic
          impact of every one of our actions and make the local community a
          better place.
        </p>
      </div>
    </section>
  );
}
