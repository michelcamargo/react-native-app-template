import type {
  CompositeScreenProps,
  NavigatorScreenParams, RouteProp,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {ReactNode} from "react";

export type AppRoute = {
  name: string,
  Component: ReactNode,
  // options: {
  //   title?: string,
  //   headerStyle?: string,
  //   tabBarIcon?: ReactNode,
  //   headerTitle?: ReactNode,
  //   headerBackTitleVisible?: boolean,
  //   headerBackImage?: () => void,
  //   headerShown?: boolean,
  //   detachPreviousScreen?: boolean,
  //   gestureEnabled?: boolean,
  // }
  options: any,
  children?: ReactNode,
  getComponent?: any,
  initialParams?: any,
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  Product: NavigatorScreenParams<ProductTabParamList>;
  Category: NavigatorScreenParams<CategoryTabParamList>;
  SubCategory: NavigatorScreenParams<SubCategoryTabParamList>;
  Collection: NavigatorScreenParams<CollectionTabParamList>;
  Brand: NavigatorScreenParams<BrandTabParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;


/**
 * Página inicial
 */
export type HomeTabParamList = {}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<BottomTabScreenProps<HomeTabParamList, T>, RootStackScreenProps<keyof RootStackParamList>>;


/**
 * Página de produto
 */
export type ProductTabParamList = {
  productObject: any
};

export type ProductTabScreenProps =
  CompositeScreenProps<BottomTabScreenProps<ProductTabParamList, 'product'>, RootStackScreenProps<keyof RootStackParamList>>;


/**
 * Página de categoria
 */
export type CategoryTabParamList = {
  id: string
};

export type CategoryTabScreenProps =
  CompositeScreenProps<BottomTabScreenProps<CategoryTabParamList, 'category'>, RootStackScreenProps<keyof RootStackParamList>>;


/**
 * Página de sub-categoria
 */
export type SubCategoryTabParamList = {
  id: string
};

export type SubCategoryTabScreenProps<T extends keyof SubCategoryTabParamList> =
  CompositeScreenProps<BottomTabScreenProps<SubCategoryTabParamList, T>, RootStackScreenProps<keyof RootStackParamList>>;


/**
 * Página de coleção
 */
export type CollectionTabParamList = {
  id: string
};

export type CollectionTabScreenProps<T extends keyof CollectionTabParamList> =
  CompositeScreenProps<BottomTabScreenProps<CollectionTabParamList, T>, RootStackScreenProps<keyof RootStackParamList>>;


/**
 * Página de marca
 */
export type BrandTabParamList = {
  id: string
};

export type BrandTabScreenProps<T extends keyof BrandTabParamList> =
  CompositeScreenProps<BottomTabScreenProps<BrandTabParamList, T>, RootStackScreenProps<keyof RootStackParamList>>;


/**
 * Módulo global
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
