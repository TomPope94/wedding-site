import Head from "next/head";
import MainNav from "@/components/nav/MainNav";

const Menu = () => {
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
          <h1 className="mb-4">Our menu</h1>
          <h4 className="mb-4">Including dietary advice</h4>
          <p className="mb-4">
            We will add the menu here (when it&apos;s agreed) and give guidance
            on dietary requirements (including advice on how to pace yourself
            through a Portuguese meal #lotsOfFood!)
          </p>
        </div>
      </main>
    </>
  );
};

export default Menu;
