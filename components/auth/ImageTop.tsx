import { images } from "@/constants";
import { DimensionValue, Image, useWindowDimensions, View } from "react-native";

interface Props {
  height: DimensionValue | undefined;
}

const AuthImageTop = ({ height }: Props) => {
  const { width } = useWindowDimensions();
  const imageWidth = 500;
  const sideWidth = Math.max((width - imageWidth) / 2, 0);

  return (
    <View
      pointerEvents="none"
      style={{ height }}
      className="absolute top-0 left-0 right-0 z-[2] flex-row overflow-hidden"
    >
      {sideWidth > 0 && (
        <View
          style={{
            position: "absolute",
            width: sideWidth,
            height: "100%",
            left: 0,
          }}
        >
          <Image
            source={images.signUpCar}
            resizeMode="cover"
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              opacity: 0.7,
            }}
          />
        </View>
      )}

      <Image
        source={images.signUpCar}
        resizeMode="cover"
        style={{
          height: "100%",
          width: imageWidth,
          marginHorizontal: sideWidth,
        }}
      />

      {sideWidth > 0 && (
        <View
          style={{
            transform: "scaleX(-1)",
            position: "absolute",
            width: sideWidth,
            height: "100%",
            zIndex: -10,
            right: 0,
          }}
        >
          <Image
            source={images.signUpCar}
            resizeMode="cover"
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              opacity: 0.7,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default AuthImageTop;
