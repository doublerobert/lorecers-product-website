import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Home | Lorecers Clothing Store",
    },
  ];
}

export default function Home() {
  return <main className="flex-1">Home</main>;
}
