import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/icon";
import Spinner from "./assets/icons/spinner.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";

function App() {
  return (
    <>
      <div className="grid gap-3">
        <div className="flex flex-col gap-1">
          <Text variant={"body-sm-bold"} className="text-pink-900">
            Olá,mundo
          </Text>
          <Text className="text-green-500">Palmeiras</Text>
        </div>
        <div className="flex gap-1">
          <Icon svg={TrashIcon} />
          <Icon svg={Spinner} animate />
        </div>
        <div>
          <Badge variant={"secondary"}>5</Badge>
          <Badge variant={"primary"}>2 de 5</Badge>
        </div>
        <div>
          <Button>Nova tarefa</Button>
        </div>

        <div>
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant={"secondary"} />
          <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
        </div>
      </div>
    </>
  );
}

export default App;
