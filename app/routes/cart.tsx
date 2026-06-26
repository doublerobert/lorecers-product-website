import type { Route } from "./+types/cart";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Cart | Lorecers Clothing Store",
    },
  ];
}

export default function Cart() {
  return <main className="flex-1">Cart</main>;
}
