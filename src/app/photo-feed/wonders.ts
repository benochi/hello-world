import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
}

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "photo1",
    src: photo1,
    photographer: "Photographer 1",
    location: "place 1"
  },
  {
    id: "2",
    name: "photo2",
    src: photo2,
    photographer: "Photographer 2",
    location: "place 2"
  },
  {
    id: "3",
    name: "photo3",
    src: photo3,
    photographer: "Photographer 3",
    location: "place 3"
  },
  {
    id: "4",
    name: "photo4",
    src: photo4,
    photographer: "Photographer 4",
    location: "place 4"
  },
  {
    id: "5",
    name: "photo5",
    src: photo5,
    photographer: "Photographer 5",
    location: "place 5"
  },
  {
    id: "6",
    name: "photo6",
    src: photo6,
    photographer: "Photographer 6",
    location: "place 6"
  },
  {
    id: "7",
    name: "photo7",
    src: photo7,
    photographer: "Photographer 7",
    location: "place 7"
  },
]
export default wondersImages;