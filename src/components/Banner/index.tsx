import React, { useEffect, useState } from "react";

import { Image } from "react-native";
import { useTheme } from "styled-components/native";

import Navigation from "../../helpers/navigation";
import { getFloatFromPercent } from "../../hooks/percentage";
import { PromiseHandler } from "../../hooks/promise-handler";
import { BannerCustomData } from "../../lib/content";
// import CustomContentService from "../../services/custom-content";
import LoadingFeedback from "../LoadingFeedback";
import Styled, { StyledProps } from "./styles";

interface Props extends StyledProps {
  reference: string, // Referência de busca em painel de dados (api)
  action?: () => void, // Ação de clique em banner
  widthPercentage?: string, // Dimensão de largura em porcentagem
  heightPercentage?: string // Dimensão de altura em porcentagem
}

const ImageBanner = ({ height, width, widthPercentage, heightPercentage, action, reference }: Props) => {
  const [data, setData] = useState<BannerCustomData>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [dimensions, setDimensions] = useState({
    height: height ?? '1px', width: width ?? '1px'
  });
  
  useEffect(() => {
    setDataByReference();
  }, []);
  
  // unmount
  // activePromises.length > 0 && activePromises.forEach(item => item.cancel());
  
  /**
   * Requisições ativas
   * @private
   */
  const activePromises: Array<any> = [];
  
  const currentTheme = useTheme();
  
  /**
   * Busca e define os dados do banner
   * @private
   */
  const setDataByReference = () => {
    setIsLoading(true);
    
    activePromises.push(
      // PromiseHandler(CustomContentService.fetchFirstBannerGroupByRef(reference).then(
      PromiseHandler(new Promise(null).then(
        content => {
          if (content[0] && content[0].image) {
            Image.getSize(content[0].image.original, (width, height) => {
              setContentDimentions(width, height);
              // setData(content[0]);
              setData(null);
              setIsLoading(false);
            });
          } else {
            setData(null);
            setErrors([...errors, 'Sem propriedades']);
            setIsLoading(false);
          }
        }
      ).catch(error => {
        console.log('[Banner] cannot get banners', error);
        setErrors([...errors, 'Não foi possível obter os dados da imagem']);
        setIsLoading(false);
      })
      ));
  };
  
  /**
   * Define dimensões da imagem a renderizar, priorizando as propriedades do componente
   * @private
   * @param originalWidth
   * @param originalHeight
   */
  const setContentDimentions = (originalWidth: number, originalHeight: number) => {
    const inputedDimentions = {
      width: width ? width : widthPercentage &&
        `${(getFloatFromPercent(widthPercentage) * currentTheme.screen.width)}`,
      height: height ? height : heightPercentage &&
        `${(getFloatFromPercent(heightPercentage) * currentTheme.screen.height)}`,
    };
    
    setDimensions({
      width: inputedDimentions.width
        ? `${inputedDimentions.width}px`
        : `${currentTheme.screen.width * 0.95}px`,
      height: inputedDimentions.height
        ? `${inputedDimentions.height}px`
        : `${originalHeight * ((currentTheme.screen.width * 0.95) / originalWidth)}px`
    });
    
  };
  
  if (isLoading) return <LoadingFeedback minimal />;
  if (errors.length) return <Styled.Placeholder>Errors</Styled.Placeholder>;
  if (!data) return <Styled.Placeholder>Placeholder</Styled.Placeholder>;
  if (!data.link || (data.link == '' || data.link == '#')) {
    return (
      <Styled.Wrapper
        width={dimensions.width}
        height={dimensions.height}
      >
        <Styled.Image
          source={{
            // uri: data.image.original
            uri: 'data.image.original'
          }}
        />
      </Styled.Wrapper>
    );
  }
  
  return (
    <Styled.Touchable
      onPress={() => data?.link && Navigation.go(data.link)}
      width={dimensions.width}
      height={dimensions.height}
    >
      {/*{data.link}*/}
      <Styled.Image
        source={{
          // uri: data.image.original
          uri: 'data.image.original'
        }}
        style={{ resizeMode: 'scale' }}
      />
    </Styled.Touchable>
  );
  
};

export default ImageBanner;
