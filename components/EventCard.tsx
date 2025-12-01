import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  slug?: string;
  location?: string;
  date: string;
  time: string;
}

export default function EventCard({
  title,
  image,
  slug,
  location,
  date,
  time,
}: Props) {
  return (
    <div id="event-card">
      <Link href={`/events/${slug}`}>
        <Image className="poster" src={image} alt={title} width={410} height={300} />
      </Link>

      <div className="flex flex-row gap-2">
        <Image
          src="/icons/pin.svg"
          alt="location icon"
          width={16}
          height={16}
        />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image
            src="/icons/calendar.svg"
            alt="calendar icon"
            width={16}
            height={16}
          />
          <p>{date}</p>
        </div>

        <div>
          <Image
            src="/icons/clock.svg"
            alt="clock icon"
            width={16}
            height={16}
          />
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}
