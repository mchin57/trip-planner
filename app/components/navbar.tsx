import { link_package } from "./link_package";
import Link from "next/link";

export default function Navbar(links: link_package[]) {
  // const links_array: link_package[] = [];

  // for (const one_link of links) {
  //   links_array.push(<Link href=one_link.link> one_link.display_name </Link>})
  // }
  return (
    <div>
      <p> Tailwind Box</p>
      <div className="bg-blue-500 rounded-xl flex items-center justify-center text-white">
        {links.map((lnk) => (
          <li key={lnk.link}>
            <Link
              href={lnk.link}
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              {lnk.display_name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
