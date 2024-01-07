import Image from "next/image";

const Staff = () => (
  <div>
    <h3 className="lg:mb-12 mb-8 text-3xl flex justify-center">
      Eric Lindgren
    </h3>
    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-12 lg:mb-28 mb-20">
      <Image
        src="/eric_bio_small.jpg"
        alt="A photo of Eric Lindgren"
        width={400}
        height={400}
        className="rounded-2xl object-contain lg:h-[400px]"
      />
      <div className="gap-8 flex flex-col">
        <p>
          In 2005 Eric took his first Tango class and fell in love immediately.
          A month later he had moved to Buenos Aires to pursue the dance full
          time.
        </p>
        <p>
          In the years since, he has continued to explore the many unique
          avenues of style, technique, and self-expression that Argentine Tango
          offers. Eric has taught, toured, dj-ed, and performed throughout the
          US and Europe and Argentina.
        </p>
        <p>
          Eric is exceptional both for his endless willingness to refine and
          reinvent his dance as well for as for the unusual breadth of his
          knowledge and experience. In classes, Eric focuses on pursuing ease,
          presence, expression, and pleasure, as the most rewarding and direct ways
          to explore the dance.
        </p>
      </div>
    </div>
    <h3 className="lg:mb-12 mb-8 text-3xl w-full flex justify-center">
      Mary Salyards
    </h3>
    <div className="flex flex-col-reverse items-center lg:flex-row lg:items-start gap-12 lg:mb-28">
      <div className="gap-8 flex flex-col">
        <p>
          Mary has been dancing her entire life. Her childhood was sprinkled
          with ballet, tap, and hip hop classes and she has studied and taught
          Zumba extensively.
        </p>
        <p>
          Mary first encountered Tango early in 2022 and quickly found it was a
          dance she could not live without. Tango is full of compassion and
          conversation. The musicality and improvisation of Tango allow each
          dance to feel new and exciting. But her favorite part is experiencing
          each sweet embrace and connection from different dance partners.
        </p>
        <p>
          Mary delights in teaching this beautiful dance and helping to expand
          the Tucson Tango community!
        </p>
      </div>
      <Image
        src="/mary_bio_small.jpg"
        width={400}
        height={400}
        alt="A photo of Mary Salyards"
        className="rounded-2xl object-contain lg:h-[400px]"
      />
    </div>
  </div>
);

export default Staff;
