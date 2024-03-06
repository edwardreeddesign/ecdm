export const navLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'District',
    url: '/district',
    dropdownLinks: [
      {
        name: 'District',
        url: '/district',
      },
      {
        name: 'Heritage Lodge',
        url: '/heritageLodge',
      },
      {
        name: 'War Memorial',
        url: '/warMemorial',
      },
      // Add more dropdown links as needed
    ],
  },

  {
    name: 'Lodges',
    url: '/lodges',
  },
  {
    name: 'Events',
    url: '/events',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

export const whatIsFreemasonry = [
  {
    title: 'What is Freemasonry?',
    answer: [
      "Simply stated, it's a fraternal organization dedicated to helping a man develop in an ethical and moral environment.",
    ],
  },
  {
    title: 'What Freemasonry is NOT',
    answer: [
      'It is not a service club, though Masons serve their community in a variety of ways.',
      'It is not a religion, though a man must profess belief in a supreme being and act accordingly.',
      'It is not a secret organization, though there are harmless signs and symbols, the meaning of which are not shared with non-Masons.',
    ],
  },
];

export const temples = [
  {
    location: 'Amherstburg',
    image: '/images/lodges/amherstburg.jpeg',
    address: '68 Murray Street',
    parking: 'On Ramsey Street or public lot at Ramsey and Richmond',

    lodges: [
      {
        name: 'Thistle Lodge 34',
        lodgeImage: '/images/lodges/amherstburg.jpeg',
        mainImage: '/images/lodges/thistleMain.png',
        ctaImage: '/images/lodges/thistlelodge.png',
        historyParagraph1:
          "Freemasonry spread in the 'new world' as the British Army established colonial rule. The officers were often Freemasons and they, through their association with civilian leaders in the community, established lodges. Such was the case in Amherstburg, a town on the Detroit River created in 1796 following the establishment of Fort Malden and the King's Navy Yard. Adoniram Lodge was formed in the late 1790s and was active until it's abrupt closure at the outbreak of war in 1812. A Freemasons lodge would not reappear in Amherstburg until the formation of Thistle Lodge in 1849.",

        meeting: 'First Tuesday at 8:00 PM except for July and August',
        installation: 'December 27, 2023 - 8:00pm',
        website: null,
        facebook: null,
        slug: 'thistle-lodge',
        officialVisit: 'May 7, 2024 at 8:00 pm',
      },
    ],
  },
  {
    location: 'Essex',
    image: '/images/lodges/essex.png',
    address: '30 Laird Avenue',
    parking: 'on site',

    lodges: [
      {
        name: 'Parvaim Central 395',
        image: 'public/images/lodges/essex.png',
        mainImage: '/images/lodges/parvaimMain.jpeg',
        ctaImage: '/images/lodges/parvaimsqareandcompass1.jpeg',
        historyParagraph1:
          'The current building was finished in 1964 by (Carl) Sweet Construction. The lot was formerly the Essex Public School location.',
        historyParagraph2:
          'Central Lodge No. 402 dates from 1883. Amalgamation with Parvaim No. 395 from Cottam occurred in 2011. It is common to take the lowest lodge number when Lodges amalgamate.',
        historyParagraph3:
          "The architect's name and blueprints are in the Temple Vault. There are no pictures of the original 402 Lodge, and we are unsure if it was actually at the same location. With the public school being there, it is doubtful. ",

        meeting:
          'First Wednesday except for January (2nd Wednesday),July and August',
        installation: 'June 7, 2023 at 7:30 pm',
        website: null,
        facebook: null,
        slug: 'parvaim-central',
        officialVisit: 'Wednesday December 6, 2023 at 7:30 pm',
      },
    ],
  },
  {
    location: 'Kingsville',
    image: '/images/lodges/kingsville.png',
    address: '29 Main Street West',
    parking: 'on street or public lot behind library',

    lodges: [
      {
        name: "St. George's 41",
        image: '/images/lodges/kingsville.png',
        mainImage: '/images/logos/logo.png',
        ctaImage: '/images/logos/logo.png',
        historyParagraph1: '',
        meeting: 'First Thursday at 7:30 PM except for July and August',
        installation: 'January 4, 2024 at 7:30 pm',
        website: null,
        facebook: 'https://m.facebook.com/profile.php?id=565502673497581',
        slug: 'stgeorges-lodge',
        officialVisit: 'April 4, 2024 at 7:30 pm',
      },
    ],
  },
  {
    location: 'Leamington',
    image: '/images/lodges/leamington.png',
    address: '3 John Street',
    parking: 'public lot on John Street',

    lodges: [
      {
        name: 'Leamington 290',
        image: '/images/lodges/leamington.png',
        mainImage: '/images/lodges/leamingtonMain.png',
        ctaImage: '/images/logos/logo.png',
        historyParagraph1:
          'December 30, 1872, nineteen Charter members contributed $20.00 as an initiation fee to start Leamington Lodge. They carried on under dispensation until Grand Lodge met in July 1873 and granted charter No. 290 to Leamington Lodge. The first Master, W. Bro. E.R. Shepley served as Master for four of the first five years. In 1875, he was by right, the first Leamington I.P.M. returning to the Masters chair in 1876 and 77. The first two candidates initiated on March 11, 1873 were Walter S. Pulford and Joseph C. Gee. The growth of the Lodge kept pace with the growth of Leamington, which became a village in 1874, a year after Lodge was granted its charter. Leamington gained town status in 1890. A sample of events that may be of interest has been duly recorded.',
        historyParagraph2:
          'July 26, 1876 the members of the Lodge laid the cornerstone of the M.E. Church on the 5th Concession.',
        historyParagraph3:
          'In 1875 a motion to raise initiation fees to $30 from $20 was raised and failed. In 1920 twelve candidates were first entertained at Joseph’s Restaurant for dinner and all twelve were initiated. The Lodge was fined $1.00 for each member initiated on that night for this indiscretion. April 26, 1926 a committee reported at a special meeting to discuss new Lodge accommodations. On two previous occasions it is reported that Leamington Lodge was driven out by fire; in 1883 when nearly the whole then village, nearly burnt down and again in 1910.',
        historyParagraph4:
          'In 1926 a motion to change the meeting night to the first Monday of each month, was defeated and the meeting date remained as the first Tuesday on or after the full moon. It remained as such until it was changed in the 1940’s to meet on the third Tuesday of the month. The Lodge met over Knowlton’s Jewelry Store until January 11, 1927 when the Lodge moved across the hall to a large room over Jackson’s China and Furniture store. The Eastern Star remained at Knowlton’s. The dues were increase by 50%, becoming $6.00 a year.',
        historyParagraph4:
          'The year is 1929, Leamington and Xenophon Lodge held their first joint installation, a practice that continued for several years. June 17, 1948 saw the 75th celebration dinner held at the Leamington Golf Club with DDGM Rt. Wor. Bro. Russ Lonnee acting as Chairman. The Deputy Grand Master J.P. Maher gave the address on that historic occasion. In 1950 the Lodge was given notice, their landlord needed the space. After our joint installation on Dec 27, 1950 in Wheatley, we in January 1951, started to meet there until our new Temple was ready for occupancy late in 1952.        ',
        historyParagraph5:
          '	A highlight of Leamington Lodge was the dedication of the Temple on 3 John Street Leamington on April 10, 1953, by M.W. Bro. Nelson C Hart, Grand Master acting as the Master of Ceremonies. In November 1967, the Blue carpet was installed peripherally. After a concerted drive for funds we were able to purchase and lay a new Masonic Carpet for the main floor of the Lodge. At an open house held on June 16, 1968 the brethren had their first view of the new carpet. Air conditioning was proposed in 1972 and decided on as a centennial project. May 1973 it was up and running. The Lodge’s Centennial Celebration banquet was held October 17th 1973.',
        historyParagraph6:
          'In 2008, Leamington 290 recognized that 25 of its brethren were eligible to wear a Lewis Jewel, showing the brethrens’ strong family ties and history in the Lodge. In a Presentation Ceremony was held, with M.W. Brother Alan J Petrisor – Grand Master as the Master of Ceremonies. Twenty-four of the twenty-five brethren were able to be in attendance to be honoured with the presentation made to them. The Grand Master contacted the twenty-fifth recipient and arranged to present him his Lewis Jewel, at the Grand Masters Banquet being held at the Rhine Danube Club located in Leamington.          ',
        meeting: 'Third Tuesday at 7:30 PM except for July and August',
        installation: 'June 18, 2024 at 7:30 pm',
        website: null,
        facebook: null,
        slug: 'leamington-lodge',
        officialVisit: 'March 19, 2024 at 7:30 pm',
      },
      {
        name: 'Xenophon 448',
        image: '/images/lodges/leamington.png',
        mainImage: '/images/lodges/leamingtonMain.jpeg',
        ctaImage: '/images/logos/logo.png',
        historyParagraph1: '',
        meeting: 'Third Thursday at 8:00 PM except for July and August',
        installation: 'December 21, 2023 at 7:30 pm',
        website: null,
        facebook: null,
        slug: 'xenophon',
        officialVisit: 'March 21, 2024 at 7:30 pm',
      },
    ],
  },
  {
    location: 'Pelee Island',
    image: '/images/lodges/peleeLodgeBuilding.jpeg',
    address: '84 East-West Road',
    parking:
      'on site. If you bring your car, reserve ferry space at least one month in advance.',

    lodges: [
      {
        name: 'Pelee 627',
        image: '/images/lodges/peleeMain.jpeg',
        mainImage: '/images/lodges/peleeMain.jpeg',
        ctaImage: '/images/logos/logo.png',
        historyParagraph1: '',
        meeting:
          'Second Saturday at Noon in May, June, July, August, September.',
        installation: 'September 9, 2023 at 12:00 noon',
        website: null,
        facebook: null,
        slug: 'pelee-lodge',
        officialVisit: 'September 9, 2023 at 12:00 noon',
      },
    ],
  },
  {
    location: 'Tilbury',
    image: '/images/lodges/tilbury.png',
    address: '28 Queen Street North',
    parking: 'on street',

    lodges: [
      {
        name: 'Naphtali 413',
        image: '/images/lodges/tilbury.png',
        mainImage: '/images/lodges/naphtaliMain.jpeg',
        ctaImage: '/images/logos/logo.png',
        historyParagraph1: '',
        meeting:
          'Meeting Second Tuesday of the Month Except July & August 7:30 pm',
        installation: 'December 12, 2023 at 7:30 pm',
        website: null,
        facebook: null,
        slug: 'naphtali-lodge',
        officialVisit: 'March 12, 2024 at 7:30 pm',
      },
    ],
  },
  {
    location: 'Windsor',
    image: '/images/lodges/windsormasonictemple.webp',
    address: 'Windsor Masonic Temple, 986 Ouellette Avenue',
    parking: 'on site at rear, enter from Dufferin Place',

    lodges: [
      {
        name: 'Great Western 47',
        mainImage: '/images/lodges/greatWesternMain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',

        ctaImage: '/images/lodges/greatwesterncta.jpeg',
        historyParagraph1:
          'A close examination of our Charter will revile two numbers in the lower left corner of this most valuable and important document. The number 23 appears and is crossed out and number 47 is in its place. Why?',
        historyParagraph2:
          'This goes back to the forming of Grand  Lodge in 1855. At the time, there were 39 regular and warranted lodge in Ontario under the Grand Lodge of Canada. These lodges were assigned a number based on the date of their formation. Great Western was assigned number 23.',
        historyParagraph3:
          'There was the time two Grand Lodges operating in Ontario. The Provincial Grand Lodge and the Grand Lodge of Canada. The Provincial Grand Lodge was warranted by the Grand Lodge of England. The Grand Lodge of Canada was independent and functioned on its own. The Provincial Grand Lodge was losing influence. Lodges under its jurisdiction were drifting away. Added to that, the Grand Lodge of England, as had been its usual practice for whatever reason, failed to return correspondence, or provide direction to the Provincial Grand Lodge. Their situation was becoming desperate.',
        historyParagraph4:
          'In an attempt to motivate the Grand Lodge of England, a committee was formed to draft a letter to reiterate the problems facing them. They mentioned the neglect and indifference on the part of the Grand Lodge of England to all the Canadian lodges. It was also mentioned that the Grand Lodge of Canada were much more accommodating and welcoming of the Provincial Grand Lodge. As they drafted their correspondence, it became apparent to them that Most Worshipful Master Wilson and the Grand Lodge of Canada were not the evil transgressors they been led to believe.',
        historyParagraph5:
          'They petitioned the Grand Master of the Grand Lodge of England to grant them independence. He replied to their points of concern, but they fell short of the desires of the Provincial Grand Lodge. It was felt, as relayed to the English Grand Master that his reply was not to their agreement and that there would scarily be a lodge in Ontario which would be loyal to the Grand Lodge of England. The time had passed, and they were not in any mood for the delays and ignorance of the Grand Lodge of England.',
        historyParagraph6:
          'At this time, Most Worshipful Master Wilson continued his friendly overtures to the Provincial Grand Lodge making his desire for unification of the two Grand Lodges well known. The Provincial Grand Lodge declared their independence and were recognized by many Grand Lodges, including the Grand Lodge of Canada, Grand Lodge of Ireland and many in the U.S.',
        historyParagraph7:
          'Most Worshipful Master Wilson still believed in unification and made that known during his address to the Provincial Grand Lodge meeting.',
        historyParagraph8:
          'M.W. Brother Wilson believed so strongly in unification of the Grand Lodges that he asked to “resign his gavel into the hands of the brethren to elect a successor in his stead” to carry on with the proposed union. The brethren felt that M.W. Brother Wilson was the best man to pilot the unification that they reelected him as Grand Master.  On the 14th of July 1858, at a meeting held in King Solomon’s Lodge in Toronto, the resolution passed unanimously. The merger of the Provincial Grand Lodge and the Grand Lodge of Canada had been concluded. Freemasons in Ontario were united under one banner.',
        historyParagraph9:
          'In 1859, the numbering of lodges was redone to include the lodges who were previously part of the Provincial Grand Lodge, again, according to their date of formation. Great Western was renumbered 47 and still stands today. Thistle Lodge #19 renumbered to 34 in 1859',
        meeting: 'First Thursday at 7:30 PM except for July and August',
        installation: 'December 7, 2023 at 7:30 pm ',
        website: null,
        facebook: 'https://www.facebook.com/groups/903499033080573',
        slug: 'great-western',
        officialVisit: 'Thursday June 6, 2024 at 7:30 pm,',
      },
      {
        name: 'Windsor Lodge 403',
        mainImage: '/images/lodges/windsormain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        historyParagraph1:
          'In the year 1882, several of the Masonic Brethren in Windsor conceived the idea of forming another lodge in this locality and in consequence, petitioned Great Western Lodge, which was the only lodge in Windsor at that time for permission to do so.',
        historyParagraph2:
          "Heading this group of Masons was our Late Brother George E. Copeland, founder of Copeland's Book Store, which still carries his name. Great Western Lodge granted permission and this was forwarded to Grand Lodge for approval. On July 13, 1883, at their annual convocation of the Grand lodge of Canada, a motion was passed to authorize the organizing under dispensation of Windsor Lodge. The following year at the next annual convocation of July 9th, 1884, the charter was granted.",
        historyParagraph3:
          'Windsor Lodge No. 403 was instituted and dedicated on August 13, 1884.',
        ctaImage: '/images/lodges/windsorCta.png',
        meeting:
          'First Friday at 7:30 PM except for July and August. If first Friday begins a holiday weekend, the meeting is held on the second Friday',
        installation: 'January 19, 2024 at 7:30 pm',
        website: 'https://www.windsorlodge403.com',
        facebook: 'https://www.facebook.com/groups/944181565592364/',
        slug: 'windsor-lodge',
        officialVisit: 'February 2, 2024 at 7:30 pm Blue Room',
      },
      {
        name: 'Rose Lodge 500',
        mainImage: '/images/lodges/roseLodgeMain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        historyParagraph1: '',
        ctaImage: '/images/logos/logo.png',
        meeting: 'Second Wednesday at 8:00 PM except for July and August',
        installation: 'December 13, 2023 at 7:30 pm Red Room',
        website: 'https://roselodge500.ca/',
        facebook: null,
        slug: 'rose-lodge',
        officialVisit: 'March 13, 2024 at 7:30 pm Red Room',
      },
      {
        name: 'Trinity Lodge 521',
        mainImage: '/images/lodges/trinityMain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        ctaImage: '/images/lodges/trinityCTA.jpeg',
        historyParagraph1:
          'Trinity Lodge was formed as a result of the amalgamation of three pre-existing lodges: Ontario Lodge No. 521 (chartered on July 15, 1914); Dominion Lodge No. 598; and Palace Lodge No. 604, both of which were chartered on July 19, 1922.  The brethren of these lodges, recognizing the challenges of economic upheaval, declining membership and changing social structures, sought to pool their resources to form one new lodge whose influence would exceed that of its three predecessors.',
        historyParagraph2:
          'They chose the name “Trinity” and the lodge symbol – the triquetra, or three-cornered Celtic knot,nested within an intertwined triangle and circle – to reflect the union of three equal, yet distinct, traditions, under the headship of the Divine Creator, and dedicated to the eternal Masonic principles of Brotherly Love, Relief and Truth. Since the lodges were amalgamating under the charter of the oldest of the three (Ontario Lodge), that lodge’s number was the one that would henceforth designate Trinity Lodge on the Register of Grand Lodge.',
        historyParagraph3:
          'Under the guidance of R.W. Bro. Leslie F. Armstrong, the lodges agreed to the terms of the amalgamation, which subsequently received the approval of Grand Lodge. On Monday, November 2, 2009, the Ceremony of Amalgamation took place in the Blue Room of the Windsor Masonic Temple, presided over by M.W. Bro. Raymond S.J. Daniels, Grand Master of the Grand Lodge A.F. & A.M. of Canada in the Province of Ontario, followed by the Ceremony of Installation and Investiture of Officers of the newly-formed lodge.',
        historyParagraph4:
          'Today Trinity Lodge No. 521 is a large lodge within the Essex County District. As a separate entity, it is still in its infancy. The process of merging traditions, while at the same time carving out a distinctly new identity, is an ongoing one, but the brethren remain undiminished in their fervor and look forward to many years to come.',
        meeting:
          'First Monday at 7:30 PM except for July and August. If the meeting falls on a holiday Monday, it is moved to Wednesday.',
        installation: 'Saturday May 25, 2024 at 2:00 pm',
        website: null,
        facebook: 'https://www.facebook.com/trinitylodge521',
        slug: 'trinity-lodge',
        officialVisit: 'March 4, 2024 at 7:30 pm Blue Room',
      },
      {
        name: 'Border Cities 554',
        mainImage: '/images/logos/logo.png',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        ctaImage: '/images/logos/blackLogo.png',
        historyParagraph1: '',
        meeting:
          'First Wednesday of February, April, May, October and December at 11:00 AM',
        installation: 'October 4, 2023 at 11:00 am',
        website: null,
        facebook: null,
        slug: 'border-cities',
        officialVisit: 'April 3, 2023 at 11:00 am',
      },
      {
        name: 'Harmony Lodge 579',
        mainImage: '/images/lodges/harmonyMain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        ctaImage: '/images/logos/logo.png',
        historyParagraph1: '',
        meeting: 'First Thursday at 7:30 PM except for July and August',
        installation: 'Saturday December 2, 2022 at 2 pm',
        website: null,
        facebook: null,
        slug: 'harmony',
        officialVisit: 'May 2, 2024 at 7:30 pm ',
      },
      {
        name: "St Andrew's 642",
        mainImage: '/images/lodges/stAndrewsMain.jpeg',
        secondImage: '',
        thirdImage: '',
        fourthImage: '',
        ctaImage: '/images/logos/logo.png',
        historyParagraph1: '',
        meeting: 'Second Friday at 7:30 PM except for July and August',
        installation: 'Friday December 8, 2023 at 7:30 pm',
        website: null,
        facebook: null,
        slug: 'st-andrews',
        officialVisit: 'Friday January 12, 2024 at 7:30 pm',
      },
    ],
  },
];

export const upcomingEvents = [
  {
    name: 'Thistle Lodge Cornhole League',
    imageUrl: '/images/events/cornhole.png',
    description: 'Thistle Lodge 2024 Cornhole League.',
    date: 'Starting January 8th, 2024',
    location: '68 MURRAY ST. AMHERSTBURG',
  },

  {
    name: "St. Patty's 2024",
    imageUrl: '/images/events/StPattysFlyer.jpg',
    description:
      "Parvaim-Central and Order of the Eastern Star Chapter No. 19 St. Patty's Day Irish Diner",
    date: 'Saturday March 16th, 2024,',
    location: 'Essex Masonic Temple 30 Laird Ave Essex On',
  },
  {
    name: "London's Day of Masonry: A Legacy of Excellence",
    imageUrl: '/images/events/dayofmasonry.pdf',
    description:
      'Keynote Speaker : 3:00PM Deputy Grand Master: R.W. Bro. Jamie Ireland',
    date: 'Saturday April 6th, 2024,',
    location: 'London Masonic Centre 453 Dufferin Ave, London, Ontario,',
  },
  {
    name: 'Chili Cook Off – 2nd Annual Fort Malden Chapter - Order of the Eastern Star',
    imageUrl: '/images/events/Chilli.pdf',
    description:
      'Fort Malden Chapter - Order of the Eastern Star Invites you to a Chili Cook off ',
    date: 'Saturday, April 20, 2024    ,',
    location: '68 Murray Street, Amherstburg, Ontario,',
  },
  {
    name: 'Leaminton No. 290 & Xenophon No. 448 Amalgamation',
    imageUrl: '/images/events/amalgamationflyer.pdf',
    description:
      'Brothers all are welcome to attend this glorious evening where two lodges reunite as one. ',
    date: 'Tuesday April 16th, 2024',
    location: 'Leamington Masonic Lodge Hall 3 John St. Leamington Ont.',
  },
  {
    name: 'Leaminton No. 290 & Xenophon No. 448 Amalgamation Banquet',
    imageUrl: '/images/events/amalgamationNotice.pdf',
    description:
      'Brothers all are welcome to attend this glorious evening where two lodges reunite as one. ',
    date: 'Tuesday April 16th, 2024',
    location: 'Leamington Masonic Lodge Hall 3 John St. Leamington Ont.',
  },
  {
    name: 'ESSEX COUNTY DISTRICT ANNUAL FISH FRY',
    imageUrl: '/images/events/fishfry.pdf',
    description:
      'Sponsor Lodges Border Cities 554 - Great Western 47 Come Enjoy the Great Food and Friendship. ',
    date: 'Saturday, June 1, 2024',
    location: 'Essex Masonic Temple Hall 30 Laird Street Essex, ON',
  },
];

export const trestleBoard = [
  {
    lodge: 'Thistle 34',
    installation: 'Tuesday December 27, 2023 at 8:00pm',
    officialVisit: 'Tuesday May 7, 2024 at 8:00pm',
  },
  {
    lodge: 'St. Georges 41',
    installation: 'Thursday January 4, 2024 at 7:30pm',
    officialVisit: 'Thursday April 4, 2024 at 7:30pm',
  },
  {
    lodge: 'Great Western 47',
    installation: 'Thursday December 7, 2023 at 7:30pm',
    officialVisit: 'Thursday June 6th at 7:30pm',
  },
  {
    lodge: 'Leamington 290',
    installation: 'Tuesday June 18, 2024 at 7:30pm',
    officialVisit: 'Tuesday March 19, 2024 at 7:30pm',
  },
  {
    lodge: 'Parvaim-Central 395',
    installation: 'Wednesday June 5, 2024 at 7:30 pm',
    officialVisit: 'Wednesday December 6, 2023 at 7:30 pm',
  },
  {
    lodge: 'Windsor 403',
    installation: 'Friday January 19, 2024 at 7:30pm',
    officialVisit: 'Friday February 2, 2024 at 7:30pm',
  },
  {
    lodge: 'Naphtali 413',
    installation: 'Tuesday December 12, 2023 at 7:30pm',
    officialVisit: 'Tuesday March 12, 2024 at 7:30pm',
  },
  {
    lodge: 'Xenophon 448',
    installation: 'Thursday December 21, 2023 at 8:00pm',
    officialVisit: 'Thursday March 21, 2023 at 8:00pm',
  },
  {
    lodge: 'Rose 500',
    installation: 'Wednesday Dec 13, 2023 at 7:30pm',
    officialVisit: 'Wednesday March 13, 2024 at 7:30pm',
  },
  {
    lodge: 'Trinity 521',
    installation: 'Monday May 25, 2024 at 2pm',
    officialVisit: 'Monday March 4, 2024 at 7:30pm',
  },
  {
    lodge: 'Border Cities 554',
    installation: 'Wednesday October 4, 2023 at 11am',
    officialVisit: 'Wednesday April 3, 2024 at 11am',
  },
  {
    lodge: 'Harmony 579',
    installation: 'Thursday December 2, 2023 at 2pm',
    officialVisit: 'Thursday May 2, 2024 at 7:30pm',
  },
  {
    lodge: 'Pelee 627',
    installation: 'Saturday September 9, 2023 at 12pm',
    officialVisit: 'Saturday September 9, 2023 at 12pm',
  },
  {
    lodge: "St. Andrew's 642",
    installation: 'Friday December 8, 2023 at 7:00pm',
    officialVisit: 'Friday January 12, 2024 at 7:30pm',
  },
];
