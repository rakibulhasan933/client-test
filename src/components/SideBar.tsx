"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from "use-debounce"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Accordion1, AccordionContent1, AccordionItem1, AccordionTrigger1 } from './ui/accordion2';
import Link from 'next/link';


const data = [
    {
        category: "Building",
        subcategory: [
            {

                name: "Fittings",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: [],
                filters: ["fitting type"],
                meta: "Fitting type in Nigeria"

            },
            {

                name: "Roof and Ceiling",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: [],
                filters: ["roof-ceiling"],
                meta: "Roof-Ceiling Type in Nigeria"

            },
            {

                name: "Paint and Finishing",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: [],
                filters: ["paint-finishing-type"],
                meta: "paint-finishing-type in Nigeria"

            },
            {

                name: "Structural Materials",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: [],
                filters: ["structural-materials-type"],
                meta: "structural-materials-type in Nigeria"

            },
            {

                name: "Electrical Fittings",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: [],
                filters: ["electrical-fittings-type"],
                meta: "electrical-fittings-type in Nigeria"

            },
            {

                name: "Plumbing Materials",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
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
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: ["audio-equipment-brands**"],
                filters: ["audio-equipment-type", "audio-equipment-brands**"],
                meta: "1) audio-equipment-brands** +  audio-equipment-type in Nigeria  2.)  audio-equipment-type in Nigeria"

            },
            {

                name: "Cameras",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: ["Camera Brands**"],
                filters: ["camera-type", "Camera Brands**"],
                meta: "1). Camera Brands** + Camera-type in Nigeria  2).  Camera-type in Nigeria"

            },
            {

                name: "Computers",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: ["Computer Brands"],
                filters: ["computers-type", "Computer Brands"],
                meta: "Computer Brands + Computers-type in Nigeria"

            },
            {
                name: "Electronics Accessories",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: [""],
                filters: ["mobile-type (Electronics Accessory Type)"],
                meta: "mobile-type (Electronics Accessory Type) in Nigeria"

            },
            {

                name: "Musical Instruments",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: ["musical-instrument-brand**"],
                filters: ["musical-instruments-type", "musical-instrument-brand**"],
                meta: "musical-instrument-brand** + musical-instruments-type  in Nigeria"

            },
            {
                name: "Printers and Scanners",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: ["printer-scanner-brand**"],
                filters: ["printer-scanner-brand**", "printer-scanner-type"],
                meta: " 1) printer-scanner-brand** + printer-scanner-type  in Nigeria 2) printer-scanner-type in Nigeria"

            },
            {

                name: "TV Boxes",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: ["tv-box-brands**"],
                filters: ["tv-box-brands**", "tv-box-type"],
                meta: "tv-box-brands** in Nigeria"
            },
            {

                name: "TVs and DVD",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: ["Tv Brands"],
                filters: ["Tv Brands", "tv-dvd-type"],
                meta: "1)Tv Brands +  tv-dvd-type in Nigeria 2) tv-dvd-type in Nigeria"
            },
            {

                name: "Video Games and Consoles",
                subCategoryType: [
                    "Acoustic Panels ",
                    "Amplifiers ",
                    "Audio Interfaces",
                    "Audio Limiters ",
                    "Cassette Players ",
                    "CD Players",
                    "DJ Controllers",
                    "DJ Mixers",
                    "DJ Tables Stands",
                    "Drum Machines",
                    "Equalizers",
                    "Hi - Fi Systems",
                    "Home Theater Systems",
                    "Karaoke ",
                    "Loudspeakers",
                    "Megaphones",
                    "Microphones",
                    "Midi Controllers",
                    "MP3 Players",
                    "Music Mixers",
                    "PA Systems",
                    "Power Sequencers",
                    "Radios ",
                    "Receivers ",
                    "Sound Systems",
                    "Soundcards",
                    "Speakers",
                    "Studio Monitors",
                    "Subwoofers",
                    "Turntables",
                    "Voice Recorders",
                    "Walkie Talkies"
                ],
                brand: ["Tv Brands"],
                filters: ["video-games-console-type", "tv-dvd-type"],
                meta: "video-games-console-type in Nigeria"
            },
        ]

    }
];
const state = ["Abia", "Abuja", "Adamawa", "Akwa Ebom", "Bauchi"];

const locality = ["Aba North", "Aba South", "Bende", "Ekwuano", "Isicala Ngwa North"];

export interface ISubCategoryProps {
    name: string,
    subCategoryType: string[],
    brand: string[],
    filters: string[],
    meta: string,
};



function SideBar({ params }: {
    params: {
        category: string
    }
}) {
    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const handleSubCategory = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("subcategory", term);
        } else {
            params.delete("subcategory");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 100);
    const handleState = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("state", term);
        } else {
            params.delete("state");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 100);
    const handleLocality = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("locality", term);
        } else {
            params.delete("locality");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 100);
    const handleSubCategoryType = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("subCategoryType", term);
        } else {
            params.delete("subCategoryType");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 100);

    const sub = searchParams.get('subCategoryType');
    const localityList = searchParams.get('locality');

    const result = data.filter(item => item.category === params.category)
    const subCategory = result.at(0)?.subcategory;
    return (
        <div className="min-h-screen p-4">
            <header className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                    {/* <Image src="/placeholder.svg" alt="Logo" className="h-10 w-10" /> */}
                    <span className="text-2xl font-bold">
                        <Link href="/">Home</Link>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <input type="search" placeholder="Search" className="px-4 py-2 border rounded-md" />
                    <Button variant="outline">Login</Button>
                </div>
            </header>
            <main className="flex gap-8 p-4">
                <aside className="w-1/4 p-4 border rounded-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold">Filters</h2>
                        <Button variant="outline" size="sm">
                            Reset
                        </Button>
                    </div>
                    <div className="mb-4">
                        <h3 className="mb-2 text-sm font-semibold">Price</h3>
                        <div className="flex items-center justify-between">
                            <span>Minimum Price</span>
                            <span>0</span>
                        </div>
                        <input type="range" min="0" max="10000" className="w-full mt-2" />
                        <div className="flex items-center justify-between mt-2">
                            <span>Maximum Price</span>
                            <span>4,200</span>
                        </div>
                        <input type="range" min="0" max="10000" className="w-full mt-2" />
                    </div>
                    <div>
                        <Accordion type="single" defaultValue={sub ? "item-2" : "item-1"} collapsible>
                            <div className="mb-4">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger><h3 className="mb-2 text-sm font-semibold">Sub Categories</h3></AccordionTrigger>
                                    <AccordionContent>
                                        <div className=" flex flex-col gap-3">
                                            {
                                                subCategory?.map((item, index) =>
                                                    <>
                                                        <Accordion1 type="single" collapsible>
                                                            <AccordionItem1 key={index} value={`item-${index}`}>
                                                                <AccordionTrigger1><Button key={index} onClick={() => handleSubCategory(item.name)}>{item.name}</Button></AccordionTrigger1>
                                                                <AccordionContent1>
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        {
                                                                            item.subCategoryType.map((type, index) => (
                                                                                <div key={index}>
                                                                                    <AccordionTrigger1><Button className={`${sub === type ? " bg-orange-500" : ""}`} variant={"outline"} size={"sm"} key={index} onClick={() => handleSubCategoryType(type)}>{type}</Button></AccordionTrigger1>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </AccordionContent1>
                                                            </AccordionItem1>
                                                        </Accordion1>
                                                    </>
                                                )
                                            }

                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            {/* locality */}

                            {
                                sub && <div className="mb-4">
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger><h3 className="mb-2 text-sm font-semibold">Locality</h3></AccordionTrigger>
                                        <AccordionContent>
                                            <div className=" flex flex-col gap-3">
                                                {
                                                    locality.map((item, index) => <Button key={index} onClick={() => handleLocality(item)}>{item}</Button>)
                                                }

                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            }
                            {/* State */}
                            {
                                localityList && <div className="mb-4">

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger><h3 className="mb-2 text-sm font-semibold">State</h3></AccordionTrigger>
                                        <AccordionContent>
                                            <div className=" flex flex-col gap-3">
                                                {
                                                    state.map((item, index) => <Button key={index} onClick={() => handleState(item)}>{item}</Button>)
                                                }

                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                </div>
                            }
                        </Accordion>
                    </div>
                </aside >
                <section className="flex-1">
                    <div className="mb-4 text-sm text-muted-foreground">Home Building Materials</div>
                    <div className="grid grid-cols-3 gap-4">
                        <Card>
                            {/* <Image src="/placeholder.svg" alt="AVC LED Wall Lamp" className="w-full h-48 object-cover" /> */}
                            <div className="p-4">
                                <h3 className="mb-2 text-lg font-semibold">AVC LED Wall Lamp</h3>
                                <p className="mb-2 text-sm text-muted-foreground">Obio-Akpor, Rivers</p>
                                <p className="mb-2 text-sm text-muted-foreground">
                                    AVC LED Wall Lamp lights up and brightens your environment. Enjoy ener...
                                </p>
                                <Button variant="outline" size="sm">
                                    Contact for price
                                </Button>
                            </div>
                        </Card>
                        <Card>
                            {/* <Image src="/placeholder.svg" alt="BRC Wire Mesh Steel" className="w-full h-48 object-cover" /> */}
                            <div className="p-4">
                                <h3 className="mb-2 text-lg font-semibold">BRC Wire Mesh Steel</h3>
                                <p className="mb-2 text-sm text-muted-foreground">Ajah, Lagos</p>
                                <p className="mb-2 text-sm text-muted-foreground">
                                    BRC Wire Mesh: Standard gauge and pitch Bar Reinforcement Concrete
                                </p>
                                <Button variant="outline" size="sm">
                                    Contact for price
                                </Button>
                            </div>
                        </Card>
                        <Card>
                            {/* <Image src="/placeholder.svg" alt="Galvanized Chain Link Fencing" className="w-full h-48 object-cover" /> */}
                            <div className="p-4">
                                <h3 className="mb-2 text-lg font-semibold">Galvanized Chain Link Fencing</h3>
                                <p className="mb-2 text-sm text-muted-foreground">Orile, Lagos</p>
                                <p className="mb-2 text-sm text-muted-foreground">
                                    Galvanized chain link 3mm thickness by 6ft height by 12 meters length ...
                                </p>
                                <Button variant="outline" size="sm">
                                    Contact for price
                                </Button>
                            </div>
                        </Card>
                    </div>
                </section>
            </main >
        </div >
    )
}

export default SideBar