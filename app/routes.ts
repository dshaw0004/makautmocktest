import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/getstarted.tsx"),
  route("home", "routes/test.tsx"),
  route("homepage", "routes/home.tsx"),
  route("mocktest", "routes/mocktest.tsx"),
  route("instructions", "routes/instructions.tsx"),
  route("result", "routes/result.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("*", "routes/notfound.tsx")

] satisfies RouteConfig;
