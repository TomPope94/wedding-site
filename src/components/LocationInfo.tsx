type LocationInfoProps = {
  location: string;
  description: string[];
  image: string;
  reverse: boolean;
}

export default function LocationInfo ({location, description, reverse, image}: LocationInfoProps) {
  return (
    <div className={`w-full flex p-4 my-4 shadow flex-col-reverse ${reverse ? "xl:flex-row-reverse" : "xl:flex-row" }`}>
      <div className="w-full xl:w-1/3 py-8 px-4">
        <h1>
          {location}
        </h1>
        {
          description.map((desc) => (
            <>
              <p key={desc[0]} className="text-greyStandard" >
                {desc}
              </ p>
              <br />
            </>
          ))
        }
      </div>
      <div className="w-full xl:w-2/3 rounded bg-greyStandard h-64 xl:h-auto" style={{
        // backgroundAttachment: "local",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />
    </div>
  )
}
