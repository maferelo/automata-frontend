export type ButtonProps = {
  onPress: () => void;
  title: string;
  type: "create" | "read" | "update" | "delete";
};
