import Head from "next/head";
import MainNav from "@/components/nav/MainNav";
import AdventureCard from "@/components/AdventureCard";

const Menu = () => {
  const adventures = [
    {
      location: "Reindeer Farm",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/reindeer_farm.jpeg",
      reference: "rudolph",
      progress: 10
    },
    {
      location: "3km Sleigh Ride",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/sleigh_ride.jpeg",
      reference: "santa",
      progress: 0
    },
    {
      location: "Aurora Campfire",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/aurora_campfire.jpeg",
      reference: "fire",
      progress: 10
    },
    {
      location: "15km Husky Safari",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/husky_safari.jpeg",
      reference: "husky",
      progress: 25
    },
    {
      location: "Cross-country Skiing",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/skiing.jpeg",
      reference: "skiing",
      progress: 0
    },
    {
      location: "Local Food Experience",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/finland_food.jpeg",
      reference: "food",
      progress: 15
    },
    {
      location: "Aurora Snow Train",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/snowtrain.jpeg",
      reference: "train",
      progress: 30
    },
    {
      location: "Snowmobile Safari",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/snowmobile.jpeg",
      reference: "snowmobile",
      progress: 45
    },
    {
      location: "Snowshoe Hike",
      description: [
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/snowshoe.avif",
      reference: "hike",
      progress: 50
    },
  ]


  return (
    <>
      <Head>
        <title>Tom and Claudia</title>
        <meta
          name="description"
          content="A website for all things our wedding!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/vus3iyy.css"
        ></link>
      </Head>

      <MainNav lightMode={false} overrideColorChange={true} />
      <div className="absolute inset-0 pt-16 sm:pt-32 px-4 sm:px-16 md:px-32 xl:px-64 text-black bg-white">
        <h1 className="mb-4">Wedding Gifts</h1>
        <p className="mb-4">
          We&apos;ve been together for a long time and have everything we need. We&apos;
          re not expecting any gifts but if you would like to give us something, we&apos;
          d love to have a donation towards a variety of activities on our honeymoon. 
          We&apos;re going to be going to see the northern lights in Finland which involves
          lots of possible adventures.
        </p>
        <p className="mb-4">
          Take a look at the different adventures below to see which one you&apos;d like to
          contribute to. We&apos;ll be updating this page with the total amount contributed 
          to each activity.
        </p>
        <p className="mb-4">
          Please send the money to:
        </p>
        <p className="w-full text-center mb-4">
            Sort code: 04-00-04 
            <br />
            Account number: 89382756
            <br />
        </p>
        <p className="mb-4">
          Use the reference under the adventure along with your name to let us know which one 
          you&apos;ve donated to.
        </p>
        <div className="flex flex-wrap justify-evenly">
          {
            adventures.map((info) => (
              <AdventureCard 
                key={info.location} 
                location={info.location} 
                description={info.description} 
                reverse={info.reverse} 
                image={info.image} 
                progress={info.progress} 
                reference={info.reference}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Menu;
