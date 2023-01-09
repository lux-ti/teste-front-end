export default function setup(emit: any) {
  const onInput = (event: Event) => {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
  };

  return {
    onInput,
  };
}
