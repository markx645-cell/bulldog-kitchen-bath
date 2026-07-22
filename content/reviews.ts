// Customer reviews shown on the homepage and the /reviews page.
//
// TWO SOURCES, at the owner's direction:
//   1. PRIMARY — real Bulldog Remodel Group remodeling testimonials
//      (testimonials remodel.txt). Full verbatim wording. These lead, and the
//      homepage sample is drawn from them.
//   2. SECONDARY — reviews from the owner's sibling business, Bulldog Windows &
//      Doors (bulldog reviews.txt), appended after the remodel set. These were
//      window/door customers, so they are paraphrased to keep only the praise
//      that is true regardless of the job (clean, professional, on time, no
//      pressure), with window-specific details dropped and no remodel project
//      fabricated. They remain, strictly, reviews of the windows business — the
//      owner chose to include them here; the airtight version of this section is
//      remodel reviews only.
//
// Verbatim adjustments applied to the primary set:
//   - Date labels removed (per the owner's instruction). Dates that are part of
//     a sentence are left in the reviewer's own words.
//   - Two exact-duplicate texts in the source (a powder-room review repeated
//     under two names, a cabinets review repeated under two names) are kept once
//     each, so no two entries show identical wording under different names.
//   - The one commercial testimonial (Sargent Appliance retail showroom) is
//     left out of this homeowner-facing section.
//   - `project` reflects the work each review describes; `rating` is 5 for the
//     glowing majority and 4 for the one mixed review (Sneh S.). The source
//     carried no numeric stars.
//
// Names are as supplied. Locations are omitted (the source gives none, and they
// are not invented). Order leads with a varied mix because the homepage shows
// the first six.

export type Review = {
  name?: string;
  location?: string;
  project?: string;
  quote?: string;
  /** 1–5. */
  rating?: number;
  avatar?: string;
  videoUrl?: string;
};

export const reviews: Review[] = [
  {
    name: 'Patrick M.',
    project: 'Master Bath & Closet Addition',
    rating: 5,
    quote:
      'We had an exceptional experience working with Bulldog Remodel Group on our primary bathroom and walk-in closet addition. From start to finish, the entire process was seamless, efficient, and stress-free. Our project manager was fantastic—he explained every detail thoroughly, keeping us informed at every step. Thanks to his careful management, there were no surprises, and the project was completed much faster than we expected. Their attention to detail was outstanding. Every contractor who worked in our home was professional, respectful, and highly skilled. We also loved their project management app, which kept all our selections organized and provided a clear daily schedule of what was happening during construction. A special thanks to the entire Bulldog Remodel Group team for their expertise and going above and beyond. We couldn’t be happier with the final result! We highly recommend Bulldog Remodel Group and will definitely use them again for future projects.',
  },
  {
    name: 'Denise H.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'I highly recommend Bulldog Remodel Group. Their customer service is outstanding, they are on time, on budget, and take extra time to explain all of the details before and while the project is underway. They completely remodeled our kitchen, removed walls, and added windows. We could not be happier with the results and the entire experience.',
  },
  {
    name: 'Jonas K.',
    project: 'Master Bath Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group did a complete renovation of our master bathroom down to the studs. The transformation was amazing. The designer made a once dreaded room into a retreat. The luxurious shower is a personal favorite, and we now have a laundry closet, which has made the task so much easier and more convenient for us. The design was a perfect balance between style and functionality. Throughout the process, the design team made us feel as though we were their only customer with all the attention and responsiveness we could hope for. They really understood our personal style while making wonderful suggestions along the way to enhance our ideas or introduce designs we would never have thought of. When we were unsure about a choice, their confidence and expertise put us at ease. They are truly masters at their craft. We also found the trades that worked on the project were experienced and respectful while in our home. A special thank you to the entire crew, who represented Bulldog Remodel Group with the utmost professionalism, always going above and beyond with customer care. Along the process, the owners stopped by on occasion to make sure the project was meeting (and exceeding) our expectations. This hands-on approach was the cherry on top to a wonderful experience. I am a very picky customer, and the Bulldog Remodel Group team never made me feel like a burden. They were always accommodating and made sure they delivered a quality project that exceeded our expectations.',
  },
  {
    name: 'Chris C.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'The Bulldog Remodel Group team was top notch! I couldn’t be more happy with my kitchen. The finishes and products are beautiful, and the project came out better than I expected. They were very professional, informative, and they exceeded expectations. Choose Bulldog Remodel Group for your next job. You will be glad you did!',
  },
  {
    name: 'Scott N.',
    project: 'Master Bath Remodel',
    rating: 5,
    quote:
      'We had a very good experience with Bulldog Remodel Group. They designed and remodeled our master bathroom. The whole team was professional and knowledgeable. They were detail-oriented, always kept us updated on the project progress, and took care of any questions or concerns we had right away, which made us feel worry-free. The onsite crew was friendly, paid attention to detail, and cleaned up every day. The bathroom turned out to be beautiful. We definitely will consider them again for future projects.',
  },
  {
    name: 'Phil & Lara',
    project: 'Home Addition',
    rating: 5,
    quote:
      'We hired Bulldog Remodel Group to help us with a significant 3-bedroom / 2-bathroom renovation. Other contractors we spoke with basically told us to design what we wanted ourselves, and they would build it. We were completely lost. When we met with the Bulldog Remodel Group team for our initial consultation, they took the time to understand our needs, including adding handicap modifications for our son, and were able to design a highly functional floor plan with maximum space utilization and an appealing design that we never would have come up with on our own. Knowing that we would need to live through the construction, the team laid out a detailed plan so we would know exactly when areas of the house would be unavailable and when they would be completed. They were extremely courteous and mindful of our situation throughout the process, and our project manager provided constant communication, so there were never any surprises. As we reached the point where we had to make selections, the design team was a lifesaver. They patiently helped us choose everything from countertops to tile to paint colors. We ended up with a design that we absolutely love. When they were done, we had an additional 250 square feet added to the back of our house that looked like it was part of the original build. We now have a beautiful master suite with a walkout to our back deck, a full bathroom, a walk-in closet, and a fully handicap-accessible bedroom and bathroom for our son that has made all our lives significantly easier. Everyone at Bulldog Remodel Group, including the subcontractors, was kind and respectful to our family. Their attention to detail was outstanding, communication was proactive, and whenever we had questions, we could easily reach our project manager or the owners the same day—even on weekends. I would highly recommend Bulldog Remodel Group for any significant remodel or home addition, and we look forward to having them remodel our kitchen when we’re ready.',
  },
  {
    name: 'Deborah S.',
    project: 'Bathroom Remodel',
    rating: 5,
    quote:
      'We initiated our bathroom renovation with Bulldog Remodel Group on the recommendation of a good friend. Now that the renovation is complete, we have nothing but high recommendations of our own! Our bathroom was redone top to bottom, and we couldn’t be happier.',
  },
  {
    name: 'Nicholas T.',
    project: 'Whole-Home Remodel',
    rating: 5,
    quote:
      'We worked extensively with the Bulldog Remodel Group team to complete our renovation. We completely rebuilt our kitchen, master bath, bar, and updated the powder room. The Bulldog Remodel Group team worked with us to make sure that everything was up to our standards, and they always followed through. Very professional company. Nice job!',
  },
  {
    name: 'Kurt N.',
    project: 'Kitchen & Bath Remodel',
    rating: 5,
    quote:
      'I highly recommend Bulldog Remodel Group for your next project. Really! I had them remodel my kitchen and master bath over the time of COVID. A tall task, especially for a condo that hadn’t been updated in some 40–50 years. The process was simple right from the start. We sat down to design an interior space that worked before anything happened. I was then shocked to see that once everything was approved and ready, there was a detailed production schedule meticulously laid out down to the week, day, and hour. This schedule allowed me to see who was coming and when certain tasks would be finished, letting me schedule my life around their milestones—truly awesome. Their craftsmen were beyond professional and respectful of my home. From laying down floor protection to vacuuming after every day and so much more. While things were rolling, the project flew by. We worked together discussing everything from choosing the right tile, flooring, and materials. The build was planned and finished with a master craftsman’s touch. I never worried about the final product because of the ease they established ahead of time. I am beyond thankful that I called Bulldog Remodel Group to tackle this monster project. Please know that Bulldog Remodel Group wasn’t originally recommended to me through anyone or a review. I honestly just saw their quality on their website and hoped they would be able to do my job over COVID. Well, they really outdid themselves. I am thankful for their team’s hard work and am truly a happy client. Thank you, Bulldog Remodel Group, for all your hard work!',
  },
  {
    name: 'Anonymous',
    project: 'Whole-Home Remodel',
    rating: 5,
    quote:
      'Thank you Bulldog Remodel Group! It’s hard to find the right words for how amazing this company is. The team walked us through absolutely everything we would need for this project, always keeping us updated every step of the way. I thought what we had in mind for this project was impossible, but Bulldog Remodel Group went above and beyond and truly delivered us our dream home. Our family cannot thank you enough. We now have our dream home, and it is better than I could have ever imagined!',
  },
  {
    name: 'Nancy D.',
    project: 'Bathroom Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group is a very professional design and renovation company. We met with the design team and thought they were a great fit for us. We liked the process that followed, with everything being spelled out and a meeting with the team before the project began. Several staff members and companies that would be involved in our project came to the house to see the bathroom and discuss the design. We were taken shopping for all of the materials that would be used in the project and picked out what we loved with our designer. The work crew and project manager were responsible and thoughtful with us throughout the project. Our project went through COVID, but we really were not hindered because of it, and everyone was very careful when they came into our home. The workmanship is excellent; we’re very happy with our choices and love our bathroom. Our dream came true because of Bulldog Remodel Group. We highly recommend this company.',
  },
  {
    name: 'Christa L.',
    rating: 5,
    quote:
      'Our experience with Bulldog Remodel Group was impressive! The team is very professional and knowledgeable! The on-site work crews paid close attention to detail and were patient when we had questions. Our project manager was awesome! He did a great job of keeping us informed and worked diligently to keep our project moving, even with some of the expected—and unexpected—things that occurred. Keep up the good work, Bulldog Remodel Group. We love the results!',
  },
  {
    name: 'Paul S.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'We did a lot of research before choosing Bulldog Remodel Group, and in the end, we’re POSITIVE we made the right decision! The whole team was professional, collaborative, and great to work with. Ours was a large project, including a complete kitchen renovation, removing a wall for an open-concept layout, adding hardwood flooring throughout a large space (kitchen, great room, library, and powder room), and reimagining our laundry room. We’re thrilled with the results and truly love what we consider to be “our new home!”',
  },
  {
    name: 'Galen K.',
    rating: 5,
    quote:
      'We had an amazing team at Bulldog Remodel Group. Everyone was so patient, kind, and attentive. They helped us revise plans, presented options, and took an incredible amount of time with us to get everything right. We were kept up to date on every aspect of the project, communicated so well, and the team did an excellent job keeping everything organized and on task, even when we made last-minute changes. We have more plans for our home, and Bulldog Remodel Group will certainly be the ones we call.',
  },
  {
    name: 'Kyle & Sarah W.',
    project: 'Home Addition',
    rating: 5,
    quote:
      'We hired Bulldog Remodel Group to handle the addition on the back of our bungalow and garage. They added a family room, kitchen, renovated our old kitchen into a dining room, and completed an addition to our detached garage. We are thrilled with the outcome of our gorgeous and functional “new” home. Everyone we encountered during the process was professional, friendly, and highly knowledgeable, and it shows in the final product. From the planning stage to the final nail, their expertise was a tremendous help in bringing our dream home to reality. It’s been just shy of a year since project completion, and we’ve had no issues to speak of. If you are looking for quality work, Bulldog Remodel Group is the place to go.',
  },
  {
    name: 'Heidi R.',
    project: 'Powder Room',
    rating: 5,
    quote:
      'I worked with Bulldog Remodel Group to redo my first-floor powder bathroom. They had trusted vendors for cabinets, tile, plumbing, and countertops all lined up for me to contact. The vendors already had my measurements, and they knew exactly what would work for the space. When I wasn’t sure how a product might look, I contacted the team, and they gave me some great ideas. After I selected everything, they verified all of my choices. The installation was completed on time, and the work site was thoroughly cleaned after every visit. Any minor issues I had were addressed quickly and without hesitation. I also made some additions to the lighting they recommended, which added time to the project, but they wanted everything to look right—and I’m very glad they made that recommendation. I plan to hire Bulldog Remodel Group to remodel my kitchen and another bathroom. They stayed completely within budget. The quality of the work was outstanding!',
  },
  {
    name: 'Jill D.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'We had our kitchen remodeled, which basically turned into a main-level makeover because we opened many walls and combined our old dining room and kitchen into one big, beautiful kitchen. Our house was built in 1969, and we wanted more of an open concept. The design was amazing and something I never thought possible. Once the budget was nailed down, it never changed. There was a calendar of who was coming and when, and they stayed very close to that schedule. The employees of Bulldog Remodel Group were a pleasure to work with, and they were very talented in their trades, as were their subcontractors. It was a great experience.',
  },
  {
    name: 'Lindsay P.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group remodeled our kitchen last fall, and it’s beautiful! We had walls removed and an opening widened, and now everything flows really well. The layout and design they came up with work great for our space. They were open to our design ideas—even crazy ones like a 139-inch built-in bench seat. Our new kitchen is very functional for a busy family, doesn’t feel crowded, and is great for entertaining. They stayed on track with the timeline, completing the whole project within eight weeks, which was especially important with small children.',
  },
  {
    name: 'Debbie',
    project: 'Whole-Home Renovation',
    rating: 5,
    quote:
      'I cannot rave about Bulldog Remodel Group enough. Not only are they prompt, but their quotes and their ability to stay on budget are impeccable. They have finished two very large jobs for me—a full first-floor residential renovation (down to the studs, opening walls, and a high-end kitchen remodel) and a commercial project—and both were handled with the utmost professionalism, quality, and attention to detail. All of my calls were responded to promptly. Every contractor and subcontractor who showed up at the site was friendly, polite, and trustworthy. While renovations and construction can be stressful, these guys made it as smooth and seamless as possible.',
  },
  {
    name: 'Paul K.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'My husband and I had our kitchen remodel performed by Bulldog Remodel Group, and the entire process was pleasant. The team’s customer service was superb and stress-free. When an unexpected issue would arise, they kept us informed. They made the process very calming. I would definitely recommend Bulldog Remodel Group. Our kitchen came out more beautiful than we thought.',
  },
  {
    name: 'Sarah',
    project: 'Whole-Home Remodel',
    rating: 5,
    quote:
      'Thank you to the entire Bulldog Remodel Group team that worked on our project. Everyone we encountered was professional and supportive throughout the entire renovation process. We are absolutely thrilled with the outcome of our kitchen, living room, and dining room. We would recommend this company to anyone looking to renovate their home!',
  },
  {
    name: 'Roger B.',
    project: 'Master Suite Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group completed a remodel of a bedroom into a walk-in closet and a three-piece master en-suite. We couldn’t be happier with the results. The quality of the work was amazing, and the service was top notch. The workers were very polite and kept the work areas clean. They will be the first people I call if we have another project to do.',
  },
  {
    name: 'Glenn P.',
    project: 'Bathroom Remodel',
    rating: 5,
    quote:
      'We had our shower area remodeled. New tub, tile, and fixtures. Great experience from start to finish! We really enjoyed the experience from the design, to picking out fixtures, to the actual work on the bathroom. Everyone was great and communicated well. We wouldn’t hesitate to work with Bulldog Remodel Group again!',
  },
  {
    name: 'Vasu',
    project: 'Kitchen & Bath Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group has been an outstanding company to work with. Last year, they remodeled the bathrooms in my house, and now we’ve started updating the kitchen. Every part of the process has been pleasant and transparent. I’m looking forward to not only getting a new kitchen, but also working with the great, caring, and friendly professionals! I highly recommend working with Bulldog Remodel Group!',
  },
  {
    name: 'Margarita P.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group remodeled our kitchen, and it turned out beautiful. The crew of contractors was professional, friendly, and great to work with. The team was always available when we had questions and kept us updated on the progress of our project. They also gave us great suggestions and ideas. We would highly recommend Bulldog Remodel Group and would definitely use them again.',
  },
  {
    name: 'Linda K.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'I had Bulldog Remodel Group remodel my kitchen, and the outcome fully brought my vision to life. It turned out gorgeous. The team was honest, fair, and easy to work with. Although I had been through two new home constructions and numerous remodeling jobs, I relied on their professional opinions for the final design details. They are well educated in their craft, and I’m happy to be cooking in my new kitchen!',
  },
  {
    name: 'Lisa G.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'The Bulldog Remodel Group team was fantastic to work with. They recognized our style quickly, and when my husband and I had different ideas, they brought the perfect recommendations to the table. They made sure we were totally satisfied with our cabinets and went above and beyond to make sure we were completely happy. My husband installed our cabinets himself, and we were treated the same as if they had installed them for us. The team spent a lot of time with us picking out our cabinets and was very patient. I would 100% recommend Bulldog Remodel Group.',
  },
  {
    name: 'Linda D.',
    project: 'Powder Room',
    rating: 5,
    quote:
      'Our project was tiny compared with others—remodeling a powder room. It was a pleasure working with Bulldog Remodel Group. Every detail was discussed at length and spelled out in the contract, which was much appreciated. The team was very professional, friendly, and easy to work with, and we were very pleased that our calls and texts were answered promptly. We love our refreshed bathroom and wish we had used Bulldog Remodel Group for our kitchen and master bath. We would not hesitate recommending them, especially for larger projects.',
  },
  {
    name: 'Deborah L.',
    project: 'Master Bath Remodel',
    rating: 5,
    quote:
      'Trent and I wish to thank everyone at Bulldog Remodel Group for making our bathroom renovation such a pleasant experience—from start to finish! Truly, everyone contributed to the success of the project, and dare I say, with a lot of laughter involved. We are beyond thrilled with the finished project… a new, fresh, lovely, and updated master bathroom. Thank you for your hard work and professionalism!',
  },
  {
    name: 'Tomeca D.',
    rating: 5,
    quote:
      'We have used Bulldog Remodel Group for two large home remodeling jobs, at our current home and our previous home. They are the only company we have used more than once; the only company we would refer friends to; and the only company we would use again! They were respectful of our time and our budget. Also, the design team always had great ideas but didn’t push us in one direction or another.',
  },
  {
    name: 'Ellen W. & Trent D.',
    project: 'Bathroom Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group was contracted for two separate jobs, and each resulted in our bathrooms being refreshed and inviting. The team was easy to work with, and the professional crews showed up on schedule and did great work.',
  },
  {
    name: 'Pat & Jim K.',
    project: 'Bathroom Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group remodeled our bathroom. The work they did was of the highest standard. They were always on time, on budget, and very friendly. The team checked on the progress every day and kept us informed of each step. We cannot thank them enough for the wonderful bathroom we now have. Everyone who sees it thinks it’s beautiful.',
  },
  {
    name: 'K. P.',
    rating: 5,
    quote:
      'The Bulldog Remodel Group team spent a significant amount of time with us before securing the job, working through the best designs and solutions for our project. They oversaw the project carefully and were genuinely interested in making sure everything was done right. If something wasn’t going quite to plan, they made it right. We look forward to our next renovation with Bulldog Remodel Group.',
  },
  {
    name: 'Client',
    project: 'Home Addition',
    rating: 5,
    quote:
      'Bulldog Remodel Group completed a large addition and remodeling project at our home during the summer of 2015, and we are extremely satisfied with the results. The project not only turned out spectacular but was completed before the estimated completion date. We were always kept up to date on the progress of the project with either a phone call or text message. Bulldog Remodel Group is extremely customer-focused, going above and beyond to make sure every detail, no matter how small, was taken care of. If there was anything we were not completely satisfied with, they corrected it—even when we told them it wasn’t necessary. They did such a great job on our home that my parents hired them shortly after our project was completed to renovate their home as well.',
  },
  {
    name: 'Client',
    project: 'Basement Remodel',
    rating: 5,
    quote:
      'We would highly recommend Bulldog Remodel Group. They helped us design and finish our basement. They worked within our budget, showed up on time, cleaned up every day, and all of their contractors were courteous and professional. They respected us and our home, were very trustworthy, and we would not hesitate to use them again.',
  },
  {
    name: 'Client',
    rating: 5,
    quote:
      'I have been working with Bulldog Remodel Group for about five years. They are the most honest, reliable, and professional contractors I have ever worked with. Every project has been completed beyond my satisfaction, on time, and as quoted. The team is knowledgeable about all remodeling and building specifications and has a great eye for design and color. I actually look forward to new projects because I know without a doubt that I will be pleased with the outcome. Bulldog Remodel Group is the only company I will ever use or recommend.',
  },
  {
    name: 'Aziza R.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'I am very pleased with the work of Bulldog Remodel Group. The team was a great help, and they did an excellent job. Everything was taken care of. The kitchen looks great, and I was happy with the entire process.',
  },
  {
    name: 'Cory',
    project: 'Kitchen Remodel',
    rating: 5,
    quote:
      'If you are in need of a kitchen remodel, visit Bulldog Remodel Group for a great selection of materials, quality craftsmanship, and professional design. We love our new vanity!! Highly recommend.',
  },
  {
    name: 'Nick D.',
    project: 'Kitchen & Bath Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group did an excellent job with our kitchen and bath remodel. Will definitely use them again for any other projects we may need done.',
  },
  {
    name: 'Jeff A.',
    project: 'Bathroom Remodel',
    rating: 5,
    quote:
      'Bulldog Remodel Group did an excellent job with our bathroom. We are very happy with the end result!',
  },
  {
    name: 'Linda P.',
    project: 'Covered Patio',
    rating: 5,
    quote:
      'I contracted Bulldog Remodel Group to put a roof over my patio. From start to finish, they took care of my needs and concerns. In the end, the team personally came out to take care of a couple of small details that resulted in a spectacular outdoor setting.',
  },
  {
    name: 'Brett & Melissa',
    rating: 5,
    quote:
      'Of the many projects we have had done to our house, this was by far one of the best companies we have ever worked with. The design team was great, and the contractors were professional and always on schedule. (I should also say this review is long overdue—we completed this project last summer, and it still looks and works fantastic.) Thanks again!',
  },
  {
    name: 'Jeanne G.',
    rating: 5,
    quote:
      'Excellent company. The design team guided me through every area of the remodel. They listened, advised, but never pushed, and I’m so glad I trusted their instincts. All work crews were on time, friendly, helpful, capable, and tidy. We couldn’t be happier and wouldn’t use anyone else.',
  },
  {
    name: 'Kathy M.',
    rating: 5,
    quote:
      'A worry-free renovation – great team of professionals. Highly recommend Bulldog Remodel Group.',
  },
  {
    name: 'Liz R.',
    rating: 5,
    quote:
      'Premium price, but with premium products and service! Our project manager was great with communication and attention to detail.',
  },
  {
    name: 'Donovan C.',
    project: 'Kitchen Remodel',
    rating: 5,
    quote: 'Best kitchen remodeling I had in years!! Thanks Bulldog Remodel Group!',
  },
  {
    name: 'Dennis',
    rating: 5,
    quote:
      'This company has completed numerous projects for me. Their work is top-notch, pricing is reasonable, and jobs are completed on time. I would hire Bulldog Remodel Group again to do almost anything.',
  },
  {
    name: 'Sneh S.',
    project: 'Kitchen Remodel',
    rating: 4,
    quote:
      'Bulldog Remodel Group renovated our complete kitchen and replaced countertops in the bathrooms and downstairs kitchen. They are knowledgeable and, for the most part, professional. Deadlines and follow-up could use some improvement, but the quality of the work was good.',
  },
  {
    name: 'Dione J.',
    rating: 5,
    quote: 'Overall, great experience working with Bulldog Remodel Group and their team.',
  },
  {
    name: 'J.L. & K.L.',
    rating: 5,
    quote: 'All the contractors are super nice and very professional!',
  },

  // ---------- SECONDARY: paraphrased from the sibling Bulldog Windows & Doors
  // reviews (window/door customers; specifics dropped, no remodel invented). ----------
  {
    name: 'Cindy F.',
    project: 'Shower Replacement',
    rating: 5,
    quote:
      'They walked me through each step and left the bathroom cleaner than they found it. I’m thrilled with how the new shower turned out.',
  },
  {
    name: 'Connie C.',
    rating: 5,
    quote:
      'The crew was courteous and really knew the product. I have asthma, and they went out of their way to keep dust out of the house the whole time.',
  },
  {
    name: 'John B.',
    rating: 5,
    quote:
      'No-pressure sales, regular updates on my order, and easy financing. The crew took real care with the trim, cleaned up inside and out, and it was a fantastic value.',
  },
  {
    name: 'Loretta C.',
    rating: 5,
    quote:
      'The sales rep was thorough and patient, and the installer was detail-driven, punctual, and genuinely pleasant to have in the house.',
  },
  {
    name: 'Carrie G.',
    rating: 5,
    quote:
      'The crew worked hard all day and kept me in the loop the whole time. When they left, the place was spotless.',
  },
  {
    name: 'Susan B.',
    rating: 5,
    quote: 'They went above and beyond from start to finish. The bathroom looks absolutely amazing.',
  },
  {
    name: 'C. D.',
    rating: 5,
    quote:
      'They kept the job site clean, finished the work exactly the way I wanted, and showed up right on time.',
  },
  {
    name: 'Janet J.',
    rating: 5,
    quote:
      'The salesman was polite, professional, and respectful of my time. The whole experience beat my expectations.',
  },
  {
    name: 'Anita T.',
    rating: 5,
    quote:
      'Clean site, and everything was finished to my satisfaction. I’d recommend them to friends and family without hesitation.',
  },
  {
    name: 'Wayne L.',
    rating: 5,
    quote: 'Efficient, professional, and informative — they answered every single question I had.',
  },
  {
    name: 'Elnora H.',
    rating: 5,
    quote:
      'I’d absolutely use them again. The crew was informative, courteous, and respectful throughout.',
  },
  {
    name: 'Debra M.',
    rating: 5,
    quote:
      'The crew stayed cheerful the entire time and explained everything they were doing as they went.',
  },
  {
    name: 'Ozie H.',
    rating: 5,
    quote: 'Very professional and clearly knew his work. I’d recommend them to family.',
  },
  {
    name: 'Aaron D.',
    rating: 5,
    quote: 'I love the finished product. The crew was nice and professional from start to finish.',
  },
  {
    name: 'Jeff S.',
    rating: 5,
    quote:
      'The crew was excellent — strong the whole way, from the first sales conversation through the finish.',
  },
  {
    name: 'Melissa D.',
    rating: 5,
    quote: 'From the very first meeting all the way through, everything went smoothly.',
  },
  {
    name: 'Becky D.',
    rating: 5,
    quote: 'The crew showed real attention to detail. It made all the difference.',
  },
  {
    name: 'Terry H.',
    rating: 5,
    quote: 'A professional crew and great to work with all around.',
  },
  {
    name: 'Jacob E.',
    rating: 5,
    quote:
      'I met them at the Cincinnati Home & Garden Show — friendly and never pushy. I’m very satisfied with the work.',
  },
  {
    name: 'Caroline S.',
    rating: 5,
    quote: 'They exceeded my expectations at every turn.',
  },
  {
    name: 'Casey F.',
    rating: 5,
    quote: 'Efficient and did a great job. Couldn’t ask for more.',
  },
  {
    name: 'Davis D.',
    rating: 5,
    quote: 'Prompt, hard-working, and they kept everything clean the whole time.',
  },
  {
    name: 'Andrew J.',
    rating: 5,
    quote: 'Everything looks great — I’m really happy with how it came out.',
  },
  {
    name: 'Cindy F.',
    rating: 5,
    quote: 'A personable crew and a great cleanup. I’m very happy with their work.',
  },
  {
    name: 'Ray K.',
    rating: 5,
    quote: 'The finished result looks fantastic.',
  },
  {
    name: 'Terry S.',
    rating: 5,
    quote: 'They did a great job.',
  },
  {
    name: 'Sam S.',
    rating: 5,
    quote: 'Very satisfied. Five stars.',
  },
  {
    name: 'Joe C.',
    rating: 5,
    quote: 'Excellent — couldn’t have asked for a better job.',
  },
  {
    name: 'Patty E.',
    rating: 5,
    quote: 'They are great workers, every one of them.',
  },
];
