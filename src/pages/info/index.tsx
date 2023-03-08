import Head from "next/head";
import MainNav from "@/components/nav/MainNav";

const DressAdvice = () => {
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
        <div className="absolute inset-0 pt-16 sm:pt-32 px-4 sm:px-16 md:px-32 xl:px-64 text-black bg-white">
          <h1 className="mb-4">A full itinery of the day</h1>
          <p className="mb-4">
            We&apos;ll put details the day here as we get closer to the day and details
            become more clear. Expect to see timings and location details for where to 
            get the coach (if you&apos;re staying in the Porto area).
          </p>
          <p className="mb-4">
            We&apos;ll send out an email (based on RSVP emails) once this page has been updated
            so keep an eye out for that!
          </p>
        </div>
      </main>
    </>
  );
};

export default DressAdvice;
