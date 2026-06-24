import Link from "next/link";
// import layout  from "./layout";
// import link_package from "./components/link_package";
import { navbar, link_package } from "./components";

export default function Home() {
  return (
    <div>
      center or the{" "}
      <Link
        href="/auth_files"
        className="font-medium text-zinc-950 dark:text-zinc-50"
      >
        fake login page
      </Link>{" "}
    </div>
  );
}
