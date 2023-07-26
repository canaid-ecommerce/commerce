import { strapiFetch } from '..';
import { Carousel, StrapiCarouselOperation } from '../domain/carousel';
import { getCarouselQuery } from '../queries/carousel';

export async function getCarousel (handle : string): Promise<Carousel> {
    const res = await strapiFetch<StrapiCarouselOperation>({
        query: getCarouselQuery,
        variables: {
            handle
        }
    })

    console.log(res)
    
    return null;
};
