interface BioProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  location: string;
  quote: string;
}

export default function Bio({
  imgSrc,
  imgAlt,
  name,
  location,
  quote,
}: BioProps) {
  return (
    <section className="flex flex-col justify-center items-center">
      <img src={imgSrc} alt={imgAlt} className="rounded-full w-24" />
      <div className="py-6 flex flex-col items-center gap-2">
        <p className="font-semibold text-3xl">{name}</p>
        <p className="text-[#c5f82a] font-semibold">{location}</p>
      </div>
      <p>"{quote}"</p>
    </section>
  );
}
