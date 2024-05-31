export function prepareFormDataToSend(params: any) {
  const { data } = params;

  const formData = new FormData();

  if (data) {
    formData.append("data", JSON.stringify(data));

    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        }
      });
    }
  }

  return formData;
}
