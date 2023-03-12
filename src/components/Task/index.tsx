import { useDispatch } from "react-redux";
import { Button } from "src/components/Button";
import { edit } from "src/slices/task";
import {
  ActionsView,
  ContainerView,
  DescriptionView,
  TitleText,
} from "./styles";
import { TaskProps } from "./types";

/**
 * Task Component
 * @param onPress
 * @param title - The task content
 * @return
 */
export function Task({ id, data }: TaskProps): JSX.Element {
  const dispatch = useDispatch();
  return (
    <ContainerView>
      <DescriptionView>
        <TitleText>{data.title}</TitleText>
      </DescriptionView>
      <ActionsView>
        <Button
          onPress={() => {
            dispatch(edit(id));
          }}
          title="EDIT"
          type="update"
        />
        <Button onPress={() => {}} title="COMPLETE" type="delete" />
      </ActionsView>
    </ContainerView>
  );
}
