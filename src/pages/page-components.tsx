import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import Spinner from "../assets/icons/spinner.svg?react";

export default function PageComponents() {
  return (
    <>
      <Container>
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
          <div className="flex gap-1">
            <Badge variant={"secondary"}>5</Badge>
            <Badge variant={"primary"}>2 de 5</Badge>
            <Badge loading>4</Badge>
          </div>
          <div>
            <Button>Nova tarefa</Button>
          </div>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} />
            <ButtonIcon icon={TrashIcon} variant={"secondary"} />
            <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
            <ButtonIcon icon={TrashIcon} loading />
          </div>
          <div>
            <InputText />
          </div>
          <div>
            <InputCheckbox />
            <InputCheckbox loading />
          </div>
          <div>
            <Card size="md">Olá mundo</Card>
          </div>

          <div className="space-y-2">
            <Skeleton className="h-5" />
            <Skeleton className="h-5" />
            <Skeleton className="h-5 w-96" />
          </div>
        </div>
      </Container>
    </>
  );
}
