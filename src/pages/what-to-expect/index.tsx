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
        <div className="pt-16 sm:pt-32 pb-64 px-4 sm:px-16 md:px-32 xl:px-64 text-black bg-white">
          <h1 className="mb-4">Info for the wedding day</h1>
          <h2 className="mb-4">Clothes and Temperature</h2>
          <p className="mb-4">
            In July, we expect temperatures on average to be around the 30 degrees Celsius mark so please bear 
            that in mind when you are selecting your snazzy outfit for our wedding! We highly recommend light 
            and airy materials and of course, you can remove your suit jackets and roll up your sleeves if you get too 
            warm! The ceremony will be outdoors at 3PM so you will not be in the scorching sun (but please put 
            some sunscreen on just in case!) and you can seek refuge during cocktail hour in the wine cellar 
            where drinks and finger foods will be served. The main meal and the rest of the evening will take 
            place indoors with AC.
          </p>
          <p className="mb-4">
            In case you are interested, the colour scheme for our wedding is best described as ‘citrus summer’. Tones of orange, yellow, peaches and pink are to be expected amongst the greens of the vineyard. For those who are super worried, the bridesmaids are wearing a salmon/peach or a blush pink… we are still deciding!
          </p>
          <div className="mb-4 flex justify-evenly flex-wrap">
            <div className="rounded-full m-4 h-32 w-32 bg-[#ee5d6c]" />
            <div className="rounded-full m-4 h-32 w-32 bg-[#eeb7a2]" />
            <div className="rounded-full m-4 h-32 w-32 bg-[#d67c4a]" />
            <div className="rounded-full m-4 h-32 w-32 bg-[#e98f2f]" />
            <div className="rounded-full m-4 h-32 w-32 bg-[#e7e05c]" />
          </div>
          <h2 className="my-4">Getting to the venue</h2>
          <p className="mb-4">
            The ceremony will start at the vineyard around 3PM. If you are staying in Porto, we have hired a coach 
            to pick you up and take you to the venue. This will take approximately 1.5 hours and it is a pretty 
            scenic route so we hope you enjoy the ride! The groom, Tom, and his groomsmen will be there to welcome 
            you onto the coach and will be traveling with you. The location of the coach is to be confirmed but we 
            will update you in due course (we expect it to be close to the Sao Bento Station area).
          </p>
          <h2 className="my-4">Overnight stay at the venue</h2>
          <p className="mb-4">
            We have reserved rooms for all our UK guests (and some of our Portuguese guests) at the venue for the 
            night of our wedding. We have subsidised 90&euro; of the cost for the rooms and ask that you kindly pay the 
            remaining 90&euro; (c.&#163;80) for the night. You will be staying in a 4* hotel and breakfast is included. Please bring 
            your overnight bag with you on the coach on the day of our wedding. When you arrive at the venue, your 
            luggage will be taken off you and placed in a room until you are ready to checkin (anytime after 3PM). 
            Please let us know if this is an issue as there currently is no transport organised to take you back 
            to Porto the night of our wedding (the coach back will be following day).
          </p>
          <h2 className="my-4">General events of the day</h2>
          <p className="mb-4">
            After the venue staff have taken your overnight bags, you will be asked to take your seats in the vineyard garden where the ceremony will be taking place. Eventually, Claudia, her family and the bridesmaids will arrive (hopefully on time!) and the ceremony will begin. The Master of Ceremony, Monica, will deliver the ceremony in both English and Portuguese so that you all understand what is going on. 
          </p>
          <p className="mb-4">
            After the ceremony, there will be a cocktail hour in the wine cellar so help yourselves to drinks from the open bar and to any food that is available. Make sure you leave some space for the main meal as you will have a five course meal ahead of you!
          </p>
          <p className="mb-4">
            The sit down meal will happen around 5PM and will include the usual starter and dessert but you will have two main courses instead of one. In Portugal you have a fish dish and meat dish (with a palette cleanser in between) so make sure you leave some room! If you have any dietary requirements, please let us know via the survey we have sent out or reach out to us directly. 
          </p>
          <p className="mb-4">
            Once we are all happy and fed, the usual wedding shenanigans begin with music and dancing. We look forward to seeing you dance to both our Portuguese and British selection of songs! Food and drink at the open bar will be available throughout the evening and the day will end at 1AM. 
          </p>
          <h2 className="my-4">The next day</h2>
          <p className="mb-4">
            The following morning, after your breakfast and check out (XX AM), we will have a coach waiting for you at the venue to take your hanging selves back to Porto!
          </p>
        </div>
      </main>
    </>
  );
};

export default Info;
