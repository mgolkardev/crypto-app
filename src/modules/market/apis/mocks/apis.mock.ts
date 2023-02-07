export const mockAPIs = [
  (async () => (await import("./currencies-api.mock.json")).default)(),
  (async () => (await import("./market-api.mock.json")).default)(),
];
