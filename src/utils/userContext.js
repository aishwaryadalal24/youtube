import { createContext } from "react";

const userContext = createContext({
    user: "aisha",
    favouriteSong: "Dreamers | Fifa World Cup"
});

export default userContext;