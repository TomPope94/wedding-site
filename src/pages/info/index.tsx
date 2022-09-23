import Head from "next/head";
import MainNav from "@/components/nav/MainNav";

const Info = () => {
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
          <h1 className="mb-4">Info for the wedding day</h1>
          <p className="mb-4">
            As details become more clear, we will fill out an agenda here
            including things like when the coach from Porto leaves for the
            venue, the ceremony starts etc.
          </p>
        </div>
      </main>
    </>
  );
};

export default Info;
