import SideBar from "@/components/SideBar";
import { Metadata, ResolvingMetadata } from "next";

const data = [
  {
    category: "Building",
    subcategory: [
      {
        name: "Fittings",
        subCategoryType: "fitting-type",
        brand: [],
        filters: ["fitting type"],
        meta: "Fitting type in Nigeria",
      },
      {
        name: "Roof and Ceiling",
        subCategoryType: "roof-ceiling",
        brand: [],
        filters: ["roof-ceiling"],
        meta: "Roof-Ceiling Type in Nigeria",
      },
      {
        name: "Paint and Finishing",
        subCategoryType: "paint-finishing-type",
        brand: [],
        filters: ["paint-finishing-type"],
        meta: "paint-finishing-type in Nigeria",
      },
      {
        name: "Structural Materials",
        subCategoryType: "structural-materials-type",
        brand: [],
        filters: ["structural-materials-type"],
        meta: "structural-materials-type in Nigeria",
      },
      {
        name: "Electrical Fittings",
        subCategoryType: "electrical-fittings-type",
        brand: [],
        filters: ["electrical-fittings-type"],
        meta: "electrical-fittings-type in Nigeria",
      },
      {
        name: "Plumbing Materials",
        subCategoryType: "plumbing-material-type",
        brand: [],
        filters: ["plumbing-material-type"],
        meta: "plumbing-material-type in Nigeria",
      },
    ],
  },
  {
    category: "Electronics",
    subcategory: [
      {
        name: "Audio Equipment",
        subCategoryType: "audio-equipment-type",
        brand: ["audio-equipment-brands**"],
        filters: ["audio-equipment-type", "audio-equipment-brands**"],
        meta: "1) audio-equipment-brands** +  audio-equipment-type in Nigeria  2.)  audio-equipment-type in Nigeria",
      },
      {
        name: "Cameras",
        subCategoryType: "camera-type",
        brand: ["Camera Brands**"],
        filters: ["camera-type", "Camera Brands**"],
        meta: "1). Camera Brands** + Camera-type in Nigeria  2).  Camera-type in Nigeria",
      },
      {
        name: "Computers",
        subCategoryType: "computers-zype",
        brand: ["Computer Brands"],
        filters: ["computers-type", "Computer Brands"],
        meta: "Computer Brands + Computers-type in Nigeria",
      },
      {
        name: "Electronics Accessories",
        subCategoryType: "mobile-type (Electronics Accessory Type)",
        brand: [""],
        filters: ["mobile-type (Electronics Accessory Type)"],
        meta: "mobile-type (Electronics Accessory Type) in Nigeria",
      },
      {
        name: "Musical Instruments",
        subCategoryType: "musical-instruments-type",
        brand: ["musical-instrument-brand**"],
        filters: ["musical-instruments-type", "musical-instrument-brand**"],
        meta: "musical-instrument-brand** + musical-instruments-type  in Nigeria",
      },
      {
        name: "Printers and Scanners",
        subCategoryType: "printer-scanner-type",
        brand: ["printer-scanner-brand**"],
        filters: ["printer-scanner-brand**", "printer-scanner-type"],
        meta: " 1) printer-scanner-brand** + printer-scanner-type  in Nigeria 2) printer-scanner-type in Nigeria",
      },
      {
        name: "TV Boxes",
        subCategoryType: "tv-box-type",
        brand: ["tv-box-brands**"],
        filters: ["tv-box-brands**", "tv-box-type"],
        meta: "tv-box-brands** in Nigeria",
      },
      {
        name: "TVs and DVD",
        subCategoryType: "tv-dvd-type",
        brand: ["Tv Brands"],
        filters: ["Tv Brands", "tv-dvd-type"],
        meta: "1)Tv Brands +  tv-dvd-type in Nigeria 2) tv-dvd-type in Nigeria",
      },
      {
        name: "Video Games and Consoles",
        subCategoryType: "video-games-console-type",
        brand: ["Tv Brands"],
        filters: ["video-games-console-type", "tv-dvd-type"],
        meta: "video-games-console-type in Nigeria",
      },
    ],
  },
];
const state = ["Abia", "Abuja", "Adamawa", "Akwa Ebom", "Bauchi"];

const locality = [
  "Aba North",
  "Aba South",
  "Bende",
  "Ekwuano",
  "Isicala Ngwa North",
];
type Props = {
  params: { category: string };
  searchParams?: any;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const subcategory = searchParams.subcategory || "";
  const category = params.category;
  const result = await data.filter((item) => item.category === params.category);
  const subCategoryList = result.at(0)?.subcategory;
  const item = await subCategoryList?.filter(
    (item) => item.name === subcategory
  );
  const locality = searchParams.locality || "";
  const state = searchParams.state || "";
  console.log(state)
  const subCategoryType = searchParams.subCategoryType || "";

  const title = ` ${category} ${item?.at(0)?.name ? item?.at(0)?.name : ""} ${subCategoryType ? subCategoryType : ''} ${subCategoryType ? subCategoryType : " "} ${locality ? "in" : ""}   ${locality}  ${state || locality ? "," : ""} ${state} ${state ? "," : ""}   ${state || locality ? "" : "in"} Nigeria `;


  return {
    title,
  };
}

function DashBoard({
  params,
}: {
  params: {
    category: string;
  };
}) {
  return (
    <div>
      <SideBar params={params} />
    </div>
  );
}

export default DashBoard;
