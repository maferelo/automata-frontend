import React, { createContext, useState } from "react";

type ReminderContextProps = {
  value: string;
  setValue: (value: string) => void;
};

export const ReminderContext = createContext<ReminderContextProps>({
  value: "",
  setValue: () => {},
});

type ReminderProviderProps = {
  children: React.ReactNode;
};

export const ReminderProvider: React.FC = ({
  children,
}: ReminderProviderProps) => {
  const [value, setValue] = useState("");
  return (
    <ReminderContext.Provider value={{ value, setValue }}>
      {children}
    </ReminderContext.Provider>
  );
};
