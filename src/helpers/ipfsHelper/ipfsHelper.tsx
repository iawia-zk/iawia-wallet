export const getJsonFromIpfsByKey = async (key: string) => {
  try {
    const res = await fetch(`https://gateway.pinata.cloud/ipfs/${key}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching JSON from IPFS:', error);
    return null;
  }
};
