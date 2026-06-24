import type { Route } from "./+types/feed";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Feed | Lorecers Clothing Store",
    },
  ];
}

export default function Feed() {
  return <main className="">Feed</main>;
}
