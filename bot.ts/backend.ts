async function fetchURL(url: string) {
    return new Promise<String>((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved");
        }, 7000);
    });
}

export { fetchURL };
