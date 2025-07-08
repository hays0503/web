"use client";
import { VStack } from "@chakra-ui/react";
import RecommendChips from "./RecommendChips";
import ProductGrid from "../../../shared/ui/ProductGrid/ProductGrid";
import { useEffect, useState } from "react";
import { ProductCardProps } from "@/entities/ProductCard/ui/ProductCard";


const getDataIds = async ():Promise<number[]|null> => {
  const url = '/api/v1/populates/';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }else{
    const data = await response.json() as {
      id: number,
      name_set: string,
      activ_set:boolean,
      products:number[]
    }[];
    
    return data.flatMap((item) => item.products);
  }
}

type RawProduct = {
  id: number;
  vendor_code: string;
  slug: string;
  name_product: string;
  additional_data: {
    en: string;
    kk: string;
  };
  category: {
    id: number;
    name_category: string;
    slug: string;
    additional_data: {
      en: string;
      kk: string;
    };
  };
  brand: {
    id: number;
    name_brand: string;
    additional_data: {
      en: string;
      kk: string;
    };
    logo: string[];
  };
  images: { ind: number; image: string }[];
  avg_rating: number;
  reviews_count: number;
  stocks: {
    [key: string]: {
      price: number;
      price_before_discount: number;
      quantity: number;
    };
  };
  discount: {
    id: number;
    name: string;
    amount: number;
    description: string;
  }|null;
  tags: {
    id: number;
    tag_text: string;
    font_color: string;
    fill_color: string;
    additional_data: {
      en: string;
      kk: string;
    };
  }[];
  specification: {
    id: number;
    name_specification: {
      id: number;
      name_specification: string;
      additional_data: {
        en: string;
        kk: string;
      };
    };
    value_specification: {
      id: number;
      value_specification: string;
      additional_data: {
        en: string;
        kk: string;
      };
    };
    ind: number;
    product: number;
  }[];
  reviews: {
    id: number;
    rating: number;
    review: string;
    created_at: string;
  }[];
  reviews_url: string;
  description: {
    id: number;
    additional_data: {
      en: string;
      kk: string;
    };
    title_description: string;
    additional_data_to_desc: {
      en: string;
      kk: string;
    };
    body_description: string;
  };
  related_products_url: string;
  configuration_url: string;
};

const getProducts = async (ids:number[]):Promise<ProductCardProps[]> => {
  const url = `/api/v2/products_v2/filter_by_ids/?city=Караганда&ids=${ids.join(',')}&ordering=avg_rating/`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }else{
    const data = (await response.json()) as { results: RawProduct[] };
    return data.results.map((product, index) => ({
      image:product.images.sort((a, b) => a.ind - b.ind).map((image) => image.image),
      alt: product.name_product,
      title: product.name_product,
      rating: product?.avg_rating,
      reviews: product.reviews_count,
      price: product.stocks['Караганда'].price,
      oldPrice: product.stocks['Караганда'].price_before_discount,
      installment:{
        monthlyPayment: Math.round(product.stocks['Караганда'].price / 12),
        period: 12
      },
      // чёт не чёт
      isHit: index % 2 === 0,
      bonusLabel:product?.discount ? `${product.discount.amount}%` : undefined
    }));
  }
}

const WeRecommend = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

    useEffect(() => {
      (async () => {
        const ids = await getDataIds();
        console.log(ids);
        if (ids) {
          const products = await getProducts(ids);
          setProducts(products);
        }
      })();
    }, [])


    return (
      <VStack w={"full"} align={"flex-start"} gap={"20px"}>
        <RecommendChips />
        <ProductGrid products={products}/>
      </VStack>
    );
}

export default WeRecommend;