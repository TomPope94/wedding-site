import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MainNav from "@/components/nav/MainNav";
import {ArrowBack} from '@mui/icons-material';
import LocationInfo from "@/components/LocationInfo";

const North: NextPage = () => {
  const infoDetails = [
    {
      location: "Douro Valley - Lamego, Peso da Régua",
      description: [
        "We highly recommend you do a wine tour if you can! In fact, this is the reason we are getting married in the Douro Valley.",
        "In 2020, a mini-van picked us up from Porto and we were driven around the Douro Valley, stopping at three vineyards, tasting olive oil, cheeses, and of course Port!",
        "We also went on a short boat trip in the Douro and were able to enjoy an amazing three-course lunch with amazing views."
      ],
      reverse: false,
      image: "/douro_wine.jpeg"
    },
    {
      location: "Vila do Conde",
      description: [
        "This is a small sea side town with beaches. Very quiet and quaint but a lovely place to enjoy the sun. It is under an hour away from Porto via the metro/trains."
      ],
      reverse: true,
      image: "/vila_do_conde.jpeg"
    },
    {
      location: "Braga and Guimarães",
      description: [
        "Braga and ‘gummy bears’ (Guimarães, according to Tom’s pronunciation) is a doable day trip away from Porto.  Guimarães is considered to be the birth place of Portugal and has a castle and palace. As you can imagine, lots of history here! Braga is the third largest city of Portugal but it is not crowded as Lisbon and Porto. Lots of fine monuments and a very chill vibe!"
      ],
      reverse: false,
      image: "/guimaraes.jpeg"
    },
    {
      location: "Coimbra",
      description: [
        "Coimbra is Portugal’s former capital and home to a preserved medieval old town and a historic university. In summary: Portugal’s Oxford. Again, a day trip from Porto is feasible!"
      ],
      reverse: true,
      image: "/coimbra.webp"
    },
    {
      location: "Aveiro",
      description: [
        "A west coast city, also described as the Venice of Portugal. As we have been to both, and to manage your expectations, it is not quite the same! The common factor between the two are the canals and colourful canal boats! Another day-trip from Porto if you are up for it!"
      ],
      reverse: false,
      image: "/aveiro.jpeg"
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

      <main>
        <MainNav lightMode={false} overrideColorChange={true} />
        <div className="absolute inset-0 text-primaryDark">
          <div
            className="h-1/2"
            style={{
              zIndex: 0,
              backgroundAttachment: "fixed",
              backgroundImage: "url(/porto_river_title.png)",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
              backgroundSize: "cover",
            }}
          />
          <Link href="/advice">
            <div className="m-4 xl:ml-64 flex text-primaryDark hover:text-white cursor-pointer">
              <ArrowBack />
              <h3>Back to advice</h3>
            </div>
          </Link>
          <div className="xl:px-64">
            {
              infoDetails.map((info) => (
                <LocationInfo key={info.location} location={info.location} description={info.description} reverse={info.reverse} image={info.image} />
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default North;
