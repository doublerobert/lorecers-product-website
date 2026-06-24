import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("cart", "routes/cart.tsx"),
    route("shop", "routes/shop.tsx"),
    route("feed", "routes/feed.tsx"),

  ])
] satisfies RouteConfig;

