import Head from "next/head";
import MainNav from "@/components/nav/MainNav";
import Link from "next/link";

const Porto = () => {
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
        <div className="absolute inset-0 pt-32 px-4 sm:px-16 md:px-32 xl:px-64">
          <h1 className="mb-4">Need advice on staying in Porto?</h1>
          <p className="mb-4">
            Here we will start to highlight advice on where to stay, good
            hotels, things to do etc.
          </p>
          <p className="mb-4">
            Please note: if you&apos;re travelling from the UK, you will have a
            room at the venue for the wedding night at a discounted fee (more
            details will come)
          </p>
          <p>
            Also, the venue is c.1hr drive from Porto but travel from centre of
            Porto (a coach) will be provided. We will provide full details and
            map on where to go{" "}
            <span className="text-primaryDark">
              <Link href="/info">here.</Link>
            </span>
          </p>
        </div>
      </main>
    </>
  );
};

export default Porto;
