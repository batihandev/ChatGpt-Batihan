"use client";
import useSWR from "swr";
import Select from "react-select";
type Props = {};

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
function ModelSelection(props: Props) {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo-0301",
  });
  return (
    <div>
      {/* <Select
        className="mt-2"
        defaultValue={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        placeholder={model}
        options={models?.modelOptions}
        onChange={(e) => setModel(e.value)}
      /> */}
    </div>
  );
}

export default ModelSelection;
