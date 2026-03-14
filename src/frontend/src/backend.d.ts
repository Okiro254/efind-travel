import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Tour {
    title: string;
    duration: {
        days: bigint;
        nights: bigint;
    };
    departureInfo: string;
    category: TourCategory;
    badge?: string;
    image: string;
    priceCNY: bigint;
    location: string;
}
export interface Guide {
    title: string;
    excerpt: string;
    category: GuideCategory;
}
export interface Destination {
    region: string;
    name: string;
    routeCount: bigint;
}
export enum GuideCategory {
    sightseeing = "sightseeing",
    cultural = "cultural",
    adventure = "adventure",
    wildlife = "wildlife",
    luxury = "luxury",
    relaxation = "relaxation",
    family = "family",
    photography = "photography"
}
export enum TourCategory {
    antarctica = "antarctica",
    featured = "featured",
    latinAmerica = "latinAmerica",
    adventure = "adventure",
    luxury = "luxury"
}
export interface backendInterface {
    getAllToursByCategory(category: TourCategory): Promise<Array<Tour>>;
    getAllToursSortedByPrice(): Promise<Array<Tour>>;
    getDestinations(): Promise<Array<Destination>>;
    getDestinationsByRegion(region: string): Promise<Array<Destination>>;
    getDestinationsSortedByRouteCount(): Promise<Array<Destination>>;
    getGuides(): Promise<Array<Guide>>;
    getGuidesByCategory(category: GuideCategory): Promise<Array<Guide>>;
    getTours(): Promise<Array<Tour>>;
    getToursByCategory(category: TourCategory): Promise<Array<Tour>>;
    getToursByPriceRange(minPrice: bigint, maxPrice: bigint): Promise<Array<Tour>>;
}
