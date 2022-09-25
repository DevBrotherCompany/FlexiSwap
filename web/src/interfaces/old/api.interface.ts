import { LazyQueryExecFunction } from "@apollo/client";

export interface IApiConfig {
  fetch?: boolean;
}

export interface IApiReturntype<TData, TVariables> {
  data: TData | undefined;
  refetch: LazyQueryExecFunction<TData, TVariables>;
}
