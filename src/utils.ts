export function parseResponse(res: string) {
  const data = res.split("data:");
  const responseObjectText = data[data.length - 2].trim();
  const responseObject = JSON.parse(responseObjectText);
  return responseObject.message.content.parts[0];
}
