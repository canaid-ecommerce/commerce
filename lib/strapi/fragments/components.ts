export const MoneyFragment = `
fragment money on ComponentItemsMoney {
    amount
    currencyCode
}
`;

export const SeoFragment = `
fragment seo on ComponentPagesSeo {
    title
    description
}
`;

export const ImageFragment = `
fragment image on ComponentItemsImage {
    url
    altText
    width
    height
    handle
}
`