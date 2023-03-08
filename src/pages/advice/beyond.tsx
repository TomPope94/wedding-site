import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MainNav from "@/components/nav/MainNav";
import {ArrowBack} from '@mui/icons-material';
import LocationInfo from "@/components/LocationInfo";

const Beyond: NextPage = () => {
  const infoDetails = [
    {
      location: "Lisbon",
      description: [
        "The capital of Portugal and one of our favourite cities to visit!",
        "If you are staying for more than a few days, then get the train from Porto to Lisbon! It takes 3.5-4 hours and I promise you won’t be disappointed!",
        "If staying in Lisbon for a substantial amount of time, we would recommend a day trip to Sintra or Cascais!"
      ],
      reverse: false,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/lisbon.jpeg"
    },
    {
      location: "Algarve",
      description: [
        "This is a mighty treck from Porto! You are almost crossing the whole country but if this is part of your plan, we would recommend a thorough travel plan with lots of stops!", 
        "As many of you know, the Algarve has all the beaches and is a very popular and touristy area. We have never visited but just to manage your expectations, it is far from Porto!"
      ],
      reverse: true,
      image: "https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/algarve.webp"
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
            className="h-[95vh]"
            style={{
              zIndex: 0,
              backgroundAttachment: "fixed",
              backgroundImage: "url(https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/lisbon_tram.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
              backgroundPositionX: "center",
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

export default Beyond;
