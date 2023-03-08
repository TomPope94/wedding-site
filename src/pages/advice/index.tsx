import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import MainNav from "@/components/nav/MainNav";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const Porto: NextPage = () => {
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
        <MainNav lightMode={true}/>
        <div className="absolute left-0 right-0 h-screen min-w-[100vw] pt-16 sm:pt-32 px-4 sm:px-16 md:px-32 xl:px-64 text-black bg-white">
            <div
              className="absolute inset-0"
              style={{
                zIndex: 0,
                backgroundAttachment: "fixed",
                backgroundImage: "url(https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/porto_view_from_river.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
            ></div>
          <div 
            style = {{
              position: "absolute",
              top: '86vh',
              left: 0,
              right: 0,
              zIndex: 10,
              width: 0,
              height: 0,
              borderBottom: "15vh solid #fff",
              borderLeft: "100vw solid transparent",
            }}
          />
          <div className="top-[100vh] left-0 pt-8 absolute z-10 flex flex-col items-center w-full" >
            <h2 className="my-4">Want to see more of Portugal?</h2>
            <div className="w-1/2 h-px bg-primaryDark my-4" />
            <h1 className="my-4 text-primaryDark text-3xl">Click a location for details...</h1>
            <div className="mt-4 mb-16 flex flex-wrap justify-center">
              <Link href="/advice/porto">
                <div className="relative cursor-pointer hover:scale-105 transition duration-200 shadow bg-white rounded px-8 py-16 mx-4 my-4 max-w-[90vw] md:max-w-[400px] flex flex-col items-center">
                  <div className="absolute top-2 right-2 text-greyStandard">
                    <OpenInFullIcon />
                  </div>
                  <h1 className="text-5xl text-primaryDark">Porto</h1>
                  <div className="w-1/2 h-px bg-primaryDark my-8" />
                  <p className="text-lg text-greyStandard text-center">
                    The second largest city in Portugal boasting plenty to do and a coastal beach.
                    <br />
                    <br />
                    We recommend staying here the night before the wedding with transport to the venue provided!
                  </p>
                </div>
              </Link>
              <Link href="/advice/north">
                <div className="relative shadow cursor-pointer hover:scale-105 transition duration-200 bg-white rounded px-8 py-16 mx-4 my-4 max-w-[90vw] md:max-w-[400px] flex flex-col items-center">
                  <div className="absolute top-2 right-2 text-greyStandard">
                    <OpenInFullIcon />
                  </div>
                  <h1 className="text-5xl text-primaryDark">O Norte</h1>
                  <div className="w-1/2 h-px bg-primaryDark my-8" />
                  <p className="text-lg text-greyStandard text-center">
                    Minimal travel from Porto for some often missed sights from the north of Portugal.
                    <br />
                    <br />
                    Good wine, good beaches and lots of history.
                  </p>
                </div>
              </Link>
              <Link href="/advice/beyond">
                <div className="relative shadow cursor-pointer hover:scale-105 transition duration-200 bg-white rounded px-8 py-16 mx-4 my-4 max-w-[90vw] md:max-w-[400px] flex flex-col items-center">
                  <div className="absolute top-2 right-2 text-greyStandard">
                    <OpenInFullIcon />
                  </div>
                  <h1 className="text-5xl text-primaryDark text-center">Beyond the North</h1>
                  <div className="w-1/2 h-px bg-primaryDark my-8" />
                  <p className="text-lg text-greyStandard text-center">
                    Of course, there are plenty of things to do and places to see when venturing to other regions in Portugal.
                    <br />
                    <br />
                    These are some of the more popular places to visit in the more southern parts of the country.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Porto;
