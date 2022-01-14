export const getFaviconSrcFromLink = (link: string) => {
    const url = new URL(link)
    url?.hostname || "blog"
    return `https://www.google.com/s2/favicons?domain=${url}`
}
