export const ApiUrl = process.env.API_URL;

const UrlApiV1: Record<string, string> = {
  getCities: `${ApiUrl}/api/v1/cities/`
}


const UrlApiV2: Record<string, string> = {
  ...UrlApiV1,  
}

const UrlApiWithDomainV1: Record<string, string> = {
  getCities: `${process.env.API_URL}:${process.env.API_PORT_V1}/api/v1/citys/`, // Опечатка
}

const UrlApiWithDomainV2: Record<string, string> = {
  ...UrlApiWithDomainV1,  
}

const revalidateDefault = 60;

const UrlRevalidateV1 = {
  getCities: {
    next: {
      tags: [UrlApiV1.getCities],
      revalidate: revalidateDefault,
    },
  },
};

const UrlRevalidateV2 = {
  ...UrlRevalidateV1
}
export { UrlApiV1, UrlApiV2,UrlApiWithDomainV1,UrlApiWithDomainV2,UrlRevalidateV1,UrlRevalidateV2 };