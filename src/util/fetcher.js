export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("エラーが発生したため、データを取得できませんでした。");
  }
  const json = await response.json();
  return json;
};
