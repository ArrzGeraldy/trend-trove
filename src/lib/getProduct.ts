export const fetchData = async (endPoint: string, query: string = "") => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/${endPoint}?search=${query}`,
    { cache: "no-store" }
  );
  return await response.json();
};
export const fetchDataByGendre = async (
  endPoint: string,
  query: string = ""
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/${endPoint}?gendre=${query}`,
    { cache: "no-store" }
  );
  return await response.json();
};
export const fetchDataWithQuery = async (
  endPoint: string,
  query: string = ""
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/${endPoint}?${query}`,
    { cache: "no-store" }
  );
  return await response.json();
};
export const fetchDataById = async (endPoint: string, id: string | number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/${endPoint}/${id}`
  );
  const data = await response.json();
  return data.data;
};
