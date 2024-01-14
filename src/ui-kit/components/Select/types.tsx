import { ActionMeta, GroupBase, SingleValue, StylesConfig } from 'react-select';

export interface ISelectOption {
  value: string,
  label: string

}

export type SelectStylesConfig = StylesConfig<ISelectOption, false, GroupBase<ISelectOption>>

export type OnChangeSelect = (newValue: SingleValue<ISelectOption>, actionMeta: ActionMeta<ISelectOption>) => void