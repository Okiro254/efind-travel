import { useQuery } from "@tanstack/react-query";
import type { Destination, Guide, Tour } from "../backend.d";
import { TourCategory } from "../backend.d";
import { useActor } from "./useActor";

export function useGetTours() {
  const { actor, isFetching } = useActor();
  return useQuery<Tour[]>({
    queryKey: ["tours"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTours();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetToursByCategory(category: TourCategory) {
  const { actor, isFetching } = useActor();
  return useQuery<Tour[]>({
    queryKey: ["tours", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getToursByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetDestinations() {
  const { actor, isFetching } = useActor();
  return useQuery<Destination[]>({
    queryKey: ["destinations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDestinations();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetGuides() {
  const { actor, isFetching } = useActor();
  return useQuery<Guide[]>({
    queryKey: ["guides"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGuides();
    },
    enabled: !!actor && !isFetching,
  });
}

export { TourCategory };
