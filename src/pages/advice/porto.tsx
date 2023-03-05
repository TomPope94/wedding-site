import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MainNav from "@/components/nav/MainNav";
import {ArrowBack} from '@mui/icons-material';
import LocationInfo from "@/components/LocationInfo";

const PortoDetail: NextPage = () => {
  const infoDetails = [
    {
      location: "River Douro",
      description: [
        "Wine, beautiful valley views and a winding river going through the heart of the North.",
        "Also the location of our wedding… picked for a reason!"
      ],
      reverse: false,
      image: "/douro_river.jpeg"
    },
    {
      location: "Livraria Lello",
      description: [
        "A beautiful bookstore in the heart of Porto, with a stunning interior and a staircase that is a work of art in itself.",
        "This is an iconic bookshop with real Harry Potter vibes"
      ],
      reverse: true,
      image: "/livraria_lello.jpeg"
    },
    {
      location: "São Bento Station",
      description: [
        "São Bento Station is a UNESCO World Heritage Site and a National Monument of Portugal.",
        "Also a functioning railway station with great connections to other cities and towns in Portugal.", 
        "Worth a visit even if you do not plan to leave Porto; particularly if you love ‘azulejos’ as much as I do!"
      ],
      reverse: false,
      image: "/sao_bento_station.jpeg"
    },
    {
      location: "Luís I Bridge",
      description: [
        "If you don’t run into this bridge at some point during your trip, are you even exploring Porto?",
        "Only joking! It is hard to miss and spans the River Douro between the cities of Porto and Vila Nova de Gaia.",
        "At its construction, it was one of the longest of its type in the world. We would recommend walking across the top-deck of the bridge for mega views of the Douro river, Porto and Vila da Nova Gaia."
      ],
      reverse: true,
      image: "/ponte_luis_bridge.jpeg"
    },
    {
      location: "Ribeira Square",
      description: [
        "Very touristy and busy part of Porto by the river Douro and is a historical centre of the city with a designated World Heritage by UNESCO.",
        "There are several restaurants here but they are more likely to be expensive due to the river view.",
        "Make sure you look closely at the restaurants you pick if you are looking for authentic Portuguese food!"
      ],
      reverse: false,
      image: "/ribeira_square.jpeg"
    },
    {
      location: "Monastery of Serra do Pilar",
      description: [
        "It is right beside Luís I Bridge on the Vila de Nova Gaia side of the Douro river.",
        "It is a beautiful monastery with a stunning view of Porto and the Douro river. Again, another UNESCO world heritage site",
      ],
      reverse: true,
      image: "/monastery_serra_pilar.jpeg"
    },
    {
      location: "Crystal Palace Gardens",
      description: [
        "A really nice place for a stroll with carefully curated, elegant Victorian gardens and paths.",
        "On a clear day, there are beautiful views to digest and generally, a very tranquil place."
      ],
      reverse: false,
      image: "/crystal_palace_gardens.jpeg"
    },
    {
      location: "Churches, Cathedrals and Towers",
      description: [
        "I can’t list them all but there are so many beautiful buildings all over Porto including Porto Cathedral, Monument Church of St Francis, Igreja do Carmo, Bolsa Palace and Clerigos Church and Tower."
      ],
      reverse: true,
      image: "/porto_church.jpeg"
    },
    {
      location: "‘Miradouros’",
      description: [
        "If you see this on a map and you love a view or photography, we would recommend you visit them all!",
        "These are established viewpoints that show you the best the city has to offer."
      ],
      reverse: false,
      image: "/porto_view.jpeg"
    },
    {
      location: "Museums",
      description: [
        "I won’t list all of the museums but as you can imagine, there are plenty including the Portuguese Centre of Photography, the Tram Museum and for those who are FC Porto fans, there is an FC Porto Museum too."
      ],
      reverse: true,
      image: "/porto_henry_navigator.jpeg"
    },
    {
      location: "Beaches",
      description: [
        "We know what you are thinking… A city like Porto with beaches? Yes!",
        "They have beautiful sand beaches in Porto, perfect for a day of sunbathing and relaxing.",
        "About a 1-hour walk from the centre of Porto or several modes of transport to get there!"
      ],
      reverse: false,
      image: "/porto_beach.jpeg"
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
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                zIndex: 0,
                backgroundAttachment: "fixed",
                backgroundImage: "url(/porto_river_bg.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="absolute inset-0 flex justify-center z-[1]">
              <h1 className="text-[8rem] lg:text-[20rem] xl:text-[30rem] mt-56 lg:mt-48 text-pink">PORTO</h1>
            </div>
            <div
              className="absolute inset-0"
              style={{
                zIndex: 2,
                backgroundAttachment: "fixed",
                backgroundImage: "url(/porto_river_fg.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="absolute top-[100vh] xl:px-64">
            <Link href="/advice">
              <div className="m-4 xl:ml-64 flex text-primaryDark hover:text-white cursor-pointer">
                <ArrowBack />
                <h3>Back to advice</h3>
              </div>
            </Link>
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

export default PortoDetail;
