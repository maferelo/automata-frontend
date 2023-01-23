import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [text, setText] = useState("");
  const [isHungry, setIsHungry] = useState(true);

  return (
    <ScrollView>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text
            .split(" ")
            .map((word) => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    </ScrollView>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
};

export default Cafe;
