import { Ride } from "@/types/type";
import { ThemedText } from "../ThemedText";
import { Image, View } from "react-native";
import { icons } from "@/constants";

const ThemedRideCard = ({
  ride: {
    destination_latitude,
    destination_longitude,
    destination_address,
    payment_status,
    origin_address,
    created_at,
    ride_time,
    driver,
  },
}: {
  ride: Ride;
}) => {
  return (
    <View className="bg-white dark:bg-black rounded-md p-5">
      <View className="flex-row h-20 gap-10 p-2 pt-0 pb-0">
        <View className="h-full aspect-square bg-red-50 rounded-md"></View>
        <View className="flex-1 h-full  p-2 pr-0 pl-0">
          <View className="flex-row h-[50%]">
            <Image className="h-[90%]" resizeMode="contain" source={icons.to} />
            <ThemedText type="title" children={driver.first_name} />
          </View>
          <View className="flex-row flex-1 h-[50%]">
            <Image
              className="h-[90%]"
              resizeMode="contain"
              source={icons.point}
            />
            <ThemedText type="title" children={driver.first_name} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ThemedRideCard;
