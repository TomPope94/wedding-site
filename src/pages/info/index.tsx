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
        <div className="absolute inset-0 pt-16 sm:pt-32 px-4 sm:px-16 md:px-32 xl:px-64 text-black bg-white">
          <h1 className="mb-4">Info for the wedding day</h1>
          <p className="mb-4">
            As we have more details, an agenda will be available here including
            things like when the coach from Porto leaves for the venue, the
            ceremony starts etc.
          </p>
          <p>
            If you&apos;re interested in seeing the venue: the name is Quinta da
            Pacheca, a wine vineyard in the Douro valley in Portugal.{" "}
            <a
              href="https://quintadapacheca.com/"
              className="hover:text-secondaryDark cursor-pointer text-primaryDark"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            for their website.
          </p>
        </div>
      </main>
    </>
  );
};

export default Info;
