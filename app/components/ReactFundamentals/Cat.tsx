import { useState } from "react";
import {
  Button,
  FlatList,
  Platform,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  View,
} from "react-native";

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [text, setText] = useState("");
  const [isHungry, setIsHungry] = useState(true);
  const data: { key: string }[] = [
    { key: "Devin" },
    { key: "Devin2" },
    { key: "Devin3" },
    { key: "Devin4" },
    { key: "Devin5" },
  ];

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
        <Text
          style={{ padding: Platform.OS === "ios" ? 30 : 10, fontSize: 42 }}
        >
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
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
      <SectionList
        sections={[
          { title: "D", data: ["Devin", "Dan", "Dominic"] },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie",
            ],
          },
        ]}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </>
  );
};

export default Cafe;
