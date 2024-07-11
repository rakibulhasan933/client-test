import Image from "next/image";
import Link from "next/link";


const data = [
  {
    category: "Building",
    subcategory: [
      {

        name: "Fittings",
        subCategoryType: "fitting type",
        brand: [],
        filters: ["fitting type"],
        meta: "Fitting type in Nigeria"

      },
      {

        name: "Roof and Ceiling",
        subCategoryType: "roof-ceiling",
        brand: [],
        filters: ["roof-ceiling"],
        meta: "Roof-Ceiling Type in Nigeria"

      },
      {

        name: "Paint and Finishing",
        subCategoryType: "paint-finishing-type",
        brand: [],
        filters: ["paint-finishing-type"],
        meta: "paint-finishing-type in Nigeria"

      },
      {

        name: "Structural Materials",
        subCategoryType: "structural-materials-type",
        brand: [],
        filters: ["structural-materials-type"],
        meta: "structural-materials-type in Nigeria"

      },
      {

        name: "Electrical Fittings",
        subCategoryType: "electrical-fittings-type",
        brand: [],
        filters: ["electrical-fittings-type"],
        meta: "electrical-fittings-type in Nigeria"

      },
      {

        name: "Plumbing Materials",
        subCategoryType: "plumbing-material-type",
        brand: [],
        filters: ["plumbing-material-type"],
        meta: "plumbing-material-type in Nigeria"

      }
    ]
  },
  {
    category: "Electronics",
    subcategory: [
      {

        name: "Audio Equipment",
        subCategoryType: "audio-equipment-type",
        brand: ["audio-equipment-brands**"],
        filters: ["audio-equipment-type", "audio-equipment-brands**"],
        meta: "1) audio-equipment-brands** +  audio-equipment-type in Nigeria  2.)  audio-equipment-type in Nigeria"

      },
      {

        name: "Cameras",
        subCategoryType: "camera-type",
        brand: ["Camera Brands**"],
        filters: ["camera-type", "Camera Brands**"],
        meta: "1). Camera Brands** + Camera-type in Nigeria  2).  Camera-type in Nigeria"

      },
      {

        name: "Computers",
        subCategoryType: "computers-zype",
        brand: ["Computer Brands"],
        filters: ["computers-type", "Computer Brands"],
        meta: "Computer Brands + Computers-type in Nigeria"

      },
      {
        name: "Electronics Accessories",
        subCategoryType: "mobile-type (Electronics Accessory Type)",
        brand: [""],
        filters: ["mobile-type (Electronics Accessory Type)"],
        meta: "mobile-type (Electronics Accessory Type) in Nigeria"

      },
      {

        name: "Musical Instruments",
        subCategoryType: "musical-instruments-type",
        brand: ["musical-instrument-brand**"],
        filters: ["musical-instruments-type", "musical-instrument-brand**"],
        meta: "musical-instrument-brand** + musical-instruments-type  in Nigeria"

      },
      {
        name: "Printers and Scanners",
        subCategoryType: "printer-scanner-type",
        brand: ["printer-scanner-brand**"],
        filters: ["printer-scanner-brand**", "printer-scanner-type"],
        meta: " 1) printer-scanner-brand** + printer-scanner-type  in Nigeria 2) printer-scanner-type in Nigeria"

      },
      {

        name: "TV Boxes",
        subCategoryType: "tv-box-type",
        brand: ["tv-box-brands**"],
        filters: ["tv-box-brands**", "tv-box-type"],
        meta: "tv-box-brands** in Nigeria"
      },
      {

        name: "TVs and DVD",
        subCategoryType: "tv-dvd-type",
        brand: ["Tv Brands"],
        filters: ["Tv Brands", "tv-dvd-type"],
        meta: "1)Tv Brands +  tv-dvd-type in Nigeria 2) tv-dvd-type in Nigeria"
      },
      {

        name: "Video Games and Consoles",
        subCategoryType: "video-games-console-type",
        brand: ["Tv Brands"],
        filters: ["video-games-console-type", "tv-dvd-type"],
        meta: "video-games-console-type in Nigeria"
      },
    ]

  }
];

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid gap-4 md:gap-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Explore Our Product Categories</h2>
          <p className="text-muted-foreground md:text-lg">
            Find the perfect products for your needs in our diverse collection.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            data.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <Link href={item.category} className="absolute inset-0 z-10">
                  <span className="sr-only">View Category</span>
                </Link>
                <Image
                  src="/next.svg"
                  alt="Electronics"
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end gap-2 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-semibold text-white">{item.category} </h3>
                  <p className="text-sm text-white">Discover the latest tech gadgets and accessories.</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
