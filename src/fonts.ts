import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: "200",
});
export const poppins300 = Poppins({ subsets: ["latin"], weight: "300" });
export const poppins500 = Poppins({ subsets: ["latin"], weight: "500" });
export const poppins700 = Poppins({ subsets: ["latin"], weight: "700" });
export const poppins900 = Poppins({ subsets: ["latin"], weight: "900" });
