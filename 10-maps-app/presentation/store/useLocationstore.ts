import { getCurrentLocation, watchCurrentPosition } from "@/core/actions/location/location";
import { LatLng } from "@/infrastucture/interface/lat-lng";
import { LocationSubscription } from "expo-location";
import { create } from "zustand";

interface LocationState {
    lastKnownLocation: LatLng | null;
    userLocationList: LatLng[];
    watchSubscriptionId: LocationSubscription | null;

    getLocation: () => Promise<LatLng>;
    watchLocation: () => void;
    clearWatchLocation: () => void;
};


export const useLocationStore = create<LocationState>()((set, get) => ({
    lastKnownLocation: null,
    userLocationList: [],
    watchSubscriptionId: null,

    getLocation: async() => {
        const location = await getCurrentLocation();
        set({ lastKnownLocation: location});
        return location;
    },
    watchLocation: async() => {
        const oldSubscription = get().watchSubscriptionId;
        if( oldSubscription !== null){
            get().clearWatchLocation();
        };

        const watchSubscription = await watchCurrentPosition((latLng) => {
            set({
                lastKnownLocation: latLng,
                userLocationList: [...get().userLocationList, latLng]
            });
        });

        set({ watchSubscriptionId: watchSubscription });
    },

    clearWatchLocation: () => {
        const subscription = get().watchSubscriptionId;

        if(subscription !== null) {
            subscription.remove();
        };
    }
}));