import Text from "./components/text";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <Text variant={"body-sm-bold"} className="text-pink-900">
          Olá,mundo
        </Text>
        <Text className="text-green-500">Palmeiras</Text>
      </div>
    </>
  );
}

export default App;
