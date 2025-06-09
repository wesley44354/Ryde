import { Ride } from "@/types/type";
import { icons } from "@/constants";
import { ThemedText } from "../ThemedText";
import { Image, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ColorTypes } from "@/constants/colors";
import { II18nextTypes } from "@/types/i18next";
import i18n from "@/lang/i18n";

const LocationRow = ({
  icon,
  text,
}: {
  icon: keyof typeof icons;
  text: string;
}) => (
  <View className="flex-row items-center flex-1 gap-1 h-[50%]">
    <Image
      style={{ height: "50%" }}
      resizeMode="contain"
      source={icons[icon]}
    />
    <ThemedText
      type="subtitle"
      numberOfLines={2}
      className="flex-1"
      children={text}
    />
  </View>
);

const InfoRow = ({
  label,
  value,
  color = "secondary",
}: {
  label: keyof II18nextTypes;
  value: string | number;
  color?: ColorTypes;
}) => (
  <View className="flex-1 gap-5">
    <View className="flex-row items-center flex-1">
      <ThemedText
        text={label}
        color="general"
        type="subtitle"
        numberOfLines={2}
        colorIntensity="200"
        className="flex-1 text-left"
      />
      <ThemedText
        color={color}
        type="subtitle"
        numberOfLines={2}
        colorIntensity="DEFAULT"
        className="text-right"
        children={String(value)}
      />
    </View>
    <ThemedView
      color="general"
      colorIntensity="100"
      className="h-[0.5px] w-full"
    />
  </View>
);

const ThemedRideCard = ({
  ride: {
    destination_address,
    origin_address,
    payment_status,
    created_at,
    driver,
  },
}: {
  ride: Ride;
}) => {
  return (
    <View className="bg-white dark:bg-black rounded-lg p-5 gap-5">
      <View className="flex-row h-24 gap-5 p-2 pt-0 pb-0">
        <View className="h-full aspect-[1/1.1] bg-red-50 rounded-lg" />
        <View className="flex-1 h-full p-2 pr-0 pl-0">
          <LocationRow icon={"to"} text={destination_address} />
          <LocationRow icon={"point"} text={origin_address} />
        </View>
      </View>

      <ThemedView
        color="general"
        colorIntensity="500"
        className="flex-col rounded-lg gap-5 p-5"
      >
        <InfoRow
          label="DATE_TIME"
          value={new Date(created_at).toDateString()}
        />
        <InfoRow
          label="DRIVER"
          value={`${driver.first_name} ${driver.last_name}`}
        />
        <InfoRow label="CAR_SEATS" value={driver.car_seats} />
        <InfoRow
          label="PAYMENT_STATUS"
          color={payment_status == "paid" ? "success" : "danger"}
          value={payment_status == "paid" ? i18n.t("PAID") : i18n.t("NOT_PAID")}
        />
      </ThemedView>
    </View>
  );
};

export default ThemedRideCard;
