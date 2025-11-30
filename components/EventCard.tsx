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

export default function EventCard({ title, image }: Props) {
  return (
    <div>
      <Link href={"/events"} id="event-card">
        <Image src={image} alt={title} width={410} height={300} />
      </Link>

      <p className="title">{title}</p>
    </div>
  );
}
