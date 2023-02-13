import type { NextPage } from "next";
import Head from "next/head";
import MainNav from "@/components/nav/MainNav";

const Home: NextPage = () => {
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
        <MainNav lightMode={true} />
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black bg-opacity-10 z-20 flex flex-col justify-center items-center text-white">
              <h2 className="absolute top-32">14 . 07 . 2023</h2>
              <h1 className="text-8xl md:text-9xl text-center mb-4">
                Tom & Claudia
              </h1>
              <h2 className="font-thin mb-4">It&apos;s finally happening!</h2>
              <p className="font-thin italic">
                At{" "}
                <a
                  href="https://quintadapacheca.com/"
                  className="text-secondaryDark cursor-pointer hover:text-primaryDark"
                  target="_blank"
                  rel="noreferrer"
                >
                  Quinta da Pacheca
                </a>
              </p>
            </div>
            {/* <img
              src="/douro_valley.png"
              alt="Douro valley landscape"
              className="h-full w-full"
            /> */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/douro_valley.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
              }}
            ></div>
          </div>
          <h1 className="text-blue bg-blue">This is a test</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
