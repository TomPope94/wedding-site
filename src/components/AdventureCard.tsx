type AdventureCardProps = {
  location: string;
  description: string[];
  image: string;
  reverse: boolean;
  reference: string;
  progress: number;
}

export default function AdventureCard({location, description, reverse, image, reference, progress}: AdventureCardProps) {
  return (
    <div className={`w-full xl:w-96 flex p-4 m-4 shadow flex-col`}>
      <div className="w-full rounded bg-greyStandard h-64" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />
      <div className="w-full pt-8 px-4">
        <h1>
          {location}
        </h1>
        {
          description.map((desc) => (
            <div key={desc.substring(0, 10)}>
              <p className="text-greyStandard" >
                {desc}
              </ p>
              <br />
            </ div>
          ))
        }
        <p className="mb-4 text-greyStandard">
          Reference: {reference}
        </p>
        <div className="relative w-full h-8 shadow-inner rounded-full flex justify-center items-center">
          <div style={{
              width: `${progress}%`,
            }}
            className="h-full absolute z-10 left-0 rounded-full bg-primaryDark"
          />
          <p className="text-center z-20">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  )
}
