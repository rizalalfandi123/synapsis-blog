const headers = new Headers();

headers.set("Authorization", process.env.AUTH_TOKEN!);

headers.set("Content-Type", "application/json");

export { headers };
