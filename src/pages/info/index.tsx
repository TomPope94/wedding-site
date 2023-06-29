import Head from "next/head";
import Image from "next/image";
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
          <img className="100vw lg:1/2" alt="wedding day itinery" src="https://tomandclaudiaweddingassets.s3.eu-west-1.amazonaws.com/Ceremony+itinerary-02.png" />

          <p className="mt-4 mb-4">
            With the day fast approaching we now have a clear view on what will be happening and when.
          </p>
          <h2 className="mb-4">Travel to the venue</h2>
          <p className="mb-4">
            We have arranged for a coach to pick up guests from Porto and take them to the venue in the Douro valley. It is booked to leave at 1pm from Porto&apos;s football stadium outside the entrance to the Metro station (Estadio do Dragao):
          </p>
          <ul className="mt-4">
            <li>
              Estádio do Dragão 
            </li>
            <li>
              Via Futebol Clube do Porto 
            </li>
            <li>
              4350-415 Porto
            </li>
            <li>
              Portugal
            </li>
          </ul>
          <p className="mt-4 mb-4">
            It is one of the main stations on the Metro line or a fairly short Uber/taxi ride from the center of Porto. If you would like advice on how to get there then please don&apos;t hesitate to reach out!
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d827.801343970345!2d-8.582827362190432!3d41.16071445432507!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1687901106309!5m2!1sen!2suk" width="100%" height="300" loading="lazy"></iframe>
          <p className="mt-4 mb-4">
            Please bring with you:
          </p>
          <ul>
            <li>
              Your overnight bag
            </li>
            <li>
              Passport (for check-in)
            </li>
          </ul>
          <p className="mt-4 mb-4">
            If you are not getting the coach, there is also car parking available at the venue Quinta da Pacheca. The coach should be arriving at the venue around 3pm for the ceremony to start shortly after.
          </p>
          <h2 className="mt-4 mb-4">Arrival and check-in</h2>
          <p className="mt-4 mb-4">As soon as you arrive at the venue, the venue will take your bags and store them. You will then be asked to proceed to the ceremony area to await Claudia’s arrival! As mentioned above, please come dressed for the wedding as there will be no time to get changed and your rooms will not be ready.</p>
          <p className="mt-4 mb-4">We ask that you check-in during cocktail hour - you don’t have to all rush and do this! The cocktail session will be a couple of hours so do make sure you relax, enjoy the drink and food as well as the music! You may be asked to share ID at check-in so please bring your passport!</p>
          <h2 className="mt-4 mb-4">The next day</h2>
          <p className="mt-4 mb-4">The room fee included breakfast so please enjoy it the following morning!</p>
          <p className="mt-4 mb-4">Please check-out before 11:30AM as the coach will be ready to pick you up from the venue at 12:00PM and take you back to the pick-up location above.</p>
          <p className="mt-4 mb-4">We hope that covers the key details of the day but please do reach out to us if you have any questions! We can’t wait to celebrate our big day with you!</p>
          <p className="mt-4 mb-4">For those that need a number on the day for any queries, please reach out to:</p>
          <ul className="pb-32">
            <li>
              Tom: 07305305349
            </li>
            <li>
              Sabrina: 
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default DressAdvice;
