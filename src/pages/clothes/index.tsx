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
          <h1 className="mb-4">Need advice on what to wear?</h1>
          <p className="mb-4">
            We&apos;ll put details to help people choose what to wear for the
            wedding here. We thought it&apos;d be helpful for guests to know
            colour themes and what colours the bridesmaids will be wearing etc
            along with advice on temperatures (as we will be in Portugal in the
            height of summer)
          </p>
        </div>
      </main>
    </>
  );
};

export default DressAdvice;
