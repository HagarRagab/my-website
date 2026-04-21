import { createImageUrlBuilder } from "@sanity/image-url";
import { format } from "date-fns";
import { client } from "../lib/sanityClient";

// Formating date
export const formatDate = (date) => {
    return format(date, "MMMM yyyy");
};

// Creating sanity image url builder
const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
