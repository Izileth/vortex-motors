import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    
    route("about", "routes/about/us/us.tsx"),
    route("history", "routes/about/mission/mission.tsx"),
    route("support", "routes/about/support/support.tsx"),

    route("polities/ecological", "routes/about/ecological/ecological.tsx"),
    
    route("newsletter", "routes/newsletter/newsletter.tsx"),

    route("polities/cookies", "routes/policy/cookies/cookies.tsx"),
    route("polities/privacy", "routes/policy/privacy/privacy.tsx"),
    route("polities/conditions", "routes/policy/terms/terms.tsx"),
        
    route("destacts", "routes/destacts/destacts.tsx"),

    route("login", "routes/auth/login/login.tsx"),
    route("register", "routes/auth/register/register.tsx"),
    
    route("passwords/forgot", "routes/password/forgout/forgout.tsx"),
    route("passwords/reset", "routes/password/reset/reset.tsx"),
    
    route("dashboard", "routes/user/dashboard.tsx"),
    route("vehicles/user", "routes/vehicle/profile/profile.tsx"),

    route("vehicles", "routes/vehicle/vehicle.tsx"),
    route("vehicles/:id", "routes/vehicle/id/id.tsx"),
    route("vehicles/create", "routes/vehicle/create/create.tsx"),
    route("vehicles/update/:id", "routes/vehicle/update/update.tsx"),
    
    route("vehicles/category", "routes/vehicle/category/category.tsx"),
    
    route("vehicles/negociations", "routes/vehicle/negociation/negociation.tsx"),


] satisfies RouteConfig;
