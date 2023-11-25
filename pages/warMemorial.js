import Image from 'next/image';
import { photoFadeIn, slideLeft, titleReveal } from '../animations/animations';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
const WarMemorialPage = () => {
  return (
    <Layout title="Malden Park War Memorial">
      <div className="space-y-10 px-4 md:px-8 lg:px-16 mb-8">
        <motion.h4
          variants={titleReveal}
          className="uppercase tracking-[20px] text-main1 text-lg md:text-2xl text-center mb-6 mt-20"
        >
          Malden Park War Memorial
        </motion.h4>
        <motion.div
          variants={slideLeft}
          className="space-y-10  md:px-10 my-6 flex-1"
        >
          <p className="leading-4 text-sm lg:text-lg">
            The Masonic War Memorial in Malden Park is a solemn testament, clad
            in a profound black hue and resting gracefully on the ground, while
            trees elegantly cast shadows upon the names of the fallen. This
            poignant imagery serves as a symbolic representation of the profound
            darkness that encompasses the reality of war.
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            Having the privilege to serve in defense of our Canadian values of
            democracy held great significance for many of our patriotic
            individuals, who willingly sacrificed a part of their individuality
            to become a vital component of something larger than themselves.
          </p>
          <motion.div
            variants={photoFadeIn}
            className="flex items-center justify-center "
          >
            <Image
              src="/images/warMemorial/warMemorial1.jpeg"
              alt="Granite Monument"
              width="400"
              height="500"
              className="shadow-shadow1"
            />
          </motion.div>
          <p className="leading-4 text-sm lg:text-lg">
            Jessop, Pike, and Smith; Parliament, Daniels, and Brocklebank;
            Sanders, Miller, and Fleming; Shepley, Thornton, and Hayhurst stand
            among the honored 26 local Freemasons whose names are etched with
            reverence on the Masonic War Memorial, situated in Windsor's Malden
            Park at 4200 Malden Road.
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            Crafted from granite, the monument and memorial walkway bear the
            meticulous design of Windsor Freemason Historian Deacon Gene Lotz
            and were expertly fashioned by Excelsior Monuments. Lotz, with a
            lifelong dedication, has pursued the noble ambition of honoring the
            memory of those individuals who never hesitated to embody the
            principle of "doing the right thing."
          </p>
          <motion.div
            variants={photoFadeIn}
            className="flex items-center justify-center "
          >
            <Image
              src="/images/warMemorial/warMemorial3.jpeg"
              alt="Granite Monument"
              width="800"
              height="500"
              className="shadow-shadow1"
            />
          </motion.div>
          <p className="leading-4 text-sm lg:text-lg">
            "In commemorating the millennium, the Fraternity in Essex County
            united in the building of the Masonic War Memorial at a cost of
            $85,000", Lotz explains. "This tribute serves to remember local
            Freemason Veterans who made the ultimate sacrifice defending
            Canada".
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            For the last two decades, Lotz has been “leaning into it” for his
            latest book entitled “The Anguish of War.”
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            It illuminates the lives of those who "filled the ranks" —
            individuals who resided in our neighborhoods, attended our local
            schools, held public office, worked in offices, shops, and
            factories, and toiled on family farms throughout Essex County. Each
            page within this commemorative work encapsulates the indelible marks
            and challenges of war, whether fought on the battlefield, in
            hospitals, or within the very homes they cherished.
          </p>
          <motion.div
            variants={photoFadeIn}
            className="flex items-center justify-center "
          >
            <Image
              src="/images/warMemorial/warMemorial2.jpeg"
              alt="Granite Monument"
              width="600"
              height="500"
              className="shadow-shadow1"
            />
          </motion.div>
          <p className="leading-4 text-sm lg:text-lg">
            “My book is meant to put a face to the lives of area Veterans who
            were killed in action or who died as a result of injuries sustained
            in battle,” says Lotz. “I am doing this because I feel that I am
            bringing these young guys back home.”
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            While many who ventured "over there" grappled with the anguish of
            war, families on the home front were equally hard-pressed to summon
            the strength needed to navigate the bitter realities of the
            conflict.
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            Lotz's book poignantly encapsulates a remarkable instance that
            reflects the resilience of the human spirit.
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            Bernadette Rivait, a Windsor mother, faced the heart-wrenching
            reality of having five sons enlist with the Essex Scottish during
            World War II. Tragically, two of her sons made the ultimate
            sacrifice at Dieppe on August 19, 1942, and another fell in Holland
            on November 23, 1944. Despite these profound losses, two of her
            remaining sons also valiantly served in World War II. The Rivait
            family's sacrifice stands as a poignant testament to the deep and
            widespread impact of the war on individual families.
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            Veterans Affairs Canada bestowed upon Rivait three Memorial Crosses
            in honor of her three sons' sacrifices. On November 11, 1964,
            Rivait, carrying the weight of not only her personal loss but also
            the collective grief for all those who never returned home,
            presented a wreath at Ottawa's National War Memorial. Her solemn act
            symbolized the enduring pain felt by families who endured the
            profound impact of war.
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            As we traverse through each generation, the essence of Remembrance
            instills a cherished legacy, paying homage to the virtues of
            service, courage, and loyalty.
          </p>
          <p className="leading-4 text-sm lg:text-lg">
            In getting to know the many Veterans who "rallied to the colours,"
            and in tribute to their unwavering valor and profound sacrifices,
            each has rightfully earned a place of enduring distinction among the
            ages. Their glory will not fade! Serving as a civilian Veterans
            Advocate, Andrea Grimes received the Queen Elizabeth II Diamond
            Jubilee Medal and the Governor General's Medal in recognition of her
            dedicated volunteer service to Veterans and various non-profit
            organizations supporting Windsor's military families' network. Her
            commitment stands as a testament to the lasting impact and
            appreciation for those who have served.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};
export default WarMemorialPage;
