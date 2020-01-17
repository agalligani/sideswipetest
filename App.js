import React, { Component } from "react";
import {
  Animated,
  Easing,
  View,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";
import { Constants } from "expo";

// or any pure javascript modules available in npm
import { Carousel, AnimatedCarouselItem } from "react-native-sideswipe"; // 0.0.6
import { Card, Badge } from "react-native-elements"; // 0.18.5

import "@expo/vector-icons"; // 6.2.2

const data = [1, 2, 3, 4, 5];

export default class App extends Component {
  render() {
    const data = [1, 2, 3, 4, 5];
    const { width } = Dimensions.get("window");
    return (
      <View>
        <Text>Center Aligned</Text>

        <Text style={{ marginTop: 40 }}>Left Aligned with Peaking</Text>
        <Carousel
          data={data}
          style={{ width, maxHeight: 225 }}
          itemWidth={width - 60}
          threshold={80}
          contentOffset={12}
          renderItem={({ itemIndex, currentIndex, item }) => (
            <AnimatedCarouselItem
              itemIndex={itemIndex}
              currentIndex={currentIndex}
              easing={Easing.spring}
              render={animatedValue => (
                <Animated.View
                  style={{
                    maxWidth: width - 60,
                    height: 225,
                    transform: [
                      {
                        scale: animatedValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.9, 1],
                          extrapolate: "clamp"
                        })
                      }
                    ]
                  }}
                >
                  <Card title="Local Modules">
                    <Badge value={item} />
                    <Text style={{ marginTop: 10 }}>
                      Science has not yet mastered prophecy. We predict too much
                      for the next year and yet far too little for the next 10.
                      I don't know what you could say about a day in which you
                      have seen four beautiful sunsets.
                    </Text>
                  </Card>
                </Animated.View>
              )}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1"
  }
});
